'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NavBar() {
    const [open, setOpen] = useState(false);

    // Close menu on route change or ESC key
    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') setOpen(false); };
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    return (
        <nav className="navbar">
            {/* Logo */}
            <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <img
                    src="/img/GLORY NIGHTS LOGO.jpeg"
                    alt="Glory Nights"
                    className="navbar-logo-img"
                />
            </a>

            {/* Desktop links */}
            <div className="nav-links">
                <Link href="/conciertos">Conciertos</Link>
                <Link href="/artistas">Artistas</Link>
                <Link href="/venues">Espacios</Link>
                <Link href="/contact">Contacto</Link>
            </div>

            {/* Hamburger button (mobile only) */}
            <button
                className={`nav-hamburger${open ? ' is-open' : ''}`}
                aria-label="Abrir menú"
                aria-expanded={open}
                onClick={() => setOpen(!open)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Mobile overlay menu */}
            <div className={`nav-mobile-menu${open ? ' is-open' : ''}`} onClick={() => setOpen(false)}>
                <div className="nav-mobile-links" onClick={(e) => e.stopPropagation()}>
                    <Link href="/conciertos" onClick={() => setOpen(false)}>Conciertos</Link>
                    <Link href="/artistas" onClick={() => setOpen(false)}>Artistas</Link>
                    <Link href="/venues" onClick={() => setOpen(false)}>Espacios</Link>
                    <Link href="/contact" onClick={() => setOpen(false)}>Contacto</Link>
                </div>
            </div>
        </nav>
    );
}
