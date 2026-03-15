import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import Problem from '../sections/Problem'
import Method from '../sections/Method'
import WhatsInside from '../sections/WhatsInside'
import Pricing from '../sections/Pricing'
import FAQ from '../sections/FAQ'
import Footer from '../sections/Footer'

const SEO_META: Record<string, { title: string; description: string; lang: string }> = {
  en: {
    lang: 'en',
    title: 'ColdVault — Secure your Bitcoin. Forever.',
    description:
      'Learn how to secure your Bitcoin using a 3-location multisig strategy with Nunchuk. No exchange. No single point of failure. Forever yours.',
  },
  pt: {
    lang: 'pt-BR',
    title: 'ColdVault — Proteja seu Bitcoin. Para sempre.',
    description:
      'Aprenda a proteger seu Bitcoin com uma estratégia multisig de 3 locais usando Nunchuk. Sem exchange. Sem ponto único de falha. Sempre seu.',
  },
  es: {
    lang: 'es',
    title: 'ColdVault — Asegura tu Bitcoin. Para siempre.',
    description:
      'Aprende a asegurar tu Bitcoin con una estrategia multisig de 3 ubicaciones usando Nunchuk. Sin exchange. Sin punto único de falla. Siempre tuyo.',
  },
}

export default function LandingPage() {
  const { i18n } = useTranslation()
  const lang = i18n.language?.slice(0, 2) || 'en'
  const meta = SEO_META[lang] || SEO_META['en']

  useEffect(() => {
    document.title = meta.title
    document.documentElement.lang = meta.lang

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement
      if (!el) {
        el = document.createElement('meta')
        el.name = name
        document.head.appendChild(el)
      }
      el.content = content
    }

    const setProp = (prop: string, content: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('property', prop)
        document.head.appendChild(el)
      }
      el.content = content
    }

    setMeta('description', meta.description)
    setProp('og:title', meta.title)
    setProp('og:description', meta.description)
    setMeta('twitter:title', meta.title)
    setMeta('twitter:description', meta.description)
  }, [lang, meta])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Method />
        <WhatsInside />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
