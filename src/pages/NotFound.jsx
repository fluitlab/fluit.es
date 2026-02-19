import React from 'react';
import { useMeta } from '../hooks/useMeta';
import { motion as Motion } from 'framer-motion';
import { Home as HomeIcon, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    useMeta({ title: '404 — Fluit', robots: 'noindex' });

    return (
        <div style={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <Motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{ maxWidth: '500px' }}
            >
                <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'rgba(0, 140, 155, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 2rem',
                    color: 'var(--teal)'
                }}>
                    <AlertCircle size={40} />
                </div>

                <h1 style={{ fontSize: '6rem', margin: 0, lineHeight: 1, color: 'var(--text-main)' }}>404</h1>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--teal)' }}>Gota extraviada</h2>

                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
                    Lo sentimos, la página que buscas no existe o ha sido movida a otra cuenca.
                </p>

                <Link to="/" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
                    <HomeIcon size={18} />
                    Volver al Inicio
                </Link>
            </Motion.div>
        </div>
    );
};
