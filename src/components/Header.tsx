import React from 'react';
import { Language } from '../types';
import { Globe, FileCode2, BookOpen, BrainCircuit, Menu, X } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenGutenbergModal: () => void;
  onOpenLeadMagnet: () => void;
  onOpenQuizModal: () => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
  currentPage: 'home' | 'services' | 'about' | 'blog' | 'contact';
  onNavigateHome: () => void;
  onNavigateServices: () => void;
  onNavigateAbout: () => void;
  onNavigateContact: () => void;
  onNavigateBlog: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  setLang,
  onOpenGutenbergModal,
  onOpenLeadMagnet,
  onOpenQuizModal,
  activeSection,
  setActiveSection,
  currentPage,
  onNavigateHome,
  onNavigateServices,
  onNavigateAbout,
  onNavigateContact,
  onNavigateBlog
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const isRtl = lang === 'ar';

  const navLinks = [
    { id: 'home', label: isRtl ? 'الرئيسية' : 'Home' },
    { id: 'services', label: isRtl ? 'خدمات' : 'Services' },
    { id: 'about', label: isRtl ? 'من نحن' : 'About Us' },
    { id: 'blog', label: isRtl ? 'المدونة' : 'Blog' },
    { id: 'contact', label: isRtl ? 'تواصل معنا' : 'Contact Us' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'home') {
      onNavigateHome();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (id === 'services') {
      onNavigateServices();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (id === 'about') {
      onNavigateAbout();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (id === 'blog') {
      onNavigateBlog();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (id === 'contact') {
      onNavigateContact();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#E4E7EB] bg-white/95 backdrop-blur-md transition-all shadow-2xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Brand Logo matching template */}
        <a 
          href="#top" 
          onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
          className="inline-flex items-center gap-2.5 text-lg font-heading font-bold text-[#102A43] hover:opacity-85 transition-opacity"
        >
          <span className="inline-block w-2.5 h-2.5 bg-[#C7362E] transform rotate-45" aria-hidden="true" />
          <span>
            {isRtl ? (
              <>استراتيجية<span className="text-[#627D98] mx-0.5">·إلى·</span>تجربة</>
            ) : (
              <>Strategy<span className="text-[#627D98] mx-0.5">·to·</span>Experience</>
            )}
          </span>
        </a>

        {/* Primary Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#486581]">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;

            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors py-1 ${
                  isActive
                    ? 'text-[#C7362E] font-bold border-b-2 border-[#C7362E]'
                    : 'hover:text-[#102A43]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Tools */}
        <div className="hidden md:flex items-center gap-3">
          
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D9E2EC] text-xs font-bold text-[#486581] hover:text-[#102A43] hover:border-[#102A43] transition-all bg-[#F8FAFC]"
            title={isRtl ? 'Switch to English' : 'الانتقال إلى العربية'}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'EN' : 'العربية'}</span>
          </button>

          {/* Gutenberg Spec Inspector */}
          <button
            onClick={onOpenGutenbergModal}
            className="p-2 rounded-lg border border-[#D9E2EC] text-[#486581] hover:text-[#102A43] hover:border-[#102A43] transition-all bg-[#F8FAFC]"
            title="معاينة كود ومواصفات WordPress Block Theme"
          >
            <FileCode2 className="w-4 h-4" />
          </button>

          {/* CTA Button matching template */}
          <button
            onClick={onNavigateContact}
            className="inline-flex items-center bg-[#102A43] text-white px-5 py-2.5 text-xs font-bold tracking-wider uppercase hover:bg-[#C7362E] transition-colors rounded-lg shadow-xs"
          >
            {isRtl ? 'احجز استشارة' : 'Book Consultation'}
          </button>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="px-2.5 py-1 text-xs font-bold border border-[#E2D8C8] rounded text-[#1C1614]"
          >
            {lang === 'ar' ? 'EN' : 'ع'}
          </button>

          <button
            onClick={onNavigateContact}
            className="bg-[#1C1614] text-[#FAF8F5] px-3 py-2 text-xs font-bold uppercase"
          >
            {isRtl ? 'تواصل' : 'Contact'}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1C1614]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E6DEC0] bg-[#FAF8F5] px-6 py-4 space-y-3">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-right py-2 text-base font-bold text-[#1C1614]"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-[#E2D8C8] flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenQuizModal(); }}
              className="flex items-center justify-center gap-2 py-2.5 border border-[#1C1614] text-[#1C1614] font-bold text-xs"
            >
              <BrainCircuit className="w-4 h-4 text-[#C7362E]" />
              <span>{isRtl ? 'اختبار نضج تجربة العميل' : 'CX Maturity Quiz'}</span>
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenLeadMagnet(); }}
              className="flex items-center justify-center gap-2 py-2.5 bg-[#C7362E] text-white font-bold text-xs"
            >
              <BookOpen className="w-4 h-4" />
              <span>{isRtl ? 'تحميل دليل تجربة العميل' : 'Download Free CX Guide'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
