import React, { useState, useEffect, useRef } from 'react';
import { useContent } from '../content/ContentContext';
import { Phone, MapPin, MessageSquare, Menu, X, ArrowRight, ShieldCheck, ChevronDown, Boxes, Building2, Video, Image, FileText, ChevronRight } from 'lucide-react';
import { Language } from '../types';

export const Header: React.FC = () => {
  const { content, lang, setLang } = useContent();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { href: '#solutions', label: content.header.nav.solutions, icon: Boxes },
    { href: '#facilities', label: content.header.nav.facility, icon: Building2 },
    { href: '#visite-virtuelle', label: content.header.nav.virtualTour, icon: Video },
    { href: '#galerie', label: content.header.nav.gallery, icon: Image },
    { href: '#pourquoi-nous', label: content.header.nav.advantages, icon: ShieldCheck },
    { href: '#devis', label: content.header.nav.contact, icon: FileText, isFeatured: true },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'AR' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 transition-shadow duration-200">
      
      {/* Desktop Top Minimal Utility Bar - Hidden on Mobile */}
      <div className="hidden sm:block bg-slate-50 border-b border-slate-200 text-xs text-slate-600 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-[#1B4FA3]" />
              {content.header.addressShort}
            </span>
            <span className="text-slate-300">|</span>
            <span className="flex items-center gap-1 text-slate-600">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1B4FA3]" />
              Entrepôt Indépendant B2B
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={content.header.phoneHref}
              className="flex items-center gap-1.5 font-semibold text-slate-800 hover:text-[#1B4FA3] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#1B4FA3]" />
              {content.header.phoneDisplay}
            </a>

            <a 
              href={content.header.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-medium transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-emerald-600/20 text-emerald-600" />
              WhatsApp
            </a>

            {/* Desktop Language Switcher */}
            <div className="flex items-center gap-1 pl-2 border-l border-slate-200">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-1.5 py-0.5 rounded text-[11px] font-bold uppercase transition-colors ${
                    lang === l.code
                      ? 'bg-[#1B4FA3] text-white'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Single-Row Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2.5 sm:py-3.5 flex items-center justify-between gap-3">
        
        {/* Left: Brand Logo & Wordmark (Single header row) */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <img
            src="/logo.png"
            alt="Promotion Crinab logo"
            referrerPolicy="no-referrer"
            className="h-8 sm:h-10 w-auto object-contain group-hover:opacity-95 transition-opacity"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://i.ibb.co/LhxTDS1V/logopromotion-Crinab.png';
            }}
          />
          <div className="flex flex-col justify-center leading-none">
            <span className="font-extrabold tracking-tight text-sm sm:text-lg">
              <span className="text-slate-900">PROMOTION </span>
              <span className="text-[#1B4FA3]">CRINAB</span>
            </span>
            <span className="hidden sm:block text-[10px] text-slate-500 font-semibold tracking-wider uppercase mt-0.5">
              Entreposage Frigorifique
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-[#1B4FA3] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#1B4FA3] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="#devis"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#1B4FA3] text-white font-semibold text-sm hover:bg-[#153E82] transition-colors shadow-xs"
          >
            {content.header.ctaButton}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Right Controls: Single Row with Collapsed Language Toggle + Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2 shrink-0">
          
          {/* Collapsed Language Switcher Dropdown */}
          <div className="relative" ref={langDropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-bold text-slate-800 uppercase transition-colors"
              aria-label="Select Language"
            >
              <span>{lang.toUpperCase()}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Floating Dropdown Menu */}
            {langDropdownOpen && (
              <div className="absolute right-0 mt-1 w-20 bg-white rounded-lg border border-slate-200 shadow-xl py-1 z-50">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs font-bold uppercase transition-colors ${
                      lang === l.code
                        ? 'bg-[#1B4FA3] text-white'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors border border-slate-200"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* Mobile Menu Drawer when open */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-50/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xl relative overflow-hidden transition-all">
          {/* Subtle Top Brand Accent Line */}
          <div className="h-1 bg-gradient-to-r from-[#1B4FA3] via-blue-500 to-[#1B4FA3] w-full" />

          <div className="px-4 pt-3 pb-5 space-y-3.5">
            {/* Location & Contact Info Block */}
            <div className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-2xs text-xs text-slate-600 space-y-2">
              <div className="flex items-center gap-2 font-medium text-slate-800">
                <MapPin className="w-3.5 h-3.5 text-[#1B4FA3] shrink-0" />
                <span>{content.header.addressShort}</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <a href={content.header.phoneHref} className="flex items-center gap-1.5 font-bold text-slate-800 hover:text-[#1B4FA3] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#1B4FA3]" />
                  <span>{content.header.phoneDisplay}</span>
                </a>
                <a href={content.header.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-emerald-700 font-bold hover:text-emerald-800 transition-colors">
                  <MessageSquare className="w-3.5 h-3.5 fill-emerald-600/20 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Subtle Section Divider */}
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 px-1 pt-0.5">
              <span>Navigation</span>
              <div className="h-px bg-slate-200 flex-1" />
            </div>

            {/* Navigation Links with Icons & Visual Hierarchy */}
            <nav className="flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                if (link.isFeatured) {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-blue-50/90 border border-blue-200/90 text-[#1B4FA3] font-bold text-sm shadow-2xs hover:bg-blue-100/90 transition-colors mt-1"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-[#1B4FA3] text-white flex items-center justify-center shadow-xs shrink-0">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="tracking-tight">{link.label}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#1B4FA3] group-hover:translate-x-0.5 transition-transform shrink-0" />
                    </a>
                  );
                }

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-between px-3.5 py-2 rounded-xl bg-white/80 hover:bg-white border border-slate-200/60 hover:border-slate-300 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-all shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-slate-100 group-hover:bg-blue-50 text-slate-500 group-hover:text-[#1B4FA3] flex items-center justify-center transition-colors shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span>{link.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </a>
                );
              })}
            </nav>

            {/* Primary CTA Button */}
            <div className="pt-2 border-t border-slate-200/80">
              <a
                href="#devis"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1B4FA3] text-white font-bold text-sm hover:bg-[#153E82] transition-colors shadow-md active:scale-[0.99]"
              >
                <span>{content.header.ctaButton}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      )}

    </header>
  );
};
