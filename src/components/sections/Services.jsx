import Reveal from '../shared/Reveal.jsx';
import { ServiceIcon } from '../shared/Icons.jsx';
import { serviceCategories, services } from '../../data/services.js';

export default function Services() {
  const dotStyles = {
    cabello: { color: 'var(--gold)', '--dot-bg': 'rgba(201,161,90,0.14)' },
    piel: { color: 'var(--rose)', '--dot-bg': 'rgba(224,87,127,0.14)' },
    mirada: { color: 'var(--plum)', '--dot-bg': 'rgba(92,29,62,0.08)' },
    bienestar: { color: '#B8A99A', '--dot-bg': 'rgba(184,169,154,0.16)' },
  };

  return (
    <section className="section services" id="servicios">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow light-eyebrow">Nuestros servicios</div>
          <h2>Cabello, piel y bienestar, en un mismo espacio.</h2>
          <p>Cuatro mundos, un mismo cuidado. Escríbele a Gabriela por WhatsApp y coordina tu hora según el servicio que necesites.</p>
        </div>

        <Reveal className="chart stagger">
          {serviceCategories.map((group) => {
            const categoryServices = services.filter((service) => service.category === group.category);
            const items = [...new Set(categoryServices.flatMap((service) => service.items))];
            const descriptionService = group.descriptionServiceId && services.find((service) => service.id === group.descriptionServiceId);
            const detailServices = (group.detailServiceIds || []).map((serviceId) => services.find((service) => service.id === serviceId)).filter(Boolean);

            return (
            <div className="chart-cell" key={group.id}>
              <div className="dot" aria-hidden="true" style={dotStyles[group.id]}><ServiceIcon type={group.icon} /></div>
              <div className="code">{group.code}</div>
              <h3>{group.title}</h3>
              {descriptionService?.description && <p>{descriptionService.description}</p>}
              {items.length > 0 && (
                <ul className="service-list">
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
              {detailServices.map((service) => (
                <div className="service-sub" key={service.id}>
                  <div className="sub-title">{service.cardTitle || service.name}</div>
                  <p>{service.description}</p>
                  {service.priceLabel && <div className="service-price">{service.priceLabel} · {service.durationLabel}</div>}
                </div>
              ))}
            </div>
            );
          })}
        </Reveal>
        <p className="price-note">Valores destacados son precio fijo. El resto se confirma según diagnóstico, directo por WhatsApp.</p>
      </div>
    </section>
  );
}
