import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';
import { contentFR, ContentFR } from './fr';
import { contentEN } from './en';
import { contentAR } from './ar';

interface ContentContextType {
  lang: Language;
  setLang: (l: Language) => void;
  content: ContentFR;
  dir: 'ltr' | 'rtl';
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('fr');

  const getContent = (): ContentFR => {
    switch (lang) {
      case 'en':
        return contentEN;
      case 'ar':
        return contentAR;
      case 'fr':
      default:
        return contentFR;
    }
  };

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <ContentContext.Provider value={{ lang, setLang, content: getContent(), dir }}>
      <div dir={dir} className={lang === 'ar' ? 'font-sans' : ''}>
        {children}
      </div>
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
