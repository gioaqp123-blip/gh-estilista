import Reveal from '../shared/Reveal.jsx';
import { testimonials } from '../../data/siteContent.js';

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
          {testimonials.map((testimonial, index) => (
            <article className={`testi-card${index === 1 ? ' testi-card-main' : ''}`} key={testimonial.name}>
              <div className="testi-count">0{index + 1} / 03</div>
              <div className="quote-mark" aria-hidden="true">“</div>
              <p>{testimonial.quote}</p>
              <div className="who">— {testimonial.name}</div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
