import { beforeAll, describe, expect, it } from 'vitest';
import { createGmailSender } from './gmail.js';

const algorithm = { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' };
const now = () => 1_700_000_000_000;

let keys;
let privateKey;

const toPem = (der) =>
    `-----BEGIN PRIVATE KEY-----\n${Buffer.from(der).toString('base64').match(/.{1,64}/g).join('\n')}\n-----END PRIVATE KEY-----\n`;

const fromBase64Url = (text) => Buffer.from(text, 'base64url');

beforeAll(async () => {
    keys = await crypto.subtle.generateKey(
        { ...algorithm, modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]) },
        true,
        ['sign', 'verify']
    );
    privateKey = toPem(await crypto.subtle.exportKey('pkcs8', keys.privateKey));
});

const fakeGoogle = ({ tokenStatus = 200, sendStatus = 200 } = {}) => {
    const calls = [];
    const fetch = async (url, init) => {
        calls.push({ url, init });
        if (url === 'https://oauth2.googleapis.com/token') {
            return Response.json({ access_token: 'token-123' }, { status: tokenStatus });
        }
        return Response.json({}, { status: sendStatus });
    };
    return { calls, fetch };
};

const sender = (fetch) =>
    createGmailSender({ clientEmail: 'web@fluit.iam.gserviceaccount.com', privateKey, sender: 'web@fluit.es', fetch, now });

describe('createGmailSender', () => {
    it('asks Google for a token with a JWT signed by the service account', async () => {
        const google = fakeGoogle();

        await sender(google.fetch)('raw');

        const params = new URLSearchParams(google.calls[0].init.body);
        expect(params.get('grant_type')).toBe('urn:ietf:params:oauth:grant-type:jwt-bearer');
        const [head, claims, signature] = params.get('assertion').split('.');
        const signed = new TextEncoder().encode(`${head}.${claims}`);
        expect(await crypto.subtle.verify(algorithm, keys.publicKey, fromBase64Url(signature), signed)).toBe(true);
        expect(JSON.parse(fromBase64Url(claims))).toEqual({
            iss: 'web@fluit.iam.gserviceaccount.com',
            sub: 'web@fluit.es',
            scope: 'https://www.googleapis.com/auth/gmail.send',
            aud: 'https://oauth2.googleapis.com/token',
            iat: 1_700_000_000,
            exp: 1_700_003_600,
        });
    });

    it('sends the raw message base64url-encoded with that token', async () => {
        const google = fakeGoogle();

        await sender(google.fetch)('Subject: ¿?\r\n\r\nHola');

        const send = google.calls[1];
        expect(send.url).toBe('https://gmail.googleapis.com/gmail/v1/users/me/messages/send');
        expect(send.init.headers.Authorization).toBe('Bearer token-123');
        const { raw } = JSON.parse(send.init.body);
        expect(raw).not.toMatch(/[+/=]/);
        expect(fromBase64Url(raw).toString('utf8')).toBe('Subject: ¿?\r\n\r\nHola');
    });

    it('fails when Google refuses the token', async () => {
        const google = fakeGoogle({ tokenStatus: 401 });

        await expect(sender(google.fetch)('raw')).rejects.toThrow('Google token request failed: 401');
        expect(google.calls).toHaveLength(1);
    });

    it('fails when Gmail refuses the message', async () => {
        const google = fakeGoogle({ sendStatus: 403 });

        await expect(sender(google.fetch)('raw')).rejects.toThrow('Gmail send failed: 403');
    });
});
