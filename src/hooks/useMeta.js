import { useEffect } from 'react';
import { pageMeta, siteUrl } from '../pageMeta';

const setMeta = (selector, attr, value) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute(attr, value);
};

const setRobots = (value) => {
    let el = document.querySelector('meta[name="robots"]');
    if (!el) {
        el = document.createElement('meta');
        el.name = 'robots';
        document.head.appendChild(el);
    }
    el.setAttribute('content', value || 'index, follow');
};

export const useMeta = (path) => {
    const { title, description, robots } = pageMeta[path];
    const url = `${siteUrl}${path === '/404' ? '/' : path}`;

    useEffect(() => {
        document.title = title;

        setMeta('meta[name="description"]', 'content', description);
        setMeta('meta[property="og:description"]', 'content', description);
        setMeta('meta[name="twitter:description"]', 'content', description);
        setMeta('meta[property="og:title"]', 'content', title);
        setMeta('meta[name="twitter:title"]', 'content', title);
        setMeta('meta[property="og:url"]', 'content', url);
        setMeta('link[rel="canonical"]', 'href', url);
        setRobots(robots);
    }, [title, description, robots, url]);
};
