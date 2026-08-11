import React from 'react';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useContent } from '../content/ContentContext';

interface LightboxModalProps {
  item: GalleryItem;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onNext,
  onPrev,
}) => {
  const { language } = useContent();
  const closeLabel = language === 'fr' ? 'Fermer' : language === 'ar' ? 'إغلاق' : 'Close';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-2xl flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white transition-colors"
          aria-label={closeLabel}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Container with Nav Chevrons */}
        <div className="relative flex-1 bg-slate-900 flex items-center justify-center min-h-[300px] sm:min-h-[450px]">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-contain max-h-[75vh]"
          />

          {onPrev && (
            <button
              onClick={onPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white transition-colors"
              aria-label="Image précédente"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {onNext && (
            <button
              onClick={onNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white transition-colors"
              aria-label="Image suivante"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Caption Sidebar */}
        <div className="w-full md:w-80 p-6 bg-white flex flex-col justify-between border-t md:border-t-0 md:border-l border-slate-200">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#1B4FA3] bg-[#EEF4FC] px-2.5 py-1 rounded border border-[#C7D9F5]">
              {item.categoryLabel}
            </span>

            <h3 className="text-xl font-extrabold text-slate-900 mt-3 leading-snug">
              {item.title}
            </h3>

            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              {item.caption}
            </p>

            {item.specs && (
              <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block">
                  Donnée Spécifique :
                </span>
                <span className="text-xs font-bold text-slate-800 mt-0.5 block">
                  {item.specs}
                </span>
              </div>
            )}
          </div>

          <div className="pt-6 border-t border-slate-100 mt-6 flex justify-between items-center text-xs text-slate-500">
            <span>Promotion Crinab Rabat</span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold transition-colors"
            >
              {closeLabel}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
