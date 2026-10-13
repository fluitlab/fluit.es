import { handleContact } from './contact.js';
import { createGmailSender } from './gmail.js';
import { buildMessage } from './message.js';

const sendThroughGmail = (env) => {
    const sendRaw = createGmailSender({
        clientEmail: env.GOOGLE_CLIENT_EMAIL,
        privateKey: env.GOOGLE_PRIVATE_KEY,
        sender: env.MAIL_SENDER,
        // Workers lanza "Illegal invocation" si se llama a fetch separado de globalThis
        fetch: (...args) => fetch(...args),
        now: Date.now,
    });

    return (submission) => sendRaw(buildMessage({ from: env.MAIL_SENDER, to: env.MAIL_TO, submission }));
};

export default {
    fetch: (request, env) => {
        const { pathname } = new URL(request.url);
        if (request.method === 'POST' && pathname === '/api/contact') {
            return handleContact(request, { origin: env.SITE_ORIGIN, send: sendThroughGmail(env) });
        }

        return env.ASSETS.fetch(request);
    },
};
