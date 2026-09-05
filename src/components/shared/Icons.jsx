export function InstagramIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" /></svg>;
}

export function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" fill="none" strokeWidth="0"><path d="M17.6 6.32A7.85 7.85 0 0 0 12.02 4C7.66 4 4.1 7.56 4.1 11.92c0 1.4.37 2.76 1.06 3.96L4 20l4.24-1.11a7.9 7.9 0 0 0 3.77.96h.01c4.36 0 7.92-3.56 7.92-7.92a7.86 7.86 0 0 0-2.34-5.61Zm-5.58 12.2h-.01a6.55 6.55 0 0 1-3.34-.92l-.24-.14-2.51.66.67-2.45-.16-.25a6.56 6.56 0 0 1-1-3.5c0-3.63 2.96-6.58 6.6-6.58a6.55 6.55 0 0 1 6.58 6.59c0 3.63-2.96 6.59-6.59 6.59Zm3.6-4.94c-.2-.1-1.17-.58-1.35-.64-.18-.07-.31-.1-.45.1-.13.19-.51.64-.62.77-.11.13-.23.15-.42.05-.2-.1-.83-.31-1.58-.98-.58-.52-.98-1.16-1.09-1.35-.11-.2-.01-.3.09-.4.09-.09.2-.23.3-.35.1-.11.13-.19.2-.32.06-.13.03-.24-.02-.34-.05-.1-.45-1.08-.61-1.48-.16-.39-.33-.33-.45-.34h-.38c-.13 0-.34.05-.52.24-.18.19-.68.66-.68 1.62s.7 1.88.79 2.01c.1.13 1.37 2.09 3.32 2.93.46.2.83.32 1.11.41.47.15.89.13 1.23.08.37-.06 1.17-.48 1.34-.94.16-.46.16-.85.11-.94-.05-.09-.18-.14-.38-.24Z" fill="currentColor" /></svg>;
}

export function ServiceIcon({ type }) {
  const paths = {
    hair: <><path d="M5 8h18" /><path d="M6.5 8v11M10 8v11M13.5 8v11M17 8v11M20.5 8v11" /></>,
    skin: <><path d="M14 5c0 0-7 8.5-7 13.5a7 7 0 0 0 14 0C21 13.5 14 5 14 5Z" /></>,
    eyes: <><path d="M4 15c3-5 8-8 10-8s7 3 10 8c-3 5-8 8-10 8s-7-3-10-8Z" /><circle cx="14" cy="15" r="2.4" fill="currentColor" stroke="none" /><path d="M9 6.5 8 4M14 5.5V3M19 6.5l1-2.5" /></>,
    wellness: <><path d="M4 11c2-3 4-3 6 0s4 3 6 0 4-3 6 0" /><path d="M4 17c2-3 4-3 6 0s4 3 6 0 4-3 6 0" /></>,
  };

  return <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">{paths[type]}</svg>;
}

export function WhyIcon({ type }) {
  const paths = {
    heart: <path d="M14 23s-9-5.5-9-12a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.5-9 12-9 12Z" />,
    badge: <><circle cx="14" cy="10" r="6" /><path d="M10 15.5 8 23l6-3 6 3-2-7.5" /></>,
    spark: <><circle cx="14" cy="8.5" r="3" /><circle cx="14" cy="19.5" r="3" /><circle cx="8.5" cy="14" r="3" /><circle cx="19.5" cy="14" r="3" /><circle cx="14" cy="14" r="2.2" fill="currentColor" stroke="none" /></>,
    rings: <><circle cx="11" cy="14" r="7" /><circle cx="17" cy="14" r="7" /></>,
    pin: <><path d="M14 24s8-7.5 8-13a8 8 0 1 0-16 0c0 5.5 8 13 8 13Z" /><circle cx="14" cy="11" r="2.6" /></>,
  };

  return <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">{paths[type]}</svg>;
}
