import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function FAQ() {
  const { t } = useTranslation()
  const items = t('faq.items', { returnObjects: true }) as Array<{ q: string; a: string }>
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      id="faq"
      style={{
        background: '#0D0D0D',
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
            }}
          >
            {t('faq.title')}
          </h2>
        </div>

        {/* Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                background: '#111',
                border: `1px solid ${openIndex === i ? 'rgba(247,147,26,0.3)' : '#1A1A1A'}`,
                borderRadius: '10px',
                overflow: 'hidden',
                transition: 'border-color 0.2s',
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  padding: '20px 24px',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <span style={{ fontWeight: 600, fontSize: '0.97rem', color: '#fff', lineHeight: 1.4 }}>
                  {item.q}
                </span>
                <span
                  style={{
                    color: '#F7931A',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0)',
                    transition: 'transform 0.2s',
                    flexShrink: 0,
                  }}
                >
                  +
                </span>
              </button>

              {openIndex === i && (
                <div
                  style={{
                    padding: '0 24px 20px',
                    color: '#9CA3AF',
                    fontSize: '0.93rem',
                    lineHeight: 1.7,
                  }}
                >
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
