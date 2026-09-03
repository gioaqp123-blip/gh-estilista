import { navItems } from '../../data/siteContent.js';
import { InstagramIcon, WhatsAppIcon } from '../shared/Icons.jsx';
import BrandLogo from '../shared/BrandLogo.jsx';

export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-top">
        <div className="footer-brand"><BrandLogo className="footer-logo" variant="dark" /></div>
        <nav className="footer-nav">
          {navItems.filter((item) => item.href !== '#por-que').map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="footer-social">
          <a href="https://www.instagram.com/gh_estilista" target="_blank" rel="noopener" aria-label="Instagram"><InstagramIcon /></a>
          <a className="header-social-fb" href="https://www.facebook.com/profile.php?id=100057955255121" target="_blank" rel="noopener" aria-label="Facebook">f</a>
          <a href="https://wa.me/56953326815?text=Hola%20Gabriela%2C%20quiero%20agendar%20una%20hora" target="_blank" rel="noopener" aria-label="WhatsApp"><WhatsAppIcon /></a>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>© 2026 GH Estilista — Gabriela Henríquez Rebolledo</p>
        <p>Placilla, Valparaíso · Chile</p>
      </div>
    </footer>
  );
}
