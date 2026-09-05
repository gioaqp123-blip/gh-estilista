import { useEffect, useRef, useState } from 'react';
import { navItems } from '../../data/siteContent.js';
import { InstagramIcon } from '../shared/Icons.jsx';
import BrandLogo from '../shared/BrandLogo.jsx';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(navItems[0].href);
  const firstLinkRef = useRef(null);

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
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);
    if (!('IntersectionObserver' in window) || !sections.length) return undefined;

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActiveHref(`#${visible[0].target.id}`);
    }, { rootMargin: '-35% 0px -55% 0px', threshold: [0.1, 0.35, 0.6] });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const handleNavClick = (href) => {
    setActiveHref(href);
    closeMenu();
  };

  return (
    <header className={scrolled ? 'is-scrolled' : ''}>
      <div className="wrap">
        <div className="brand"><BrandLogo className="brand-logo" variant="light" /></div>
        <div className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
          <nav>
            <ul>
              {navItems.map((item, index) => (
                <li key={item.href}>
                  <a
                    ref={index === 0 ? firstLinkRef : undefined}
                    className={activeHref === item.href ? 'active' : ''}
                    href={item.href}
                    aria-current={activeHref === item.href ? 'location' : undefined}
                    onClick={() => handleNavClick(item.href)}
                  >{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a className="nav-cta" href="#agenda" onClick={() => handleNavClick('#agenda')}>Agenda tu hora</a>
        </div>
        {menuOpen && <button type="button" className="nav-scrim" aria-label="Cerrar menú" onClick={closeMenu} />}
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
