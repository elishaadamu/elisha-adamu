'use client';

import { useState, useEffect } from 'react';

const words = [
  'Designs',
  'Websites',
  'Web Apps',
  'Mobile Apps',
  'Systems',
];

export default function RotatingHeadline() {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setIsFading(false);
      }, 300);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block relative">
      <span
        className={`inline-block transition-all duration-300 font-extrabold text-[#84cc16] dark:text-[#a3e635] drop-shadow-[0_0_25px_rgba(163,230,53,0.65)] ${
          isFading
            ? 'opacity-0 transform -translate-y-2'
            : 'opacity-100 transform translate-y-0'
        }`}
      >
        {words[index]}
      </span>
    </span>
  );
}
