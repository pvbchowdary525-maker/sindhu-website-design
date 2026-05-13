# Sindhu Website — UI Kit

Single-page premium landing for Sindhu (biryani, Mandadam + VIT-AP). High-fidelity recreation following the design system in the project root.

## Files

| File | Purpose |
|---|---|
| `index.html` | Loads React + Babel + the JSX modules. Open this. |
| `styles.css` | UI-kit-specific layout CSS on top of `colors_and_type.css`. |
| `App.jsx` | Mounts the page in order: Header → Hero → Marquee → Menu → Story → Why → Delivery → CTA → Footer. |
| `Header.jsx` | Top-of-page bar — logo + nav links + order button. |
| `Hero.jsx` | Full-bleed cream hero, giant `BIRYANI, BAGUNDI.`, pot doodle in corner, two CTAs, delivery chip, scattered sticker. |
| `Marquee.jsx` | Brick-on-cream scrolling band. Used twice on the page. |
| `Menu.jsx` | "Mana Biryani" — three menu cards (Dum / Fry / Mix) with blob photos and sticker overlays. |
| `Story.jsx` | "Mana Katha" — Haven-style editorial two-column with photo + prose. |
| `Why.jsx` | Four-icon `Why Sindhu?` strip (Aged basmati · Slow-cooked · 30-min · Student-priced). |
| `DeliveryZone.jsx` | Map illustration + zone copy. |
| `CTABand.jsx` | Full-bleed saffron band: "HUNGRY? ORDER IN 60 SECONDS." |
| `Footer.jsx` | Hours, contact, socials, copyright on espresso. |

## Interactions

This is a marketing page, so interactions are deliberately small:

- **Order Now CTA** — opens a fake "WhatsApp draft" modal with the user's would-be order.
- **Menu card hover** — lift + tilt (CSS).
- **Marquee** — continuous loop. Pauses on hover.
- **Sticker rotations** — static, slight wobble on hover.

## Not implemented on purpose

- Real ordering / cart — Sindhu's v1 plan is WhatsApp-based. The modal mocks that intent.
- Multi-page routing — single page.
- Photography — `biryani-placeholder.svg` stands in for real top-down banana-leaf photos. **Replace with real photos before launch.**
