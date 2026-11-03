import React, { useEffect, useRef, useState } from 'react';
import { useMeta } from '../hooks/useMeta';
import { Check, ExternalLink, Mail, ShieldCheck, X } from 'lucide-react';

const demoUrl = 'https://mamafit-demo.fluit.es';
const contactEmail = 'info@fluit.es';

const steps = [
    {
        title: 'Crea el protocolo',
        desc: 'Al asignarlo, cada sesión queda planificada: sólo personalizas cuando hace falta.',
    },
    {
        title: 'Entrena y mide',
        desc: 'Registra cada sesión y mide su evolución con pruebas contrastadas como QLQ-C30, FACT-Cog o SPPB.',
    },
    {
        title: 'Hospital y entrenadores, en contacto',
        desc: 'Siguen a las mismas pacientes y se avisan con alertas cuando algo importa.',
    },
];

const audiences = [
    {
        eyebrow: 'Para entrenadores',
        title: 'Planifica y entrena, rápido',
        points: [
            'Prepara la semana desde el protocolo.',
            'Registra asistencia, cargas y cómo se sintió.',
            'Sigue su adherencia, marcas y valoraciones.',
        ],
        screenshots: [
            { src: '/assets/mamafit-entrenamientos.webp', alt: 'Días de entrenamiento por cerrar y próximos' },
            { src: '/assets/mamafit-entrenar-el-dia.webp', alt: 'Registro del día de entrenamiento, paciente a paciente' },
        ],
    },
    {
        eyebrow: 'Para el hospital',
        title: 'Cómo les va a las pacientes',
        points: [
            'Su evolución y la del estudio.',
            'Su historia clínica y sus analíticas.',
            'Alertas con el equipo de entrenamiento.',
        ],
        screenshots: [
            { src: '/assets/mamafit-panel-hospital.webp', alt: 'Panel de control del hospital' },
        ],
        note: 'Pacientes anonimizadas: cada una se identifica con un código, sin datos personales.',
    },
];

const heroScreenshot = {
    src: '/assets/mamafit-ficha-paciente.webp',
    alt: 'Ficha de una paciente con su evolución',
};

const Screenshot = ({ shot, onEnlarge, eager = false }) => (
    <button
        type="button"
        className="product-shot"
        onClick={() => onEnlarge(shot)}
        aria-label={`Ampliar captura: ${shot.alt}`}
    >
        <img
            src={shot.src}
            alt={shot.alt}
            width="1470"
            height="802"
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
        />
    </button>
);

const ScreenshotViewer = ({ shot, onClose }) => {
    const dialogRef = useRef(null);

    useEffect(() => {
        if (shot) dialogRef.current.showModal();
    }, [shot]);

    return (
        <dialog
            ref={dialogRef}
            className="product-viewer"
            onClose={onClose}
            onClick={() => dialogRef.current.close()}
        >
            {shot && <img src={shot.src} alt={shot.alt} />}
            <button type="button" className="product-viewer__close" aria-label="Cerrar">
                <X size={24} />
            </button>
        </dialog>
    );
};

const Hero = ({ onEnlarge }) => (
    <header className="hero product-hero">
        <div className="container product-hero__layout">
            <div className="product-hero__content">
                <span className="hero-eyebrow product-hero__eyebrow">MamaFit</span>
                <h1 className="product-hero__title">Ejercicio y seguimiento en cáncer de mama</h1>
                <p className="product-hero__intro">
                    MamaFit conecta a entrenadores y hospital alrededor de cada paciente: planifica y registra el
                    entrenamiento, mide su evolución y mantiene a los dos equipos en contacto.
                </p>
                <div className="btn-group product-hero__actions">
                    <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Prueba la demo <ExternalLink size={16} style={{ marginLeft: '0.5rem' }} />
                    </a>
                    <a href={`mailto:${contactEmail}`} className="btn btn-dark">
                        Pide una demo completa
                    </a>
                </div>
            </div>
            <Screenshot shot={heroScreenshot} onEnlarge={onEnlarge} eager />
        </div>
    </header>
);

const HowItWorks = () => (
    <section className="section section--white">
        <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center' }}>Cómo funciona</h2>
            <ol className="product-steps">
                {steps.map((step, i) => (
                    <li key={step.title} className="product-step">
                        <span className="product-step__number">{i + 1}</span>
                        <h3>{step.title}</h3>
                        <p>{step.desc}</p>
                    </li>
                ))}
            </ol>
        </div>
    </section>
);

const Audience = ({ audience, reversed, onEnlarge }) => (
    <section className="section">
        <div className={`container product-audience${reversed ? ' product-audience--reversed' : ''}`}>
            <div className="product-audience__text">
                <span className="product-audience__eyebrow">{audience.eyebrow}</span>
                <h2 className="section-title">{audience.title}</h2>
                <ul className="product-audience__points">
                    {audience.points.map((point) => (
                        <li key={point}>
                            <Check size={18} />
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
                {audience.note && (
                    <p className="product-audience__note">
                        <ShieldCheck size={20} />
                        <span>{audience.note}</span>
                    </p>
                )}
            </div>
            <div
                className={`product-audience__media${audience.screenshots.length > 1 ? ' product-audience__media--overlapped' : ''}`}
            >
                {audience.screenshots.map((shot) => (
                    <Screenshot key={shot.src} shot={shot} onEnlarge={onEnlarge} />
                ))}
            </div>
        </div>
    </section>
);

const Closing = () => (
    <section className="section section-cta">
        <div className="container">
            <div className="cta-layout cta-layout--center">
                <div className="cta-content">
                    <h2>¿Quieres verla con tus datos?</h2>
                    <div className="btn-group">
                        <a href={`mailto:${contactEmail}`} className="btn btn-dark">
                            <Mail size={16} style={{ marginRight: '0.5rem' }} /> Escríbenos a {contactEmail}
                        </a>
                    </div>
                    <p className="product-credit">MamaFit es un desarrollo de Fluit.</p>
                </div>
            </div>
        </div>
    </section>
);

export const MamaFit = () => {
    useMeta('/productos/mamafit');

    const [enlargedShot, setEnlargedShot] = useState(null);

    return (
        <>
            <Hero onEnlarge={setEnlargedShot} />
            <HowItWorks />
            {audiences.map((audience, i) => (
                <Audience
                    key={audience.eyebrow}
                    audience={audience}
                    reversed={i % 2 === 1}
                    onEnlarge={setEnlargedShot}
                />
            ))}
            <Closing />
            <ScreenshotViewer shot={enlargedShot} onClose={() => setEnlargedShot(null)} />
        </>
    );
};
