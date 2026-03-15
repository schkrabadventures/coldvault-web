import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer
      style={{
        background: '#080808',
        borderTop: '1px solid #1A1A1A',
        padding: '48px 24px 32px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ color: '#F7931A', fontWeight: 800, fontSize: '1.25rem', marginBottom: '8px' }}>
              ₿ ColdVault
            </div>
            <p style={{ color: '#555', fontSize: '0.9rem' }}>{t('footer.tagline')}</p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '24px', fontSize: '0.9rem' }}>
            <a href="#/privacy" style={{ color: '#9CA3AF', textDecoration: 'none' }}>
              {t('footer.links.privacy')}
            </a>
            <a href="mailto:hello@coldvault.io" style={{ color: '#9CA3AF', textDecoration: 'none' }}>
              {t('footer.links.contact')}
            </a>
            <a
              href="https://nunchuk.io"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#9CA3AF', textDecoration: 'none' }}
            >
              Nunchuk
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            borderTop: '1px solid #1A1A1A',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <p style={{ color: '#444', fontSize: '0.82rem' }}>{t('footer.copyright')}</p>
          <p style={{ color: '#444', fontSize: '0.82rem' }}>{t('footer.disclaimer')}</p>
        </div>
      </div>
    </footer>
  )
}
