import React, { useState, useRef, useEffect } from 'react';
import { useContent } from '../content/ContentContext';
import { FacilityArea } from '../types';
import { ChevronLeft, ChevronRight, X, CheckCircle, Info, Compass, SlidersHorizontal } from 'lucide-react';

export const FacilityPresentation: React.FC = () => {
  const { content, language } = useContent();
  const [selectedArea, setSelectedArea] = useState<FacilityArea | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScrolling = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const fp = content.facilityPresentation;
  const areas = fp.areas;

  // Derive unique categories dynamically
  const uniqueCategories = Array.from(new Set(areas.map(a => a.category)));
  const categories = ['all', ...uniqueCategories];

  const filteredAreas = filterCategory === 'all'
    ? areas
    : areas.filter(a => a.category.toLowerCase() === filterCategory.toLowerCase());

  // Track active scroll position in the carousel based on card viewport center
  const handleScroll = () => {
    if (isProgrammaticScrolling.current || !carouselRef.current) return;
    const container = carouselRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;
    const children = Array.from(container.querySelectorAll('.tour-card')) as HTMLElement[];
    if (children.length === 0) return;

    let closestIndex = 0;
    let minDistance = Infinity;

    children.forEach((child, idx) => {
      const cardRect = child.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(cardCenter - containerCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true });
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, [filteredAreas]);

  // Scroll to a specific card index synchronously
  const scrollToCard = (index: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const children = container.querySelectorAll('.tour-card');
    if (children[index]) {
      isProgrammaticScrolling.current = true;
      setActiveIndex(index);
      children[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        isProgrammaticScrolling.current = false;
      }, 450);
    }
  };

  const handlePrev = () => {
    const nextIdx = Math.max(0, activeIndex - 1);
    scrollToCard(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = Math.min(filteredAreas.length - 1, activeIndex + 1);
    scrollToCard(nextIdx);
  };

  const isRtl = language === 'ar';
  const totalZones = areas.length;
  const currentArea = filteredAreas[activeIndex] || filteredAreas[0];
  const absoluteZoneIndex = currentArea ? areas.findIndex(a => a.id === currentArea.id) + 1 : 1;
  const progressPercent = totalZones > 0 ? (absoluteZoneIndex / totalZones) * 100 : 0;

  return (
    <section id="facilities" className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800 text-white overflow-hidden relative">
      {/* Background Subtle Gradient & Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(27,79,163,0.25),rgba(255,255,255,0))]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#60A5FA] bg-[#1B4FA3]/30 px-3 py-1 rounded-full border border-[#1B4FA3]/50">
              <Compass className="w-3.5 h-3.5 animate-pulse" />
              <span>{fp.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
              {fp.sectionTitle}
            </h2>
            <p className="text-base text-slate-300 mt-2 font-normal max-w-2xl leading-relaxed">
              {fp.sectionSubtitle}
            </p>
          </div>

          <div className="text-xs font-semibold text-amber-300 bg-amber-500/10 px-4 py-2 rounded-xl border border-amber-500/30 shrink-0 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>{fp.certifiedLabel}</span>
          </div>
        </div>

        {/* GUIDED TOUR CONTROL PANEL BAR */}
        <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-700/80 mb-8 shadow-xl">
          
          {/* Top Row: Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 no-scrollbar">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium shrink-0 pr-2 border-r border-slate-700">
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilterCategory(cat);
                  setActiveIndex(0);
                  if (carouselRef.current) {
                    isProgrammaticScrolling.current = true;
                    carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
                    scrollTimeoutRef.current = setTimeout(() => {
                      isProgrammaticScrolling.current = false;
                    }, 450);
                  }
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  filterCategory === cat
                    ? 'bg-[#1B4FA3] text-white shadow-md ring-1 ring-blue-400/50'
                    : 'bg-slate-700/60 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {cat === 'all' ? fp.allZonesLabel : cat}
              </button>
            ))}
          </div>

          {/* Bottom Row: Tour Progress & Carousel Navigation Controls */}
          <div className="pt-3 border-t border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            {/* Live Progress Bar & Counter */}
            <div className="flex-1 max-w-md">
              <div className="flex items-center justify-between text-xs font-extrabold mb-1.5">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <span className="text-[#60A5FA]">{fp.tourTitle}</span>
                </span>
                <span className="text-amber-400 font-mono text-sm bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  {fp.zoneProgressLabel} {absoluteZoneIndex} {fp.ofLabel} {totalZones}
                </span>
              </div>
              <div className="h-2 w-full bg-slate-700/80 rounded-full overflow-hidden p-0.5 border border-slate-600/50">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-amber-400 rounded-full transition-all duration-300 shadow-sm"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Carousel Arrow Buttons */}
            <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
              <span className="text-xs text-slate-400 hidden lg:inline">
                {isRtl ? 'اسحب للتنقل بين المناطق' : 'Swipe or use arrows to navigate zones'}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  disabled={activeIndex === 0}
                  aria-label={fp.prevZone}
                  className="p-2.5 rounded-xl bg-slate-700 hover:bg-[#1B4FA3] disabled:opacity-30 disabled:hover:bg-slate-700 text-white transition-colors border border-slate-600"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={activeIndex >= filteredAreas.length - 1}
                  aria-label={fp.nextZone}
                  className="p-2.5 rounded-xl bg-slate-700 hover:bg-[#1B4FA3] disabled:opacity-30 disabled:hover:bg-slate-700 text-white transition-colors border border-slate-600"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* HORIZONTAL SWIPEABLE CAROUSEL - FULL-BLEED PHOTO CARDS */}
        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {filteredAreas.map((area, idx) => {
            const isCurrent = idx === activeIndex;
            const absoluteCardIndex = areas.findIndex(a => a.id === area.id) + 1;
            return (
              <div
                key={area.id}
                onClick={() => setSelectedArea(area)}
                className={`tour-card snap-center shrink-0 w-[88vw] sm:w-[380px] md:w-[420px] lg:w-[450px] aspect-[4/5] rounded-2xl overflow-hidden relative group cursor-pointer border transition-all duration-300 ${
                  isCurrent
                    ? 'border-blue-400/80 shadow-[0_0_25px_rgba(27,79,163,0.4)] scale-[1.01]'
                    : 'border-slate-800 hover:border-slate-600 opacity-90 hover:opacity-100'
                }`}
              >
                {/* Full-Bleed Background Photo */}
                <img
                  src={area.imageUrl}
                  alt={area.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Directional Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 via-40% to-slate-900/40" />

                {/* Top Overlay: Zone Number & Category Tag */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="bg-slate-950/80 text-amber-400 font-mono font-extrabold text-xs px-3 py-1 rounded-full border border-amber-500/30 backdrop-blur-md shadow-md">
                    {fp.zoneProgressLabel} {String(absoluteCardIndex).padStart(2, '0')} / {String(totalZones).padStart(2, '0')}
                  </span>
                  <span className="bg-[#1B4FA3]/90 text-white font-bold text-xs px-3 py-1 rounded-full border border-blue-400/30 backdrop-blur-md shadow-md">
                    {area.category}
                  </span>
                </div>

                {/* Bottom Overlay: Title, Short Desc, Spec Chips */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 flex flex-col justify-end">
                  
                  <h3 className="font-extrabold text-white text-xl sm:text-2xl tracking-tight leading-snug drop-shadow-md group-hover:text-blue-200 transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-200 mt-2 line-clamp-2 leading-relaxed drop-shadow-sm font-medium">
                    {area.shortDesc}
                  </p>

                  {/* Spec Chips Overlaid on Card */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {area.specs.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-semibold text-slate-100 bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-700/80 backdrop-blur-xs shadow-xs"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Detail Link Indicator */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-amber-300 group-hover:text-amber-200 transition-colors">
                    <span className="flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-amber-400" />
                      <span>{fp.viewDetails}</span>
                    </span>
                    <span className="bg-amber-400/10 p-1 rounded-full border border-amber-400/20 group-hover:translate-x-1 transition-transform">
                      <ChevronRight className="w-3.5 h-3.5 text-amber-300" />
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Filmstrip Thumbnails / Quick Jump Navigation Bar */}
        <div className="mt-4 flex items-center justify-center gap-1.5 flex-wrap">
          {filteredAreas.map((area, idx) => (
            <button
              key={area.id}
              onClick={() => scrollToCard(idx)}
              title={area.title}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? 'w-8 bg-amber-400 shadow-sm'
                  : 'w-2.5 bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

      </div>

      {/* Expanded Detail Modal Dialog */}
      {selectedArea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-700 shadow-2xl p-6 sm:p-8 relative text-white">
            
            <button
              onClick={() => setSelectedArea(null)}
              aria-label={fp.closeLabel}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative rounded-xl overflow-hidden aspect-[16/9] mb-6 bg-slate-800 border border-slate-700">
              <img
                src={selectedArea.imageUrl}
                alt={selectedArea.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-slate-950/80 text-amber-400 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30">
                {selectedArea.category}
              </div>
            </div>

            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              {selectedArea.title}
            </h3>

            <p className="text-sm text-slate-300 mt-3 leading-relaxed font-normal">
              {selectedArea.fullDesc}
            </p>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                {fp.specsTitle}
              </h4>
              <ul className="space-y-2.5">
                {selectedArea.specs.map((spec, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-slate-200 font-medium">
                    <CheckCircle className="w-4 h-4 text-[#60A5FA] shrink-0" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setSelectedArea(null)}
                className="px-6 py-2.5 rounded-xl bg-[#1B4FA3] hover:bg-[#153E82] text-white font-bold text-sm transition-colors border border-blue-400/30 shadow-lg"
              >
                {fp.closeLabel}
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

