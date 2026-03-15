import { useTranslation } from 'react-i18next'

// Placeholder checkout URLs — wire to real Stripe/BTCPay later
const STRIPE_URL = 'https://buy.stripe.com/placeholder'
const BTCPAY_URL = 'https://btcpay.coldvault.io/placeholder'

export default function Pricing() {
  const { t } = useTranslation()
  const features = t('pricing.features', { returnObjects: true }) as string[]

  return (
    <section
      id="pricing"
      style={{
        background: '#080808',
        padding: '80px 24px',
        borderTop: '1px solid #1A1A1A',
        borderBottom: '1px solid #1A1A1A',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            {t('pricing.title')}
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto' }}>
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Pricing cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            maxWidth: '780px',
            margin: '0 auto',
          }}
        >
          {/* Card — USD */}
          <div
            style={{
              background: '#111',
              border: '2px solid #F7931A',
              borderRadius: '16px',
              padding: '36px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Popular badge */}
            <div
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: '#F7931A',
                color: '#000',
                fontSize: '0.7rem',
                fontWeight: 800,
                padding: '3px 10px',
                borderRadius: '999px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Most Popular
            </div>

            <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '8px', color: '#fff' }}>
              {t('pricing.card_title')}
            </h3>
            <p style={{ color: '#9CA3AF', fontSize: '0.9rem', marginBottom: '24px', lineHeight: 1.5 }}>
              {t('pricing.card_desc')}
            </p>

            <div style={{ marginBottom: '24px' }}>
              <span style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', lineHeight: 1 }}>
                {t('pricing.price_usd')}
              </span>
              <span style={{ color: '#9CA3AF', marginLeft: '8px', fontSize: '0.9rem' }}>
                {t('pricing.price_usd_label')}
              </span>
            </div>

            {/* Features */}
            <div style={{ marginBottom: '28px' }}>
              <p style={{ fontSize: '0.8rem', color: '#9CA3AF', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {t('pricing.includes')}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {features.map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#D1D5DB' }}>
                    <span style={{ color: '#F7931A', fontWeight: 700 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={STRIPE_URL}
              style={{
                display: 'block',
                background: '#F7931A',
                color: '#000',
                fontWeight: 800,
                fontSize: '1rem',
                padding: '14px',
                borderRadius: '8px',
                textDecoration: 'none',
                textAlign: 'center',
                transition: 'opacity 0.15s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
              onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
            >
              {t('pricing.cta_card')}
            </a>
          </div>

          {/* Card — BTC */}
          <div
            style={{
              background: '#111',
              border: '1px solid #2A2A2A',
              borderRadius: '16px',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>₿</div>
            <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '8px', color: '#fff' }}>
              Bitcoin Payment
            </h3>
            <p style={{ color: '#9CA3AF', fontSize: '0.9rem', marginBottom: '24px', lineHeight: 1.5 }}>
              {t('pricing.btc_note')}
            </p>

            <div style={{ marginBottom: '8px' }}>
              <span style={{ fontSize: '3rem', fontWeight: 900, color: '#F7931A', lineHeight: 1 }}>
                {t('pricing.price_btc')}
              </span>
            </div>
            <p style={{ color: '#9CA3AF', fontSize: '0.9rem', marginBottom: '28px' }}>
              {t('pricing.price_btc_label')}
            </p>

            <div
              style={{
                background: 'rgba(247,147,26,0.08)',
                border: '1px solid rgba(247,147,26,0.2)',
                borderRadius: '8px',
                padding: '12px 16px',
                fontSize: '0.85rem',
                color: '#9CA3AF',
                marginBottom: '24px',
              }}
            >
              🎉 <strong style={{ color: '#F7931A' }}>15% discount</strong> for paying in Bitcoin. Stack sats, save money.
            </div>

            <a
              href={BTCPAY_URL}
              style={{
                display: 'block',
                background: 'transparent',
                color: '#F7931A',
                fontWeight: 700,
                fontSize: '1rem',
                padding: '14px',
                borderRadius: '8px',
                border: '2px solid #F7931A',
                textDecoration: 'none',
                textAlign: 'center',
                marginTop: 'auto',
                transition: 'background 0.15s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(247,147,26,0.08)')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              {t('pricing.cta_btc')}
            </a>
          </div>
        </div>

        {/* Guarantee */}
        <p style={{ textAlign: 'center', color: '#555', fontSize: '0.9rem', marginTop: '32px' }}>
          🛡️ {t('pricing.guarantee')}
        </p>
      </div>
    </section>
  )
}
