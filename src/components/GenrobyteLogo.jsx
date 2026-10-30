import React from 'react';
import { BRAND_CONFIG } from '../constants/branding';

/**
 * Brand mark component for GENTRO
 */
export default function GenrobyteLogo({ size = 'medium', className = '', style = {} }) {
  const dim = size === 'small' ? 32 : size === 'large' ? 48 : 38;

  return (
    <div
      className={`gentro-mark ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: `${dim}px`,
        height: `${dim}px`,
        borderRadius: '8px',
        background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.16) 0%, rgba(99, 102, 241, 0.22) 100%)',
        border: '1px solid rgba(34, 211, 238, 0.45)',
        boxShadow: '0 0 12px rgba(34, 211, 238, 0.25)',
        overflow: 'hidden',
        ...style
      }}
      title={BRAND_CONFIG.brandPrefix}
      aria-label={BRAND_CONFIG.brandPrefix}
    >
      <img
        src="/logo.png"
        alt={`${BRAND_CONFIG.brandPrefix} Logo`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          borderRadius: 'inherit',
          display: 'block'
        }}
      />
    </div>
  );
}
