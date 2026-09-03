import Reveal from '../shared/Reveal.jsx';
import { WhyIcon } from '../shared/Icons.jsx';
import { whyItems } from '../../data/siteContent.js';

export default function WhyChoose() {
  return (
    <section className="section why" id="por-que">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow light-eyebrow">¿Por qué GH Estilista?</div>
          <h2>Un espacio pensado para ti.</h2>
        </div>
        <Reveal className="why-grid stagger">
          {whyItems.map((item) => (
            <div className="why-item" key={item.title}>
              <div className="why-icon" aria-hidden="true"><WhyIcon type={item.icon} /></div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
