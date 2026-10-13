import { describe, expect, it } from 'vitest';
import { buildMessage } from './message.js';

const submission = { name: 'Ana', email: 'ana@example.com', message: 'Hola' };
const addresses = { from: 'web@fluit.es', to: 'info@fluit.es' };

const header = (raw, name) =>
    raw.split('\r\n\r\n')[0].split('\r\n').find((line) => line.startsWith(`${name}: `));

describe('buildMessage', () => {
    it('goes from the sender to the recipient and replies to the visitor', () => {
        const raw = buildMessage({ ...addresses, submission });

        expect(header(raw, 'From')).toBe('From: web@fluit.es');
        expect(header(raw, 'To')).toBe('To: info@fluit.es');
        expect(header(raw, 'Reply-To')).toBe('Reply-To: ana@example.com');
    });

    it('encodes a subject with accents as UTF-8', () => {
        const raw = buildMessage({ ...addresses, submission: { ...submission, name: 'José' } });

        const [, encoded] = header(raw, 'Subject').match(/^Subject: =\?UTF-8\?B\?(.+)\?=$/);
        expect(Buffer.from(encoded, 'base64').toString('utf8')).toBe('Mensaje web de José');
    });

    it('does not let a name with line breaks add headers', () => {
        const name = 'Ana\r\nBcc: victim@example.com';

        const raw = buildMessage({ ...addresses, submission: { ...submission, name } });

        expect(header(raw, 'Bcc')).toBeUndefined();
    });

    it('carries the visitor details and message in a UTF-8 body', () => {
        const raw = buildMessage({ ...addresses, submission: { ...submission, message: '¿Hablamos?' } });

        const [head, body] = raw.split('\r\n\r\n');
        expect(head).toContain('Content-Type: text/plain; charset=UTF-8');
        expect(head).toContain('Content-Transfer-Encoding: base64');
        expect(Buffer.from(body, 'base64').toString('utf8')).toBe(
            'Nombre: Ana\nEmail: ana@example.com\n\n¿Hablamos?'
        );
    });

    it('wraps the body in lines of at most 76 characters', () => {
        const message = 'a'.repeat(1200);

        const raw = buildMessage({ ...addresses, submission: { ...submission, message } });

        const body = raw.split('\r\n\r\n')[1];
        expect(body.split('\r\n').every((line) => line.length <= 76)).toBe(true);
        expect(Buffer.from(body, 'base64').toString('utf8')).toContain(message);
    });
});
