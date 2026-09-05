import { useEffect, useState } from 'react';

export default function CountUp({ target, suffix = '' }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const duration = 1200;
    let frameId;
    let startTime;

    const finishImmediately = () => setValue(target);
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - ((1 - progress) ** 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) frameId = requestAnimationFrame(animate);
      else setValue(target);
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) finishImmediately();
    else frameId = requestAnimationFrame(animate);

    return () => { if (frameId) cancelAnimationFrame(frameId); };
  }, [target]);

  return <strong>{value}{suffix}</strong>;
}
