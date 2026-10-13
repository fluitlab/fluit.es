const tokenUrl = 'https://oauth2.googleapis.com/token';
const algorithm = { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' };

const base64Url = (bytes) =>
    btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

const encodeJson = (value) => base64Url(new TextEncoder().encode(JSON.stringify(value)));

const importKey = (pem) => {
    const der = Uint8Array.from(atob(pem.replace(/-----[^-]+-----|\s/g, '')), (c) => c.charCodeAt(0));
    return crypto.subtle.importKey('pkcs8', der, algorithm, false, ['sign']);
};

const signJwt = async (claims, privateKey) => {
    const unsigned = `${encodeJson({ alg: 'RS256', typ: 'JWT' })}.${encodeJson(claims)}`;
    const key = await importKey(privateKey);
    const signature = await crypto.subtle.sign(algorithm, key, new TextEncoder().encode(unsigned));
    return `${unsigned}.${base64Url(new Uint8Array(signature))}`;
};

const ensureOk = (response, what) => {
    if (!response.ok) throw new Error(`${what} failed: ${response.status}`);
    return response;
};

const requestToken = async ({ clientEmail, privateKey, sender, fetch, now }) => {
    const iat = Math.floor(now() / 1000);
    const assertion = await signJwt(
        {
            iss: clientEmail,
            sub: sender,
            scope: 'https://www.googleapis.com/auth/gmail.send',
            aud: tokenUrl,
            iat,
            exp: iat + 3600,
        },
        privateKey
    );

    const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion }).toString(),
    });
    const { access_token: accessToken } = await ensureOk(response, 'Google token request').json();
    return accessToken;
};

export const createGmailSender = (config) => async (raw) => {
    const accessToken = await requestToken(config);

    const response = await config.fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
        method: 'POST',
        headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ raw: base64Url(new TextEncoder().encode(raw)) }),
    });
    ensureOk(response, 'Gmail send');
};
