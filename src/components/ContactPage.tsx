import React, { useEffect } from 'react';
import { Language } from '../types';
import { ContactSection } from './ContactSection';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface ContactPageProps {
  lang: Language;
  onGoHome: () => void;
  selectedPackageName?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  lang,
  onGoHome,
  selectedPackageName
}) => {
  const isRtl = lang === 'ar';

  // Scroll to top when page opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#102A43] py-8 sm:py-12">
      
      {/* Main Direct Contact Form & Pitch */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactSection 
          lang={lang} 
          selectedPackageName={selectedPackageName} 
        />
      </div>

    </div>
  );
};

