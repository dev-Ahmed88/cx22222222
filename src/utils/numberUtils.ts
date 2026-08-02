import { Language } from '../types';

const easternArabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
const westernDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

/**
 * Formats digits within a string or number based on the current site language.
 * - If lang === 'ar', converts Western digits (0-9) to Eastern Arabic digits (٠-٩).
 * - If lang === 'en', converts Eastern Arabic digits (٠-٩) to Western digits (0-9).
 */
export function formatNumbers(value: string | number | undefined | null, lang: Language): string {
  if (value === null || value === undefined) return '';
  const str = String(value);

  if (lang === 'ar') {
    return str.replace(/[0-9]/g, (d) => easternArabicDigits[parseInt(d, 10)]);
  } else {
    return str.replace(/[٠-٩]/g, (d) => {
      const idx = easternArabicDigits.indexOf(d);
      return idx !== -1 ? westernDigits[idx] : d;
    });
  }
}
