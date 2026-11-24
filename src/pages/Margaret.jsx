import { useEffect, useRef, useState } from 'react';
import { useMeta } from '../hooks/useMeta';
import { Check, ExternalLink, Mail, ShieldCheck, X } from 'lucide-react';

const demoUrl = 'https://margaret.fluit.es';
const contactEmail = 'info@fluit.es';

const shots = {
    ficha: { src: '/assets/margaret-ficha.webp', width: 2880, height: 1800, alt: 'Ficha de una paciente con la evolución de su salto' },
    tareas: { src: '/assets/margaret-tareas.webp', width: 1440, height: 880, alt: 'Tareas de la entrenadora: valoraciones y días por cerrar' },
    salto: { src: '/assets/margaret-salto.webp', width: 1434, height: 908, alt: 'Altura de salto de una paciente, sesión a sesión' },
    planificar: { src: '/assets/margaret-planificar.webp', width: 1076, height: 1056, alt: 'Planificación de una sesión con sus cargas y una serie en clúster' },
    entrenar: { src: '/assets/margaret-entrenar.webp', width: 1076, height: 1440, alt: 'Registro de lo que hizo una paciente, serie a serie' },
    calidadDeVida: { src: '/assets/margaret-calidad-de-vida.webp', width: 1440, height: 660, alt: 'Calidad de vida de las pacientes en cada valoración' },
    prioritarias: { src: '/assets/margaret-prioritarias.webp', width: 704, height: 496, alt: 'Pacientes prioritarias y en seguimiento' },
    mamafit: { src: '/assets/margaret-caso-mamafit.webp', width: 2880, height: 1800, alt: 'Acceso a MamaFit, con su nombre y sus colores' },
    cambio: { src: '/assets/margaret-cambio.webp', width: 2176, height: 1454, alt: 'Cambio de cada paciente desde su valoración inicial, junto a su asistencia' },
};

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

const features = [
    {
        eyebrow: 'Para entrenadores',
        title: 'Planifica y entrena, rápido',
        points: [
            'Prepara la semana desde el protocolo.',
            'Registra asistencia, cargas y cómo se sintió.',
            'Sigue su adherencia, marcas y valoraciones.',
        ],
        layout: 'tall',
        media: [shots.entrenar, shots.salto],
    },
    {
        eyebrow: 'Planificación',
        title: 'Cada sesión, ya propuesta',
        points: [
            'Ejercicios, series y repeticiones, propuestos desde el protocolo.',
            'Elige la variante, pon la carga y divide una serie en clúster.',
            'Copia el plan a sus próximas sesiones del mismo día.',
        ],
        layout: 'single',
        media: [shots.planificar],
    },
    {
        eyebrow: 'Para el hospital',
        title: 'Cómo les va a las pacientes',
        points: [
            'Su evolución y la del estudio.',
            'Su historia clínica y sus analíticas.',
            'Alertas con el equipo de entrenamiento.',
        ],
        layout: 'pair',
        overlap: '32%',
        media: [shots.calidadDeVida, shots.prioritarias],
        note: 'Pacientes anonimizadas: cada una se identifica con un código, sin datos personales.',
    },
    {
        eyebrow: 'Analítica',
        title: 'La evolución de todas, y la de cada una',
        points: [
            'Medias por valoración, con cuántas pacientes hay detrás.',
            'El cambio de cada paciente desde su valoración inicial, junto a su asistencia.',
            'Adherencia y salto, semana a semana.',
        ],
        layout: 'wide',
        media: [shots.cambio],
    },
];

const Wave = ({ className }) => (
    <svg className={className} viewBox="160 340 730 330" aria-hidden="true">
        <path
            fill="currentColor"
            transform="translate(-116 -115)"
            d="M 283,736 C 283,719 294,709 312,705 C 342,699 361,675 380,647 C 403,614 417,576 440,549 C 455,531 472,520 488,520 C 520,518 541,537 560,569 C 578,598 594,632 611,632 C 631,632 641,615 655,589 C 677,547 695,507 721,483 C 738,468 757,464 770,464 C 801,463 821,485 840,512 C 860,542 878,571 898,571 C 920,571 931,542 948,531 C 962,522 978,528 986,539 C 997,554 991,567 979,581 C 956,610 934,635 909,643 C 877,653 851,633 830,610 C 811,588 794,550 772,550 C 750,550 740,571 724,602 C 706,637 683,688 661,713 C 647,730 628,737 611,736 C 583,735 563,706 547,678 C 529,648 512,611 493,611 C 476,610 463,625 447,649 C 425,684 404,722 376,746 C 357,763 333,774 313,770 C 295,768 283,755 283,736 Z"
        />
    </svg>
);

const Screenshot = ({ shot, onEnlarge, eager = false, className = '' }) => (
    <button
        type="button"
        className={`product-shot ${className}`}
        onClick={() => onEnlarge(shot)}
        aria-label={`Ampliar captura: ${shot.alt}`}
    >
        <img
            src={shot.src}
            alt={shot.alt}
            width={shot.width}
            height={shot.height}
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

const BrowserFrame = ({ shot, onEnlarge, url = 'margaret.fluit.es' }) => (
    <div className="product-browser">
        <div className="product-browser__bar" aria-hidden="true">
            <span className="product-browser__dots"><i /><i /><i /></span>
            <span className="product-browser__url">{url}</span>
        </div>
        <Screenshot shot={shot} onEnlarge={onEnlarge} eager className="product-shot--framed" />
    </div>
);

const Hero = ({ onEnlarge }) => (
    <header className="hero product-hero">
        <div className="container product-hero__layout">
            <div className="product-hero__content">
                <span className="hero-eyebrow product-hero__eyebrow">Margaret</span>
                <h1 className="product-hero__title">Datos, ejercicio y salud</h1>
                <p className="product-hero__intro">
                    Margaret conecta a entrenadores y hospital alrededor de cada paciente: planifica y registra el
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
            <div className="product-stage">
                <Wave className="product-stage__wave" />
                <BrowserFrame shot={shots.ficha} onEnlarge={onEnlarge} />
                <Screenshot shot={shots.tareas} onEnlarge={onEnlarge} className="product-stage__float" />
            </div>
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

const Feature = ({ feature, reversed, onEnlarge }) => (
    <section className="section">
        <div className={`container product-audience${reversed ? ' product-audience--reversed' : ''}`}>
            <div className="product-audience__text">
                <span className="product-audience__eyebrow">{feature.eyebrow}</span>
                <h2 className="section-title">{feature.title}</h2>
                <ul className="product-audience__points">
                    {feature.points.map((point) => (
                        <li key={point}>
                            <Check size={18} />
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
                {feature.note && (
                    <p className="product-audience__note">
                        <ShieldCheck size={20} />
                        <span>{feature.note}</span>
                    </p>
                )}
            </div>
            <div
                className={`product-media product-media--${feature.layout}`}
                style={feature.overlap && { '--overlap': feature.overlap }}
            >
                {feature.media.map((shot) => (
                    <Screenshot key={shot.src} shot={shot} onEnlarge={onEnlarge} />
                ))}
            </div>
        </div>
    </section>
);

const UseCase = ({ onEnlarge }) => (
    <section className="section section--white">
        <div className="container product-audience product-case">
            <div className="product-audience__text">
                <span className="product-audience__eyebrow">Caso de uso</span>
                <h2 className="section-title">MamaFit</h2>
                <p>
                    Un proyecto de investigación de la{' '}
                    <a href="https://www.ucv.es/" target="_blank" rel="noopener noreferrer">Universidad Católica de Valencia</a>{' '}
                    y la{' '}
                    <a href="https://fihguv.es/" target="_blank" rel="noopener noreferrer">
                        Fundación de Investigación del Hospital General Universitario de Valencia
                    </a>{' '}
                    sobre ejercicio en cáncer de mama. Funciona sobre Margaret en una instalación propia, con su nombre y
                    sus colores: su servidor, sus datos y su configuración, que nadie más comparte. Si tu proyecto la
                    necesita, te montamos la tuya.
                </p>
            </div>
            <BrowserFrame shot={shots.mamafit} onEnlarge={onEnlarge} url="mamafit.fluit.es" />
        </div>
    </section>
);

const Closing = () => (
    <section className="section section-cta">
        <div className="container">
            <div className="cta-layout cta-layout--center">
                <div className="cta-content product-closing">
                    <h2>¿Quieres verla con tus datos?</h2>
                    <p className="product-closing__intro">
                        Entra en la demo como entrenador/a o como hospital, sin contraseña, o escríbenos y te la
                        enseñamos con tu protocolo.
                    </p>
                    <div className="btn-group product-closing__actions">
                        <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            Prueba la demo <ExternalLink size={16} style={{ marginLeft: '0.5rem' }} />
                        </a>
                        <a href={`mailto:${contactEmail}`} className="btn btn-dark">
                            <Mail size={16} style={{ marginRight: '0.5rem' }} /> Escríbenos a {contactEmail}
                        </a>
                    </div>
                    <p className="product-credit">Margaret es un desarrollo de Fluit.</p>
                </div>
            </div>
        </div>
    </section>
);

export const Margaret = () => {
    useMeta('/productos/margaret');

    const [enlargedShot, setEnlargedShot] = useState(null);

    return (
        <>
            <Hero onEnlarge={setEnlargedShot} />
            <HowItWorks />
            {features.map((feature, i) => (
                <Feature
                    key={feature.eyebrow}
                    feature={feature}
                    reversed={i % 2 === 1}
                    onEnlarge={setEnlargedShot}
                />
            ))}
            <UseCase onEnlarge={setEnlargedShot} />
            <Closing />
            <ScreenshotViewer shot={enlargedShot} onClose={() => setEnlargedShot(null)} />
        </>
    );
};
