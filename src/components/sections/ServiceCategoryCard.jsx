import { ServiceIcon } from '../shared/Icons.jsx';
import hairColorImage from '../../assets/services/hair-color.jpg';
import facialCareImage from '../../assets/services/facial-care.jpg';
import eyeLashImage from '../../assets/services/eye-lash.jpg';
import headSpaImage from '../../assets/services/head-spa.jpg';

const categoryImages = {
  'hair-color': hairColorImage,
  'facial-care': facialCareImage,
  'eye-lash': eyeLashImage,
  'head-spa': headSpaImage,
};

function getPreview(categoryServices) {
  const items = [...new Set(categoryServices.flatMap((service) => service.items))];
  const summary = items.length
    ? items.slice(0, 3).join(' · ')
    : categoryServices.map((service) => service.name).join(' · ');

  return summary.length > 130 ? `${summary.slice(0, 127).trim()}…` : summary;
}

function ServiceDetail({ service }) {
  return (
    <div className="service-detail">
      <div className="service-detail-heading">
        <h4>{service.cardTitle || service.name}</h4>
        <span>{service.infoDetail}</span>
      </div>
      {service.description && <p>{service.description}</p>}
      {service.items.length > 0 && (
        <ul>
          {service.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      )}
    </div>
  );
}

export default function ServiceCategoryCard({ group, categoryServices, isOpen, onToggle }) {
  const panelId = `service-panel-${group.id}`;

  return (
    <article className={`service-card${isOpen ? ' is-open' : ''}`}>
      <div className="service-card-media">
        <img
          src={categoryImages[group.image]}
          alt={group.imageAlt}
          width="720"
          height="900"
          loading="lazy"
          decoding="async"
        />
        <span className="service-card-number" aria-hidden="true">{group.code.slice(0, 2)}</span>
      </div>
      <div className="service-card-content">
        <div className="service-card-code">{group.code}</div>
        <div className="service-card-title-row">
          <h3>{group.title}</h3>
          <span className="service-card-icon" aria-hidden="true"><ServiceIcon type={group.icon} /></span>
        </div>
        <p className="service-card-preview">{getPreview(categoryServices)}</p>
        <button
          type="button"
          className="service-toggle"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span>{isOpen ? 'Ocultar servicios' : 'Ver servicios'}</span>
          <span className="service-toggle-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
        </button>
        <div className="service-details" id={panelId} hidden={!isOpen}>
          {categoryServices.map((service) => <ServiceDetail service={service} key={service.id} />)}
        </div>
      </div>
    </article>
  );
}
