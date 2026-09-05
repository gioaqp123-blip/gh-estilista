import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import WhatsAppFab from './components/layout/WhatsAppFab.jsx';
import Hero from './components/sections/Hero.jsx';
import Services from './components/sections/Services.jsx';
import CtaBanner from './components/sections/CtaBanner.jsx';
import About from './components/sections/About.jsx';
import WhyChoose from './components/sections/WhyChoose.jsx';
import Testimonials from './components/sections/Testimonials.jsx';
import BookingSection from './components/booking/BookingSection.jsx';
import Contact from './components/sections/Contact.jsx';

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Saltar al contenido</a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <CtaBanner />
        <About />
        <WhyChoose />
        <Testimonials />
        <BookingSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
