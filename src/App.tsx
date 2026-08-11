import React from 'react';
import { ContentProvider } from './content/ContentContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StorageSolutions } from './components/StorageSolutions';
import { FacilityPresentation } from './components/FacilityPresentation';
import { FacilityVideo } from './components/FacilityVideo';
import { Gallery } from './components/Gallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactQuote } from './components/ContactQuote';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ContentProvider>
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#1B4FA3] selection:text-white">
        <Header />
        <main>
          <Hero />
          <StorageSolutions />
          <FacilityPresentation />
          <FacilityVideo />
          <Gallery />
          <WhyChooseUs />
          <ContactQuote />
        </main>
        <Footer />
      </div>
    </ContentProvider>
  );
}
