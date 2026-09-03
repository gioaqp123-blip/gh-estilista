import { useEffect, useRef, useState } from 'react';
import { navItems } from '../../data/siteContent.js';
import logo from '../../assets/logo.jpg';
import { InstagramIcon, WhatsAppIcon } from '../shared/Icons.jsx';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const firstLinkRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    firstLinkRef.current?.focus();
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) headerRef.current.style.padding = window.scrollY > 40 ? '14px 0' : '22px 0';
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header ref={headerRef}>
      <div className="wrap">
        <div className="brand"><img src={logo} alt="Logo GH Estilista" width="240" height="240" />GH <span>Estilista</span></div>
        <div className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
          <nav>
            <ul>
              {navItems.map((item, index) => (
                <li key={item.href}>
                  <a ref={index === 0 ? firstLinkRef : undefined} href={item.href} onClick={closeMenu}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a className="nav-cta" href="#agenda" style={{ marginTop: '24px' }} onClick={closeMenu}>Agenda tu hora</a>
        </div>
        <div className="header-actions">
          <a className="header-social" href="https://www.instagram.com/gh_estilista" target="_blank" rel="noopener" aria-label="Instagram de GH Estilista"><InstagramIcon /></a>
          <a className="header-social header-social-fb" href="https://www.facebook.com/profile.php?id=100057955255121" target="_blank" rel="noopener" aria-label="Facebook de GH Estilista">f</a>
          <button className="burger" id="burgerBtn" type="button" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} aria-controls="navLinks" onClick={() => setMenuOpen((open) => !open)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
