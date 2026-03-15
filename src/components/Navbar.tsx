import { useTranslation } from 'react-i18next'
import i18n from '../i18n'

const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'pt', label: 'PT' },
  { code: 'es', label: 'ES' },
]

export default function Navbar() {
  const { t } = useTranslation()

  const handleLangChange = (lang: string) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('coldvault_lang', lang)
  }

  return (
    <nav
      style={{ background: 'rgba(13,13,13,0.95)', borderBottom: '1px solid #1A1A1A' }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
    >
      <div
        style={{ maxWidth: '1100px' }}
        className="mx-auto px-4 py-3 flex items-center justify-between"
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none' }}>
          <span style={{ color: '#F7931A', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
            ₿ {t('nav.logo')}
          </span>
        </a>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <div className="flex items-center gap-1">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => handleLangChange(l.code)}
                style={{
                  background: i18n.language === l.code ? '#F7931A' : 'transparent',
                  color: i18n.language === l.code ? '#000' : '#9CA3AF',
                  border: `1px solid ${i18n.language === l.code ? '#F7931A' : '#2A2A2A'}`,
                  borderRadius: '4px',
                  padding: '2px 8px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#pricing"
            style={{
              background: '#F7931A',
              color: '#000',
              fontWeight: 700,
              fontSize: '0.85rem',
              padding: '6px 16px',
              borderRadius: '6px',
              textDecoration: 'none',
            }}
          >
            {t('nav.cta')}
          </a>
        </div>
      </div>
    </nav>
  )
}
