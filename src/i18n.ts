import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enTranslation from './locales/en/translation.json'
import ptTranslation from './locales/pt/translation.json'
import esTranslation from './locales/es/translation.json'

// LATAM country codes for Spanish detection
const LATAM_COUNTRIES = [
  'AR', 'BO', 'CL', 'CO', 'CR', 'CU', 'DO', 'EC', 'SV', 'GT',
  'HN', 'MX', 'NI', 'PA', 'PY', 'PE', 'PR', 'UY', 'VE',
]

/**
 * Detect language from IP via ip-api.com (privacy-friendly, no API key needed).
 * Brazil → pt, LATAM → es, everything else → en
 */
async function detectLanguageFromIP(): Promise<string> {
  try {
    const res = await fetch('http://ip-api.com/json/?fields=countryCode', {
      signal: AbortSignal.timeout(3000),
    })
    const data: { countryCode?: string } = await res.json()
    const cc = data.countryCode?.toUpperCase() ?? ''
    if (cc === 'BR') return 'pt'
    if (LATAM_COUNTRIES.includes(cc)) return 'es'
  } catch {
    // fall through to default
  }
  return 'en'
}

async function initI18n() {
  const savedLang = localStorage.getItem('coldvault_lang')
  const detectedLang = savedLang ?? (await detectLanguageFromIP())

  await i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: enTranslation },
        pt: { translation: ptTranslation },
        es: { translation: esTranslation },
      },
      lng: detectedLang,
      fallbackLng: 'en',
      interpolation: { escapeValue: false },
      detection: {
        // We handle detection ourselves; disable browser plugins
        order: [],
      },
    })
}

export { initI18n }
export default i18n
