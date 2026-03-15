import { useTranslation } from 'react-i18next'

// Placeholder checkout URLs — wire to real Stripe/BTCPay later
const STRIPE_URL = 'https://buy.stripe.com/placeholder'
const BTCPAY_URL = 'https://btcpay.coldvault.io/placeholder'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(247,147,26,0.12) 0%, #0D0D0D 60%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        textAlign: 'center',
      }}
    >
      {/* Badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(247,147,26,0.1)',
          border: '1px solid rgba(247,147,26,0.3)',
          borderRadius: '999px',
          padding: '4px 16px',
          marginBottom: '32px',
          fontSize: '0.85rem',
          color: '#F7931A',
          fontWeight: 600,
        }}
      >
        <span>₿</span>
        <span>Bitcoin Self-Custody</span>
      </div>

      {/* Headline */}
      <h1
        style={{
          fontSize: 'clamp(2.25rem, 6vw, 4rem)',
          fontWeight: 900,
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          marginBottom: '24px',
          maxWidth: '800px',
        }}
      >
        {t('hero.headline').split('Bitcoin').map((part, i, arr) =>
          i < arr.length - 1 ? (
            <span key={i}>
              {part}
              <span style={{ color: '#F7931A' }}>Bitcoin</span>
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </h1>

      {/* Sub */}
      <p
        style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          color: '#9CA3AF',
          maxWidth: '640px',
          lineHeight: 1.7,
          marginBottom: '48px',
        }}
      >
        {t('hero.subheadline')}
      </p>

      {/* CTAs */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          justifyContent: 'center',
          marginBottom: '32px',
        }}
      >
        <a
          href={STRIPE_URL}
          style={{
            background: '#F7931A',
            color: '#000',
            fontWeight: 800,
            fontSize: '1rem',
            padding: '14px 32px',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'opacity 0.15s',
            whiteSpace: 'nowrap',
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
          onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
        >
          {t('hero.cta_primary')}
        </a>

        <a
          href={BTCPAY_URL}
          style={{
            background: 'transparent',
            color: '#F7931A',
            fontWeight: 700,
            fontSize: '1rem',
            padding: '14px 32px',
            borderRadius: '8px',
            border: '2px solid #F7931A',
            textDecoration: 'none',
            transition: 'background 0.15s',
            whiteSpace: 'nowrap',
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(247,147,26,0.08)')}
          onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
        >
          {t('hero.cta_btc')}
        </a>
      </div>

      {/* Trust line */}
      <p style={{ fontSize: '0.85rem', color: '#555', fontWeight: 500 }}>
        {t('hero.no_exchange')}
      </p>

      {/* Scroll indicator */}
      <div style={{ marginTop: '64px', color: '#333', fontSize: '1.5rem', animation: 'bounce 2s infinite' }}>↓</div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </section>
  )
}
