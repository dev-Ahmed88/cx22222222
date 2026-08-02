import React, { useState } from 'react';
import { Language } from '../types';
import { quizQuestionsData } from '../data/cxData';
import { BrainCircuit, X, CheckCircle2, RotateCcw, ArrowLeft, ArrowRight, Award } from 'lucide-react';
import { formatNumbers } from '../utils/numberUtils';

interface DiagnosticQuizProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const DiagnosticQuiz: React.FC<DiagnosticQuizProps> = ({ isOpen, onClose, lang }) => {
  const isRtl = lang === 'ar';
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  if (!isOpen) return null;

  const handleSelectOption = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion + 1 < quizQuestionsData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const maxScore = quizQuestionsData.length * 3;
  const scorePercentage = Math.round((totalScore / maxScore) * 100);

  const getMaturityLevel = () => {
    if (scorePercentage >= 80) {
      return {
        title: isRtl ? 'مستوى نضج متقدم جداً (Leader)' : 'CX Leader Maturity',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
        desc: isRtl ? 'منشأتكم تعتمد أنظمة متطورة لقياس واستجابة صوت العميل. التوصية: التركيز على الابتكار المستمر والتوسع.' : 'Your firm exhibits strong CX automation and frontline alignment.'
      };
    } else if (scorePercentage >= 50) {
      return {
        title: isRtl ? 'مستوى نضج متوسط (Developing)' : 'Developing CX Maturity',
        color: 'text-amber-700 bg-amber-50 border-amber-200',
        desc: isRtl ? 'توجد مبادرات جيدة ولكن تعوزها الأتمتة والترابط بين الإدارات. التوصية: تطبيق إطار البازل المتكامل وتوحيد CDPs.' : 'Solid foundational steps, but gaps exist between tech automation and culture.'
      };
    } else {
      return {
        title: isRtl ? 'مستوى نضج أولي (Initial Gaps)' : 'Initial CX Gaps',
        color: 'text-red-700 bg-red-50 border-red-200',
        desc: isRtl ? 'توجد فجوة كبيرة بين توقعات العملاء والتنفيذ الداخلي. التوصية: بدء باقة التقييم والتشخيص الفوري.' : 'Significant disconnect between customer expectation and internal execution.'
      };
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const level = getMaturityLevel();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-xl w-full p-8 relative shadow-2xl border border-slate-200">
        
        {/* Header */}
        <button
          onClick={onClose}
          className="absolute top-6 left-6 rtl:left-6 rtl:right-auto text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100"
        >
          <X className="w-5 h-5" />
        </button>

        {!showResult ? (
          <div className="space-y-6">
            
            {/* Progress Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-[#C7362E]" />
                <span className="text-xs font-bold text-[#102A43]">
                  {isRtl ? 'اختبار تقييم نضج تجربة العميل (Quiz Plugin)' : 'CX Maturity Assessment Quiz'}
                </span>
              </div>
              <span className="text-xs font-extrabold text-[#C7362E]">
                {formatNumbers(currentQuestion + 1, lang)} / {formatNumbers(quizQuestionsData.length, lang)}
              </span>
            </div>

            {/* Question Text */}
            <div className="space-y-2">
              <h3 className="text-lg font-black text-[#102A43]">
                {quizQuestionsData[currentQuestion].question[lang]}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {isRtl ? 'اختر الخيار الأقرب للواقع الحالي في منشأتك:' : 'Select the option best matching your organization:'}
              </p>
            </div>

            {/* Options List */}
            <div className="space-y-3">
              {quizQuestionsData[currentQuestion].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt.score)}
                  className="w-full text-right rtl:text-right ltr:text-left p-4 rounded-2xl border border-slate-200 hover:border-[#102A43] hover:bg-slate-50 transition-all text-xs font-bold text-slate-800 flex items-center justify-between group"
                >
                  <span>{opt.text[lang]}</span>
                  <div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-[#C7362E] group-hover:bg-[#C7362E] transition-colors shrink-0" />
                </button>
              ))}
            </div>

          </div>
        ) : (
          /* Results View */
          <div className="space-y-6 text-center py-4">
            
            <div className="w-16 h-16 rounded-2xl bg-slate-100 text-[#102A43] flex items-center justify-center mx-auto shadow-inner">
              <Award className="w-8 h-8 text-[#C7362E]" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                {isRtl ? 'نتيجة تقييم النضج' : 'Maturity Result'}
              </span>
              <h3 className="text-3xl font-black text-[#102A43]">
                {formatNumbers(`${scorePercentage}%`, lang)} {isRtl ? 'نسبة الجاهزية' : 'Readiness'}
              </h3>
            </div>

            <div className={`p-4 rounded-2xl border ${level.color} text-right rtl:text-right space-y-2`}>
              <h4 className="font-bold text-sm">{level.title}</h4>
              <p className="text-xs leading-relaxed opacity-90">{level.desc}</p>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={resetQuiz}
                className="flex-1 py-3 rounded-xl border border-slate-300 font-bold text-xs text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{isRtl ? 'إعادة الاختبار' : 'Retake Quiz'}</span>
              </button>

              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-xl bg-[#102A43] text-white font-bold text-xs hover:bg-[#1a3a5c]"
              >
                <span>{isRtl ? 'إغلاق ومتابعة الموقع' : 'Close Assessment'}</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
