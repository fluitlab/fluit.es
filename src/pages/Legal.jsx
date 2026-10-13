import { useMeta } from '../hooks/useMeta';

const company = {
    name: 'FLUIT, COOP. V.',
    taxId: 'F93764868',
    address: 'Calle Echegaray, 11, 1.º, 46200 Paiporta (Valencia)',
    registry: 'Registro de Cooperativas de la Comunitat Valenciana, con el número CV-2855',
    email: 'info@fluit.es',
};

const LegalNotice = () => (
    <section id="aviso-legal" className="legal__section">
        <h2>Aviso legal</h2>
        <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de servicios de la sociedad de la
            información y de comercio electrónico (LSSI), se informa de los datos del titular de
            este sitio web:
        </p>
        <dl className="legal__facts">
            <dt>Titular</dt>
            <dd>{company.name}, cooperativa de trabajo asociado</dd>
            <dt>NIF</dt>
            <dd>{company.taxId}</dd>
            <dt>Domicilio social</dt>
            <dd>{company.address}</dd>
            <dt>Inscripción</dt>
            <dd>{company.registry}</dd>
            <dt>Contacto</dt>
            <dd><a href={`mailto:${company.email}`}>{company.email}</a></dd>
        </dl>
        <p>
            Los textos, imágenes, logotipos y el código de este sitio son propiedad de {company.name} o
            de sus respectivos titulares, y no pueden reproducirse sin autorización. Las marcas y
            logotipos de clientes y colaboradores se muestran solo para identificar los proyectos en
            los que hemos trabajado.
        </p>
        <p>
            Este sitio enlaza a webs de terceros sobre cuyo contenido no tenemos control ni
            responsabilidad.
        </p>
    </section>
);

const PrivacyPolicy = () => (
    <section id="privacidad" className="legal__section">
        <h2>Política de privacidad</h2>

        <h3>Responsable del tratamiento</h3>
        <p>
            {company.name}, con NIF {company.taxId} y domicilio en {company.address}. Puedes
            escribirnos a <a href={`mailto:${company.email}`}>{company.email}</a> para cualquier
            cuestión sobre tus datos.
        </p>

        <h3>Qué datos tratamos y para qué</h3>
        <p>
            Cuando nos escribes mediante el formulario de contacto o por email, tratamos tu nombre,
            tu dirección de correo y lo que nos cuentes en el mensaje, con el único fin de
            responderte y, si nos lo pides, preparar una propuesta.
        </p>

        <h3>Base legal</h3>
        <p>
            Tu consentimiento al enviarnos el mensaje y, cuando nos pides un presupuesto o servicio,
            la aplicación de medidas precontractuales a petición tuya (artículo 6.1, letras a y b,
            del Reglamento General de Protección de Datos).
        </p>

        <h3>Quién más accede a los datos</h3>
        <p>
            No cedemos tus datos a terceros. Para prestar el servicio usamos estos proveedores, que
            actúan como encargados del tratamiento:
        </p>
        <ul>
            <li>
                <strong>Formspree, Inc.</strong> (Estados Unidos), que recibe los mensajes del
                formulario y nos los reenvía. La transferencia internacional se ampara en las
                cláusulas contractuales tipo de la Comisión Europea.
            </li>
            <li>
                <strong>Cloudflare, Inc.</strong>, que aloja este sitio y nos da estadísticas de
                visitas agregadas, sin cookies y sin identificar a quien visita la web.
            </li>
        </ul>

        <h3>Cuánto tiempo los conservamos</h3>
        <p>
            Mientras gestionamos tu consulta y, si llegamos a colaborar, durante la relación y los
            plazos legales de prescripción que correspondan. Después los borramos.
        </p>

        <h3>Tus derechos</h3>
        <p>
            Puedes pedirnos el acceso, la rectificación, la supresión, la limitación o la
            portabilidad de tus datos, oponerte a su tratamiento o retirar tu consentimiento,
            escribiendo a <a href={`mailto:${company.email}`}>{company.email}</a>. Si crees que no
            hemos atendido bien tu solicitud, puedes reclamar ante la Agencia Española de
            Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">aepd.es</a>).
        </p>
    </section>
);

const CookiePolicy = () => (
    <section id="cookies" className="legal__section">
        <h2>Cookies</h2>
        <p>
            Este sitio no usa cookies propias ni de terceros. Las estadísticas de visitas de
            Cloudflare Web Analytics funcionan sin cookies y sin almacenar nada en tu navegador.
        </p>
    </section>
);

export const Legal = () => {
    useMeta('/legal');

    return (
        <>
            <header className="hero portfolio-hero">
                <div className="container">
                    <div className="hero-content portfolio-hero__content">
                        <h1 className="portfolio-hero__title">Aviso legal y privacidad</h1>
                    </div>
                </div>
            </header>
            <div className="container legal">
                <LegalNotice />
                <PrivacyPolicy />
                <CookiePolicy />
            </div>
        </>
    );
};
