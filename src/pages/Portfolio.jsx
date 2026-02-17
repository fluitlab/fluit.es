import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight,
    Briefcase,
    ExternalLink,
    Rocket,
    X,
} from 'lucide-react';

const teamPhotos = {
    Edgar: { photo: 'edgar.jpg', name: 'Edgar' },
    Elena: { photo: 'elena.jpg', name: 'Elena' },
    Néstor: { photo: 'nestor.jpg', name: 'Néstor' },
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
                    Proyectos que hemos desarrollado y empresas donde hemos crecido.
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
                <span className={`pcard__badge pcard__badge--${project.category}`}>
                    {project.category === 'portfolio'
                        ? <><Rocket size={12} /> Cliente</>
                        : <><Briefcase size={12} /> Experiencia laboral</>}
                </span>
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
                                    src={`/assets/${info.photo}`}
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
    const [activeCategory, setActiveCategory] = useState(null);

    const projects = [
        {
            title: 'Qatium',
            category: 'experience',
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
            image: `/assets/qatium.png`
        },
        {
            title: 'Depuradora Quart Benàger',
            category: 'experience',
            tags: ['agua'],
            team: ['Elena'],
            role: 'Desarrollo de software de monitorización',
            description: 'Gemelo digital de los tanques de la depuradora para optimizar el consumo de biogás autoproducido en sus propios procesos. Desarrollamos el frontend y el backend completo, incluyendo el ajuste del modelo de ecuaciones en Scilab y la integración con sensores de la planta a través de Nexus para monitorización y control en tiempo real.',
            contributions: [
                'Desarrollo del frontend de monitorización en Angular',
                'API REST en Node.js para la gestión de datos de sensores',
                'Ajuste y calibración del modelo de ecuaciones en Scilab',
                'Integración con sensores de la planta vía Nexus'
            ],
            technologies: [
                'Angular', 'Node.js', 'Nexus', 'Scilab', 'MongoDB'
            ],
            image: `/assets/depuradora.jpg`
        },
        {
            title: 'QGISRed',
            category: 'portfolio',
            tags: ['agua', 'open source'],
            team: ['Edgar', 'Néstor'],
            role: 'Desarrollo y liderazgo técnico del plugin',
            description: 'Plugin de QGIS para modelar, analizar y planificar redes de abastecimiento urbano. Digitalización de redes, simulación de escenarios y cálculo de presiones en puntos críticos.',
            contributions: [
                'Digitalización y edición gráfica de redes de abastecimiento',
                'Simulación hidráulica con motor Epanet integrado',
                'Herramientas de verificación y corrección topológica de redes',
                'Generación de informes y exportación de resultados'
            ],
            technologies: [
                'C#', 'XAML', 'Python', 'QGIS'
            ],
            link: 'https://qgisred.upv.es',
            image: `/assets/qgisred.png`
        },
        {
            title: 'Water4Cast',
            category: 'portfolio',
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
            image: `/assets/water4cast.jpg`
        },
        {
            title: 'Flywire',
            category: 'experience',
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
            image: `/assets/flywire.png`
        },
        {
            title: 'Nextail',
            category: 'experience',
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
            image: `/assets/nextail.png`
        },
        {
            title: 'Fundación Valenciaport',
            category: 'experience',
            tags: ['logística'],
            team: ['Elena'],
            role: 'Desarrollo de la plataforma',
            description: 'Middleware en Node para alimentar una base de datos a partir de CSVs de stock de contenedores que llegaban por mar y tierra al Puerto de Valencia. Los datos alimentaban un motor de predicción en Python que generaba estimaciones de disponibilidad de contenedores a 1-7 días vista, visualizadas en un dashboard con gráficas.',
            contributions: [
                'Middleware en Node.js para ingesta de datos CSV de contenedores',
                'Integración con motor de predicción en Python',
                'Dashboard de visualización de predicciones a 1-7 días',
                'Modelado de base de datos SQL para stock portuario'
            ],
            technologies: [
                'Node.js', 'SQL', 'Python', 'Angular', 'Docker'
            ],
            link: 'https://www.fundacion.valenciaport.com/proyecto/e2rm-empty-equipment-repository-management/',
            image: `/assets/valenciaport.png`
        },
        {
            title: 'Aquatool',
            category: 'portfolio',
            tags: ['agua'],
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
            image: `/assets/aquatool.png`
        },
        {
            title: 'Aquarius',
            category: 'portfolio',
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
            image: `/assets/aquarius.png`
        },
        {
            title: 'Internet Freedom Festival',
            category: 'portfolio',
            tags: ['open source'],
            team: ['Elena', 'Vicente'],
            role: 'Desarrollo web',
            description: 'Evolución de la plataforma de gestión de tickets e invitaciones para el festival internacional de libertad en internet celebrado en Valencia.',
            contributions: [
                'Plataforma de gestión de propuestas y sesiones del festival',
                'Sistema de tickets e invitaciones con roles de usuario',
                'Migración y evolución de la aplicación Rails existente'
            ],
            technologies: [
                'Ruby', 'Rails', 'Bootstrap'
            ],
            link: 'https://internetfreedomfestival.org',
            image: `/assets/iff.png`
        }
    ];

    const filtered = projects
        .filter(p => !activeFilter || p.tags.includes(activeFilter))
        .filter(p => !activeCategory || p.category === activeCategory);

    const hasResultsForTag = (tag) =>
        projects.some(p => p.tags.includes(tag) && (!activeCategory || p.category === activeCategory));

    const hasResultsForCategory = (category) =>
        projects.some(p => p.category === category && (!activeFilter || p.tags.includes(activeFilter)));

    return (
        <>
            <PortfolioHero />
            <section className="section portfolio-grid-section">
                <div className="container">
                    <div className="pfilter-bar">
                        {filters.map(f => {
                            const disabled = !hasResultsForTag(f.key) && activeFilter !== f.key;
                            return (
                                <button
                                    key={f.key}
                                    className={`pfilter-chip${activeFilter === f.key ? ' pfilter-chip--active' : ''}${disabled ? ' pfilter-chip--disabled' : ''}`}
                                    onClick={() => !disabled && setActiveFilter(activeFilter === f.key ? null : f.key)}
                                    disabled={disabled}
                                >
                                    {f.label}
                                    {activeFilter === f.key && <X size={14} />}
                                </button>
                            );
                        })}
                        <span className="pfilter-separator" />
                        <button
                            className={`pfilter-chip${activeCategory === 'portfolio' ? ' pfilter-chip--active' : ''}${!hasResultsForCategory('portfolio') && activeCategory !== 'portfolio' ? ' pfilter-chip--disabled' : ''}`}
                            onClick={() => hasResultsForCategory('portfolio') && setActiveCategory(activeCategory === 'portfolio' ? null : 'portfolio')}
                            disabled={!hasResultsForCategory('portfolio') && activeCategory !== 'portfolio'}
                        >
                            <Rocket size={14} /> Cliente
                            {activeCategory === 'portfolio' && <X size={14} />}
                        </button>
                        <button
                            className={`pfilter-chip${activeCategory === 'experience' ? ' pfilter-chip--active' : ''}${!hasResultsForCategory('experience') && activeCategory !== 'experience' ? ' pfilter-chip--disabled' : ''}`}
                            onClick={() => hasResultsForCategory('experience') && setActiveCategory(activeCategory === 'experience' ? null : 'experience')}
                            disabled={!hasResultsForCategory('experience') && activeCategory !== 'experience'}
                        >
                            <Briefcase size={14} /> Experiencia laboral
                            {activeCategory === 'experience' && <X size={14} />}
                        </button>
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
