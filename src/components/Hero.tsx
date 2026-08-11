import React, { useState, useEffect } from 'react';
import { useContent } from '../content/ContentContext';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { content } = useContent();

  // Motion & Scroll state
  const [reducedMotion, setReducedMotion] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Door shutter state: 'closed' | 'opening' | 'opened'
  const [doorState, setDoorState] = useState<'closed' | 'opening' | 'opened'>('closed');
  
  // Content visibility state: triggers as door lifts
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setReducedMotion(true);
      setDoorState('opened');
      setContentVisible(true);
      return;
    }

    // Scroll handler for subtle parallax effect
    const handleScroll = () => {
      if (window.scrollY < 1000) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Trigger door lift animation 200ms after page load
    const liftTimer = setTimeout(() => {
      setDoorState('opening');
    }, 200);

    // After 1600ms total, set door to opened and show content
    const contentTimer = setTimeout(() => {
      setDoorState('opened');
      setContentVisible(true);
    }, 1600);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(liftTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <section className="relative w-full min-h-[100dvh] sm:min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-100px)] min-h-[600px] flex items-center justify-start overflow-hidden border-b border-slate-800 bg-slate-950 py-16 sm:py-24 lg:py-28">
      
      {/* 1. FULL-BLEED BACKGROUND IMAGE WITH SUBTLE PARALLAX */}
      <div 
        className="absolute -inset-y-16 inset-x-0 z-0 overflow-hidden pointer-events-none"
        style={{
          transform: reducedMotion ? 'none' : `translateY(${scrollY * 0.35}px)`,
          willChange: 'transform',
        }}
      >
        <img
          src="https://i.ibb.co/JRq8ccp0/herocrinab.webp"
          alt="Entrepôt frigorifique Promotion Crinab"
          className="w-full h-full object-cover object-center scale-105"
        />
      </div>

      {/* 2. LIGHT DIRECTIONAL GRADIENT OVERLAY (PRESERVES BRIGHT WELL-LIT FACILITY & REFLECTIVE FLOOR) */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-slate-950/50 via-slate-950/20 via-45% to-transparent" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-slate-950/25 via-transparent via-50% to-slate-950/35" />

      {/* 3. FULL-BLEED METALLIC ROLLER DOOR SHUTTER OVERLAY (DOOR-LIFT ANIMATION) */}
      <div
        className={`absolute inset-0 z-30 transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none ${
          reducedMotion || doorState === 'opened' || doorState === 'opening'
            ? '-translate-y-full'
            : 'translate-y-0'
        }`}
        style={{ willChange: 'transform' }}
      >
        {/* Metal Slat Texture Panels */}
        <div className="w-full h-full bg-slate-200 flex flex-col justify-between border-b-8 border-slate-600 shadow-2xl">
          {Array.from({ length: 16 }).map((_, idx) => (
            <div
              key={idx}
              className="w-full h-full border-b border-slate-300 bg-gradient-to-b from-slate-200 via-slate-100 to-slate-300 shadow-xs"
            />
          ))}
          {/* Bottom rubber seal & metal handle bar */}
          <div className="bg-slate-800 h-10 w-full flex items-center justify-center border-t-2 border-slate-500 shrink-0">
            <div className="w-28 h-3 bg-slate-400 rounded-full shadow-inner" />
          </div>
        </div>
      </div>

      {/* 4. LEFT-ALIGNED HERO OVERLAID TEXT CONTENT BLOCK (IN THE PHOTO'S CALM CORRIDOR ZONE) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div
          className={`max-w-xl lg:max-w-2xl text-left space-y-6 sm:space-y-7 transition-all duration-700 ease-out ${
            contentVisible || reducedMotion
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6 pointer-events-none'
          }`}
        >
          {/* Confident Left-Aligned Headline */}
          <h1 
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] text-left"
            style={{ textShadow: '0 2px 14px rgba(0, 0, 0, 0.95), 0 4px 28px rgba(0, 0, 0, 0.9), 0 1px 3px rgba(0,0,0,1)' }}
          >
            {content.hero.titleLine1}{' '}
            <span 
              className="block text-[#2563EB] sm:text-[#1B4FA3] mt-1.5 sm:mt-2.5 font-black"
              style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.95), 0 0 20px rgba(0, 0, 0, 0.9), 0 1px 3px rgba(0,0,0,1)' }}
            >
              {content.hero.titleLine2}
            </span>
          </h1>

          {/* Left-Aligned Subheadline */}
          <p 
            className="text-base sm:text-xl lg:text-2xl text-slate-100 font-medium max-w-xl text-left leading-relaxed"
            style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.95), 0 1px 4px rgba(0, 0, 0, 0.9)' }}
          >
            {content.hero.subheadline}
          </p>

          {/* Left-Aligned CTAs */}
          <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3.5 sm:gap-4 max-w-md sm:max-w-none">
            {/* Primary CTA: Dominant, bold, solid brand blue fill */}
            <a
              href="#devis"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 sm:px-9 py-4 rounded-xl bg-[#1B4FA3] text-white font-extrabold text-base sm:text-lg hover:bg-[#153E82] transition-all shadow-xl shadow-[#1B4FA3]/40 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] shrink-0"
            >
              {content.hero.ctaPrimary}
              <ArrowRight className="w-5 h-5 shrink-0" />
            </a>

            {/* Secondary CTA: Visually lighter, thin border, transparent blur backdrop */}
            <a
              href="#devis"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-xl border border-white/50 hover:border-white/90 bg-slate-950/40 hover:bg-slate-950/60 text-slate-100 hover:text-white font-semibold text-sm sm:text-base transition-all backdrop-blur-md hover:scale-[1.01] active:scale-[0.99] shrink-0"
            >
              {content.hero.ctaSecondary}
            </a>
          </div>

        </div>
      </div>

      {/* 5. SUBTLE BOTTOM SCROLL INDICATOR TO ANCHOR VERTICAL SPACE */}
      <a 
        href="#solutions" 
        className="absolute bottom-6 sm:bottom-8 left-4 sm:left-6 lg:left-8 z-20 inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300/80 hover:text-white transition-colors group cursor-pointer"
      >
        <span className="w-2 h-2 rounded-full bg-[#1B4FA3] animate-pulse" />
        <span className="group-hover:translate-x-0.5 transition-transform">{content.header.nav.solutions}</span>
        <span className="text-slate-400 group-hover:translate-y-0.5 transition-transform">↓</span>
      </a>

    </section>
  );
};
