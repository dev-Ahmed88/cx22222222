import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { DiagnosisSection } from './components/DiagnosisSection';
import { InteractiveFramework } from './components/InteractiveFramework';
import { FailureSection } from './components/FailureSection';
import { OutcomesSection } from './components/OutcomesSection';
import { IdeasSection } from './components/IdeasSection';
import { BlogArchiveSection } from './components/BlogArchiveSection';
import { DiagnosticSection } from './components/DiagnosticSection';
import { ProductsSection } from './components/ProductsSection';
import { AboutSection } from './components/AboutSection';
import { ContactPage } from './components/ContactPage';
import { BlogPage } from './components/BlogPage';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';

// Modals
import { LeadMagnetModal } from './components/LeadMagnetModal';
import { DiagnosticQuiz } from './components/DiagnosticQuiz';
import { WpDeveloperModal } from './components/WpDeveloperModal';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'about' | 'blog' | 'contact'>('home');
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedPackage, setSelectedPackage] = useState<string>('');

  // Modals visibility states
  const [isLeadMagnetOpen, setIsLeadMagnetOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isGutenbergModalOpen, setIsGutenbergModalOpen] = useState(false);

  // Synchronize document dir attribute with language
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const scrollToElement = (id: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      setActiveSection(id);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleExploreFramework = () => {
    setCurrentPage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPackage = (pkgName: string) => {
    setSelectedPackage(pkgName);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoServices = () => {
    setCurrentPage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoAbout = () => {
    setCurrentPage('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoBlog = () => {
    setCurrentPage('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="cx-framework-app min-h-screen bg-white text-[#102A43] selection:bg-[#C7362E] selection:text-white">
      
      {/* Sticky Main Navigation */}
      <Header
        lang={lang}
        setLang={setLang}
        onOpenGutenbergModal={() => setIsGutenbergModalOpen(true)}
        onOpenLeadMagnet={() => setIsLeadMagnetOpen(true)}
        onOpenQuizModal={() => setIsQuizOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        currentPage={currentPage}
        onNavigateHome={handleGoHome}
        onNavigateServices={handleGoServices}
        onNavigateAbout={handleGoAbout}
        onNavigateContact={handleOpenConsultation}
        onNavigateBlog={handleGoBlog}
      />

      {/* Standalone Page View or Main Landing Page */}
      {currentPage === 'contact' ? (
        <ContactPage
          lang={lang}
          onGoHome={handleGoHome}
          selectedPackageName={selectedPackage}
        />
      ) : currentPage === 'blog' ? (
        <BlogPage
          lang={lang}
          onGoHome={handleGoHome}
          onNavigateContact={handleOpenConsultation}
        />
      ) : currentPage === 'services' ? (
        <ServicesPage
          lang={lang}
          onGoHome={handleGoHome}
          onSelectPackage={handleSelectPackage}
        />
      ) : currentPage === 'about' ? (
        <AboutPage
          lang={lang}
          onGoHome={handleGoHome}
          onNavigateContact={handleOpenConsultation}
        />
      ) : (
        <main>
          {/* 1. Hero Section with 4x4 Puzzle Matrix */}
          <Hero
            lang={lang}
            onExploreFramework={handleExploreFramework}
            onOpenConsultation={handleOpenConsultation}
            onOpenQuizModal={() => setIsQuizOpen(true)}
          />

          {/* 1b. CX By Numbers Section */}
          <StatsSection lang={lang} />

          {/* 2. Section 01 — Diagnosis / Problem */}
          <DiagnosisSection lang={lang} />

          {/* 3. Section 02 — Framework / Mechanism */}
          <InteractiveFramework lang={lang} />

          {/* 4. Section 03 — Failure / Why They Fail */}
          <FailureSection lang={lang} />

          {/* 5. Section 04 — Outcomes */}
          <OutcomesSection lang={lang} />

          {/* 6. Section 05 — Ideas & Articles */}
          <IdeasSection lang={lang} />

          {/* 6b. Section 06 — Blog & Full Articles Archive */}
          <BlogArchiveSection lang={lang} />

          {/* 7. Diagnostic Self-Assessment Form */}
          <DiagnosticSection lang={lang} />

          {/* 8. Section 07 — Resources & Products */}
          <ProductsSection lang={lang} />

          {/* 9. Section 08 — About / Practice */}
          <AboutSection lang={lang} />

          {/* 10. Section 09 — Final Call to Action */}
          <FinalCtaSection
            lang={lang}
            onOpenConsultation={handleOpenConsultation}
          />
        </main>
      )}

      {/* Site Footer */}
      <Footer
        lang={lang}
        onOpenGutenbergModal={() => setIsGutenbergModalOpen(true)}
        onOpenLeadMagnet={() => setIsLeadMagnetOpen(true)}
        onOpenQuizModal={() => setIsQuizOpen(true)}
        onNavigateHome={handleGoHome}
        onNavigateServices={handleGoServices}
        onNavigateAbout={handleGoAbout}
        onNavigateContact={handleOpenConsultation}
        onNavigateBlog={handleGoBlog}
      />

      {/* Interactive Modals */}
      <LeadMagnetModal
        isOpen={isLeadMagnetOpen}
        onClose={() => setIsLeadMagnetOpen(false)}
        lang={lang}
      />

      <DiagnosticQuiz
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        lang={lang}
      />

      <WpDeveloperModal
        isOpen={isGutenbergModalOpen}
        onClose={() => setIsGutenbergModalOpen(false)}
        lang={lang}
      />

    </div>
  );
}
