import { formatDateLong } from '../components/booking/bookingUtils.js';

export const WHATSAPP_NUMBER = '56953326815';

export function buildWhatsAppMessage({ service, date, startTime, name, phone, serviceLabel, dateLabel }) {
  const resolvedServiceLabel = service?.name || serviceLabel || '';
  const resolvedDateLabel = dateLabel || formatDateLong(date);

  return 'Hola Gabriela, quiero agendar hora:\n' +
    '- Servicio: ' + resolvedServiceLabel + '\n' +
    '- Fecha: ' + resolvedDateLabel + '\n' +
    '- Hora: ' + startTime + ' hrs\n' +
    '- Nombre: ' + name + '\n' +
    '- Teléfono: ' + phone;
}

export function buildWhatsAppUrl({ service, date, startTime, name, phone, serviceLabel, dateLabel }) {
  const message = buildWhatsAppMessage({ service, date, startTime, name, phone, serviceLabel, dateLabel });
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
