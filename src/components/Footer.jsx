import React from 'react';

export const Footer = () => (
    <footer className="footer">
        <div className="container footer-grid">
            <div className="footer-col">
                <p className="footer-brand">FLUIT</p>
                <p className="footer-tagline">Ingeniería que fluye</p>
                <p className="footer-subtag">Hidráulica · Software · IA</p>
                <p className="footer-location">Valencia, España</p>
            </div>
            <div className="footer-col">
                <p className="footer-col__heading">Contacto</p>
                <a href="mailto:info@fluit.es">info@fluit.es</a>
                <a href="https://www.linkedin.com/company/fluit-coop/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="footer-col">
                <p className="footer-col__heading">Legal</p>
                <p>© {new Date().getFullYear()} Fluit Coop. V.</p>
                <p>Cooperativa de Trabajo Asociado</p>
            </div>
        </div>
    </footer>
);
