import Reveal from '../shared/Reveal.jsx';
import { WhyIcon } from '../shared/Icons.jsx';
import { whyItems } from '../../data/siteContent.js';
import whyModel from '../../assets/why-model.png';

function WhyBlock({ item }) {
  return (
    <article className={`why-item${item.featured ? ' why-item-featured' : ''}`}>
      <div className="why-item-topline">
        <span className="why-index">{item.number}</span>
        <div className="why-icon" aria-hidden="true"><WhyIcon type={item.icon} /></div>
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </article>
  );
}

export default function WhyChoose() {
  const primaryItems = whyItems.filter((item) => item.group === 'primary');
  const secondaryItems = whyItems.filter((item) => item.group === 'secondary');

  return (
    <section className="section why" id="por-que">
      <div className="wrap">
        <div className="why-upper">
          <div className="section-head">
            <div className="eyebrow light-eyebrow">¿Por qué GH Estilista?</div>
            <h2>Un espacio pensado para ti.</h2>
          </div>
          <div className="why-editorial">
            <figure className="why-media" aria-hidden="true">
              <div className="why-media-backdrop" />
              <img
                className="why-model"
                src={whyModel}
                alt=""
                width="1000"
                height="1250"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 860px) 100vw, 42vw"
              />
            </figure>
            <Reveal className="why-primary-grid stagger">
              {primaryItems.map((item) => <WhyBlock item={item} key={item.id} />)}
            </Reveal>
          </div>
        </div>
        <Reveal className="why-secondary">
          {secondaryItems.map((item) => (
            <div className="why-secondary-item" key={item.id}>
              <WhyIcon type={item.icon} />
              <div><h3>{item.title}</h3><p>{item.description}</p></div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
