import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import './styles/global.css';
import './styles/header.css';
import './styles/hero.css';
import './styles/section-head.css';
import './styles/services.css';
import './styles/cta-banner.css';
import './styles/about.css';
import './styles/why.css';
import './styles/testimonials.css';
import './styles/booking.css';
import './styles/contact.css';
import './styles/footer.css';
import './styles/whatsapp.css';
import './styles/reveal.css';
import './styles/responsive.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
