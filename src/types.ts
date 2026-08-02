export type Language = 'ar' | 'en';

export interface FrameworkItem {
  id: string;
  number: number;
  title: {
    ar: string;
    en: string;
  };
  subtitle: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  icon: string;
  color: string;
  accentBg: string;
  pillars: {
    title: { ar: string; en: string };
    desc: { ar: string; en: string };
  }[];
  keyDeliverables: {
    ar: string[];
    en: string[];
  };
}

export interface StatCard {
  id: string;
  numberDisplay: string;
  secondaryNumber?: string;
  isUp: boolean;
  highlightColor: string;
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  source: string;
}

export interface PackagePlan {
  id: string;
  name: { ar: string; en: string };
  badge?: { ar: string; en: string };
  description: { ar: string; en: string };
  targetAudience: { ar: string; en: string };
  features: { ar: string[]; en: string[] };
  duration: { ar: string; en: string };
  recommended?: boolean;
}

export interface BlogPost {
  id: string;
  title: { ar: string; en: string };
  excerpt: { ar: string; en: string };
  content: { ar: string; en: string };
  category: { ar: string; en: string };
  date: string;
  readTime: { ar: string; en: string };
  author: { name: string; role: string };
}

export interface QuizQuestion {
  id: number;
  question: { ar: string; en: string };
  options: {
    text: { ar: string; en: string };
    score: number;
  }[];
}
