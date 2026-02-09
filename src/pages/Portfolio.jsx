import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight,
    ExternalLink,
    X,
} from 'lucide-react';

const teamPhotos = {
    Edgar: { photo: 'edgar.jpg', name: 'Edgar' },
    Elena: { photo: 'elena.jpg', name: 'Elena' },
    Néstor: { photo: 'nestor.png', name: 'Néstor' },
    Vicente: { photo: 'vicente.jpg', name: 'Vicente' },
};

const PortfolioHero = () => (
    <header className="hero portfolio-hero">
        <div className="container">
            <Motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="hero-content portfolio-hero__content"
            >
                <h1 className="portfolio-hero__title">Portfolio</h1>
                <p className="hero-p portfolio-hero__intro">
                    Agua, software e IA aplicados a proyectos reales.
                </p>
            </Motion.div>
        </div>
    </header>
);

const ProjectCard = ({ project, index }) => (
    <Motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: index * 0.05 }}
        className="pcard"
    >
        {project.image && (
            <div className="pcard__img-wrap">
                <img src={project.image} alt={project.title} />
            </div>
        )}

        <div className="pcard__body">
            <div className="pcard__header">
                <h2 className="pcard__title">{project.title}</h2>
                <div className="pcard__team">
                    {project.team.map((member, i) => {
                        const info = teamPhotos[member];
                        return (
                            <span key={i} className="pcard__avatar" title={info.name}>
                                <img
                                    src={`${import.meta.env.BASE_URL}assets/${info.photo}`}
                                    alt={info.name}
                                />
                            </span>
                        );
                    })}
                </div>
            </div>

            {project.role && (
                <p className="pcard__role">{project.role}</p>
            )}

            <p className="pcard__desc">
                {Array.isArray(project.description)
                    ? project.description.join(' ')
                    : project.description}
            </p>

            {project.contributions && (
                <div className="pcard__section">
                    <h3 className="pcard__section-title">Contribuciones</h3>
                    <ul className="pcard__list">
                        {project.contributions.map((c, i) => (
                            <li key={i}>
                                <ArrowRight size={14} />
                                <span>{c}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {project.works && (
                <div className="pcard__section">
                    <h3 className="pcard__section-title">Proyectos asociados</h3>
                    <ul className="pcard__list">
                        {project.works.map((w, i) => (
                            <li key={i}>
                                <ArrowRight size={14} />
                                <span>{w}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {project.technologies && (
                <div className="pcard__section">
                    <h3 className="pcard__section-title">Tecnologías</h3>
                    <div className="pcard__tags">
                        {project.technologies.map((t, i) => (
                            <span key={i} className="pcard__tag">{t}</span>
                        ))}
                    </div>
                </div>
            )}

            {project.link && (
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pcard__link"
                >
                    Ver proyecto <ExternalLink size={14} />
                </a>
            )}
        </div>
    </Motion.article>
);

const filters = [
    { key: 'agua', label: 'Agua' },
    { key: 'fintech', label: 'Fintech' },
    { key: 'retail', label: 'Retail' },
    { key: 'logística', label: 'Logística' },
    { key: 'open source', label: 'Open Source' },
];

export const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState(null);

    const projects = [
        {
            title: 'Qatium',
            tags: ['agua'],
            team: ['Edgar', 'Elena', 'Néstor', 'Vicente'],
            role: 'Producto, desarrollo e investigación',
            description: 'Plataforma de gestión inteligente del agua. Contribuimos con modelación hidráulica, gemelos digitales, sensórica y desarrollo de plugins para clientes.',
            contributions: [
                'Modelación hidráulica con Epanet, EpanetJS y TypeScript',
                'Gemelos digitales y sinópticos personalizados',
                'Gestión de sensórica y telelectura',
                'Calibración, inferencia y validación de modelos',
                'Conectores GIS y generación automática de modelos',
                'Sistemas de alerta temprana y plugins a medida'
            ],
            technologies: [
                'Docker', 'React', 'TypeScript', 'Jest', 'Python', 'Node.js',
                'Mapbox', 'Elastic', 'Mixpanel', 'Honeycomb', 'Jira', 'Trello',
                'Miro', 'Tinybird'
            ],
            link: 'https://qatium.com',
            image: `${import.meta.env.BASE_URL}assets/qatium.png`
        },
        {
            title: 'Flywire',
            tags: ['fintech'],
            team: ['Vicente'],
            role: 'Desarrollo de producto de la plataforma de pagos',
            description: 'Plataforma global de pagos internacionales para educación, salud y viajes. Escalado para picos de tráfico en admisiones universitarias, automatización de operaciones financieras e integración técnica de empresas adquiridas.',
            contributions: [
                'Escalado de plataforma para picos de miles de pagos en horas',
                'Automatización de operaciones bancarias y gestión de pagos internacionales',
                'Integración técnica de empresas adquiridas (M&A)',
                'Plataforma IaaS interna para mejorar la experiencia de desarrollo'
            ],
            technologies: [
                'Ruby', 'Rails', 'Sinatra', 'React', 'RabbitMQ', 'Elasticsearch',
                'AWS', 'Docker', 'Terraform', 'PostgreSQL'
            ],
            link: 'https://www.flywire.com',
            image: `${import.meta.env.BASE_URL}assets/flywire.png`
        },
        {
            title: 'Water4Cast',
            tags: ['agua', 'open source'],
            team: ['Edgar', 'Néstor'],
            role: 'Desarrollo fullstack',
            description: 'Plataforma de predicción hídrica que integra datos meteorológicos, ecohidrológicos y agronómicos. Diseñada para anticipar sequías, inundaciones y optimizar el riego.',
            contributions: [
                'Visor GIS interactivo sobre OpenStreetMaps',
                'Sistema de autenticación y perfiles de usuario',
                'Consulta de datos por punto geográfico y filtros temporales',
                'Paneles personalizables por cuenca, parcela o punto de control'
            ],
            technologies: [
                'HTML', 'CSS', 'TypeScript', 'OpenStreetMaps'
            ],
            link: 'https://water4cast.webs.upv.es',
            image: `${import.meta.env.BASE_URL}assets/water4cast.jpg`
        },
        {
            title: 'Nextail',
            tags: ['retail'],
            team: ['Vicente'],
            role: 'Desarrollo de plataforma y datos',
            description: 'SaaS de retail analytics para optimizar stock y operaciones en moda. Arquitectura event-driven con Kafka para hacer accesibles los datos de negocio a toda la organización.',
            contributions: [
                'Arquitectura event-driven con Kafka y eventos de dominio',
                'Algoritmos de optimización de stock con el equipo de data science',
                'Pipelines de datos para analytics de negocio'
            ],
            technologies: [
                'Ruby', 'Java', 'Python', 'Kafka', 'Kubernetes', 'AWS',
                'Terraform', 'React', 'PostgreSQL'
            ],
            link: 'https://nextail.co',
            image: `${import.meta.env.BASE_URL}assets/nextail.png`
        },
        {
            title: 'QGISRed',
            tags: ['agua', 'open source'],
            team: ['Edgar', 'Néstor'],
            role: 'Desarrollo y liderazgo técnico del plugin',
            description: 'Plugin de QGIS para modelar, analizar y planificar redes de abastecimiento urbano. Digitalización de redes, simulación de escenarios y cálculo de presiones en puntos críticos.',
            technologies: [
                'C#', 'XAML', 'Python', 'QGIS'
            ],
            link: 'https://qgisred.upv.es',
            image: `${import.meta.env.BASE_URL}assets/qgisred.png`
        },
        {
            title: 'Fundación Valenciaport',
            tags: ['logística'],
            team: ['Elena'],
            role: 'Desarrollo de la plataforma',
            description: 'Dashboard con gráficas integrado con un sistema de predicción de contenedores para el Puerto de Valencia. Estimación de capacidad y volumen de contenedores a 1-7 días vista.',
            technologies: [
                'Angular', 'Node.js', 'Docker'
            ],
            link: 'https://www.fundacion.valenciaport.com/proyecto/e2rm-empty-equipment-repository-management/',
            image: `${import.meta.env.BASE_URL}assets/valenciaport.png`
        },
        {
            title: 'Aquatool',
            tags: ['agua', 'open source'],
            team: ['Edgar', 'Néstor'],
            role: 'Desarrollo de módulos y formación internacional',
            description: 'Plataforma de simulación y gestión de recursos hídricos. Colaboramos en los módulos de cálculo y en cursos especializados para ingenieros y gestores.',
            contributions: [
                'Desarrollo de módulos: EvalHid, Caudeco, AqtPlayer, RREA, Mashwin',
                'Cursos internacionales sobre SIMGES, GESCAL y gestión integrada de recursos hídricos'
            ],
            works: [
                'Alto Vinalopó: modelación de alternativas de suministro (Plan Hidrológico del Júcar)',
                'Ministerio del Medio Ambiente de El Salvador: formación online',
                'TYPSA: calibración de modelos de calidad'
            ],
            technologies: [
                'C#', 'VB.NET', 'Windows Forms', 'XAML', 'VBA', 'DotSpatial'
            ],
            link: 'https://aquatool.webs.upv.es',
            image: `${import.meta.env.BASE_URL}assets/aquatool.png`
        },
        {
            title: 'Aquarius',
            tags: ['agua'],
            team: ['Edgar', 'Néstor'],
            role: 'Desarrollo de herramientas de integración de datos',
            description: 'Suite de herramientas para integrar, limpiar y exportar datos en AQUARIUS. Automatización de flujos de campo y control de calidad con trazabilidad completa.',
            contributions: [
                'Importadores y parsers para archivos Kisters y CSV',
                'Gestión de visitas e inspecciones en lote',
                'Modificación en lote de series temporales con rollback',
                'Exportación a CSV/Excel e informes automáticos en PDF/HTML'
            ],
            technologies: [
                'C#', '.NET', 'CSV Parsing', 'AQUARIUS API/SDK', 'HTML/PDF Generation',
                'Excel Export', 'CLI Tools', 'Logging & Auditing'
            ],
            link: 'https://aquaticinformatics.com/products/aquarius-environmental-water-data-management/',
            image: `${import.meta.env.BASE_URL}assets/aquarius.png`
        },
        {
            title: 'Depuradora Quart Benàger',
            tags: ['agua'],
            team: ['Elena'],
            role: 'Desarrollo de software de monitorización',
            description: 'Gemelo digital de los tanques de la depuradora, donde generan biogás para ser autosostenibles. Software de monitorización y control en tiempo real.',
            technologies: [
                'Java', 'Scilab'
            ],
            image: `${import.meta.env.BASE_URL}assets/depuradora.jpg`
        },
        {
            title: 'Internet Freedom Festival',
            tags: ['open source'],
            team: ['Elena', 'Vicente'],
            role: 'Desarrollo web',
            description: 'Evolución de la plataforma de gestión de tickets e invitaciones para el festival internacional de libertad en internet celebrado en Valencia.',
            technologies: [
                'Ruby', 'Rails', 'Bootstrap'
            ],
            link: 'https://internetfreedomfestival.org',
            image: `${import.meta.env.BASE_URL}assets/iff.png`
        }
    ];

    const filtered = activeFilter
        ? projects.filter(p => p.tags.includes(activeFilter))
        : projects;

    return (
        <>
            <PortfolioHero />
            <section className="section portfolio-grid-section">
                <div className="container">
                    <div className="pfilter-bar">
                        {filters.map(f => (
                            <button
                                key={f.key}
                                className={`pfilter-chip${activeFilter === f.key ? ' pfilter-chip--active' : ''}`}
                                onClick={() => setActiveFilter(activeFilter === f.key ? null : f.key)}
                            >
                                {f.label}
                                {activeFilter === f.key && <X size={14} />}
                            </button>
                        ))}
                    </div>
                    <div className="pcard-grid">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((project, index) => (
                                <ProjectCard key={project.title} project={project} index={index} />
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </>
    );
};
