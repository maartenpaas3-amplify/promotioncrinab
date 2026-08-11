import React from 'react';
import { useContent } from '../content/ContentContext';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const { content } = useContent();

  return (
    <footer className="bg-slate-100 border-t border-slate-200 text-slate-700 pt-12 pb-8 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-200">
          
          {/* Brand Info & Real Logo */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="inline-block">
              <img
                src="/logo.png"
                alt="Promotion Crinab logo"
                referrerPolicy="no-referrer"
                className="h-11 sm:h-13 w-auto max-w-[240px] object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://i.ibb.co/LhxTDS1V/logopromotion-Crinab.png';
                }}
              />
            </a>

            <p className="text-xs text-slate-600 leading-relaxed max-w-md font-normal">
              {content.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider">
              {content.footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              {content.solutions.categories.map((cat) => (
                <li key={cat.id}>
                  <a href="#solutions" className="hover:text-[#1B4FA3] transition-colors">{cat.title}</a>
                </li>
              ))}
              <li><a href="#facilities" className="hover:text-[#1B4FA3] transition-colors">{content.header.nav.facility}</a></li>
              <li><a href="#visite-virtuelle" className="hover:text-[#1B4FA3] transition-colors">{content.header.nav.virtualTour}</a></li>
              <li><a href="#devis" className="hover:text-[#1B4FA3] transition-colors">{content.header.nav.contact}</a></li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider">
              {content.header.brandName} — Rabat
            </h4>
            <div className="space-y-2 text-xs text-slate-600">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#1B4FA3] shrink-0 mt-0.5" />
                <span>{content.header.addressShort}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#1B4FA3] shrink-0" />
                <a href={content.header.phoneHref} className="hover:text-[#1B4FA3] font-semibold transition-colors">
                  {content.contact.phonePrimary}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#1B4FA3] shrink-0" />
                <a href={`mailto:${content.contact.emailPrimary}`} className="text-[#1B4FA3] font-semibold hover:underline">
                  {content.contact.emailPrimary}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-medium">
          <p>{content.footer.copyright}</p>
          <div className="flex items-center gap-4">
            <a href="#devis" className="hover:text-[#1B4FA3]">Mentions Légales</a>
            <span>•</span>
            <a href="#devis" className="hover:text-[#1B4FA3]">Politique de Confidentialité</a>
            <span>•</span>
            <a href="#devis" className="hover:text-[#1B4FA3]">Contact Commercial</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
