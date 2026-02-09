import React from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import pecesVideo from '../assets/peces.mp4';
import waterSocialIcon from '../assets/9947760.png';
import {
    Droplets,
    Code2,
    Activity,
    Mail,
    ArrowRight,
    BookOpen,
    Users,
    Target,
    History,
    BrainCircuit,
    Cpu
} from 'lucide-react';

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

const waterProjects = [
    { name: "Qatium", role: "Gestión inteligente del agua" },
    { name: "Water4Cast", role: "Modelos de Pronóstico Hidrológico" },
    { name: "QGISRed", role: "Redes de abastecimiento avanzadas" },
    { name: "AQUATOOL", role: "Desarrollo de Módulos" },
    { name: "RS MINERVE", role: "Optimización de Algoritmos" },
    { name: "CHJ", role: "Consultoría de Planificación" }
];

const techProjects = [
    { name: "Flywire", role: "Fintech" },
    { name: "Nextail", role: "Retail" },
    { name: "ValenciaPort", role: "Puertos" },
    { name: "Puerto de Algeciras", role: "Puertos" },
    { name: "Depuradora Quart Benager", role: "Utilities" },
    { name: "Internet Freedom Festival", role: "Non-profit" }
];

const publications = [
    "Algoritmos Genéticos en la Optimización de Redes",
    "Modelación de Calidad en Acuíferos Complejos",
    "Sistemas de Alerta Temprana en Cuencas Mediterráneas",
    "Integración de GIS y Modelos Hidráulicos Dinámicos"
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

const clientLogos = [
    { src: "logo-qatium.svg", alt: "Qatium", url: "https://qatium.com" },
    { src: "logo-iiama.png", alt: "IIAMA", url: "https://iiama.upv.es" },
    { src: "logo-upv.png", alt: "Universitat Politècnica de València", url: "https://www.upv.es" },
    { src: "logo-aquatic-informatics.png", alt: "Aquatic Informatics", url: "https://aquaticinformatics.com" }
];

const ClientLogos = () => (
    <section className="section section-client-logos">
        <div className="container">
            <p className="client-logos__label">Hemos colaborado con</p>
            <div className="client-logos__row">
                {clientLogos.map((client, i) => (
                    <a key={i} href={client.url} target="_blank" rel="noopener noreferrer" className="client-logos__item" title={client.alt}>
                        <img src={`${import.meta.env.BASE_URL}assets/${client.src}`} alt={client.alt} className="client-logos__img" />
                    </a>
                ))}
            <div className="portfolio-cta">
                <Link to="/portfolio" className="btn btn-dark portfolio-cta__btn">
                    Ver Portfolio Completo <ArrowRight size={18} aria-hidden />
                </Link>
            </div>
            </div>
        </div>
    </section>
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

const AboutSection = () => (
    <section id="about" className="section section--dark section-about">
        <div className="container">
            <div className="about-grid">
                <div className="about-text">
                    <h2>Ingeniería con Valor Social</h2>
                    <p>
                        Fluit es una <strong>Cooperativa de Trabajo Asociado</strong> fundada sobre los principios de responsabilidad, excelencia técnica y compromiso con la gestión sostenible del agua.
                    </p>
                    <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <div style={{ flexShrink: 0, color: 'var(--white)' }}><History size={24} /></div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: 'var(--white)' }}>Nuestra Historia</h3>
                                <p style={{ margin: 0, fontSize: '0.95rem' }}>
                                    Constituida en 2018, surge de la unión de ingenieros apasionados por la hidráulica y la programación para transferir conocimiento a la sociedad.
                                </p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <div style={{ flexShrink: 0, color: 'var(--white)' }}><Target size={24} /></div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: 'var(--white)' }}>Misión Cooperativa</h3>
                                <p style={{ margin: 0, fontSize: '0.95rem' }}>
                                    Priorizamos a las personas, buscando la estabilidad profesional y la creación de valor real para nuestros clientes y el medio ambiente.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-media">
                    <img
                        src={waterSocialIcon}
                        alt="Ingeniería con valor social: agua y compromiso"
                        className="about-media__img"
                    />
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
                        <img src={`${import.meta.env.BASE_URL}assets/edgar.jpg`} alt="Edgar Belda" />
                    </div>
                    <div className="founder-header">
                        <h3>Edgar Belda</h3>
                        <LinkedinIcon size={18} />
                    </div>
                    <p className="founder-role">Full-stack · Hidráulica</p>
                </a>
                <a href="https://www.linkedin.com/in/emelgil/" target="_blank" rel="noopener noreferrer" className="founder">
                    <div className="founder-photo">
                        <img src={`${import.meta.env.BASE_URL}assets/elena.jpg`} alt="Elena Melchor" />
                    </div>
                    <div className="founder-header">
                        <h3>Elena Melchor</h3>
                        <LinkedinIcon size={18} />
                    </div>
                    <p className="founder-role">Full-stack · Backend · GIS</p>
                </a>
                <a href="https://www.linkedin.com/in/neslerel/" target="_blank" rel="noopener noreferrer" className="founder">
                    <div className="founder-photo">
                        <img src={`${import.meta.env.BASE_URL}assets/nestor.png`} alt="Néstor Lerma" />
                    </div>
                    <div className="founder-header">
                        <h3>Néstor Lerma</h3>
                        <LinkedinIcon size={18} />
                    </div>
                    <p className="founder-role">Full-stack · Hidráulica</p>
                </a>
                <a href="https://www.linkedin.com/in/vibaiher/" target="_blank" rel="noopener noreferrer" className="founder">
                    <div className="founder-photo">
                        <img src={`${import.meta.env.BASE_URL}assets/vicente.jpg`} alt="Vicente Baixauli" />
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
                            <img src={`${import.meta.env.BASE_URL}assets/${client.src}`} alt={client.alt} className="client-logos__img" />
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

const Portfolio = () => (
    <section id="portfolio" className="section section-portfolio">
        <div className="container portfolio-container">
            <header className="portfolio-header">
                <h2 className="section-title portfolio-title">Con quién trabajamos</h2>
                <p className="portfolio-intro">
                    Experiencia en proyectos donde el agua, el software y los datos se encuentran.
                </p>
            </header>

            <div className="portfolio-columns">
                <div className="portfolio-card portfolio-card--water">
                    <div className="portfolio-card__header">
                        <span className="portfolio-card__icon" aria-hidden><Droplets size={20} /></span>
                        <h3 className="portfolio-card__title">Sector del Agua</h3>
                    </div>
                    <ul className="portfolio-list">
                        {waterProjects.map((p, i) => (
                            <li key={i} className="portfolio-item">
                                <span className="portfolio-item__name">{p.name}</span>
                                <span className="portfolio-item__role">{p.role}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="portfolio-card portfolio-card--tech">
                    <div className="portfolio-card__header">
                        <span className="portfolio-card__icon" aria-hidden><Code2 size={20} /></span>
                        <h3 className="portfolio-card__title">Desarrollo & Tecnología</h3>
                    </div>
                    <ul className="portfolio-list">
                        {techProjects.map((p, i) => (
                            <li key={i} className="portfolio-item">
                                <span className="portfolio-item__name">{p.name}</span>
                                <span className="portfolio-item__tag">{p.role}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="portfolio-publications-block">
                <h3 className="portfolio-publications-block__title">
                    <BookOpen size={18} aria-hidden />
                    Publicaciones
                </h3>
                <ul className="portfolio-publications-list">
                    {publications.map((p, i) => (
                        <li key={i} className="portfolio-publication-item">
                            <span className="portfolio-publication-item__text">{p}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="portfolio-cta">
                <Link to="/portfolio" className="btn btn-dark portfolio-cta__btn">
                    Ver Portfolio Completo <ArrowRight size={18} aria-hidden />
                </Link>
            </div>
        </div>
    </section>
);

const Contact = () => (
    <section id="contact" className="section section-cta section-contact">
        <div className="container">
            <div className="cta-layout cta-layout--center">
                <div className="cta-content">
                    <h2>¿Hablamos?</h2>
                    <p>Estamos listos para tu próximo reto técnico.</p>
                    <a href="mailto:info@fluit.es" className="btn btn-dark" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Mail size={20} />
                        info@fluit.es
                    </a>
                </div>
            </div>
        </div>
    </section>
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
