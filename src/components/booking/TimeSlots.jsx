import { minutesToTime } from './bookingUtils.js';

export default function TimeSlots({ slots, selectedSlot, onSelect }) {
  if (!slots.length) return null;

  return (
    <div className="slot-grid">
      {slots.map((slot) => {
        const selected = selectedSlot?.start === slot.start;
        return (
          <button
            type="button"
            className={`slot-btn${selected ? ' active' : ''}${slot.requested ? ' requested' : ''}`}
            key={slot.start}
            aria-pressed={selected}
            disabled={slot.requested}
            title={slot.requested ? 'Ya solicitaste este horario' : undefined}
            onClick={() => onSelect(slot)}
          >
            {minutesToTime(slot.start)}
          </button>
        );
      })}
    </div>
  );
}
