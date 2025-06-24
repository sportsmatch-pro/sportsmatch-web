// src/i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from './locales/es.json'
import ca from './locales/ca.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      ca: { translation: ca },
      en: { translation: {} },
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  })

export default i18n