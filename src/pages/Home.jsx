import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import pecesVideo from '../assets/background.mp4';
import {
    Droplets,
    Code2,
    Activity,
    Mail,
    ArrowRight,
    Users,
    Target,
    BrainCircuit,
    Cpu,
    MessagesSquare
} from 'lucide-react';

const waterServices = [
    {
        icon: <Droplets />,
        title: "Planificación Hídrica",
        desc: "Modelos, calidad y escorrentía."
    },
    {
        icon: <Activity />,
        title: "Redes & Abastecimiento",
        desc: "Modelos hidráulicos y saneamiento."
    },
    {
        icon: <Code2 />,
        title: "Software para el Agua",
        desc: "Herramientas y automatizaciones a medida."
    },
    {
        icon: <Cpu />,
        title: "IA & Datos Hídricos",
        desc: "Datos, GIS e IA aplicada."
    }
];

const techServices = [
    {
        icon: <Target />,
        title: "Visión de Producto",
        desc: "Negocio, usuario y tecnología."
    },
    {
        icon: <BrainCircuit />,
        title: "IA Nativa",
        desc: "Modelos y automatización."
    },
    {
        icon: <Code2 />,
        title: "Desarrollo a Medida",
        desc: "Fullstack, APIs y datos."
    },
    {
        icon: <Activity />,
        title: "DevOps & Plataforma",
        desc: "Infraestructura y CI/CD."
    }
];

const clientLogos = [
    { src: "logo-qatium.svg", alt: "Qatium", url: "https://qatium.com" },
    { src: "logo-iiama.png", alt: "IIAMA", url: "https://iiama.upv.es" },
    { src: "logo-upv.png", alt: "Universitat Politècnica de València", url: "https://www.upv.es" },
    { src: "logo-aquatic-informatics.png", alt: "Aquatic Informatics", url: "https://aquaticinformatics.com" }
];

const Hero = () => (
    <header id="home" className="hero">
        <video
            className="hero-video-bg"
            src={pecesVideo}
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-graphics hero-graphics--left" aria-hidden="true" />
        <div className="hero-graphics hero-graphics--right" aria-hidden="true" />
        <div className="container">
            <Motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="hero-inner"
            >
                <span className="hero-eyebrow">Cooperativa de ingeniería + software</span>
                <h1 className="hero-title">Ingeniería que <em>fluye</em></h1>
                <p className="hero-p" style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                    Somos ingenieros hidráulicos, desarrolladores de software y especialistas en IA. Resolvemos problemas complejos combinando lo mejor de cada mundo.
                </p>
                <div className="btn-group">
                    <a href="#identity" className="btn btn-primary">
                        Conócenos <ArrowRight size={16} style={{ marginLeft: '0.25rem' }} />
                    </a>
                    <a href="#contact" className="btn btn-dark">
                        Hablemos
                    </a>
                </div>
            </Motion.div>
        </div>
    </header>
);

const Identity = () => (
    <section id="identity" className="section section--dark section-identity">
        <div className="container benefits-layout">
            <h2 className="section-title section-title--light">Qué nos hace diferentes</h2>
            <p className="section-intro section-intro--light">Combinamos disciplinas que rara vez van juntas. Esto nos permite abordar problemas desde ángulos que otros no pueden.</p>
            <div className="identity-cards">
                <div className="identity-card">
                    <div className="identity-card__icon"><Droplets size={28} /></div>
                    <h3>Ingeniería Hidráulica</h3>
                    <p>Tu consultora de recursos hídricos. Modelación, planificación y conexión directa con centros de investigación de referencia.</p>
                </div>
                <div className="identity-card">
                    <div className="identity-card__icon"><Code2 size={28} /></div>
                    <h3>Desarrollo de Software</h3>
                    <p>Tu equipo de desarrollo externo. Creamos herramientas a medida que resuelven problemas reales.</p>
                </div>
                <div className="identity-card">
                    <div className="identity-card__icon"><BrainCircuit size={28} /></div>
                    <h3>IA & Datos</h3>
                    <p>Especialistas en integrar inteligencia artificial y análisis de datos en tus procesos y productos.</p>
                </div>
                <div className="identity-card">
                    <div className="identity-card__icon"><Users size={28} /></div>
                    <h3>Cooperativa Social</h3>
                    <p>Personas antes que beneficios. Priorizamos la calidad, el compromiso y las relaciones a largo plazo.</p>
                </div>
            </div>
        </div>
    </section>
);

const TeamSection = () => (
    <section id="team" className="section section-founders">
        <div className="container benefits-layout">
            <h2 className="section-title section-title--light">Quiénes somos</h2>
            <p className="section-intro section-intro--light">Cuatro perfiles híbridos. Dos vienen del agua, dos del software. En Qatium nos encontramos.</p>
            <div className="founders-grid">
                <a href="https://www.linkedin.com/in/edgarbelda/" target="_blank" rel="noopener noreferrer" className="founder">
                    <div className="founder-photo">
                        <img src={`/assets/edgar.jpg`} alt="Edgar Belda" />
                    </div>
                    <div className="founder-header">
                        <h3>Edgar Belda</h3>
                        <LinkedinIcon size={18} />
                    </div>
                    <p className="founder-role">Full-stack · Hidráulica</p>
                </a>
                <a href="https://www.linkedin.com/in/emelgil/" target="_blank" rel="noopener noreferrer" className="founder">
                    <div className="founder-photo">
                        <img src={`/assets/elena.jpg`} alt="Elena Melchor" />
                    </div>
                    <div className="founder-header">
                        <h3>Elena Melchor</h3>
                        <LinkedinIcon size={18} />
                    </div>
                    <p className="founder-role">Full-stack · Backend · GIS</p>
                </a>
                <a href="https://www.linkedin.com/in/neslerel/" target="_blank" rel="noopener noreferrer" className="founder">
                    <div className="founder-photo">
                        <img src={`/assets/nestor.jpg`} alt="Néstor Lerma" />
                    </div>
                    <div className="founder-header">
                        <h3>Néstor Lerma</h3>
                        <LinkedinIcon size={18} />
                    </div>
                    <p className="founder-role">Full-stack · Hidráulica</p>
                </a>
                <a href="https://www.linkedin.com/in/vibaiher/" target="_blank" rel="noopener noreferrer" className="founder">
                    <div className="founder-photo">
                        <img src={`/assets/vicente.jpg`} alt="Vicente Baixauli" />
                    </div>
                    <div className="founder-header">
                        <h3>Vicente Baixauli</h3>
                        <LinkedinIcon size={18} />
                    </div>
                    <p className="founder-role">Full-stack · Plataforma · IA</p>
                </a>
            </div>
        </div>
    </section>
);

const ServicesGrid = () => (
    <section id="services" className="section section-benefits section-services section--white">
        <div className="container benefits-layout">
            <h2 className="section-title">Qué hacemos</h2>
            <p className="benefits-intro">
                Agua, software e IA. Equipo híbrido y directo a resultados.
            </p>

            <div className="services-bands">
                <article className="services-band">
                    <header className="services-band__meta">
                        <span className="services-band__eyebrow">Agua</span>
                        <h3>Ingeniería hídrica aplicada</h3>
                        <p>Planificación y modelos para decisiones claras.</p>
                    </header>
                    <div className="services-band__grid">
                        {waterServices.map((s, i) => (
                            <div key={i} className="services-chip">
                                <div className="services-chip__icon">{s.icon}</div>
                                <div>
                                    <h4>{s.title}</h4>
                                    <p>{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </article>

                <article className="services-band services-band--alt">
                    <header className="services-band__meta">
                        <span className="services-band__eyebrow">Tecnología</span>
                        <h3>Producto, software e IA</h3>
                        <p>Producto y datos listos para escalar.</p>
                    </header>
                    <div className="services-band__grid">
                        {techServices.map((s, i) => (
                            <div key={i} className="services-chip">
                                <div className="services-chip__icon">{s.icon}</div>
                                <div>
                                    <h4>{s.title}</h4>
                                    <p>{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </article>
            </div>

            <div className="services-clients">
                <p className="client-logos__label">Hemos colaborado con</p>
                <div className="client-logos__row">
                    {clientLogos.map((client, i) => (
                        <a key={i} href={client.url} target="_blank" rel="noopener noreferrer" className="client-logos__item" title={client.alt}>
                            <img src={`/assets/${client.src}`} alt={client.alt} className="client-logos__img" />
                        </a>
                    ))}
                </div>
                <div className="portfolio-cta">
                    <Link to="/portfolio" className="btn btn-dark portfolio-cta__btn">
                        Ver Portfolio Completo <ArrowRight size={18} aria-hidden />
                    </Link>
                </div>
            </div>
        </div>
    </section>
);

const Contact = () => {
    const formRef = useRef(null);
    const [status, setStatus] = useState({ state: 'idle', message: '' }); // idle | sending | success | error

    const onSubmit = async (e) => {
        e.preventDefault();

        const honey = formRef.current?.querySelector('input[name="website"]')?.value;
        if (honey) return;

        const formId = "xvzbgdnz";
        if (!formId) {
            setStatus({
                state: 'error',
                message: 'Falta configurar Formspree (VITE_FORMSPREE_FORM_ID).'
            });
            return;
        }

        try {
            setStatus({ state: 'sending', message: '' });
            const res = await fetch(`https://formspree.io/f/${formId}`, {
                method: 'POST',
                body: new FormData(formRef.current),
                headers: { Accept: 'application/json' }
            });
            if (!res.ok) throw new Error('Formspree error');
            formRef.current?.reset();
            setStatus({ state: 'success', message: '¡Gracias! Te escribimos en breve.' });
        } catch  {
            setStatus({
                state: 'error',
                message: 'No se pudo enviar. Prueba de nuevo o escríbenos a info@fluit.es.'
            });
        }
    };

    return (
        <section id="contact" className="section section-cta section-contact">
            <div className="container">
                <div className="cta-layout contact-layout">
                    <div className="cta-content contact-intro">
                        <h2>¿Hablamos?</h2>
                        <p>Cuéntanos qué necesitas y te respondemos rápido,</p>
                        <a href="mailto:info@fluit.es" className="contact-form__fallback">
                                    o escríbenos a <strong>info@fluit.es</strong>
                                </a>
                    </div>
                    <div className="contact-form-wrap">
                        <form ref={formRef} className="contact-form" onSubmit={onSubmit}>
                            <div className="contact-form__grid">
                                <label className="contact-field">
                                    <span className="contact-field__label">Nombre</span>
                                    <input
                                        name="from_name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        maxLength={80}
                                        placeholder="Tu nombre"
                                    />
                                </label>

                                <label className="contact-field">
                                    <span className="contact-field__label">Email</span>
                                    <input
                                        name="_replyto"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        maxLength={120}
                                        placeholder="tu@email.com"
                                    />
                                </label>

                                <label className="contact-field contact-field--full">
                                    <span className="contact-field__label">Mensaje</span>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        required
                                        maxLength={1200}
                                        placeholder="En qué podemos ayudarte…"
                                    />
                                </label>

                                <input className="contact-form__hp" type="text" name="website" tabIndex={-1} autoComplete="off" />
                            </div>

                            <div className="contact-form__actions">
                                <button className="btn btn-dark" type="submit" disabled={status.state === 'sending'}>
                                    <Mail size={20} />
                                    {status.state === 'sending' ? 'Enviando…' : 'Enviar'}
                                </button>
                            </div>

                            {status.state !== 'idle' && (
                                <p
                                    className={`contact-form__notice ${
                                        status.state === 'success' ? 'contact-form__notice--ok' : ''
                                    } ${status.state === 'error' ? 'contact-form__notice--err' : ''}`}
                                    role={status.state === 'error' ? 'alert' : 'status'}
                                >
                                    {status.message}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

const LinkedinIcon = ({ size = 20 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

export const Home = () => {
    return (
        <>
            <Hero />
            <Identity />
            <ServicesGrid />
            <TeamSection />
            <Contact />
        </>
    );
};
