import React from 'react';
import { useContent } from '../content/ContentContext';
import { ShieldCheck, Thermometer, Zap, Layers, MapPin, Truck, CheckCircle2, Building2, Snowflake, Grid, Lock } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const { content } = useContent();
  const wcu = content.whyChooseUs;
  const clusters = wcu.clusters;

  // NOTE: Key metric figures below are client-confirmable placeholders based on the site capacity.
  const defaultStats = [
    { value: "5 000 m²", /* PLACEHOLDER — awaiting client confirmation of actual facility size */ label: "Surface Totale", sublabel: "Chambres froides & halls de stockage", icon: Building2 },
    { value: "3", label: "Environnements Thermiques", sublabel: "Froid positif, négatif & sec", icon: Snowflake },
    { value: "11", label: "Zones Opérationnelles", sublabel: "Circuit logistique sécurisé", icon: Grid },
    { value: "24/7", label: "Sécurité & Présence", sublabel: "Surveillance et gardiennage continu", icon: Lock }
  ];

  const statsList = (wcu as any).stats || defaultStats;

  const renderIcon = (iconName: string, isDarkTheme: boolean) => {
    const iconClass = isDarkTheme ? "w-6 h-6 text-blue-400" : "w-6 h-6 text-[#1B4FA3]";
    switch (iconName) {
      case 'ThermometerCheck':
        return <Thermometer className={iconClass} />;
      case 'ShieldCheck':
        return <ShieldCheck className={iconClass} />;
      case 'Zap':
        return <Zap className={iconClass} />;
      case 'Layers':
        return <Layers className={iconClass} />;
      case 'MapPin':
        return <MapPin className={iconClass} />;
      case 'Truck':
        return <Truck className={iconClass} />;
      default:
        return <ShieldCheck className={iconClass} />;
    }
  };

  return (
    <section id="pourquoi-nous" className="py-16 sm:py-24 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1B4FA3] bg-[#EEF4FC] px-3.5 py-1.5 rounded-full border border-[#C7D9F5]">
            Engagement & Valeur Ajoutée
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            {wcu.sectionTitle}
          </h2>
          <p className="text-base text-slate-600 mt-2 font-normal leading-relaxed">
            {wcu.sectionSubtitle}
          </p>
        </div>

        {/* 1. VISUAL ANCHOR: LARGE BOLD STATISTICS GRID */}
        {/* NOTE: Figures below are client-confirmable placeholders based on facility overview */}
        <div className="mb-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statsList.map((st: any, idx: number) => {
            const IconComp = st.icon || [Building2, Snowflake, Grid, Lock][idx % 4];
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-full blur-xl group-hover:bg-blue-100/60 transition-all pointer-events-none" />
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl sm:text-4xl font-black text-[#1B4FA3] tracking-tight font-mono">
                    {st.value}
                  </span>
                  <div className="p-2.5 rounded-xl bg-blue-50 text-[#1B4FA3] border border-blue-100">
                    <IconComp className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-sm font-bold text-slate-900 leading-snug">
                  {st.label}
                </p>
                <p className="text-xs text-slate-500 mt-0.5 font-normal">
                  {st.sublabel}
                </p>
              </div>
            );
          })}
        </div>

        {/* 2. RESTRUCTURED ADVANTAGE GROUPS WITH CONTRASTING BLOCK THEMES */}
        <div className="space-y-10">
          {clusters.map((cluster, cIdx) => {
            const isDark = cIdx % 2 === 0;

            return (
              <div
                key={cIdx}
                className={`rounded-3xl p-6 sm:p-10 border transition-all ${
                  isDark
                    ? 'bg-slate-900 text-white border-slate-800 shadow-2xl relative overflow-hidden'
                    : 'bg-white text-slate-900 border-slate-200/90 shadow-sm'
                }`}
              >
                {isDark && (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(27,79,163,0.35),transparent_60%)] pointer-events-none" />
                )}

                {/* Cluster Title Header */}
                <div className={`pb-6 mb-8 border-b ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${
                      isDark 
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                        : 'bg-blue-50 text-[#1B4FA3] border border-blue-200'
                    }`}>
                      {cIdx === 0 ? 'Pilier 1' : 'Pilier 2'}
                    </span>
                  </div>
                  <h3 className={`text-2xl sm:text-3xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {cluster.clusterTitle}
                  </h3>
                  <p className={`text-sm mt-1.5 font-normal ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {cluster.clusterSubtitle}
                  </p>
                </div>

                {/* Cluster Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
                  {cluster.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className={`flex flex-col justify-between p-5 rounded-2xl border transition-all ${
                        isDark
                          ? 'bg-slate-800/80 border-slate-700/80 hover:border-blue-500/50 hover:bg-slate-800'
                          : 'bg-slate-50/80 border-slate-200/80 hover:border-[#1B4FA3]/30 hover:bg-white hover:shadow-xs'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${
                          isDark
                            ? 'bg-blue-900/40 border-blue-500/30'
                            : 'bg-[#EEF4FC] border-[#C7D9F5]'
                        }`}>
                          {renderIcon(item.iconName, isDark)}
                        </div>
                        <h4 className={`text-lg font-bold leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {item.title}
                        </h4>
                        <p className={`text-xs sm:text-sm leading-relaxed font-normal ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                          {item.description}
                        </p>
                      </div>

                      {item.metric && (
                        <div className={`pt-3 mt-4 border-t flex items-center gap-2 ${isDark ? 'border-slate-700' : 'border-slate-200/80'}`}>
                          <CheckCircle2 className={`w-4 h-4 shrink-0 ${isDark ? 'text-blue-400' : 'text-[#1B4FA3]'}`} />
                          <span className={`text-xs font-bold ${isDark ? 'text-blue-300' : 'text-[#1B4FA3]'}`}>
                            {item.metric}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

