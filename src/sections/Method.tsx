import { useTranslation } from 'react-i18next'

export default function Method() {
  const { t } = useTranslation()
  const locations = t('method.locations', { returnObjects: true }) as Array<{
    icon: string
    title: string
    desc: string
  }>

  return (
    <section
      id="method"
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
            {t('method.title')}
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto' }}>
            {t('method.subtitle')}
          </p>
        </div>

        {/* 3-location cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '0',
            marginBottom: '64px',
            background: '#111',
            border: '1px solid #1A1A1A',
            borderRadius: '16px',
            overflow: 'hidden',
          }}
        >
          {locations.map((loc, i) => (
            <div
              key={i}
              style={{
                padding: '36px 32px',
                borderRight: i < locations.length - 1 ? '1px solid #1A1A1A' : 'none',
                position: 'relative',
              }}
            >
              {/* Step number */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: '#F7931A',
                  color: '#000',
                  fontWeight: 800,
                  fontSize: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {i + 1}
              </div>

              <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{loc.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '12px', color: '#fff' }}>
                {loc.title}
              </h3>
              <p style={{ color: '#9CA3AF', lineHeight: 1.65, fontSize: '0.95rem' }}>{loc.desc}</p>
            </div>
          ))}
        </div>

        {/* Nunchuk callout */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(247,147,26,0.08) 0%, rgba(247,147,26,0.04) 100%)',
            border: '1px solid rgba(247,147,26,0.25)',
            borderRadius: '16px',
            padding: '40px',
            display: 'flex',
            gap: '24px',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ fontSize: '3rem', lineHeight: 1 }}>🔐</div>
          <div style={{ flex: 1, minWidth: '240px' }}>
            <h3 style={{ fontWeight: 700, fontSize: '1.25rem', color: '#F7931A', marginBottom: '12px' }}>
              {t('method.nunchuk_title')}
            </h3>
            <p style={{ color: '#D1D5DB', lineHeight: 1.7, fontSize: '0.97rem' }}>
              {t('method.nunchuk_desc')}
            </p>
            <a
              href="https://nunchuk.io"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '16px',
                color: '#F7931A',
                fontSize: '0.9rem',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              nunchuk.io →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
