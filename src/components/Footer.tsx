import React from 'react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
  onOpenGutenbergModal: () => void;
  onOpenLeadMagnet: () => void;
  onOpenQuizModal: () => void;
  onNavigateHome?: () => void;
  onNavigateServices?: () => void;
  onNavigateAbout?: () => void;
  onNavigateContact?: () => void;
  onNavigateBlog?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  lang, 
  onNavigateHome, 
  onNavigateServices,
  onNavigateAbout,
  onNavigateContact,
  onNavigateBlog
}) => {
  const isRtl = lang === 'ar';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E4E7EB] bg-[#102A43] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <button 
          onClick={() => onNavigateHome && onNavigateHome()}
          className="inline-flex items-center gap-2.5 text-base font-heading font-bold text-white hover:opacity-80 transition-opacity"
        >
          <span className="inline-block w-2.5 h-2.5 bg-[#C7362E] transform rotate-45" aria-hidden="true" />
          <span>
            {isRtl ? (
              <>استراتيجية<span className="text-slate-400 mx-0.5">·إلى·</span>تجربة</>
            ) : (
              <>Strategy<span className="text-slate-400 mx-0.5">·to·</span>Experience</>
            )}
          </span>
        </button>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-slate-300">
          <button 
            onClick={() => onNavigateHome && onNavigateHome()} 
            className="hover:text-white transition-colors"
          >
            {isRtl ? 'الرئيسية' : 'Home'}
          </button>
          <button 
            onClick={() => onNavigateServices && onNavigateServices()} 
            className="hover:text-white transition-colors"
          >
            {isRtl ? 'خدمات' : 'Services'}
          </button>
          <button 
            onClick={() => onNavigateAbout && onNavigateAbout()} 
            className="hover:text-white transition-colors"
          >
            {isRtl ? 'من نحن' : 'About Us'}
          </button>
          <button 
            onClick={() => onNavigateBlog && onNavigateBlog()} 
            className="hover:text-white transition-colors"
          >
            {isRtl ? 'المدونة' : 'Blog'}
          </button>
          <button 
            onClick={() => onNavigateContact && onNavigateContact()} 
            className="text-[#FF9B9B] hover:text-white transition-colors"
          >
            {isRtl ? 'تواصل معنا' : 'Contact Us'}
          </button>
        </div>

        {/* Copyright */}
        <p className="text-xs font-semibold tracking-[0.16em] uppercase text-slate-400">
          © {currentYear} — {isRtl ? 'استشارات تجربة العميل' : 'Customer Experience Consulting'}
        </p>

      </div>
    </footer>
  );
};
