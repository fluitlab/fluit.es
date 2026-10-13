const base64 = (text) => btoa(String.fromCharCode(...new TextEncoder().encode(text)));

const encodedWord = (text) => `=?UTF-8?B?${base64(text)}?=`;

const body = ({ name, email, message }) => `Nombre: ${name}\nEmail: ${email}\n\n${message}`;

export const buildMessage = ({ from, to, submission }) =>
    [
        `From: ${from}`,
        `To: ${to}`,
        `Reply-To: ${submission.email}`,
        `Subject: ${encodedWord(`Mensaje web de ${submission.name}`)}`,
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: base64',
        '',
        ...base64(body(submission)).match(/.{1,76}/g),
    ].join('\r\n');
