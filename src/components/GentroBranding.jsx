import React from 'react';
import { BRAND_CONFIG } from '../constants/branding';

/**
 * GentroBranding Component
 *
 * Implements the approved text-based GENTRO brand identity and product descriptor.
 * Follows Phase 2 guidelines:
 * - Brand prefix: GENTRO (Never Zentro)
 * - Clean text-based wordmark with radiant cyan/blue/purple gradient
 * - Isolated configuration
 * - Does not invent arbitrary icons or substitute unrelated product images
 */
export default function GentroBranding({
  size = 'hero', // 'nav' | 'hero' | 'footer'
  showTagline = true,
  align = 'center', // 'center' | 'left'
  className = ''
}) {
  const isHero = size === 'hero';
  const isNav = size === 'nav';
  const isFooter = size === 'footer';

  return (
    <div
      className={`gentro-branding-lockup gentro-branding-${size} ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align === 'center' ? 'center' : 'left',
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
        userSelect: 'none'
      }}
    >
      {/* Primary Brand Row: Clean GENTRO Text Wordmark + Badge */}
      <div
        className="branding-main-row"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: isHero ? '14px' : isNav ? '10px' : '10px',
          justifyContent: align === 'center' ? 'center' : 'flex-start',
          maxWidth: '100%',
          flexWrap: 'wrap'
        }}
      >
        {/* Brand Logo */}
        <div
          className="brand-tech-badge"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: isHero ? '48px' : isNav ? '34px' : '36px',
            height: isHero ? '48px' : isNav ? '34px' : '36px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.16) 0%, rgba(99, 102, 241, 0.22) 100%)',
            border: '1px solid rgba(34, 211, 238, 0.45)',
            boxShadow: isHero
              ? '0 0 20px rgba(34, 211, 238, 0.3), inset 0 0 12px rgba(34, 211, 238, 0.15)'
              : '0 0 12px rgba(34, 211, 238, 0.2)',
            flexShrink: 0,
            overflow: 'hidden'
          }}
          aria-hidden="true"
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

        {/* Wordmark and Descriptor */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            lineHeight: 1,
            maxWidth: '100%'
          }}
        >
          <div
            className="product-wordmark"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 900,
              fontSize: isHero
                ? 'clamp(2rem, 5.5vw, 3.4rem)'
                : isNav
                ? '1.25rem'
                : '1.45rem',
              letterSpacing: '-0.025em',
              display: 'flex',
              alignItems: 'baseline',
              gap: isHero ? '10px' : '6px',
              textTransform: 'uppercase',
              flexWrap: 'wrap',
              lineHeight: 1.05
            }}
          >
            <span
              style={{
                color: '#FFFFFF',
                textShadow: '0 2px 20px rgba(34, 211, 238, 0.25)'
              }}
            >
              {BRAND_CONFIG.brandPrefix}
            </span>
            <span
              style={{
                background: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 40%, #A855F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 14px rgba(34, 211, 238, 0.4))'
              }}
            >
              NEXUS
            </span>
          </div>

          {/* Subtitle / Product Descriptor */}
          {!isNav && (
            <span
              className="product-category"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 600,
                fontSize: isHero ? 'clamp(0.72rem, 1.8vw, 0.88rem)' : '0.74rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#22d3ee',
                marginTop: isHero ? '8px' : '4px',
                opacity: 0.95
              }}
            >
              {BRAND_CONFIG.productDescriptor}
            </span>
          )}
        </div>
      </div>

      {/* Elegant Gradient Tagline */}
      {showTagline && (
        <div
          className="branding-tagline"
          style={{
            marginTop: isHero ? '16px' : '10px',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: isHero ? 'clamp(0.95rem, 2.3vw, 1.18rem)' : '0.88rem',
            letterSpacing: '0.015em',
            background: 'linear-gradient(90deg, #22d3ee 0%, #38BDF8 30%, #818CF8 60%, #C084FC 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: isHero ? 'drop-shadow(0 0 12px rgba(99, 102, 241, 0.35))' : 'none',
            maxWidth: '100%',
            lineHeight: 1.4
          }}
        >
          {BRAND_CONFIG.tagline}
        </div>
      )}
    </div>
  );
}
