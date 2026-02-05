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
    Cpu,
    Target,
    History,
    BrainCircuit
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
        desc: "Proyectos de ingeniería y asesoramiento técnico integral. Modelos de gestión, calidad de aguas y precipitación-escorrentía."
    },
    {
        icon: <Activity />,
        title: "Redes & Abastecimiento",
        desc: "Creación de modelos hidráulicos de redes de abastecimiento y saneamiento urbano, integración con Epanet, SWMM, WS Pro, ICM y QGISRed."
    },
    {
        icon: <Code2 />,
        title: "Software para el Agua",
        desc: "Desarrollo de software, plugins, automatizaciones y hojas de cálculo avanzadas adaptadas a las necesidades de cada proyecto."
    },
    {
        icon: <Cpu />,
        title: "IA & Datos Hídricos",
        desc: "Tratamiento de datos, visualización, análisis GIS e inteligencia artificial para la toma de decisiones."
    }
];

const techServices = [
    {
        icon: <Target />,
        title: "Visión de Producto",
        desc: "Pensamos en producto, no solo en código. Entendemos el negocio, el usuario y la tecnología que los conecta. Trabajamos como parte de tu equipo, no como proveedores externos."
    },
    {
        icon: <BrainCircuit />,
        title: "IA Nativa",
        desc: "Usamos IA a diario para desarrollar mejor y más rápido. Te ayudamos a hacer lo mismo: integrar modelos, automatizar procesos y sacar partido real a estas herramientas."
    },
    {
        icon: <Code2 />,
        title: "Desarrollo a Medida",
        desc: "Fullstack, backend, APIs, visualización de datos. Nos adaptamos a tu stack y a tu forma de trabajar."
    },
    {
        icon: <Activity />,
        title: "DevOps & Plataforma",
        desc: "Infraestructura, CI/CD, monitorización. Mejoramos la experiencia de desarrollo de tu equipo."
    }
];

const waterProjects = [
    { name: "Qatium", role: "Gestión inteligente del agua" },
    { name: "Water4Cast", role: "Modelos de Pronóstico Hidrológico" },
    { name: "QGISRed", role: "Complementos de Redes" },
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
                <h1 className="hero-title">Ingeniería que <em>fluye</em></h1>
                <p className="hero-p" style={{ color: 'var(--text-main)', marginBottom: '2rem' }}>
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
    { src: "logo-aquatic-informatics.png", alt: "Aquatic Informatics", url: "https://aquaticinformatics.com" },
    { src: "logo-flywire.svg", alt: "Flywire", url: "https://flywire.com" },
];

const ClientLogos = () => (
    <section className="section-client-logos">
        <div className="container">
            <p className="client-logos__label">Colaboramos con</p>
            <div className="client-logos__row">
                {clientLogos.map((client, i) => (
                    <a key={i} href={client.url} target="_blank" rel="noopener noreferrer" className="client-logos__item" title={client.alt}>
                        <img src={`${import.meta.env.BASE_URL}assets/${client.src}`} alt={client.alt} className="client-logos__img" />
                    </a>
                ))}
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
    <section id="about" className="section section--dark">
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
                <div className="founder">
                    <div className="founder-photo">
                        <img src={`${import.meta.env.BASE_URL}assets/edgar.jpg`} alt="Edgar Belda" />
                    </div>
                    <div className="founder-header">
                        <h3>Edgar Belda</h3>
                        <a href="https://www.linkedin.com/in/edgarbelda/" target="_blank" rel="noopener noreferrer" className="founder-linkedin">
                            <LinkedinIcon size={18} />
                        </a>
                    </div>
                    <p className="founder-role">Full-stack · Hidráulica</p>
                </div>
                <div className="founder">
                    <div className="founder-photo">
                        <img src={`${import.meta.env.BASE_URL}assets/elena.jpg`} alt="Elena Melchor" />
                    </div>
                    <div className="founder-header">
                        <h3>Elena Melchor</h3>
                        <a href="https://www.linkedin.com/in/emelgil/" target="_blank" rel="noopener noreferrer" className="founder-linkedin">
                            <LinkedinIcon size={18} />
                        </a>
                    </div>
                    <p className="founder-role">Full-stack · Backend · GIS</p>
                </div>
                <div className="founder">
                    <div className="founder-photo">
                        <img src={`${import.meta.env.BASE_URL}assets/nestor.jpg`} alt="Néstor Lerma" />
                    </div>
                    <div className="founder-header">
                        <h3>Néstor Lerma</h3>
                        <a href="https://www.linkedin.com/in/neslerel/" target="_blank" rel="noopener noreferrer" className="founder-linkedin">
                            <LinkedinIcon size={18} />
                        </a>
                    </div>
                    <p className="founder-role">Full-stack · Hidráulica</p>
                </div>
                <div className="founder">
                    <div className="founder-photo">
                        <img src={`${import.meta.env.BASE_URL}assets/vicente.jpg`} alt="Vicente Baixauli" />
                    </div>
                    <div className="founder-header">
                        <h3>Vicente Baixauli</h3>
                        <a href="https://www.linkedin.com/in/vibaiher/" target="_blank" rel="noopener noreferrer" className="founder-linkedin">
                            <LinkedinIcon size={18} />
                        </a>
                    </div>
                    <p className="founder-role">Full-stack · Plataforma · IA</p>
                </div>
            </div>
        </div>
    </section>
);

const ServicesGrid = () => (
    <section id="services" className="section section-benefits section-services">
        <div className="container benefits-layout">
            <h2 className="section-title">Qué hacemos</h2>
            <p className="benefits-intro">
                Nuestras raíces están en el agua, pero nuestras capacidades van más allá. Perfiles híbridos que combinan ingeniería, desarrollo de software y especialización en datos.
            </p>

            <h3 className="services-group-title">Sector del Agua</h3>
            <div className="benefit-cards">
                {waterServices.map((s, i) => (
                    <div key={i} className="card card--blue">
                        <div>{s.icon}</div>
                        <h3>{s.title}</h3>
                        <p>{s.desc}</p>
                    </div>
                ))}
            </div>

            <h3 className="services-group-title">Desarrollo & Tecnología</h3>
            <div className="benefit-cards">
                {techServices.map((s, i) => (
                    <div key={i} className="card card--blue">
                        <div>{s.icon}</div>
                        <h3>{s.title}</h3>
                        <p>{s.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Portfolio = () => (
    <section id="portfolio" className="section section-portfolio">
        <div className="container benefits-layout">
            <h2 className="section-title">Con quién trabajamos</h2>
            <p className="benefits-intro">
                Experiencia en proyectos donde el agua, el software y los datos se encuentran.
            </p>

            <div className="portfolio-columns">
                <div className="portfolio-column">
                    <h3 className="services-group-title">Sector del Agua</h3>
                    <div className="portfolio-list">
                        {waterProjects.map((p, i) => (
                            <div key={i} className="portfolio-item">
                                <span className="portfolio-item__name">{p.name}</span>
                                <span className="portfolio-item__role">{p.role}</span>
                            </div>
                        ))}
                    </div>
                    <div className="portfolio-publications">
                        <p className="portfolio-publications__label">Publicaciones</p>
                        {publications.map((p, i) => (
                            <div key={i} className="portfolio-publication">
                                <BookOpen size={16} style={{ flexShrink: 0, color: 'var(--teal)' }} />
                                <span>{p}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="portfolio-column">
                    <h3 className="services-group-title">Desarrollo & Tecnología</h3>
                    <div className="portfolio-list">
                        {techProjects.map((p, i) => (
                            <div key={i} className="portfolio-item">
                                <span className="portfolio-item__name">{p.name}</span>
                                <span className="portfolio-item__role">{p.role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="portfolio-cta">
                <Link to="/portfolio" className="btn btn-dark" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    Ver Portfolio Completo <ArrowRight size={18} />
                </Link>
            </div>
        </div>
    </section>
);

const Contact = () => (
    <section id="contact" className="section section-cta">
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
            <Portfolio />
            <ClientLogos />
            <TeamSection />
            <Contact />
        </>
    );
};
