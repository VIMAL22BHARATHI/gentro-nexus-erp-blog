import React from 'react';
import GentroBranding from './GentroBranding';

/**
 * BrandLogo component for GENTRO AI-Powered Manufacturing ERP
 */
export default function BrandLogo({
  size = 'nav',
  showTagline = false,
  align = 'left'
}) {
  return (
    <GentroBranding
      size={size}
      showTagline={showTagline}
      align={align}
    />
  );
}
