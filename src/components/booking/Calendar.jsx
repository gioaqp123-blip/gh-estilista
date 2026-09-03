import { useState } from 'react';
import { CLOSED_DAYS, getLocalTodayString, toISODate } from './bookingUtils.js';

export default function Calendar({ selectedDate, onSelectDate }) {
  const [viewDate, setViewDate] = useState(() => new Date());
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const startWeekday = (firstDay.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  const todayString = getLocalTodayString(today);
  const currentMonth = year === today.getFullYear() && month === today.getMonth();

  const changeMonth = (offset) => {
    setViewDate(new Date(year, month + offset, 1));
  };

  return (
    <div className="calendar" id="calendar">
      <div className="calendar-head">
        <button type="button" className="cal-nav" aria-label="Mes anterior" disabled={currentMonth} onClick={() => changeMonth(-1)}>‹</button>
        <div className="cal-month" aria-live="polite">{firstDay.toLocaleDateString('es-CL', { month: 'long', year: 'numeric' })}</div>
        <button type="button" className="cal-nav" aria-label="Mes siguiente" onClick={() => changeMonth(1)}>›</button>
      </div>
      <div className="cal-weekdays" aria-hidden="true">
        <span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span><span>D</span>
      </div>
      <div className="cal-grid">
        {Array.from({ length: startWeekday }, (_, index) => <span className="cal-day empty" key={`empty-${index}`} />)}
        {Array.from({ length: daysInMonth }, (_, index) => {
          const day = index + 1;
          const date = new Date(year, month, day);
          const iso = toISODate(year, month, day);
          const disabled = iso < todayString || CLOSED_DAYS.includes(date.getDay());
          const selected = iso === selectedDate;
          return (
            <button
              type="button"
              className={`cal-day${selected ? ' selected' : ''}`}
              key={iso}
              disabled={disabled}
              aria-label={date.toLocaleDateString('es-CL', { weekday: 'long', day: 'numeric', month: 'long' })}
              aria-pressed={selected}
              onClick={() => onSelectDate(iso)}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
