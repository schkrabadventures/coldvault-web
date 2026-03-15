import { useTranslation } from 'react-i18next'

export default function WhatsInside() {
  const { t } = useTranslation()
  const chapters = t('whats_inside.chapters', { returnObjects: true }) as Array<{
    num: string
    title: string
    desc: string
  }>

  return (
    <section
      id="inside"
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
            {t('whats_inside.title')}
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto' }}>
            {t('whats_inside.subtitle')}
          </p>
        </div>

        {/* Chapters grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '16px',
          }}
        >
          {chapters.map((ch, i) => (
            <div
              key={i}
              style={{
                background: '#111111',
                border: '1px solid #1A1A1A',
                borderRadius: '12px',
                padding: '24px',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                transition: 'border-color 0.2s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.borderColor = 'rgba(247,147,26,0.3)')}
              onMouseOut={(e) => (e.currentTarget.style.borderColor = '#1A1A1A')}
            >
              <div
                style={{
                  fontWeight: 900,
                  fontSize: '1.1rem',
                  color: '#F7931A',
                  opacity: 0.7,
                  minWidth: '32px',
                  fontFamily: 'monospace',
                }}
              >
                {ch.num}
              </div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#fff', marginBottom: '8px' }}>
                  {ch.title}
                </h3>
                <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.6 }}>{ch.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Preview teaser */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <div
            style={{
              display: 'inline-block',
              background: 'rgba(247,147,26,0.07)',
              border: '1px dashed rgba(247,147,26,0.3)',
              borderRadius: '12px',
              padding: '24px 40px',
              color: '#9CA3AF',
              fontSize: '0.95rem',
            }}
          >
            📄 <strong style={{ color: '#fff' }}>PDF format.</strong> Instant download after purchase. ~50 pages, zero fluff.
          </div>
        </div>
      </div>
    </section>
  )
}
