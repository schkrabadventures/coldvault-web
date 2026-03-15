import { useTranslation } from 'react-i18next'

export default function Problem() {
  const { t } = useTranslation()
  const items = t('problem.items', { returnObjects: true }) as Array<{
    icon: string
    title: string
    desc: string
  }>

  return (
    <section
      id="problem"
      style={{
        background: '#0D0D0D',
        padding: '80px 24px',
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
            {t('problem.title')}
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto' }}>
            {t('problem.subtitle')}
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                background: '#111111',
                border: '1px solid #1A1A1A',
                borderRadius: '12px',
                padding: '28px',
                transition: 'border-color 0.2s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.borderColor = 'rgba(247,147,26,0.3)')}
              onMouseOut={(e) => (e.currentTarget.style.borderColor = '#1A1A1A')}
            >
              <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{item.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '10px', color: '#fff' }}>
                {item.title}
              </h3>
              <p style={{ color: '#9CA3AF', lineHeight: 1.65, fontSize: '0.95rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
