import React, { useState } from 'react';
import { Language } from '../types';
import { X, BookOpen, Download, CheckCircle, Mail, User, Building } from 'lucide-react';

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const LeadMagnetModal: React.FC<LeadMagnetModalProps> = ({ isOpen, onClose, lang }) => {
  const isRtl = lang === 'ar';
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-8 relative shadow-2xl border border-slate-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 left-6 rtl:left-6 rtl:right-auto text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            
            <div className="text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#C7362E] flex items-center justify-center mx-auto">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-[#102A43]">
                {isRtl ? 'تحميل كتاب ودليل تجربة العميل 2026' : 'Download Free CX Playbook'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {isRtl
                  ? 'دليل عملي شامل يحتوي على نماذج رسم خرائط رحلة العميل وأطر أتمتة أنظمة VoC لمؤسستك.'
                  : 'Get our practical guide featuring journey mapping templates and VoC automation frameworks.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#102A43] mb-1">
                  {isRtl ? 'الاسم الكامل' : 'Full Name'}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute right-3 top-3 rtl:right-3 rtl:left-auto" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isRtl ? 'مثال: د. عبد الله السالم' : 'John Doe'}
                    className="w-full py-2.5 px-10 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-[#102A43]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#102A43] mb-1">
                  {isRtl ? 'البريد الإلكتروني للعمل' : 'Work Email Address'}
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute right-3 top-3 rtl:right-3 rtl:left-auto" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full py-2.5 px-10 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-[#102A43]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#102A43] mb-1">
                  {isRtl ? 'اسم المنشأة / الشركة' : 'Company Name'}
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 absolute right-3 top-3 rtl:right-3 rtl:left-auto" />
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder={isRtl ? 'اسم شركتك' : 'Company Ltd'}
                    className="w-full py-2.5 px-10 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-[#102A43]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#C7362E] text-white font-bold text-xs hover:bg-[#b02c25] shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>{isRtl ? 'تحميل الدليل مجاناً (PDF)' : 'Download Free Guide (PDF)'}</span>
              </button>
            </form>

            <p className="text-[10px] text-center text-slate-400">
              {isRtl ? 'نحترم خصوصيتك بالكامل. لن نشارك بريدك مع أي طرف ثالث.' : 'We respect your privacy. No spam.'}
            </p>

          </div>
        ) : (
          <div className="text-center space-y-6 py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-[#102A43]">
                {isRtl ? 'تم إرسال الدليل بنجاح!' : 'Guide Ready for Download!'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isRtl
                  ? `شكراً لك ${formData.name}! تم إرسال رابط التحميل المباشر إلى بريدك: ${formData.email}`
                  : `Thank you ${formData.name}! Direct download link sent to: ${formData.email}`}
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <a
                href="#download-sim"
                onClick={(e) => { e.preventDefault(); alert(isRtl ? 'جاري بدء تحميل الملف PDF...' : 'Starting PDF download...'); }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#102A43] text-white font-bold text-xs shadow hover:bg-[#1a3a5c]"
              >
                <Download className="w-4 h-4 text-[#C7362E]" />
                <span>{isRtl ? 'تحميل مباشر من هنا' : 'Download File Directly Now'}</span>
              </a>
            </div>

            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="text-xs font-bold text-slate-500 hover:text-slate-800"
            >
              {isRtl ? 'إغلاق النافذة' : 'Close Window'}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
