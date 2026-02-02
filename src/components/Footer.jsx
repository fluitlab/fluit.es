import React from 'react';

export const Footer = () => (
    <footer className="footer">
        <div className="container footer-inner">
            <div>
                <p style={{ margin: '0.25rem 0 0', fontSize: 'inherit', color: 'inherit' }}>Modelación Hidráulica & Innovación Tecnológica</p>
            </div>
            <p style={{ margin: 0 }}>© {new Date().getFullYear()} Fluit</p>
        </div>
    </footer>
);
