import React from 'react';

const moundShapes = [
  { width: '28%', height: '65%', left: '3%', opacity: 0.95 },
  { width: '22%', height: '55%', left: '25%', opacity: 0.9 },
  { width: '32%', height: '70%', left: '45%', opacity: 0.97 },
  { width: '26%', height: '60%', left: '68%', opacity: 0.92 },
  { width: '20%', height: '50%', left: '82%', opacity: 0.88 },
];

const SnowCap = ({ className = '' }) => (
  <div
    className={`pointer-events-none absolute -top-10 left-0 w-full h-16 ${className}`}
    aria-hidden="true"
  >
    <div className="absolute inset-x-0 top-6 h-10 rounded-full bg-gradient-to-b from-white/90 via-white/75 to-transparent blur-2xl opacity-90" />
    {moundShapes.map((shape, index) => (
      <div
        key={`snow-mound-${index}`}
        className="absolute bottom-0 bg-white rounded-full shadow-lg shadow-white/70"
        style={{
          width: shape.width,
          height: shape.height,
          left: shape.left,
          opacity: shape.opacity,
        }}
      />
    ))}
  </div>
);

export default SnowCap;
