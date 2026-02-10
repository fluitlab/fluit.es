import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SCROLL_DELAY_MS = 50;
const SCROLL_MAX_RETRIES = 20;

function scrollToSection(id) {
    const tryScroll = (retries = 0) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
        }
        if (retries < SCROLL_MAX_RETRIES) {
            setTimeout(() => tryScroll(retries + 1), SCROLL_DELAY_MS);
        }
    };
    requestAnimationFrame(() => setTimeout(() => tryScroll(), 0));
}

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Nosotros', href: '/#identity' },
        { name: 'Servicios', href: '/#services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Equipo', href: '/#team' },
        { name: 'Contacto', href: '/#contact' },
    ];

    useEffect(() => {
        const hash = window.location.hash;
        if (!hash || location.pathname !== '/') return;
        const id = hash.slice(1);
        if (!id) return;
        const tryScroll = (retries = 0) => {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return;
            }
            if (retries < SCROLL_MAX_RETRIES) {
                setTimeout(() => tryScroll(retries + 1), SCROLL_DELAY_MS);
            }
        };
        const t = setTimeout(() => tryScroll(), 150);
        return () => clearTimeout(t);
    }, [location.pathname, location.hash]);

    const handleNavClick = useCallback((e, href) => {
        setMobileMenuOpen(false);
        if (href === '/') {
            e.preventDefault();
            if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                navigate('/');
            }
            return;
        }
        if (!href.startsWith('/#')) return;
        const id = href.replace(/^\/#/, '');
        if (location.pathname === '/') {
            e.preventDefault();
            window.history.replaceState(null, '', `/#${id}`);
            scrollToSection(id);
        } else {
            navigate(`/#${id}`);
        }
    }, [location.pathname, navigate]);

    return (
        <nav className={`nav-wrapper ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <Link to="/" className="navbar-logo animate-draw" aria-label="Fluit - Inicio">
                    <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 304.64 214.94">
                        <g>
                            <path d="M58.23,3.36v27.16c2.22,3.21,3.52,7.11,3.52,11.3v109.42h21.88V41.82c0-17.24-10.48-32.07-25.41-38.46Z" />
                            <polygon points="232.92 36.35 232.92 30.88 211.04 30.88 211.04 36.35 211.04 47.29 232.92 47.29 232.92 36.35" />
                            <path d="M21.88,63.7v-21.88c0-10.99,8.94-19.94,19.93-19.94V0C18.76,0,0,18.76,0,41.82v142.24h21.88v-27.35h0v-5.47h0v-71.12h19.94v-16.41h-19.94Z" />
                            <polygon points="294.68 47.29 294.68 36.35 294.68 30.88 272.79 30.88 272.79 36.35 272.79 47.29 252.86 47.29 252.86 58.23 252.86 63.7 272.79 63.7 272.79 85.59 272.79 107.47 272.79 129.35 272.79 151.23 294.68 151.23 294.68 129.35 294.68 107.47 294.68 85.59 294.68 63.7 304.64 63.7 304.64 58.23 304.64 47.29 294.68 47.29" />
                            <path d="M272.79,167.65v5.47c0,10.99-8.94,19.94-19.94,19.94s-19.94-8.94-19.94-19.94v-5.47h0s-21.88,0-21.88,0h0v5.47c0,23.06,18.76,41.82,41.82,41.82s41.82-18.76,41.82-41.82v-5.47h0s-21.88,0-21.88,0h0Z" />
                            <polygon points="232.92 129.35 232.92 107.47 232.92 85.59 232.92 63.7 211.04 63.7 211.04 85.59 211.04 107.47 211.04 129.35 211.04 151.23 232.92 151.23 232.92 129.35" />
                            <path d="M167.27,63.7v45.71c0,10.99-8.94,19.94-19.94,19.94s-19.94-8.94-19.94-19.94v-45.71h-21.88v45.71c0,23.06,18.76,41.82,41.82,41.82s41.82-18.76,41.82-41.82v-45.71h-21.88Z" />
                        </g>
                    </svg>
                </Link>

                <div className="nav-links">
                    {navLinks.map(link => (
                        <Link key={link.name} to={link.href} onClick={(e) => handleNavClick(e, link.href)}>{link.name}</Link>
                    ))}
                </div>

                <button
                    className="mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <Motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        className="mobile-drawer"
                    >
                        <nav className="mobile-nav-links">
                            {navLinks.map(link => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </Motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
