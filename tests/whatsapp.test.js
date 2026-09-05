import test from 'node:test';
import assert from 'node:assert/strict';

import { buildWhatsAppMessage, buildWhatsAppUrl, WHATSAPP_NUMBER } from '../src/lib/whatsapp.js';

const booking = {
  service: { name: 'Cuidado facial' },
  date: '2026-09-08',
  startTime: '10:30',
  name: 'Ana Pérez',
  phone: '+56 9 1234 5678',
};

test('construye el mensaje actual con todos los datos de reserva', () => {
  const message = buildWhatsAppMessage(booking);

  assert.match(message, /Hola Gabriela, quiero agendar hora:/);
  assert.match(message, /Servicio: Cuidado facial/);
  assert.match(message, /Fecha: martes, 8 de septiembre/i);
  assert.match(message, /Hora: 10:30 hrs/);
  assert.match(message, /Nombre: Ana Pérez/);
  assert.match(message, /Teléfono: \+56 9 1234 5678/);
});

test('codifica el mensaje en la URL de WhatsApp', () => {
  const url = buildWhatsAppUrl(booking);
  const encodedMessage = url.split('?text=')[1];

  assert.equal(url.startsWith(`https://wa.me/${WHATSAPP_NUMBER}?text=`), true);
  assert.match(decodeURIComponent(encodedMessage), /Ana Pérez/);
  assert.match(decodeURIComponent(encodedMessage), /Cuidado facial/);
});
