import Reveal from '../shared/Reveal.jsx';
import { WhyIcon } from '../shared/Icons.jsx';
import { whyItems } from '../../data/siteContent.js';

const primaryTitles = [
  'Experiencia y especialización',
  'Belleza + bienestar',
  'Atención personalizada',
];

const secondaryTitles = [
  'Atención unisex',
  'Un espacio pensado para ti',
];

function WhyBlock({ item, featured = false }) {
  return (
    <article className={`why-item${featured ? ' why-item-featured' : ''}`}>
      <div className="why-item-topline">
        <span className="why-index">{featured ? '03' : item.title.startsWith('Experiencia') ? '01' : '02'}</span>
        <div className="why-icon" aria-hidden="true"><WhyIcon type={item.icon} /></div>
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </article>
  );
}

export default function WhyChoose() {
  const primaryItems = primaryTitles.map((title) => whyItems.find((item) => item.title === title)).filter(Boolean);
  const secondaryItems = secondaryTitles.map((title) => whyItems.find((item) => item.title === title)).filter(Boolean);

  return (
    <section className="section why" id="por-que">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow light-eyebrow">¿Por qué GH Estilista?</div>
          <h2>Un espacio pensado para ti.</h2>
        </div>
        <Reveal className="why-grid stagger">
          {primaryItems.map((item, index) => <WhyBlock item={item} featured={index === 2} key={item.title} />)}
        </Reveal>
        <Reveal className="why-secondary">
          {secondaryItems.map((item) => (
            <div className="why-secondary-item" key={item.title}>
              <WhyIcon type={item.icon} />
              <div><h3>{item.title}</h3><p>{item.description}</p></div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
