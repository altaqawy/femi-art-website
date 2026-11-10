# Femi Art — Touch of Love

An independently built, responsive Arabic/English storefront concept for Femi Art, featuring a scroll-driven 3D Orbit gallery, product catalog, inquiry basket, custom requests, and original crochet-inspired WhatsApp contact button.

## GitHub Pages

Open **Settings → Pages → Deploy from a branch → main → /(root)** and save. Once Pages finishes deployment, the site can be opened at:

https://altaqawy.github.io/femi-art-website/

The compact `index.html` loader fetches the eight files in `site-parts/` and reconstructs the self-contained V5 website. The content, including 17 product photos, is bundled in those files. Keep all eight parts in the repo when publishing.

## Crochet WhatsApp button

The custom WhatsApp badge is implemented in `whatsapp-widget.js` and loaded by the homepage. Its design resembles a yarn-stitch circle, with a recognizable WhatsApp icon in the center.

The brand's verified WhatsApp phone number hasn't been provided. Until it is, clicking the badge shows a contact card linking to the official Instagram account instead of sending customers to an invented number.

To enable direct WhatsApp chat, edit `whatsapp-widget.js` and set:

```js
const phone = "201xxxxxxxxx";
```

Use the confirmed number with country code and no `+` or spaces.

## Notes

- This is a static HTML/CSS/JavaScript demo, not a native Framer export.
- Prices, available stock, payment, and order processing have not been integrated. Product selections generate an inquiry for the business to confirm.
- Confirm the brand's permission to publish product photography and customer information before commercial launch.
- Fonts are preserved: Italiana, DM Sans, and Cairo.
