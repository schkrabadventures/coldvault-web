import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'

export default function PrivacyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy — ColdVault'
  }, [])

  return (
    <>
      <Navbar />
      <main
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          padding: '120px 24px 80px',
          color: '#D1D5DB',
          lineHeight: 1.8,
        }}
      >
        <h1 style={{ fontWeight: 800, fontSize: '2rem', color: '#fff', marginBottom: '8px' }}>
          Privacy Policy
        </h1>
        <p style={{ color: '#555', marginBottom: '40px' }}>Last updated: March 2026</p>

        <h2 style={{ color: '#fff', fontWeight: 700, marginTop: '32px' }}>What We Collect</h2>
        <p>
          ColdVault collects only what is strictly necessary to process your purchase: your email address
          (to deliver the PDF) and payment information (handled entirely by Stripe or BTCPay Server — we
          never see your card details).
        </p>

        <h2 style={{ color: '#fff', fontWeight: 700, marginTop: '32px' }}>What We Don't Collect</h2>
        <ul>
          <li>No cookies (except the one your payment processor may set)</li>
          <li>No analytics trackers (Google Analytics, Meta Pixel, etc.)</li>
          <li>No fingerprinting</li>
          <li>No advertising</li>
        </ul>

        <h2 style={{ color: '#fff', fontWeight: 700, marginTop: '32px' }}>IP-Based Language Detection</h2>
        <p>
          We use ip-api.com to detect your approximate country for language selection. This is a one-time
          request on page load. We do not store or log your IP address. ip-api.com's privacy policy is
          available at <a href="https://ip-api.com/docs/legal" style={{ color: '#F7931A' }}>ip-api.com</a>.
        </p>

        <h2 style={{ color: '#fff', fontWeight: 700, marginTop: '32px' }}>Contact</h2>
        <p>
          Questions?{' '}
          <a href="mailto:hello@coldvault.io" style={{ color: '#F7931A' }}>
            hello@coldvault.io
          </a>
        </p>
      </main>
      <Footer />
    </>
  )
}
