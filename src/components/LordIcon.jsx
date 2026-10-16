import React from 'react';

/**
 * LordIcon - High quality animated vector icon wrapper using official Lordicon player
 * Supports hover triggers, continuous loop, and brand-aligned colors.
 */
export default function LordIcon({
  src,
  trigger = 'hover',
  size = 64,
  colors = 'primary:#a33817,secondary:#111827',
  delay = '1500',
  className = '',
  style = {},
  fallback = null,
}) {
  return (
    <div
      className={`lordicon-wrapper ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: `${size}px`,
        height: `${size}px`,
        ...style,
      }}
    >
      {React.createElement('lord-icon', {
        src,
        trigger,
        delay,
        colors,
        style: {
          width: `${size}px`,
          height: `${size}px`,
        },
      })}
      {fallback && <div className="lordicon-fallback">{fallback}</div>}
    </div>
  );
}

