import React from 'react';
import { motion as Motion } from 'framer-motion';
import {
    ArrowRight,
    ExternalLink,
    Code2,
    Database,
    MapPin,
    Droplets,
    GitBranch,
    Cpu,
    Globe2,
    Layers,
    Settings,
    BarChart3
} from 'lucide-react';

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
                    Descubre los proyectos en los que hemos trabajado y cómo hemos contribuido a la mejora de la gestión de los Recursos Hídricos a través de tecnología avanzada e innovación.
                </p>
            </Motion.div>
        </div>
    </header>
);

const ProjectCard = ({ project, index }) => {
    const isEven = index % 2 === 0;

    return (
        <section className={`section portfolio-project-section ${isEven ? 'portfolio-project-section--alt' : ''}`}>
            <div className="container">
                <div className="portfolio-grid">
                    {/* Image Section - Centered */}
                    {project.image && (
                        <Motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="portfolio-project__image-centered"
                        >
                            <div className="portfolio-project__image-wrap">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                        </Motion.div>
                    )}

                    {/* Content Section - Automatic Flow into Columns on Desktop */}
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="portfolio-project__content-flow"
                    >
                        {/* Title Group */}
                        <div className="portfolio-project__title-group">
                            <h2 className="portfolio-project__title">
                                {project.title}
                                {project.subtitle && (
                                    <span style={{
                                        display: 'block',
                                        fontSize: '1.2rem',
                                        fontWeight: 400,
                                        color: 'var(--text-muted)',
                                        marginTop: '0.5rem'
                                    }}>
                                        {project.subtitle}
                                    </span>
                                )}
                            </h2>

                            {project.duration && (
                                <div className="portfolio-project__duration">
                                    Duración: {project.duration}
                                </div>
                            )}
                        </div>

                        {project.role && (
                            <div className="portfolio-project__block">
                                <span className="portfolio-project__role-label">Rol:</span>
                                <p className="portfolio-project__role-text">{project.role}</p>
                            </div>
                        )}

                        <div className="portfolio-project__block">
                            <h3 className="portfolio-project__subtitle">Descripción</h3>
                            {Array.isArray(project.description) ? (
                                project.description.map((desc, i) => (
                                    <p key={i} className="portfolio-project__text">{desc}</p>
                                ))
                            ) : (
                                <p className="portfolio-project__text">{project.description}</p>
                            )}
                        </div>

                        {project.contributions && (
                            <div className="portfolio-project__block">
                                <h3 className="portfolio-project__subtitle">Contribuciones Destacadas</h3>
                                <ul className="portfolio-project__list">
                                    {project.contributions.map((contrib, i) => (
                                        <li key={i} className="portfolio-project__list-item">
                                            <ArrowRight size={18} className="portfolio-project__list-icon" />
                                            <span className="portfolio-project__list-text">{contrib}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {project.works && (
                            <div className="portfolio-project__block">
                                <h3 className="portfolio-project__subtitle">Trabajos Realizados</h3>
                                <ul className="portfolio-project__list">
                                    {project.works.map((work, i) => (
                                        <li key={i} className="portfolio-project__list-item">
                                            <ArrowRight size={18} className="portfolio-project__list-icon" />
                                            <span className="portfolio-project__list-text">{work}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {project.technologies && (
                            <div className="portfolio-project__block">
                                <h3 className="portfolio-project__subtitle">Tecnologías Utilizadas</h3>
                                <div className="tag-list portfolio-project__tags">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="tag portfolio-project__tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {project.link && (
                            <div className="portfolio-project__block" style={{ marginTop: '0.5rem' }}>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary portfolio-project__link"
                                >
                                    Más información
                                    <ExternalLink size={16} />
                                </a>
                            </div>
                        )}
                    </Motion.div>
                </div>
            </div>
        </section>
    );
};

export const Portfolio = () => {
    const projects = [
        {
            title: 'Qatium',
            duration: '6 años',
            role: 'Investigadores, desarrolladores y un híbrido entre ingenieros de producto y programadores.',
            description: 'Hemos contribuido al desarrollo de esta innovadora plataforma de gestión inteligente del agua, combinando modelación hidráulica, programación avanzada y diseño de soluciones personalizadas para las necesidades de los clientes.',
            contributions: [
                'Modelación hidráulica utilizando herramientas como Epanet, EpanetJS y TypeScript.',
                'Construcción de gemelos digitales y creación de sinópticos personalizados.',
                'Gestión de sensórica y datos de telelectura.',
                'Desarrollo de modelos mediante inferencia, calibración y validación de datos.',
                'Visualización de resultados e inventario de activos (assets).',
                'Creación de conectores entre diferentes formatos y generación de modelos a partir de datos GIS.',
                'Investigación para mejorar la toolkit de Epanet.',
                'Implementación de sistemas de alerta temprana y desarrollo de plugins específicos según las necesidades de los clientes.'
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
            title: 'Water4Cast',
            subtitle: 'Plataforma Avanzada de Predicción y Gestión Hídrica',
            role: 'Desarrollo completo y exhaustivo de la aplicación web, abarcando tanto el frontend como el backend, la integración de datos y la interfaz de usuario.',
            description: [
                'Water4cast es una plataforma digital de vanguardia diseñada para la toma de decisiones informadas en la gestión de recursos hídricos. Su principal objetivo es consolidar y visualizar una amplia gama de predicciones y modelos predictivos en un entorno único y accesible.',
                'La plataforma integra de forma dinámica: Predicciones Meteorológicas (datos en tiempo real y a futuro sobre variables climáticas clave), Predicciones Ecohidrológicas (modelos que simulan el ciclo del agua), Predicciones Agronómicas (herramientas para optimizar el riego), Predicciones Medioambientales (evaluación del riesgo de sequía e inundaciones), y Gestión de Recursos Hídricos (módulos de apoyo para la planificación).',
                'La arquitectura de Water4cast está diseñada para manejar grandes volúmenes de datos geoespaciales y temporales, proporcionando a los usuarios una visión predictiva y operativa esencial para la resiliencia hídrica.'
            ],
            contributions: [
                'Creación de un Visor GIS Interactivo y Avanzado: Se implementó un potente visor de Sistemas de Información Geográfica (GIS) utilizando la tecnología OpenStreetMaps como base cartográfica.',
                'Desarrollo de un Sistema de Autenticación y Personalización de Usuario: Se diseñó e implementó un robusto sistema de login y gestión de perfiles.',
                'Funcionalidades de consulta de datos por punto geográfico, aplicación de filtros temporales y visualización de series históricas.',
                'Cada usuario tiene la capacidad de definir sus áreas de interés y estudio (cuencas, parcelas, puntos de control) y personalizar el panel de control.'
            ],
            technologies: [
                'HTML', 'CSS', 'TypeScript', 'OpenStreetMaps'
            ],
            link: 'https://water4cast.webs.upv.es',
            image: `${import.meta.env.BASE_URL}assets/water4cast.jpg`
        },
        {
            title: 'QGISRed',
            subtitle: 'Desarrollo de un Plugin para la Gestión Avanzada de Redes de Abastecimiento',
            role: 'Liderazgo en el desarrollo y la implementación de un plugin especializado para la plataforma de Sistemas de Información Geográfica (SIG) QGIS.',
            description: [
                'El proyecto QGISRed consiste en la creación de una herramienta de software robusta y altamente funcional integrada como un plugin de QGIS. Su objetivo primordial es transformar la forma en que los profesionales del sector hídrico abordan el modelado, el análisis y la planificación de redes de abastecimiento urbano.',
                'Este plugin está diseñado para ofrecer una interfaz intuitiva y potentes funcionalidades de geoprocesamiento que facilitan: Modelado Hidráulico Detallado (digitalización y estructuración precisa de la red), Análisis de Rendimiento y Vulnerabilidad (simulación de escenarios de demanda, cálculo de pérdidas de carga, determinación de presiones en puntos críticos).'
            ],
            technologies: [
                'C#', 'XAML', 'Python', 'QGIS'
            ],
            link: 'https://qgisred.upv.es',
            image: `${import.meta.env.BASE_URL}assets/qgisred.png`
        },
        {
            title: 'Aquatool',
            role: 'Desarrollo avanzado y mejora continua de módulos de cálculo hidráulico y de gestión, además de formación académica especializada a nivel internacional.',
            description: [
                'Nuestra participación en el proyecto Aquatool, una plataforma integral para la simulación y gestión de recursos hídricos, es fundamental. Colaboramos estrechamente con el equipo de desarrollo para la concepción, implementación y mejora continua. El objetivo es proporcionar herramientas de análisis robustas y precisas para profesionales en el sector de la ingeniería hidráulica y la planificación ambiental.'
            ],
            contributions: [
                'Desarrollo Avanzado de Herramientas de Modelización: Colaboramos en el desarrollo continuo de los módulos de cálculo de Aquatool, incluyendo las principales herramientas de simulación, además de otras herramientas secundarias clave como EvalHid, Caudeco, AqtPlayer, RREA y Mashwin.',
                'Formación y Transferencia de Conocimiento: Impartimos cursos internacionales especializados dirigidos a ingenieros, gestores y académicos, cubriendo desde el uso avanzado de los módulos SIMGES y GESCAL hasta los principios teóricos subyacentes en la modelización hidráulica y la gestión integrada de recursos hídricos (GIRH).'
            ],
            works: [
                'Junta Central (JC) de Usuarios del Alto Vinalopó: Modelación de alternativas para el suministro de caudal a los regantes de la JC, enmarcado dentro del Plan Hidrológico del Júcar.',
                'Regantes del Alto Vinalopó: Modelo de gestión incluyendo todos los acuíferos, enmarcado dentro del Plan Hidrológico del Júcar.',
                'Ministerio del Medio Ambiente de El Salvador: Curso online sobre el software.',
                'TYPSA: Calibración de modelos de calidad con diferentes contaminantes.'
            ],
            technologies: [
                'C#', 'VB.NET', 'Windows Forms', 'XAML', 'VBA', 'DotSpatial'
            ],
            link: 'https://aquatool.webs.upv.es',
            image: `${import.meta.env.BASE_URL}assets/aquatool.png`
        },
        {
            title: 'Aquarius',
            role: 'Investigador, desarrollador y un híbrido entre ingeniero de producto y programador.',
            description: [
                'Desarrollo de una suite de herramientas orientadas a integrar, limpiar, gestionar y exportar datos para el software AQUARIUS. Las soluciones están diseñadas para automatizar flujos de trabajo de campo y de control de calidad, garantizando trazabilidad y reversibilidad en todas las operaciones.'
            ],
            contributions: [
                'Importadores y Parsers: Desarrollo de conectores para archivos Kisters (AQ_Kisters) e importación masiva de localizaciones desde CSV con validaciones geográficas y de metadatos (AQ_CreateLocations).',
                'Gestión de Visitas: Herramientas para crear, actualizar, validar y eliminar visitas/inspecciones en lote, con soporte import/export y modo dry-run (AQ_Visits, AQ_DeleteVisits).',
                'Series Temporales: Modificación en lote de parámetros de series temporales con preview y opciones de rollback (AQ_CreateTimeSeriesData).',
                'Exportación y Reporting: Exportador de datos a formatos estándar (CSV/Excel) y generador automático de informes técnicos (PDF/HTML) a partir de ficheros de aforos con plantillas configurables (AQ_ExportData, AQ_Reports).',
                'Buenas Prácticas: Validaciones automáticas, auditoría y logs, modo simulación (dry-run), capacidad de rollback y arquitectura modular para integrarse en pipelines de datos.'
            ],
            technologies: [
                'C#', '.NET', 'CSV Parsing', 'AQUARIUS API/SDK', 'HTML/PDF Generation',
                'Excel Export', 'CLI Tools', 'Logging & Auditing'
            ],
            link: 'https://aquaticinformatics.com/products/aquarius-environmental-water-data-management/',
            image: `${import.meta.env.BASE_URL}assets/aquarius.png`
        }
    ];

    return (
        <>
            <PortfolioHero />
            {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
            ))}
        </>
    );
};
