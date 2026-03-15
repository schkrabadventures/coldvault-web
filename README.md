# ColdVault Web

Landing page for [coldvault.io](https://coldvault.io) — "Secure your Bitcoin. Forever."

## Stack

- **Vite 8** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (PostCSS plugin)
- **react-router-dom** v7 (hash routing)
- **i18next** (EN / PT / ES, auto-detected from IP via ip-api.com)

## Dev

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # Production build → dist/
```

## i18n

Language detection order:
1. `localStorage.coldvault_lang` (manual override via language switcher)
2. IP-based detection via ip-api.com: Brazil → `pt`, LATAM → `es`, else → `en`

Translation files: `src/locales/{en,pt,es}/translation.json`

## Sections

1. **Hero** — headline, CTA buttons (Stripe + BTCPay placeholders)
2. **Problem** — 4 ways people lose Bitcoin
3. **The Method** — 3-location multisig strategy + Nunchuk callout
4. **What's Inside** — 6-chapter PDF preview
5. **Pricing** — $19 USD (Stripe) / $16.15 BTC (BTCPay, 15% off)
6. **FAQ** — accordion
7. **Footer**

## Checkout Placeholders

Replace in `src/sections/Hero.tsx` and `src/sections/Pricing.tsx`:

```ts
const STRIPE_URL = 'https://buy.stripe.com/placeholder'
const BTCPAY_URL = 'https://btcpay.coldvault.io/placeholder'
```

## Privacy

No cookies, no analytics, no trackers. IP is checked once for language detection (ip-api.com) and never stored.
