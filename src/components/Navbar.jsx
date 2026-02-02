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
        { name: 'Inicio', href: '/' },
        { name: 'Servicios', href: '/#services' },
        { name: 'Portfolio', href: '/#portfolio' },
        { name: 'Nosotros', href: '/#team' },
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
        if (href === '/' || href === '/#home') {
            if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
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
                <Link to="/" className="navbar-logo-text" aria-label="Fluit - Inicio">
                    FLUIT
                </Link>

                <div className="nav-links">
                    {navLinks.map(link => (
                        <Link key={link.name} to={link.href} onClick={(e) => handleNavClick(e, link.href)}>{link.name}</Link>
                    ))}
                    <Link
                        to="/#contact"
                        className="btn btn-primary"
                        style={{ padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}
                        onClick={(e) => handleNavClick(e, '/#contact')}
                    >
                        Hablemos
                    </Link>
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
                            <Link
                                to="/#contact"
                                onClick={(e) => handleNavClick(e, '/#contact')}
                                className="btn btn-primary"
                            >
                                Hablemos
                            </Link>
                        </nav>
                    </Motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
