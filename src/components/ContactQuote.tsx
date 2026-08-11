import React, { useState } from 'react';
import { useContent } from '../content/ContentContext';
import { QuoteFormData } from '../types';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Calculator, 
  Building2, 
  ShieldCheck, 
  Thermometer, 
  Package, 
  Calendar 
} from 'lucide-react';

export const ContactQuote: React.FC = () => {
  const { content } = useContent();

  const [formData, setFormData] = useState<QuoteFormData>({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    productType: '',
    approxVolumeNum: 20,
    volumeUnit: 'pallets',
    storageType: 'positive',
    targetTemp: '+2°C à +8°C',
    durationMonths: 3,
    startDate: new Date().toISOString().split('T')[0],
    additionalNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field: keyof QuoteFormData, value: any) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };
      if (field === 'storageType') {
        if (value === 'positive') updated.targetTemp = '+2°C à +8°C';
        if (value === 'negative') updated.targetTemp = '-18°C à -25°C';
        if (value === 'general') updated.targetTemp = 'Ambiant / Sec';
      }
      return updated;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Real submission simulation
  };

  const cContact = content.contact;

  return (
    <section id="devis" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1B4FA3] bg-[#EEF4FC] px-3 py-1 rounded border border-[#C7D9F5]">
            Contact & Service Commercial
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            {cContact.sectionTitle}
          </h2>
          <p className="text-base text-slate-600 mt-2 font-normal">
            {cContact.sectionSubtitle}
          </p>
        </div>

        {/* Top Grid: Direct Info Box + Interactive Rabat Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Info Card */}
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="flex flex-col space-y-2">
                <img
                  src="/logo.png"
                  alt="Promotion Crinab logo"
                  referrerPolicy="no-referrer"
                  className="h-10 w-auto max-w-[200px] object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://i.ibb.co/LhxTDS1V/logopromotion-Crinab.png';
                  }}
                />
                <span className="text-xs font-semibold text-[#1B4FA3]">
                  Entrepôt Frigorifique Indépendant
                </span>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4 pt-2 border-t border-slate-200/80 text-xs sm:text-sm">
                
                <div className="flex items-start gap-3 text-slate-700">
                  <MapPin className="w-5 h-5 text-[#1B4FA3] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-slate-900">{cContact.addressLine1}</span>
                    <span className="text-slate-600">{cContact.addressLine2}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700">
                  <Phone className="w-5 h-5 text-[#1B4FA3] shrink-0 mt-0.5" />
                  <div>
                    <a href={`tel:${cContact.phonePrimary.replace(/[^0-9+]/g, '')}`} className="font-bold text-slate-900 block hover:text-[#1B4FA3] transition-colors">
                      {cContact.phonePrimary}
                    </a>
                    {cContact.phoneSecondary && (
                      <span className="text-slate-600 block">{cContact.phoneSecondary}</span>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700">
                  <Mail className="w-5 h-5 text-[#1B4FA3] shrink-0 mt-0.5" />
                  <a href={`mailto:${cContact.emailPrimary}`} className="font-semibold text-[#1B4FA3] hover:underline">
                    {cContact.emailPrimary}
                  </a>
                </div>

                <div className="flex items-start gap-3 text-slate-700">
                  <Clock className="w-5 h-5 text-[#1B4FA3] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-bold text-slate-900 block">{cContact.hoursWeekday}</span>
                    <span className="text-slate-600 block">{cContact.hoursSaturday}</span>
                  </div>
                </div>

              </div>

            </div>

            {/* WhatsApp CTA Button */}
            <div className="pt-6 border-t border-slate-200 mt-6">
              <a
                href={`https://wa.me/${cContact.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4 fill-white/20" />
                <span>{cContact.whatsappCta}</span>
              </a>
            </div>

          </div>

          {/* Map Embed Container */}
          <div className="lg:col-span-7 bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden relative aspect-[16/10] lg:aspect-auto">
            <iframe
              title="Rabat Location Map - Promotion Crinab (Lot 54, TouchMark)"
              src="https://maps.google.com/maps?q=33.9900252,-6.8071223&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[0.2] contrast-[0.95]"
            />
            <div className="absolute top-3 right-3 bg-white/90 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm border border-slate-200 backdrop-blur-xs flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#1B4FA3]" />
              <span>Lot 54, TouchMark, Rabat</span>
            </div>
          </div>

        </div>

        {/* Bottom Section: Quote Form + Live-Updating Summary Panel */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-10">
          
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl font-black text-slate-900">
              {cContact.formTitle}
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              {cContact.formSubtitle}
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-emerald-900">
                Demande transmise avec succès !
              </h4>
              <p className="text-sm text-emerald-800 max-w-lg mx-auto">
                {cContact.summaryPanel.submitSuccess}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-5 py-2.5 rounded-lg bg-[#1B4FA3] text-white font-semibold text-sm hover:bg-[#153E82] transition-colors"
              >
                Nouvelle Demande
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Form Input Fields (Left 7 Cols) */}
              <div className="lg:col-span-7 space-y-5">
                
                {/* Company & Contact Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      {cContact.fields.companyName} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Société Agro Maroc"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:border-[#1B4FA3] focus:ring-2 focus:ring-[#1B4FA3]/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      {cContact.fields.contactName} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nom & Prénom"
                      value={formData.contactName}
                      onChange={(e) => handleInputChange('contactName', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:border-[#1B4FA3] focus:ring-2 focus:ring-[#1B4FA3]/20 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      {cContact.fields.phone} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+212 6..."
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:border-[#1B4FA3] focus:ring-2 focus:ring-[#1B4FA3]/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      {cContact.fields.email} *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="contact@societe.ma"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:border-[#1B4FA3] focus:ring-2 focus:ring-[#1B4FA3]/20 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Product Type & Storage Type Option */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      {cContact.fields.productType}
                    </label>
                    <input
                      type="text"
                      placeholder={cContact.fields.productTypePlaceholder}
                      value={formData.productType}
                      onChange={(e) => handleInputChange('productType', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:border-[#1B4FA3] focus:ring-2 focus:ring-[#1B4FA3]/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      {cContact.fields.storageType}
                    </label>
                    <select
                      value={formData.storageType}
                      onChange={(e) => handleInputChange('storageType', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:border-[#1B4FA3] focus:ring-2 focus:ring-[#1B4FA3]/20 outline-none transition-all font-medium"
                    >
                      {cContact.options.storageTypes.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Volume Numeric & Volume Unit */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      {cContact.fields.volumeNum} ({formData.approxVolumeNum})
                    </label>
                    <input
                      type="range"
                      min={5}
                      max={500}
                      step={5}
                      value={formData.approxVolumeNum}
                      onChange={(e) => handleInputChange('approxVolumeNum', parseInt(e.target.value))}
                      className="w-full accent-[#1B4FA3] cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      {cContact.fields.volumeUnit}
                    </label>
                    <select
                      value={formData.volumeUnit}
                      onChange={(e) => handleInputChange('volumeUnit', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:border-[#1B4FA3] focus:ring-2 focus:ring-[#1B4FA3]/20 outline-none transition-all font-medium"
                    >
                      {cContact.options.volumeUnits.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Duration & Start Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      {cContact.fields.durationMonths} ({formData.durationMonths} {cContact.options.durationUnit || 'Mois'})
                    </label>
                    <select
                      value={formData.durationMonths}
                      onChange={(e) => handleInputChange('durationMonths', parseInt(e.target.value))}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:border-[#1B4FA3] focus:ring-2 focus:ring-[#1B4FA3]/20 outline-none transition-all font-medium"
                    >
                      {cContact.options.durationOptions ? (
                        cContact.options.durationOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))
                      ) : (
                        <>
                          <option value={1}>1 Mois (Court terme)</option>
                          <option value={3}>3 Mois (Saisonnier)</option>
                          <option value={6}>6 Mois (Moyen terme)</option>
                          <option value={12}>12 Mois (Contrat Annuel)</option>
                        </>
                      )}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      {cContact.fields.startDate}
                    </label>
                    <input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => handleInputChange('startDate', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:border-[#1B4FA3] focus:ring-2 focus:ring-[#1B4FA3]/20 outline-none transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    {cContact.fields.additionalNotes}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={cContact.fields.productTypePlaceholder || "Special notes..."}
                    value={formData.additionalNotes}
                    onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:border-[#1B4FA3] focus:ring-2 focus:ring-[#1B4FA3]/20 outline-none transition-all"
                  />
                </div>

              </div>

              {/* Live-Updating Summary Panel (RESTYLED LIGHT: White card with steel-blue accents) */}
              <div className="lg:col-span-5">
                <div className="sticky top-24 bg-white rounded-2xl border-2 border-[#1B4FA3] p-6 shadow-md flex flex-col justify-between space-y-6">
                  
                  <div>
                    <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                      <Calculator className="w-5 h-5 text-[#1B4FA3]" />
                      <div>
                        <h4 className="font-extrabold text-slate-900 text-base">
                          {cContact.summaryPanel.title}
                        </h4>
                        <span className="text-[11px] text-[#1B4FA3] font-semibold">
                          {cContact.summaryPanel.subtitle}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3.5 py-4 text-xs sm:text-sm">
                      
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 font-medium">
                          {cContact.summaryPanel.selectedTypeLabel}
                        </span>
                        <span className="font-bold text-slate-900 bg-[#EEF4FC] text-[#1B4FA3] px-2.5 py-0.5 rounded border border-[#C7D9F5]">
                          {cContact.options.storageTypes.find(st => st.value === formData.storageType)?.label || formData.storageType} ({formData.targetTemp})
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 font-medium">
                          {cContact.summaryPanel.estimatedVolumeLabel}
                        </span>
                        <span className="font-extrabold text-slate-900 font-mono text-base">
                          {formData.approxVolumeNum} {cContact.options.volumeUnits.find(vu => vu.value === formData.volumeUnit)?.label || formData.volumeUnit}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 font-medium">
                          {cContact.summaryPanel.durationLabel}
                        </span>
                        <span className="font-bold text-slate-900">
                          {formData.durationMonths} {cContact.options.durationUnit || 'Mois'}
                        </span>
                      </div>

                    </div>

                    {/* Standard Included Features */}
                    <div className="pt-3 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block mb-2">
                        {cContact.summaryPanel.serviceIncludedLabel}
                      </span>
                      <ul className="space-y-1.5">
                        {cContact.summaryPanel.includedFeatures.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#1B4FA3] shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1B4FA3] hover:bg-[#153E82] text-white font-extrabold text-sm transition-all shadow-md hover:shadow-lg"
                    >
                      <Send className="w-4 h-4" />
                      <span>{cContact.summaryPanel.submitButton}</span>
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2 font-normal">
                      {cContact.summaryPanel.requiredDisclaimer}
                    </p>
                  </div>

                </div>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
