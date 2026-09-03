import Reveal from '../shared/Reveal.jsx';
import aboutMain from '../../assets/about-main.jpg';

export default function CtaBanner() {
  return (
    <Reveal as="section" className="cta-banner">
      <img className="cta-bg" src={aboutMain} alt="" aria-hidden="true" loading="lazy" width="900" height="882" />
      <div className="wrap">
        <div className="eyebrow">Reserva en un mensaje</div>
        <h2>¿Lista para tu momento de cuidado?</h2>
        <p>Cuéntale a Gabriela qué servicio buscas y coordina tu hora directo por WhatsApp.</p>
        <a className="btn-primary btn-huge" href="https://wa.me/56953326815?text=Hola%20Gabriela%2C%20quiero%20agendar%20una%20hora" target="_blank" rel="noopener">Agenda tu hora →</a>
      </div>
    </Reveal>
  );
}
