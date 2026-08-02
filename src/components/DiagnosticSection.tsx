import React, { useState } from 'react';
import { Language } from '../types';
import { formatNumbers } from '../utils/numberUtils';

interface DiagnosticSectionProps {
  lang: Language;
}

export const DiagnosticSection: React.FC<DiagnosticSectionProps> = ({ lang }) => {
  const isRtl = lang === 'ar';
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="diagnostic" className="bg-[#102A43] text-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 text-right rtl:text-right ltr:text-left">
            <p className="text-xs font-mono font-semibold tracking-[0.22em] uppercase text-slate-300">
              {formatNumbers('07', lang)} — {isRtl ? 'التقييم والتشخيص' : 'THE DIAGNOSTIC'}
            </p>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-white leading-[1.3]">
              {isRtl ? 'تقييم مواءمة تجربة العميل.' : 'CX Alignment Diagnostic.'}
            </h2>

            <p className="text-lg text-slate-200 leading-relaxed max-w-lg">
              {isRtl ? (
                'تقييم ذاتي مُهيكَل لكشف مواضع تعطّل الاستراتيجية والتنفيذ داخل مؤسستك — وأين تكمن أعلى نقاط التصحيح أثرًا.'
              ) : (
                'A structured self-assessment to pinpoint where strategy and execution stall inside your organization — and where the highest-leverage fixes lie.'
              )}
            </p>

            <ul className="space-y-3 pt-4 text-sm text-slate-300">
              <li className="flex items-center gap-3">
                <span className="w-6 h-px bg-[#C7362E] shrink-0" />
                <span>{isRtl ? `${formatNumbers(24, lang)} سؤالاً مُعايرًا عبر الوظائف السبع` : '24 calibrated questions across all 7 functions'}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-px bg-[#C7362E] shrink-0" />
                <span>{isRtl ? 'تقييم مرجعي عبر المواءمة والقدرة والإشارة' : 'Benchmark across alignment, capability, and signal'}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-px bg-[#C7362E] shrink-0" />
                <span>{isRtl ? 'ملخّص تنفيذي من صفحة واحدة جاهز للفريق' : '1-page executive summary ready for leadership'}</span>
              </li>
            </ul>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-5 lg:col-start-8 border border-white/20 bg-white/10 backdrop-blur-xs p-8 sm:p-10 rounded-2xl shadow-xl">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 bg-[#C7362E] text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold shadow-md">
                  ✓
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  {isRtl ? 'تم إرسال طلب التقييم' : 'Assessment Request Sent'}
                </h3>
                <p className="text-sm text-slate-200">
                  {isRtl ? 'تم استلام بياناتك وسنرسل لك تقرير التقييم بصيغة PDF قريبًا على بريدك.' : 'Thank you. We will send the PDF diagnostic framework to your email shortly.'}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold uppercase tracking-wider text-[#C7362E] hover:underline pt-2"
                >
                  {isRtl ? 'إرسال طلب آخر' : 'Submit another request'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-300 mb-2">
                    {isRtl ? 'الاسم' : 'Name'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isRtl ? 'اسمك الكامل' : 'Full Name'}
                    className="w-full bg-transparent border-b border-white/30 py-2 text-base text-white placeholder-slate-400 focus:outline-none focus:border-[#C7362E] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-300 mb-2">
                    {isRtl ? 'البريد الإلكتروني' : 'Email'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full bg-transparent border-b border-white/30 py-2 text-base text-white placeholder-slate-400 focus:outline-none focus:border-[#C7362E] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-300 mb-2">
                    {isRtl ? 'الشركة' : 'Company'}
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder={isRtl ? 'المؤسسة' : 'Organization'}
                    className="w-full bg-transparent border-b border-white/30 py-2 text-base text-white placeholder-slate-400 focus:outline-none focus:border-[#C7362E] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C7362E] text-white py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-white hover:text-[#102A43] transition-colors rounded-lg shadow-md mt-4"
                >
                  {isRtl ? 'احصل على التقييم' : 'Get the Assessment'}
                </button>

                <p className="text-[11px] text-slate-300 tracking-[0.12em] uppercase text-center pt-2">
                  {isRtl ? 'يُسلَّم بصيغة PDF · بلا اشتراك في نشرة' : 'Delivered as PDF · No newsletter subscription required'}
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
