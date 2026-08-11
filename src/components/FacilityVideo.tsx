import React, { useState } from 'react';
import { useContent } from '../content/ContentContext';
import { Play, Film, ShieldCheck, Maximize2, X, Clock, CheckCircle2 } from 'lucide-react';
import { TourChapter } from '../types';

export const FacilityVideo: React.FC = () => {
  const { content, language } = useContent();
  const chapters: TourChapter[] = content.facilityVideo.chapters || [];
  const [activeChapter, setActiveChapter] = useState<TourChapter>(chapters[0] || {
    id: 'ch-ext',
    title: '1. Extérieurs',
    timestamp: '0:00',
    description: 'Présentation des extérieurs.',
    posterUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200'
  });
  const [isPlayingModal, setIsPlayingModal] = useState<boolean>(false);

  const getLabel = (key: string) => {
    switch (key) {
      case 'badge':
        return language === 'fr' ? 'Visite Virtuelle Guidée' : language === 'ar' ? 'جولة افتراضية بالفيديو' : 'Guided Virtual Tour';
      case 'launch':
        return language === 'fr' ? 'Lancer la Visite Vidéo' : language === 'ar' ? 'تشغيل فيديو الجولة' : 'Play Facility Tour Video';
      case 'sequence':
        return language === 'fr' ? 'Séquence vidéo en cours :' : language === 'ar' ? 'مقطع الفيديو الحالي:' : 'Current Video Chapter:';
      case 'chaptersTitle':
        return language === 'fr' ? 'Parcourir la visite par chapitre :' : language === 'ar' ? 'تصفح الجولة حسب الفصل:' : 'Jump to tour chapter:';
      case 'fullscreen':
        return language === 'fr' ? 'Plein écran' : language === 'ar' ? 'ملء الشاشة' : 'Full screen';
      case 'videoTitle':
        return language === 'fr' ? 'Promotion Crinab — Visite Vidéo des Installations' : language === 'ar' ? 'بروموسيون كريناب — جولة فيديو للمنشأة' : 'Promotion Crinab — Facility Video Walkthrough';
      case 'videoDesc':
        return language === 'fr' ? 'Visite guidée continue : extérieurs, accueil, zones de stockage, chambres froides positives et négatives, salle des machines, et quais de déchargement.' : language === 'ar' ? 'جولة متواصلة: المبنى الخارجي، الاستقبال، مناطق التخزين، غرف التبريد الموجب والسالب، محطة التبريد، وأرصفة التفريغ.' : 'Continuous guided walkthrough: exterior, reception, storage halls, positive & negative cold rooms, refrigeration plant, and loading docks.';
      case 'footerInfo':
        return language === 'fr' ? 'Rabat • Lot 54 TouchMark • Vidéo de Présentation Officielle' : language === 'ar' ? 'الرباط • لوت 54 توش مارك • فيديو تعريفي رسمي' : 'Rabat • Lot 54 TouchMark • Official Video Walkthrough';
      case 'close':
        return language === 'fr' ? 'Quitter la vidéo' : language === 'ar' ? 'إغلاق الفيديو' : 'Close video';
      default:
        return '';
    }
  };

  return (
    <section id="visite-virtuelle" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1B4FA3] bg-[#EEF4FC] px-3 py-1 rounded border border-[#C7D9F5]">
            <Film className="w-3.5 h-3.5" />
            {getLabel('badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            {content.facilityVideo.sectionTitle}
          </h2>
          <p className="text-base text-slate-600 mt-2 font-normal">
            {content.facilityVideo.sectionSubtitle}
          </p>
        </div>

        {/* Main Single Video Player Showcase */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-300 bg-slate-900 shadow-xl group mb-8">
          
          {/* Video Poster Image */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
            <img
              src={activeChapter.posterUrl}
              alt={activeChapter.title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-102 opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-slate-900/50" />
          </div>

          {/* Top Video Overlay Bar */}
          <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between text-white text-xs">
            <div className="flex items-center gap-2 bg-slate-900/85 px-3 py-1.5 rounded-md backdrop-blur-md border border-white/10 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#1B4FA3]" />
              <span className="text-slate-300">{getLabel('sequence')}</span>
              <span className="font-bold text-white">{activeChapter.title}</span>
            </div>

            <div className="flex items-center gap-2 bg-slate-900/85 px-3 py-1.5 rounded-md backdrop-blur-md border border-white/10 font-mono text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#1B4FA3]" />
              <span>{activeChapter.timestamp}</span>
            </div>
          </div>

          {/* Center Play Action */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 text-center">
            <button
              onClick={() => setIsPlayingModal(true)}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1B4FA3] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-2xl hover:bg-[#153E82] group/btn"
              aria-label="Lancer la vidéo"
            >
              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white ml-1" />
            </button>
            <p className="text-white text-sm sm:text-base font-bold mt-4 drop-shadow-md">
              {getLabel('launch')}
            </p>
            <p className="text-slate-200 text-xs mt-1 max-w-lg hidden sm:block">
              {activeChapter.description}
            </p>
          </div>

          {/* Bottom Bar info */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white/80 text-xs">
            <div className="flex items-center gap-2 bg-slate-900/70 px-3 py-1 rounded backdrop-blur-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Extérieurs → Entrée → Stockage → Chambres Positives/Négatives → Équipements → Quais</span>
            </div>
            <button
              onClick={() => setIsPlayingModal(true)}
              className="hover:text-white flex items-center gap-1.5 bg-slate-900/70 px-2.5 py-1 rounded backdrop-blur-xs font-medium"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>{getLabel('fullscreen')}</span>
            </button>
          </div>

        </div>

        {/* Chapter Selection Bar (Chapters within the video walkthrough) */}
        <div>
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
            {getLabel('chaptersTitle')}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {chapters.map((chapter) => {
              const isActive = chapter.id === activeChapter.id;
              return (
                <button
                  key={chapter.id}
                  onClick={() => setActiveChapter(chapter)}
                  className={`p-3 rounded-xl text-left transition-all border flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#1B4FA3] text-white border-[#1B4FA3] shadow-sm'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-100/80'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {chapter.timestamp}
                    </span>
                    {isActive && <Play className="w-3 h-3 fill-white text-white" />}
                  </div>
                  <p className="text-xs font-bold leading-tight line-clamp-1">
                    {chapter.title}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Video Modal Player */}
      {isPlayingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 rounded-2xl max-w-4xl w-full border border-slate-800 shadow-2xl overflow-hidden relative">
            
            {/* Modal Header */}
            <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-white">
              <div>
                <h3 className="font-bold text-sm sm:text-base">
                  {content.facilityVideo.modalPlayTitle}
                </h3>
                <p className="text-xs text-slate-400">
                  {content.facilityVideo.modalPlaySubtitle}
                </p>
              </div>
              <button
                onClick={() => setIsPlayingModal(false)}
                className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Video Player Display */}
            <div className="relative aspect-[16/9] w-full bg-black flex items-center justify-center">
              <img
                src={activeChapter.posterUrl}
                alt={activeChapter.title}
                className="w-full h-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6">
                <div className="w-14 h-14 rounded-full bg-[#1B4FA3]/90 text-white flex items-center justify-center mb-3 shadow-lg">
                  <Play className="w-7 h-7 fill-white ml-0.5" />
                </div>
                <h4 className="text-white font-extrabold text-xl">
                  {getLabel('videoTitle')}
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-md leading-relaxed">
                  {getLabel('videoDesc')}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1B4FA3]" />
                <span>{getLabel('footerInfo')}</span>
              </div>
              <button
                onClick={() => setIsPlayingModal(false)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors"
              >
                {getLabel('close')}
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
