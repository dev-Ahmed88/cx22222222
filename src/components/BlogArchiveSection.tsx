import React, { useState } from 'react';
import { Language, BlogPost } from '../types';
import { blogPostsData } from '../data/cxData';
import { BookOpen, Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, Tag } from 'lucide-react';
import { formatNumbers } from '../utils/numberUtils';

interface BlogArchiveSectionProps {
  lang: Language;
}

export const BlogArchiveSection: React.FC<BlogArchiveSectionProps> = ({ lang }) => {
  const isRtl = lang === 'ar';
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#E4E7EB] text-right rtl:text-right ltr:text-left">
          <div>
            <p className="text-xs font-mono font-semibold tracking-[0.22em] uppercase text-[#627D98] mb-2 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-[#C7362E]" />
              <span>{formatNumbers('06', lang)} — {isRtl ? 'الأرشيف والمكتبة' : 'BLOG & ARCHIVE'}</span>
            </p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-[#102A43] leading-[1.3]">
              {isRtl ? 'أحدث المقالات والرؤى في استراتيجية وتجربة العميل' : 'Latest CX Strategy Insights & Blog'}
            </h2>
          </div>

          {selectedPost && (
            <button
              onClick={() => setSelectedPost(null)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#102A43] text-xs font-bold transition-colors shrink-0"
            >
              {isRtl ? <ArrowRight className="w-4 h-4 text-[#C7362E]" /> : <ArrowLeft className="w-4 h-4 text-[#C7362E]" />}
              <span>{isRtl ? 'العودة لأرشيف المقالات' : 'Back to Archive List'}</span>
            </button>
          )}
        </div>

        {/* View Mode 1: Single Post Reading View (قالب المقال الفردي) */}
        {selectedPost ? (
          <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 space-y-8 shadow-sm">
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs font-bold">
                <span className="text-[#C7362E]">
                  {selectedPost.category[lang]}
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {selectedPost.date}
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedPost.readTime[lang]}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black text-[#102A43] leading-tight">
                {selectedPost.title[lang]}
              </h1>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-200 text-xs font-bold text-slate-700">
                <div className="w-9 h-9 rounded-full bg-[#102A43] text-white flex items-center justify-center font-bold">
                  {selectedPost.author.name[0]}
                </div>
                <div>
                  <div className="text-[#102A43] font-bold">{selectedPost.author.name}</div>
                  <div className="text-slate-500 text-[11px]">{selectedPost.author.role}</div>
                </div>
              </div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 text-base font-medium">
              <p className="text-lg font-bold text-[#102A43] bg-white p-4 rounded-xl border border-slate-200">
                {selectedPost.excerpt[lang]}
              </p>
              <p>
                {selectedPost.content[lang]}
              </p>
              <p>
                {isRtl 
                  ? 'يتطلب النجاح المستدام في تحسين تجربة العميل مواءمة شاملة بين التوجه القيادي والتطبيق الميداني. عند تطبيق المعايير المعتمدة في إطار العمل الخاص بنا، ترتفع مؤشرات رضا واستبقاء العملاء بشكل ملحوظ.'
                  : 'Achieving sustainable CX growth requires alignment between executive strategy and frontline operational touchpoints.'}
              </p>
            </div>

            <div className="pt-8 border-t border-slate-200 flex justify-between items-center">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-5 py-2.5 rounded-xl bg-[#102A43] text-white font-bold text-xs"
              >
                {isRtl ? 'الرجوع للمدونة' : 'Back to Blog'}
              </button>
            </div>

          </div>
        ) : (
          /* View Mode 2: Archive Grid View (قالب أرشيف/تصنيف المدونة) */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPostsData.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-400 hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-[#C7362E]">
                      {post.category[lang]}
                    </span>
                    <span className="text-slate-400 text-[11px] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime[lang]}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#102A43] group-hover:text-[#C7362E] transition-colors leading-snug">
                    {post.title[lang]}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt[lang]}
                  </p>

                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#102A43]">
                  <span>{post.author.name}</span>
                  <span className="text-[#C7362E] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    {isRtl ? 'قراءة المزيد' : 'Read Article'}
                    {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                  </span>
                </div>

              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
