import { afterEach, describe, expect, it, vi } from 'vitest';
import worker from './index.js';

const assets = { fetch: async () => new Response('page') };

afterEach(() => vi.unstubAllGlobals());

const serviceAccountKey = async () => {
    const { privateKey } = await crypto.subtle.generateKey(
        { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]) },
        true,
        ['sign']
    );
    const der = Buffer.from(await crypto.subtle.exportKey('pkcs8', privateKey)).toString('base64');
    return `-----BEGIN PRIVATE KEY-----\n${der}\n-----END PRIVATE KEY-----\n`;
};

describe('worker', () => {
    it('serves everything else from the static assets', async () => {
        const response = await worker.fetch(new Request('https://fluit.es/portfolio'), { ASSETS: assets });

        expect(await response.text()).toBe('page');
    });

    it('sends the contact form through Gmail to the configured recipient', async () => {
        const calls = [];
        vi.stubGlobal('fetch', async (url, init) => {
            calls.push({ url, init });
            return Response.json({ access_token: 'token-123' });
        });
        const env = {
            ASSETS: assets,
            SITE_ORIGIN: 'https://fluit.es',
            MAIL_SENDER: 'web@fluit.es',
            MAIL_TO: 'info@fluit.es',
            GOOGLE_CLIENT_EMAIL: 'web@fluit.iam.gserviceaccount.com',
            GOOGLE_PRIVATE_KEY: await serviceAccountKey(),
        };
        const body = new FormData();
        body.append('from_name', 'Ana');
        body.append('_replyto', 'ana@example.com');
        body.append('message', 'Hola');
        const request = new Request('https://fluit.es/api/contact', {
            method: 'POST',
            headers: { Origin: 'https://fluit.es' },
            body,
        });

        const response = await worker.fetch(request, env);

        expect(response.status).toBe(200);
        const { raw } = JSON.parse(calls[1].init.body);
        const message = Buffer.from(raw, 'base64url').toString('utf8');
        expect(message).toContain('From: web@fluit.es');
        expect(message).toContain('To: info@fluit.es');
        expect(message).toContain('Reply-To: ana@example.com');
    });
});
