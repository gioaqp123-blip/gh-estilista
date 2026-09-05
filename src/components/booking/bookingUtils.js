export const OPEN_MIN = 10 * 60;
export const CLOSE_MIN = 19 * 60;
export const SLOT_STEP = 30;
export const CLOSED_DAYS = [0, 1];
export const REQUESTED_KEY = 'gh_estilista_requested_slots';

export function toISODate(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

export function getLocalTodayString(date = new Date()) {
  return toISODate(date.getFullYear(), date.getMonth(), date.getDate());
}

export function minutesToTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;
  return `${String(hours).padStart(2, '0')}:${String(remainder).padStart(2, '0')}`;
}

export function formatDateLong(dateString) {
  try {
    return new Date(`${dateString}T00:00:00`).toLocaleDateString('es-CL', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    });
  } catch {
    return dateString;
  }
}

export function getRequestedSlots() {
  try {
    return JSON.parse(localStorage.getItem(REQUESTED_KEY) || '{}');
  } catch {
    return {};
  }
}

export function markRequestedSlot(date, start) {
  try {
    const requested = getRequestedSlots();
    requested[date] = requested[date] || [];
    if (!requested[date].includes(start)) requested[date].push(start);
    localStorage.setItem(REQUESTED_KEY, JSON.stringify(requested));
  } catch {
    // Remembering a local request is optional; WhatsApp remains the source of confirmation.
  }
}

export function generateSlots({ date, duration, now = new Date(), requestedTimes = [] }) {
  if (!date) return [];

  const day = new Date(`${date}T00:00:00`).getDay();
  if (CLOSED_DAYS.includes(day)) return [];

  const isToday = date === getLocalTodayString(now);
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const slots = [];

  for (let start = OPEN_MIN; start + duration <= CLOSE_MIN; start += SLOT_STEP) {
    if (isToday && start <= nowMinutes + 30) continue;
    slots.push({ start, end: start + duration, requested: requestedTimes.includes(start) });
  }

  return slots;
}
