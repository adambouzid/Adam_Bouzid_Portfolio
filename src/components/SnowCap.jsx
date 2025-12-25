import React from 'react';

const SnowCap = ({ className = '' }) => (
  <div
    className={`pointer-events-none absolute -top-14 left-0 w-full h-20 overflow-hidden ${className}`}
    aria-hidden="true"
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1000 200"
      preserveAspectRatio="none"
      className="text-white drop-shadow-[0_12px_32px_rgba(255,255,255,0.35)]"
    >
      <path
        d="M0 150 C 80 110, 160 170, 240 140 C 320 110, 400 180, 480 140 C 560 100, 640 170, 720 130 C 800 90, 880 170, 960 130 L 1000 110 L 1000 250 L 0 250 Z"
        fill="currentColor"
      />
    </svg>
    <div className="absolute inset-x-0 top-8 h-12 bg-white/50 blur-3xl opacity-50" />
  </div>
);

export default SnowCap;
