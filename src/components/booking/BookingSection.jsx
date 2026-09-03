import { useMemo, useState } from 'react';
import Reveal from '../shared/Reveal.jsx';
import { services } from '../../data/services.js';
import { buildWhatsAppUrl } from '../../lib/whatsapp.js';
import Calendar from './Calendar.jsx';
import TimeSlots from './TimeSlots.jsx';
import { CLOSED_DAYS, formatDateLong, generateSlots, getRequestedSlots, markRequestedSlot, minutesToTime } from './bookingUtils.js';

export default function BookingSection() {
  const [serviceId, setServiceId] = useState(services[0].id);
  const [date, setDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });
  const [fallbackUrl, setFallbackUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const now = useMemo(() => new Date(), []);
  const selectedService = services.find((service) => service.id === serviceId) || services[0];
  const requestedTimes = date ? (getRequestedSlots()[date] || []) : [];
  const slots = generateSlots({ date, duration: selectedService.duration, now, requestedTimes });
  const closedDate = date && CLOSED_DAYS.includes(new Date(`${date}T00:00:00`).getDay());

  const resetSelection = () => {
    setSelectedSlot(null);
    setSubmitted(false);
    setMessage({ text: '', type: '' });
    setFallbackUrl('');
  };

  const handleServiceChange = (event) => {
    setServiceId(event.target.value);
    resetSelection();
  };

  const handleDateChange = (nextDate) => {
    setDate(nextDate);
    resetSelection();
  };

  const handleConfirm = () => {
    if (!date || !selectedSlot) return;

    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const phoneDigits = trimmedPhone.replace(/\D/g, '');

    if (!trimmedName) {
      setMessage({ text: 'Ingresa tu nombre.', type: 'err' });
      return;
    }
    if (phoneDigits.length < 8) {
      setMessage({ text: 'Ingresa un teléfono válido, con código de área.', type: 'err' });
      return;
    }

    const url = buildWhatsAppUrl({
      service: selectedService,
      date,
      startTime: minutesToTime(selectedSlot.start),
      name: trimmedName,
      phone: trimmedPhone,
    });

    const whatsappWindow = window.open('about:blank', '_blank');
    markRequestedSlot(date, selectedSlot.start);
    setSubmitted(true);
    setMessage({ text: whatsappWindow ? '¡Listo! Te llevamos a WhatsApp para confirmar tu hora con Gabriela.' : 'Toca el botón para abrir WhatsApp y confirmar tu hora con Gabriela.', type: 'ok' });

    if (whatsappWindow) {
      whatsappWindow.location.href = url;
    } else {
      setFallbackUrl(url);
    }
  };

  const slotHint = !date
    ? 'Elige una fecha para ver los horarios disponibles.'
    : closedDate
      ? 'Cerrado ese día — atendemos de martes a sábado.'
    : slots.length
      ? 'Elige tu horario preferido — se confirma por WhatsApp con Gabriela:'
      : 'No hay horarios disponibles ese día para este servicio.';

  return (
    <section className="section booking" id="agenda">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Agenda</div>
          <h2>Reserva tu hora en línea.</h2>
          <p>Elige el servicio y la fecha, escoge tu horario preferido y te llevamos directo a WhatsApp para confirmar con Gabriela — así ninguna hora se cruza con otra clienta.</p>
        </div>

        <Reveal className="booking-panel">
          <div className="booking-info">
            <h3>Horario de atención</h3>
            <p>Martes a sábado, 10:00 a 19:00 hrs. Cerrado domingo y lunes.</p>
            <ul>
              {services.map((service) => <li key={service.id}><span>{service.infoLabel}</span><span>{service.infoDetail}</span></li>)}
            </ul>
            <p style={{ marginTop: '22px', marginBottom: 0 }}>¿Prefieres coordinar directo? Escribe por <a href="https://wa.me/56953326815" target="_blank" rel="noopener" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>WhatsApp</a>.</p>
          </div>

          <div className="booking-form">
            <label htmlFor="svcSelect">Servicio
              <select id="svcSelect" value={serviceId} onChange={handleServiceChange}>
                {services.map((service) => <option value={service.id} key={service.id}>{service.bookingLabel}</option>)}
              </select>
            </label>

            <div>
              <div className="field-label">Fecha</div>
              <Calendar selectedDate={date} onSelectDate={handleDateChange} />
              <input type="hidden" id="dateInput" value={date} readOnly />
            </div>

            <div>
              <p className="slot-hint" aria-live="polite">{slotHint}</p>
              <TimeSlots slots={slots} selectedSlot={selectedSlot} onSelect={setSelectedSlot} />
            </div>

            {selectedSlot && (
              <p className="booking-summary" aria-live="polite">
                {selectedService.name} · {formatDateLong(date)}, {minutesToTime(selectedSlot.start)} hrs.
              </p>
            )}

            <label htmlFor="nameInput">Nombre
              <input type="text" id="nameInput" placeholder="Tu nombre" autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <label htmlFor="phoneInput">Teléfono / WhatsApp
              <input type="tel" id="phoneInput" placeholder="+56 9 1234 5678" autoComplete="tel" inputMode="tel" pattern="[+0-9\s()-]{8,20}" value={phone} onChange={(event) => setPhone(event.target.value)} />
            </label>

            <button type="button" id="confirmBtn" className="btn-primary" disabled={!selectedSlot || submitted} onClick={handleConfirm}>{submitted ? 'Solicitud enviada ✓' : 'Confirmar reserva'}</button>
            <p className={`booking-msg${message.type ? ` ${message.type}` : ''}`} aria-live="polite">{message.text}</p>
            {fallbackUrl && <a className="btn-primary" href={fallbackUrl} target="_blank" rel="noopener" style={{ marginTop: '4px' }}>Abrir WhatsApp →</a>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
