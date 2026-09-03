import Reveal from '../shared/Reveal.jsx';
import CountUp from '../shared/CountUp.jsx';
import aboutMain from '../../assets/about/about-main.jpg';
import aboutAccent from '../../assets/about/about-accent.jpg';

export default function About() {
  return (
    <section className="section about" id="sobre-mi">
      <div className="wrap">
        <Reveal className="about-frame">
          <div className="about-photo-mask"><img className="about-photo" src={aboutMain} alt="Gabriela Henríquez, estilista y colorista de GH Estilista" loading="lazy" width="900" height="882" /></div>
          <img className="about-photo-accent" src={aboutAccent} alt="Gabriela Henríquez sonriendo al aire libre" loading="lazy" width="560" height="628" />
          <div className="tag">Gabriela Henríquez · GH Estilista</div>
        </Reveal>
        <Reveal className="about-copy">
          <div className="greeting">Hola, soy Gabriela</div>
          <h2>Estilista y colorista certificada desde 2013.</h2>
          <p>Apasionada por el mundo de la belleza y el cuidado personal. En GH Estilista busco crear un espacio donde cada persona pueda sentirse cómoda, escuchada y acompañada en su proceso de transformación y cuidado.</p>
          <p>Mi objetivo es que cada visita no sea solamente un servicio, sino también un momento para ti.</p>
          <div className="about-stats">
            <div><CountUp target={1200} suffix="+" /><span>Clientas atendidas</span></div>
            <div><CountUp target={2013} /><span>Colorista certificada</span></div>
            <div><strong>Todo</strong><span>Medio de pago</span></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
