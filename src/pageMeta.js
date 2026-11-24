export const siteUrl = 'https://fluit.es';

export const defaultShareImage = {
    path: '/assets/fluit-og.png',
    alt: 'Fluit — cooperativa de ingeniería hidráulica y software',
};

export const pageMeta = {
    '/': {
        title: 'Fluit — Ingeniería hidráulica, software e IA',
        description: 'Consultoría de Recursos Hídricos y Desarrollo de Software Especializado. Ingeniería del Agua Potenciada por Datos.',
    },
    '/portfolio': {
        title: 'Fluit — Portfolio de ingeniería del agua, software e IA',
        description: 'Casos reales de Fluit: modelación hidráulica y gemelos digitales para gestores de agua, plugins de QGIS, plataformas de predicción y software a medida.',
    },
    '/legal': {
        title: 'Aviso legal y privacidad — Fluit',
        description: 'Datos del titular de fluit.es, política de privacidad y uso de cookies de FLUIT, COOP. V.',
    },
    '/productos/margaret': {
        title: 'Margaret — Datos, ejercicio y salud · Fluit',
        description: 'Margaret conecta a entrenadores y hospital alrededor de cada paciente: planifica y registra el entrenamiento, mide su evolución y mantiene a los dos equipos en contacto.',
        shareImage: {
            path: '/assets/margaret-og.png',
            alt: 'Margaret — Datos, ejercicio y salud',
        },
    },
    '/404': {
        title: '404 — Fluit',
        description: 'La página que buscas no existe.',
        robots: 'noindex',
    },
};
