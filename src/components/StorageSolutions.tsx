import React, { useState, useEffect, useRef } from 'react';
import { useContent } from '../content/ContentContext';
import { StorageCategory, StorageCategoryId } from '../types';
import { Check, ArrowRight, Thermometer, Snowflake, Package, Star } from 'lucide-react';

interface AnimatedTempProps {
  id: StorageCategoryId;
  tempRangeStr: string;
}

const AnimatedTempReadout: React.FC<AnimatedTempProps> = ({ id, tempRangeStr }) => {
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    // Check reduced motion preference
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setIsDone(true);
      return;
    }

    let target1 = 0;
    let target2 = 0;

    if (id === 'positive') {
      target1 = 2;
      target2 = 8;
    } else if (id === 'negative') {
      target1 = -18;
      target2 = -25;
    } else if (id === 'general') {
      target1 = 15;
      target2 = 25;
    }

    let started = false;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true;
          setHasStarted(true);
          let startTime: number | null = null;
          const duration = 1200; // 1.2 second count-up/down animation

          const animate = (now: number) => {
            if (!startTime) startTime = now;
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic formula
            const ease = 1 - Math.pow(1 - progress, 3);

            setVal1(Math.round(target1 * ease));
            setVal2(Math.round(target2 * ease));

            if (progress < 1) {
              animFrameRef.current = requestAnimationFrame(animate);
            } else {
              setIsDone(true);
            }
          };

          animFrameRef.current = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 } // Triggers count-up when card is 20% visible in viewport
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [id]);

  const renderText = () => {
    if (isDone) {
      if (id === 'positive') return '+2°C / +8°C';
      if (id === 'negative') return '-18°C / -25°C';
      if (id === 'general') return '+15°C / +25°C';
      return tempRangeStr;
    }

    if (!hasStarted) {
      if (id === 'positive') return '+0°C / +0°C';
      if (id === 'negative') return '0°C / 0°C';
      if (id === 'general') return '+0°C / +0°C';
      return tempRangeStr;
    }

    if (id === 'positive') return `+${val1}°C / +${val2}°C`;
    if (id === 'negative') return `${val1}°C / ${val2}°C`;
    if (id === 'general') return `+${val1}°C / +${val2}°C`;
    return tempRangeStr;
  };

  return (
    <div
      ref={containerRef}
      className="font-mono font-black text-2xl sm:text-3xl text-white tracking-tight drop-shadow-md h-9 flex items-center"
    >
      {renderText()}
    </div>
  );
};

export const StorageSolutions: React.FC = () => {
  const { content } = useContent();
  const [activeTab, setActiveTab] = useState<StorageCategoryId>('positive');

  const categories = content.solutions.categories;
  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];

  const getCategoryIcon = (id: StorageCategoryId) => {
    switch (id) {
      case 'positive':
        return <Thermometer className="w-4 h-4 text-emerald-400" />;
      case 'negative':
        return <Snowflake className="w-4 h-4 text-sky-400" />;
      case 'general':
        return <Package className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="solutions" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1B4FA3] bg-[#EEF4FC] px-3 py-1 rounded border border-[#C7D9F5]">
            {content.header.brandName}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            {content.solutions.sectionTitle}
          </h2>
          <p className="text-base text-slate-600 mt-2 font-normal">
            {content.solutions.sectionSubtitle}
          </p>
        </div>

        {/* Category Cards with Full Photo Backgrounds & Scroll-Triggered Animated Temperature */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {categories.map((cat) => {
            const isActive = cat.id === activeTab;
            const isPopular = cat.id === 'positive';

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative rounded-2xl overflow-hidden text-left transition-all duration-300 flex flex-col justify-between min-h-[280px] p-6 shadow-lg group cursor-pointer border ${
                  isActive
                    ? 'border-[#1B4FA3] ring-4 ring-[#1B4FA3]/25 shadow-xl scale-[1.01]'
                    : 'border-slate-800/60 hover:border-slate-600 hover:shadow-2xl'
                }`}
              >
                {/* Photo Background */}
                <img
                  src={cat.imageUrl}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Gradient Scrim Overlay for Contrast & Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-slate-950/40 group-hover:via-slate-950/55 transition-all" />

                {/* Top Badge Bar */}
                <div className="relative z-10 flex items-center justify-between w-full gap-2 flex-wrap">
                  {/* Category Type Badge */}
                  <div className="inline-flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    {getCategoryIcon(cat.id)}
                    <span className="text-xs font-bold text-white">
                      {cat.badgeText}
                    </span>
                  </div>

                  {/* Top Right Badge: Featured / Most Popular ONLY */}
                  {isPopular && (
                    <span className="bg-amber-500 text-slate-950 text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                      <Star className="w-3 h-3 fill-slate-950 stroke-[2.5]" />
                      <span>{content.solutions.mostPopularLabel || "Le plus demandé"}</span>
                    </span>
                  )}
                </div>

                {/* Bottom Content inside Card (Strictly Standardized Typography Scale) */}
                <div className="relative z-10 space-y-2 mt-8">
                  {/* Animated Temperature Readout */}
                  <AnimatedTempReadout id={cat.id} tempRangeStr={cat.tempRange} />

                  <div>
                    {/* Category Title: Identical text-lg sm:text-xl font-extrabold across all 3 cards */}
                    <h3 className="font-extrabold text-white text-lg sm:text-xl leading-snug line-clamp-2 min-h-[3.25rem] flex items-center">
                      {cat.title}
                    </h3>
                    {/* Category Subtitle: Identical text-xs sm:text-sm font-medium across all 3 cards */}
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-2 font-medium min-h-[2.5rem]">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Deep-Dive Panel (Split Specification & Detail View) */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Specification Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {currentCategory.title}
                </h3>
                <p className="text-sm font-semibold text-[#1B4FA3] mt-1">
                  {currentCategory.subtitle}
                </p>
                <p className="text-sm sm:text-base text-[#475569] mt-3 leading-relaxed">
                  {currentCategory.description}
                </p>
              </div>

              {/* Items / Products Checklist */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  {content.solutions.acceptedProductsLabel || "Exemples de produits admis :"}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentCategory.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm font-medium text-slate-800">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Technical Specifications */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {currentCategory.specs.map((spec, idx) => (
                  <div key={idx} className="bg-slate-50 p-3 rounded-lg border border-slate-200/60">
                    <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                      {spec.label}
                    </span>
                    <span className="text-xs font-bold text-slate-900 mt-0.5 block">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div className="pt-2">
                <a
                  href="#devis"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#1B4FA3] hover:text-[#153E82] transition-colors"
                >
                  <span>{content.solutions.requestQuoteForCategory || "Demander un devis pour"} {currentCategory.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* Right Photo Block */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm aspect-[4/3] bg-slate-100">
                <img
                  src={currentCategory.imageUrl}
                  alt={currentCategory.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-slate-900/80 text-white text-xs font-bold px-3 py-1 rounded backdrop-blur-xs font-mono">
                  {currentCategory.tempRange}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
