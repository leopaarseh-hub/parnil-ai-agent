import React from 'react';
import logoUrl from '../assets/parnil-logo.png';

interface ParnilLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'logo-only' | 'full';
}

// Brand logo. Renders the Parnil Studio mark from a single source image, so
// every placement (header, footer, etc.) stays in sync. The artwork is a white,
// transparent-background PNG that sits on the app's dark theme.
const HEIGHTS: Record<NonNullable<ParnilLogoProps['size']>, string> = {
  sm: 'h-7',
  md: 'h-9',
  lg: 'h-12',
  full: 'h-10',
  'logo-only': 'h-9',
};

export default function ParnilLogo({ className = '', size = 'md' }: ParnilLogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoUrl}
        alt="Parnil Studio"
        className={`${HEIGHTS[size]} w-auto object-contain select-none transition-transform duration-300 group-hover:scale-105`}
        draggable={false}
      />
    </div>
  );
}
