import Reveal from '../shared/Reveal.jsx';
import { testimonials } from '../../data/siteContent.js';

function Stars() {
  return <div className="testi-stars" aria-hidden="true">{Array.from({ length: 5 }, (_, index) => <svg key={index} viewBox="0 0 20 20" fill="currentColor"><path d="M10 1.5l2.47 5.06 5.53.8-4 3.9.94 5.51L10 14.3l-4.94 2.47.94-5.51-4-3.9 5.53-.8L10 1.5z" /></svg>)}</div>;
}

export default function Testimonials() {
  return (
    <section className="section testi" id="opiniones">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Opiniones</div>
          <h2>Lo que dicen las clientas.</h2>
        </div>
      </div>
      <div className="wrap" style={{ padding: 0 }}>
        <Reveal className="testi-grid stagger">
          {testimonials.map((testimonial) => (
            <div className="testi-card" key={testimonial.name}>
              <Stars />
              <div className="quote-mark" aria-hidden="true">&quot;</div>
              <p>{testimonial.quote}</p>
              <div className="who">— {testimonial.name}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
