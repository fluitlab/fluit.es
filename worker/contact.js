const maxLength = { name: 80, email: 120, message: 1200 };

const respond = (status) => new Response(null, { status });

const field = (form, name) => String(form.get(name) ?? '').trim();

const withinLimits = (submission) =>
    Object.entries(maxLength).every(([key, max]) => submission[key] && submission[key].length <= max);

const isValid = (submission) =>
    withinLimits(submission) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email);

export const handleContact = async (request, { origin, send }) => {
    if (request.headers.get('Origin') !== origin) return respond(403);

    const form = await request.formData();
    if (form.get('website')) return respond(200);

    const submission = {
        name: field(form, 'from_name'),
        email: field(form, '_replyto'),
        message: field(form, 'message'),
    };
    if (!isValid(submission)) return respond(400);

    try {
        await send(submission);
    } catch (error) {
        console.error(error);
        return respond(502);
    }

    return respond(200);
};
