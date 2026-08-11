import React, { useState, useRef } from 'react';
import { useContent } from '../content/ContentContext';
import { GalleryItem, GalleryCategory } from '../types';
import { ChevronLeft, ChevronRight, ZoomIn, Image as ImageIcon } from 'lucide-react';
import { LightboxModal } from './LightboxModal';

export const Gallery: React.FC = () => {
  const { content } = useContent();
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const tabsRef = useRef<HTMLDivElement>(null);

  const categories = content.gallery.categories;
  const items = content.gallery.items;

  const filteredItems = activeCategory === 'all'
    ? items
    : items.filter((item) => item.category === activeCategory);

  const handleScrollTabs = (direction: 'left' | 'right') => {
    if (tabsRef.current) {
      const scrollAmount = direction === 'left' ? -220 : 220;
      tabsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleOpenLightbox = (itemIndex: number) => {
    setActiveLightboxIndex(itemIndex);
  };

  const handleNextLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrevLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <section id="galerie" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1B4FA3] bg-[#EEF4FC] px-3 py-1 rounded border border-[#C7D9F5]">
              Galerie HD
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              {content.gallery.sectionTitle}
            </h2>
            <p className="text-base text-slate-600 mt-2 font-normal">
              {content.gallery.sectionSubtitle}
            </p>
          </div>

          <div className="text-xs text-slate-500 font-semibold bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 self-start sm:self-auto">
            {filteredItems.length} photos affichées
          </div>
        </div>

        {/* Horizontal Scrollable Filter Tabs with Scroll-Fade & Chevrons */}
        <div className="relative mb-10 flex items-center">
          
          {/* Scroll Left Chevron */}
          <button
            onClick={() => handleScrollTabs('left')}
            className="p-2 rounded-full bg-white border border-slate-300 shadow-xs hover:bg-slate-100 text-slate-700 shrink-0 mr-2 z-10 hidden sm:flex"
            aria-label="Faire défiler vers la gauche"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Scrollable Container with Fade Edges */}
          <div className="relative flex-1 overflow-hidden">
            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />

            <div
              ref={tabsRef}
              className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 px-1 scroll-smooth"
            >
              {categories.map((cat) => {
                const isActive = cat.id === activeCategory;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id as GalleryCategory)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all border ${
                      isActive
                        ? 'bg-[#1B4FA3] text-white border-[#1B4FA3] shadow-xs'
                        : 'bg-slate-50 text-[#475569] border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
          </div>

          {/* Scroll Right Chevron */}
          <button
            onClick={() => handleScrollTabs('right')}
            className="p-2 rounded-full bg-white border border-slate-300 shadow-xs hover:bg-slate-100 text-slate-700 shrink-0 ml-2 z-10 hidden sm:flex"
            aria-label="Faire défiler vers la droite"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group bg-slate-50 rounded-xl overflow-hidden border border-slate-200 hover:border-[#1B4FA3] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Photo Frame */}
                <div className="relative aspect-[4/3] bg-slate-200 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 text-[#1B4FA3] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-100 scale-75 shadow-md">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="absolute top-2.5 left-2.5 bg-slate-900/70 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-xs">
                    {item.categoryLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-extrabold text-slate-900 text-base group-hover:text-[#1B4FA3] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>

              {item.specs && (
                <div className="px-4 pb-4 pt-0">
                  <span className="text-[11px] font-semibold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200 inline-block">
                    {item.specs}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <LightboxModal
          item={filteredItems[activeLightboxIndex]}
          onClose={() => setActiveLightboxIndex(null)}
          onNext={handleNextLightbox}
          onPrev={handlePrevLightbox}
        />
      )}
    </section>
  );
};
