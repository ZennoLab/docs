import en from './en.json';
import ru from './ru.json';

const locales = {
  en,
  ru,
};

export const localesMappings = {
  ru: 'ru',
  en: 'en',
};

export default function getLocaleStrings(locale) {
  return locales[locale] || locales.en;
}