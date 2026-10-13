import { describe, expect, it, vi } from 'vitest';
import { handleContact } from './contact.js';

const origin = 'https://fluit.es';
const valid = { from_name: 'Ana', _replyto: 'ana@example.com', message: 'Hola' };

const post = (fields, from = origin) => {
    const body = new FormData();
    for (const [key, value] of Object.entries(fields)) body.append(key, value);
    return new Request(`${origin}/api/contact`, { method: 'POST', headers: { Origin: from }, body });
};

describe('handleContact', () => {
    it('rejects a request from another origin', async () => {
        const request = post({}, 'https://evil.example');

        const response = await handleContact(request, { origin, send: async () => {} });

        expect(response.status).toBe(403);
    });

    it('sends a valid submission', async () => {
        const sent = [];
        const request = post(valid);

        const response = await handleContact(request, { origin, send: async (s) => sent.push(s) });

        expect(response.status).toBe(200);
        expect(sent).toEqual([{ name: 'Ana', email: 'ana@example.com', message: 'Hola' }]);
    });

    it('answers ok without sending when the honeypot is filled', async () => {
        const sent = [];
        const request = post({ ...valid, website: 'http://spam.example' });

        const response = await handleContact(request, { origin, send: async (s) => sent.push(s) });

        expect(response.status).toBe(200);
        expect(sent).toEqual([]);
    });

    it('rejects a submission without name', async () => {
        const sent = [];
        const request = post({ ...valid, from_name: '  ' });

        const response = await handleContact(request, { origin, send: async (s) => sent.push(s) });

        expect(response.status).toBe(400);
        expect(sent).toEqual([]);
    });

    it('rejects an invalid email', async () => {
        const request = post({ ...valid, _replyto: 'ana.example.com' });

        const response = await handleContact(request, { origin, send: async () => {} });

        expect(response.status).toBe(400);
    });

    it('accepts a message of 1200 characters and rejects one of 1201', async () => {
        const longest = post({ ...valid, message: 'a'.repeat(1200) });
        const tooLong = post({ ...valid, message: 'a'.repeat(1201) });

        const accepted = await handleContact(longest, { origin, send: async () => {} });
        const rejected = await handleContact(tooLong, { origin, send: async () => {} });

        expect(accepted.status).toBe(200);
        expect(rejected.status).toBe(400);
    });

    it('rejects a name longer than 80 characters', async () => {
        const request = post({ ...valid, from_name: 'a'.repeat(81) });

        const response = await handleContact(request, { origin, send: async () => {} });

        expect(response.status).toBe(400);
    });

    it('rejects an email longer than 120 characters', async () => {
        const request = post({ ...valid, _replyto: `${'a'.repeat(109)}@example.com` });

        const response = await handleContact(request, { origin, send: async () => {} });

        expect(response.status).toBe(400);
    });

    it('answers 502 when sending fails', async () => {
        const request = post(valid);
        const send = async () => {
            throw new Error('Gmail down');
        };

        const response = await handleContact(request, { origin, send });

        expect(response.status).toBe(502);
    });

    it('logs why sending failed', async () => {
        const errors = vi.spyOn(console, 'error').mockImplementation(() => {});
        const failure = new Error('Gmail send failed: 403');

        await handleContact(post(valid), {
            origin,
            send: async () => {
                throw failure;
            },
        });

        expect(errors).toHaveBeenCalledWith(failure);
        errors.mockRestore();
    });

    it('rejects an empty message', async () => {
        const request = post({ ...valid, message: '' });

        const response = await handleContact(request, { origin, send: async () => {} });

        expect(response.status).toBe(400);
    });
});
