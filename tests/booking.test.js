import test from 'node:test';
import assert from 'node:assert/strict';

import {
  CLOSED_DAYS,
  CLOSE_MIN,
  OPEN_MIN,
  generateSlots,
  minutesToTime,
  formatDateLong,
  toISODate,
} from '../src/components/booking/bookingUtils.js';

test('convierte fechas y minutos a formatos de interfaz', () => {
  assert.equal(toISODate(2026, 8, 3), '2026-09-03');
  assert.equal(minutesToTime(10 * 60), '10:00');
  assert.equal(minutesToTime(18 * 60 + 30), '18:30');
  assert.match(formatDateLong('2026-09-08'), /martes/i);
  assert.match(formatDateLong('2026-09-08'), /8/);
});

test('mantiene domingo y lunes bloqueados', () => {
  assert.deepEqual(CLOSED_DAYS, [0, 1]);
  assert.deepEqual(generateSlots({ date: '2026-09-06', duration: 60 }), []);
  assert.deepEqual(generateSlots({ date: '2026-09-07', duration: 60 }), []);
});

test('respeta la duración máxima dentro de la jornada', () => {
  const slots = generateSlots({ date: '2026-09-08', duration: 120 });

  assert.equal(slots[0].start, OPEN_MIN);
  assert.equal(slots.at(-1).start, CLOSE_MIN - 120);
  assert.ok(slots.every((slot) => slot.end <= CLOSE_MIN));
  assert.equal(slots.at(-1).end, CLOSE_MIN);
});

test('marca como solicitados los horarios guardados y conserva el resto', () => {
  const slots = generateSlots({
    date: '2026-09-08',
    duration: 60,
    requestedTimes: [600],
  });
  const requestedSlot = slots.find((slot) => slot.start === 600);
  const availableSlot = slots.find((slot) => slot.start === 630);

  assert.equal(requestedSlot?.requested, true);
  assert.equal(availableSlot?.requested, false);
});

test('excluye horarios demasiado próximos para el día actual', () => {
  const slots = generateSlots({
    date: '2026-09-08',
    duration: 60,
    now: new Date('2026-09-08T10:15:00'),
  });

  assert.equal(slots[0].start, 11 * 60);
});
