import Reveal from '../shared/Reveal.jsx';

export default function Contact() {
  return (
    <section className="section contact">
      <div className="wrap">
        <div>
          <div className="eyebrow">Reserva tu hora</div>
          <h2>Escríbele a Gabriela y agenda tu momento.</h2>
          <p>Respuesta directa por WhatsApp. Cuéntale qué servicio buscas y te confirma disponibilidad.</p>
          <Reveal className="map-embed">
            <iframe src="https://www.google.com/maps?q=Calle+El+Sauce+311,+Local+5,+Placilla,+Valpara%C3%ADso,+Chile&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación de GH Estilista" />
          </Reveal>
          <a className="map-link" href="https://www.google.com/maps/dir/?api=1&destination=Calle+El+Sauce+311+Local+5+Placilla+Valpara%C3%ADso+Chile" target="_blank" rel="noopener">Cómo llegar →</a>
        </div>
        <Reveal className="contact-card">
          <div className="contact-row"><span className="label">Estilista</span><span className="value">Gabriela Henríquez</span></div>
          <div className="contact-row"><span className="label">Dirección</span><span className="value">Calle El Sauce #311, Local 5, Placilla, Valparaíso</span></div>
          <div className="contact-row"><span className="label">WhatsApp</span><span className="value">+56 9 5332 6815</span></div>
          <div className="contact-row"><span className="label">Instagram</span><span className="value">@gh_estilista</span></div>
          <div className="contact-row"><span className="label">Pago</span><span className="value">Todo medio de pago</span></div>
          <a className="btn-primary" href="https://wa.me/56953326815?text=Hola%20Gabriela%2C%20quiero%20agendar%20una%20hora" target="_blank" rel="noopener">Agenda tu hora →</a>
        </Reveal>
      </div>
    </section>
  );
}
