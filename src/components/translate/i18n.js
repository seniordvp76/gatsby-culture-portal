import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import jsonEN from '../../assets/i18n/en.json';
import jsonBY from '../../assets/i18n/by.json';
import jsonRU from '../../assets/i18n/ru.json';

i18n
  // .use(LanguageDetector) // use to set basic language of user's browser language
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: jsonEN,
      },
      by: {
        translations: jsonBY,
      },
      ru: {
        translations: jsonRU,
      },
    },
    lng: 'ru',
    fallbackLng: 'ru',
    debug: false,
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    // keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },

  });

export default i18n;
