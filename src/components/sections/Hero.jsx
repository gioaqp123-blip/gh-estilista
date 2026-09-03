import heroModel from '../../assets/hero/hero-model.png';
import heroModelMobile from '../../assets/hero/hero-model-mobile.png';

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-layout">
          <div className="hero-copy">
            <div className="eyebrow">Centro integral de belleza y bienestar unisex</div>
            <h1>Un espacio para <em>cuidarte</em>, de pies a cabeza.</h1>
            <p className="lead">Peluquería y color, cuidado facial, pestañas y spa capilar en Placilla — todo pensado para que te regales un momento para ti. Con Gabriela Henríquez, estilista y colorista certificada.</p>
            <div className="hero-ctas">
              <a className="btn-primary" href="https://wa.me/56953326815?text=Hola%20Gabriela%2C%20quiero%20agendar%20una%20hora" target="_blank" rel="noopener">Agenda tu hora →</a>
              <a className="btn-ghost" href="#servicios">Ver servicios</a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Modelo editorial con cabello castaño y reflejos cobrizos">
            <div className="hero-visual-frame">
              <picture className="hero-visual-picture">
                <source media="(max-width: 860px)" srcSet={heroModelMobile} />
                <img src={heroModel} alt="Modelo con cabello castaño, ondas voluminosas y reflejos cobrizos" width="896" height="1120" loading="eager" fetchPriority="high" decoding="async" sizes="(max-width: 860px) 100vw, 61vw" />
              </picture>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll"><div className="line" />Desliza</div>
    </section>
  );
}
