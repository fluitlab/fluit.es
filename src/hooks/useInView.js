import { useEffect, useRef, useState } from 'react';

export const useInView = () => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                setInView(true);
                observer.disconnect();
            },
            { rootMargin: '0px 0px -10% 0px' }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return [ref, inView];
};
