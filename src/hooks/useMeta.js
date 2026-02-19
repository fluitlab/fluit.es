import { useEffect } from 'react';

const setMeta = (selector, attr, value) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute(attr, value);
};

export const useMeta = ({ title, description, canonical, ogTitle, ogUrl, robots }) => {
    useEffect(() => {
        document.title = title;

        if (description) {
            setMeta('meta[name="description"]', 'content', description);
            setMeta('meta[property="og:description"]', 'content', description);
            setMeta('meta[name="twitter:description"]', 'content', description);
        }
        if (canonical) setMeta('link[rel="canonical"]', 'href', canonical);
        if (ogTitle) {
            setMeta('meta[property="og:title"]', 'content', ogTitle);
            setMeta('meta[name="twitter:title"]', 'content', ogTitle);
        }
        if (ogUrl) setMeta('meta[property="og:url"]', 'content', ogUrl);

        if (robots) {
            let el = document.querySelector('meta[name="robots"]');
            if (!el) {
                el = document.createElement('meta');
                el.name = 'robots';
                document.head.appendChild(el);
            }
            el.setAttribute('content', robots);
        }
    }, [title, description, canonical, ogTitle, ogUrl, robots]);
};
