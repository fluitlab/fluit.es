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
    Globe2,
    Users,
    Lightbulb,
    Award,
    Terminal,
    Cpu,
    Database,
    Target,
    Eye,
    Compass,
    History
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

const services = [
    {
        icon: <Droplets />,
        title: "Planificación Hídrica",
        desc: "Proyectos de ingeniería y asesoramiento técnico integral. Modelos de gestión, calidad de aguas y precipitación-escorrentía.",
        tags: ["Gestión Integral", "IIAMA", "Simulación Avanzada"]
    },
    {
        icon: <Activity />,
        title: "Abastecimiento & Redes",
        desc: "Creación de modelos hidráulicos de redes de abastecimiento y saneamiento urbano, integración con Epanet, SWMM, WS Pro, ICM y QGISRed.",
        tags: ["Abastecimiento", "Saneamiento", "Optimización"]
    },
    {
        icon: <Code2 />,
        title: "Programación a Medida",
        desc: "Desarrollo de software específico (.NET, Typescript, Python, Ruby, R-Shiny) y hojas de cálculo (VBA) para ingeniería.",
        tags: ["Plugins QGIS", "Algoritmos", "Software SSD"]
    },
    {
        icon: <Cpu />,
        title: "IA & Big Data",
        desc: "Tratamiento de grandes volúmenes de datos y aplicación de Inteligencia Artificial para la predicción hídrica.",
        tags: ["Análisis Predictivo", "Innovación"]
    }
];

const projects = [
    { name: "Qatium", role: "Colaboración Tecnológica", years: 6, desc: "Desarrollo de plataforma de gestión inteligente del agua." },
    { name: "Water4Cast", role: "Modelos de Pronóstico Hidrológico", years: 3 },
    { name: "QGISRed", role: "Complementos de Redes", years: 4 },
    { name: "AQUATOOL", role: "Desarrollo de Módulos", years: 6 },
    { name: "RS MINERVE", role: "Optimización de Algoritmos", years: 3 },
    { name: "CHJ", role: "Consultoría de Planificación", years: 4 }
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
                <h1 className="hero-title">
                    Modelación Hidráulica <br />
                    & Consultoría Software
                </h1>
                <p className="hero-p" style={{ color: 'var(--text-main)', marginBottom: '2rem' }}>
                    Fluit nace para dar respuesta a la creciente demanda de digitalización en el sector del agua, fusionando la ingeniería tradicional con las tecnologías más innovadoras.
                </p>
                <div className="btn-group">
                    <a href="#services" className="btn btn-primary">
                        Ver Servicios <ArrowRight size={16} style={{ marginLeft: '0.25rem' }} />
                    </a>
                    <a href="#team" className="btn btn-dark">
                        Sobre Nosotros
                    </a>
                </div>
            </Motion.div>
        </div>
    </header>
);

const Concept = () => (
    <section id="concept" className="section section--dark section-concept">
        <div className="container">
            <h2 className="section-title section-title--light">El Concepto Fluit</h2>
            <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem', color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>
                Nuestro nombre refleja nuestra identidad: la intersección perfecta entre el recurso hídrico y la capacidad analítica.
            </p>
            <div className="benefit-cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
                {[
                    { icon: <Globe2 />, title: "Recursos Hídricos", desc: "Expertos en la gestión integral del ciclo del agua" },
                    { icon: <Database />, title: "Inteligencia Artificial", desc: "Aplicamos algoritmos avanzados y Big Data" },
                    { icon: <Lightbulb />, title: "Innovación Técnica", desc: "Desarrollo de herramientas de vanguardia" },
                    { icon: <Terminal />, title: "Algoritmos", desc: "Programación orientada a la eficiencia hídrica" },
                    { icon: <Users />, title: "Compromiso Social", desc: "Vinculados a la economía social como cooperativa" },
                    { icon: <Award />, title: "Excelencia", desc: "Conectados con los principales centros de investigación" }
                ].map((item, i) => (
                    <div key={i} className="card card--pink">
                        <div style={{ marginBottom: '1rem', color: 'var(--black)' }}>{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const MissionVision = () => (
    <section className="section section-benefits section-mission-vision">
        <div className="container benefits-layout">
            <div className="benefit-cards">
                <div className="card card--pink">
                    <div style={{ marginBottom: '1rem', color: 'var(--black)' }}><Target size={28} /></div>
                    <h3>Misión</h3>
                    <p>
                        Desarrollar proyectos de ingeniería especializados en Recursos Hídricos y Medio Ambiente, apoyándonos en la creación y aplicación de herramientas innovadoras que optimicen la gestión y conservación de estos recursos.
                    </p>
                </div>
                <div className="card card--pink">
                    <div style={{ marginBottom: '1rem', color: 'var(--black)' }}><Eye size={28} /></div>
                    <h3>Visión</h3>
                    <p>
                        Impulsar la transformación sostenible en la gestión del agua, integrando tecnología y conocimiento para proteger y restaurar el equilibrio ambiental a largo plazo.
                    </p>
                </div>
                <div className="card card--pink">
                    <div style={{ marginBottom: '1rem', color: 'var(--black)' }}><Compass size={28} /></div>
                    <h3>Filosofía</h3>
                    <p>
                        Brindar un servicio personalizado y de alta calidad, adaptado a las necesidades específicas de cada cliente, garantizando soluciones efectivas y responsables.
                    </p>
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
        <div className="container">
            <h2 className="section-title section-title--light">Nuestro Equipo</h2>
            <div className="founders-grid" style={{ maxWidth: '900px', margin: '0 auto', justifyContent: 'center' }}>
                <div className="founder">
                    <div className="founder-photo">
                        <img src={`${import.meta.env.BASE_URL}assets/edgar.jpg`} alt="Edgar Belda" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                        <h3>Edgar Belda</h3>
                        <a href="https://www.linkedin.com/in/edgarbelda/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--white)', display: 'flex' }}>
                            <LinkedinIcon size={18} />
                        </a>
                    </div>
                    <p>Hidráulica & Software Engineer</p>
                </div>
                <div className="founder">
                    <div className="founder-photo">
                        <img src={`${import.meta.env.BASE_URL}assets/nestor.jpg`} alt="Néstor Lerma" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                        <h3>Néstor Lerma</h3>
                        <a href="https://www.linkedin.com/in/neslerel/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--white)', display: 'flex' }}>
                            <LinkedinIcon size={18} />
                        </a>
                    </div>
                    <p>Hidráulica & Software Engineer</p>
                </div>
                <div className="founder">
                    <div className="founder-photo">
                        <img src={`${import.meta.env.BASE_URL}assets/elena.jpg`} alt="Elena Melchor" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                        <h3>Elena Melchor</h3>
                        <a href="https://www.linkedin.com/in/emelgil/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--white)', display: 'flex' }}>
                            <LinkedinIcon size={18} />
                        </a>
                    </div>
                    <p>Software Engineer</p>
                </div>
                <div className="founder">
                    <div className="founder-photo">
                        <img src={`${import.meta.env.BASE_URL}assets/vicente.jpg`} alt="Vicente Baixauli" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                        <h3>Vicente Baixauli</h3>
                        <a href="https://www.linkedin.com/in/vibaiher/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--white)', display: 'flex' }}>
                            <LinkedinIcon size={18} />
                        </a>
                    </div>
                    <p>Software Engineer</p>
                </div>
            </div>
        </div>
    </section>
);

const ServicesGrid = () => (
    <section id="services" className="section section-benefits section-services">
        <div className="container benefits-layout">
            <h2 className="section-title">Servicios</h2>
            <p className="benefits-intro">
                Aportamos soluciones técnicas para organismos públicos y empresas privadas.
            </p>
            <div className="benefit-cards">
                {services.map((s, i) => (
                    <div key={i} className="card card--blue">
                        <div>{s.icon}</div>
                        <h3>{s.title}</h3>
                        <p>{s.desc}</p>
                        <div className="tag-list">
                            {s.tags.map(t => (
                                <span key={t}>{t}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Portfolio = () => (
    <section id="portfolio" className="section section-values">
        <div className="container">
            <div className="values-layout">
                <div className="values-intro">
                    <h2>Portfolio</h2>
                    <p>
                        Nuestra actividad está intrínsecamente ligada a la academia. Colaboramos activamente con el IIAMA y otros centros de referencia internacional.
                    </p>
                    <div className="values-list">
                        {publications.map((p, i) => (
                            <div key={i} className="value-item">
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                    <BookOpen size={20} style={{ flexShrink: 0, color: 'var(--teal)', marginTop: '0.2rem' }} />
                                    <span style={{ fontSize: '1rem', color: 'var(--text-main)' }}>{p}</span>
                                </div>
                                {i < publications.length - 1 && <hr className="value-divider" />}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="portfolio-highlights">
                    <h3 className="portfolio-highlights__title">Proyectos Destacados</h3>
                    <div className="portfolio-project-cards">
                        {projects.map((p, i) => (
                            <div key={i} className="portfolio-project-card">
                                <div className="portfolio-project-card__info">
                                    <div className="portfolio-project-card__name">{p.name}</div>
                                    <div className="portfolio-project-card__role">{p.role}</div>
                                </div>
                                <span className="portfolio-project-card__years">{p.years} años</span>
                            </div>
                        ))}
                    </div>
                    <div className="portfolio-highlights__cta">
                        <Link to="/portfolio" className="btn btn-dark" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            Ver Portfolio Completo <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Contact = () => (
    <section id="contact" className="section section-cta">
        <div className="container">
            <div className="cta-layout cta-layout--center">
                <div className="cta-content">
                    <h2>¿Hablamos de agua?</h2>
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
            <Concept />
            <MissionVision />
            <ServicesGrid />
            <Portfolio />
            <TeamSection />
            <AboutSection />
            <Contact />
        </>
    );
};
