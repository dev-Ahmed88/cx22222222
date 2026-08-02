import React, { useState } from 'react';
import { Language } from '../types';
import { gutenbergBlockThemeSpec } from '../data/cxData';
import { X, FileCode2, Code, Layers, CheckCircle2, Copy, FileText, Server, AlertCircle } from 'lucide-react';

interface WpDeveloperModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const WpDeveloperModal: React.FC<WpDeveloperModalProps> = ({ isOpen, onClose, lang }) => {
  const isRtl = lang === 'ar';
  const [activeTab, setActiveTab] = useState<'themeJson' | 'templates' | 'wpIntegration' | 'deployNotes'>('wpIntegration');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const themeJsonString = JSON.stringify(gutenbergBlockThemeSpec.themeJson, null, 2);

  const phpShortcodeSnippet = `<?php
/**
 * WordPress Zero-Conflict Integration Snippet
 * Place in your theme's functions.php or a custom plugin
 */
add_shortcode('cx_framework', 'render_cx_framework_app');
function render_cx_framework_app() {
    // Isolated container with scoped styling
    $output = '<div id="cx-framework-root" class="cx-framework-app"></div>';
    
    // Enqueue React bundled assets safely
    wp_enqueue_style('cx-framework-css', get_stylesheet_directory_uri() . '/assets/cx-app.css', array(), '1.0.0');
    wp_enqueue_script('cx-framework-js', get_stylesheet_directory_uri() . '/assets/cx-app.js', array(), '1.0.0', true);
    
    return $output;
}`;

  const htmlEmbedSnippet = `<div class="cx-framework-app">
  <!-- Use [cx_framework] shortcode or Custom HTML block in Gutenberg / Elementor -->
  <div id="cx-framework-root"></div>
</div>`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-8 relative shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#102A43] text-white">
              <FileCode2 className="w-5 h-5 text-[#C7362E]" />
            </div>
            <div>
              <h3 className="text-xl font-black text-[#102A43]">
                {isRtl ? 'مواصفات ودليل Gutenberg Block Theme' : 'WordPress Gutenberg Block Theme Spec'}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {isRtl ? 'مستند الأسلوب التقني والملفات طبقاً لوثيقة التطوير' : 'Native WP FSE Block Architecture (No Elementor)'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-2 pt-4 pb-2 border-b border-slate-100 flex-wrap">
          <button
            onClick={() => setActiveTab('wpIntegration')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'wpIntegration'
                ? 'bg-[#102A43] text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {isRtl ? 'دمج ووردبريس وتفادي التعارض' : 'WP Zero-Conflict Embed'}
          </button>
          <button
            onClick={() => setActiveTab('themeJson')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'themeJson'
                ? 'bg-[#102A43] text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            theme.json
          </button>
          <button
            onClick={() => setActiveTab('templates')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'templates'
                ? 'bg-[#102A43] text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {isRtl ? 'قوالب المحرر (Site Editor)' : 'Templates'}
          </button>
          <button
            onClick={() => setActiveTab('deployNotes')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'deployNotes'
                ? 'bg-[#102A43] text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {isRtl ? 'خطوات الرفع على Personal Plan' : 'Deployment Guide'}
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto py-6 space-y-4 text-right rtl:text-right ltr:text-left">
          
          {activeTab === 'wpIntegration' && (
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start gap-3 text-xs text-emerald-950 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-sm mb-1 text-emerald-900">
                    {isRtl ? 'ضمان التوافق التام ومنع أي تعارض مع قوالب ووردبريس (Zero Conflict Guarantee)' : 'Zero Conflict Guaranteed'}
                  </strong>
                  {isRtl
                    ? 'تم عزل جميع تنسيقات هذا المشروع تحت غلاف فئة .cx-framework-app لمنع أي تعارض مع قوالب ووردبريس الخارجية (مثل Astra, Avada, Divi, Elementor, Twenty Twenty-Four). كما تم تحسين أشرطة التنقل لتتلاءم تلقائياً مع شريط ووردبريس العلوي (Admin Bar).'
                    : 'All styles are safely scoped inside .cx-framework-app so they will never leak or interfere with your main WordPress theme styles, Gutenberg, or Elementor.'}
                </div>
              </div>

              {/* PHP Shortcode Box */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#102A43]">
                    {isRtl ? '1. كود الشورت كود لملف functions.php:' : '1. Shortcode for functions.php:'}
                  </span>
                  <button
                    onClick={() => copyToClipboard(phpShortcodeSnippet)}
                    className="flex items-center gap-1 px-3 py-1 rounded bg-slate-100 text-xs font-bold text-slate-700 hover:bg-slate-200"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? (isRtl ? 'تم النسخ!' : 'Copied!') : (isRtl ? 'نسخ الكود' : 'Copy Code')}</span>
                  </button>
                </div>
                <pre className="bg-slate-900 text-emerald-400 p-4 rounded-2xl text-xs font-mono overflow-x-auto leading-relaxed dir-ltr">
                  {phpShortcodeSnippet}
                </pre>
              </div>

              {/* Gutenberg / Elementor HTML Embed */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#102A43]">
                    {isRtl ? '2. كود تضمين HTML مباشر في Gutenberg أو Elementor:' : '2. HTML Embed snippet for Gutenberg/Elementor:'}
                  </span>
                  <button
                    onClick={() => copyToClipboard(htmlEmbedSnippet)}
                    className="flex items-center gap-1 px-3 py-1 rounded bg-slate-100 text-xs font-bold text-slate-700 hover:bg-slate-200"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? (isRtl ? 'تم النسخ!' : 'Copied!') : (isRtl ? 'نسخ الكود' : 'Copy Code')}</span>
                  </button>
                </div>
                <pre className="bg-slate-900 text-emerald-400 p-4 rounded-2xl text-xs font-mono overflow-x-auto leading-relaxed dir-ltr">
                  {htmlEmbedSnippet}
                </pre>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600">
                <strong>{isRtl ? 'كيف تعمل السلسلة؟' : 'How to use:'}</strong> {isRtl ? 'ضع الشورت كود [cx_framework] في أي صفحة داخل ووردبريس، أو استخدم القالب المستقل الكامل.' : 'Simply insert [cx_framework] shortcode into any page in WP.'}
              </div>
            </div>
          )}
          
          {activeTab === 'themeJson' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">
                  {isRtl ? 'ملف theme.json الأستراتيجي (الألوان والأخطاط):' : 'theme.json Configuration:'}
                </span>
                <button
                  onClick={() => copyToClipboard(themeJsonString)}
                  className="flex items-center gap-1 px-3 py-1 rounded bg-slate-100 text-xs font-bold text-slate-700 hover:bg-slate-200"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? (isRtl ? 'تم النسخ!' : 'Copied!') : (isRtl ? 'نسخ JSON' : 'Copy JSON')}</span>
                </button>
              </div>

              <pre className="bg-slate-900 text-emerald-400 p-4 rounded-2xl text-xs font-mono overflow-x-auto leading-relaxed dir-ltr">
                {themeJsonString}
              </pre>
            </div>
          )}

          {activeTab === 'templates' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-[#102A43]">
                {isRtl ? 'القوالب الأساسية التي يتم إنشاؤها في محرر الموقع (Site Editor):' : 'Site Editor Gutenberg Templates:'}
              </h4>

              <div className="grid grid-cols-1 gap-3">
                {gutenbergBlockThemeSpec.templates.map((tpl, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-extrabold text-[#C7362E] block">{tpl.type}</span>
                      <span className="text-sm font-bold text-[#102A43]">{tpl.label}</span>
                    </div>
                    <code className="text-xs font-mono bg-slate-200 px-2.5 py-1 rounded text-slate-800 dir-ltr">
                      /templates/{tpl.name}
                    </code>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                {isRtl
                  ? 'يرث كل مقال مستقبلي نفس التصميم تلقائياً عبر قالب single.html دون حاجة لأي عمل يدوي.'
                  : 'Every future blog post inherits this layout automatically without manual page editing.'}
              </p>
            </div>
          )}

          {activeTab === 'deployNotes' && (
            <div className="space-y-4">
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3 text-xs text-amber-900 font-semibold">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block mb-1">{isRtl ? 'ملاحظة مهمة للخطة Personal:' : 'Personal Plan Notice:'}</strong>
                  {isRtl
                    ? 'خطة Personal لا تشمل اتصال SSH/SFTP المباشر. يتم رفع القالب القادم كملف مضغوط ZIP مباشرة عبر لوحة المظهر Theme Upload.'
                    : 'Personal plan does not support direct SFTP/SSH. Theme is uploaded as a ZIP via WP Admin.'}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-[#102A43] uppercase tracking-wider">
                  {isRtl ? 'خطوات رفع القالب (WordPress.com Personal):' : 'Upload Steps:'}
                </h4>

                <ol className="space-y-2 text-xs font-semibold text-slate-700 list-decimal list-inside bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                  <li>{isRtl ? 'الانتقال إلى لوحة التحكم WordPress Admin' : 'Navigate to WP Admin'}</li>
                  <li>{isRtl ? 'اختيار المظهر (Appearance) -> القوالب (Themes)' : 'Go to Appearance -> Themes'}</li>
                  <li>{isRtl ? 'انقر على رفع قالب (Upload Theme)' : 'Click Upload Theme button'}</li>
                  <li>{isRtl ? 'اختر ملف cx-strategy-lab-theme.zip ثم اضغط تنصيب الآن (Install Now)' : 'Select the theme ZIP file and click Install'}</li>
                  <li>{isRtl ? 'تفعيل القالب وتحديث الألوان المعتمدة في theme.json' : 'Activate theme and verify theme.json colors'}</li>
                </ol>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#102A43] text-white font-bold text-xs hover:bg-[#1a3a5c]"
          >
            {isRtl ? 'إغلاق المستند' : 'Close Spec'}
          </button>
        </div>

      </div>
    </div>
  );
};
