import React from 'react';

interface ParnilLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'logo-only' | 'full';
}

export default function ParnilLogo({ className = '', size = 'md' }: ParnilLogoProps) {
  // SVG of the custom eye logo based precisely on the provided image, using exact #050A14 (Ink) and #C8FF00 (Acid)
  const eyeSvg = (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`w-full h-full text-brand-ink transition-transform duration-500`}
    >
      {/* Upper Eyelid - thick tapered arc */}
      <path 
        d="M 10 50 C 30 25, 70 25, 90 50 C 70 32, 30 32, 10 50 Z" 
        fill="currentColor" 
      />
      {/* Lower Eyelid - thinner tapered arc, slightly suspended below */}
      <path 
        d="M 20 60 C 38 72, 62 72, 80 60 C 65 67, 35 67, 20 60 Z" 
        fill="currentColor" 
      />
      
      {/* Central Yin-Yang styled Inner Pupil Circle */}
      {/* Center at (50, 48.5) with radius 11.5 */}
      <g transform="translate(50, 48.5)">
        {/* Fill outer circle with dark Ink */}
        <circle cx="0" cy="0" r="11" fill="currentColor" />
        
        {/* Dynamic swirl in contrast (transparent Acid green background shows through) */}
        {/* A beautiful arc path simulating the teardrop curve in the provided logo */}
        <path 
          d="M 0 -11 A 5.5 5.5 0 0 0 0 0 A 5.5 5.5 0 0 1 0 11 A 11 11 0 0 0 0 -11 Z" 
          fill="#C8FF00" /* matching the exact lime background of the logo box (#C8FF00) */
        />
        {/* Inner yin-yang dots */}
        <circle cx="0" cy="-5.5" r="2.2" fill="#C8FF00" />
        <circle cx="0" cy="5.5" r="2.2" fill="currentColor" />
      </g>
    </svg>
  );

  if (size === 'logo-only') {
    return (
      <div className={`relative flex items-center justify-center rounded-[20px] bg-brand-acid p-1.5 shadow-[0_0_20px_rgba(200,255,0,0.2)] ${className}`}>
        {eyeSvg}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Eye Emblem inside the custom bright neon lime-green background box */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-brand-acid p-1.5 shadow-[0_0_25px_rgba(200,255,0,0.25)] transition-transform duration-300 hover:scale-105">
        <div className="w-full h-full relative group-hover:rotate-12 transition-transform duration-500">
          {eyeSvg}
        </div>
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-acid opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brand-acid flex items-center justify-center text-[7px] text-brand-ink font-bold">✨</span>
        </span>
      </div>
      
      {size === 'full' && (
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-xl font-extrabold tracking-tight text-brand-paper font-display">
              PARNIL<span className="text-brand-acid font-medium">.</span>
            </span>
            <span className="text-[10px] tracking-widest text-brand-acid font-mono border border-brand-acid/20 bg-brand-acid/5 px-1.5 rounded">STUDIO</span>
          </div>
          <p className="text-[9px] text-[#F5F3EE]/60 leading-none">Bespoke Architectural Web Engineering</p>
        </div>
      )}
    </div>
  );
}
