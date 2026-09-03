import { useState } from 'react';
import Reveal from '../shared/Reveal.jsx';
import ServiceCategoryCard from './ServiceCategoryCard.jsx';
import { serviceCategories, services } from '../../data/services.js';

export default function Services() {
  const [openCategoryId, setOpenCategoryId] = useState(null);

  const toggleCategory = (categoryId) => {
    setOpenCategoryId((currentId) => currentId === categoryId ? null : categoryId);
  };

  return (
    <section className="section services" id="servicios">
      <div className="wrap">
        <div className="section-head services-head">
          <div className="eyebrow">Nuestros servicios</div>
          <div className="services-heading-row">
            <h2>Cabello, piel y bienestar, en un mismo espacio.</h2>
            <p>Cuatro mundos, un mismo cuidado. Escríbele a Gabriela por WhatsApp y coordina tu hora según el servicio que necesites.</p>
          </div>
        </div>

        <Reveal className="services-grid stagger">
          {serviceCategories.map((group) => {
            const categoryServices = services.filter((service) => service.category === group.category);
            return (
              <ServiceCategoryCard
                group={group}
                categoryServices={categoryServices}
                isOpen={openCategoryId === group.id}
                onToggle={() => toggleCategory(group.id)}
                key={group.id}
              />
            );
          })}
        </Reveal>
        <div className="services-note-row">
          <p className="price-note">Valores destacados son precio fijo. El resto se confirma según diagnóstico, directo por WhatsApp.</p>
          <a className="text-link" href="#agenda">Agendar una hora <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  );
}
