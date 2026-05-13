# Sindhu Design System

> Biryani, the Sindhu way. Slow-cooked. Soul-served.

Sindhu (సింధు) is a biryani-focused restaurant in **Mandadam, Amaravathi, Andhra Pradesh (522237)** serving the local neighbourhood and VIT-AP University hostel students. The brand sits at the intersection of **editorial craft** and **playful boldness** — a love-child of Haven Annecy (warm, story-led, premium) and Paput Menorca (vibrant, marquee-driven, big personality), leaning ~60% toward Paput's energy and ~40% toward Haven's polish. Youthful, never cheap.

---

## Products represented

| Surface | Description | Status |
|---|---|---|
| Marketing website | Single-page premium landing — hero, marquee, menu, story, delivery zone, footer | Recreated in `ui_kits/website/` |

*(No app yet. The current ordering loop runs through WhatsApp; treat the site as the brand's anchor.)*

## Sources

No codebase or Figma was attached. The system was synthesized from a **detailed text brief** the founder pasted into chat, which itself referenced two real sites:

- **Haven Annecy** — editorial typography, generous whitespace, hand-drawn line-art accents
- **Paput Menorca** — flat color blocks, marquee strips, oversized product cards, rotating stickers

If you have a Figma file or codebase, attach it and re-invoke this system to lift exact values.

---

## Index

| File / Folder | Purpose |
|---|---|
| `README.md` | This file. Brand context, content rules, visual foundations, iconography. |
| `SKILL.md` | Cross-compatible Agent Skill manifest. |
| `colors_and_type.css` | Color + type CSS variables (base + semantic). Import from any HTML. |
| `fonts/` | Google Font links + notes. (TTF fallbacks documented; not bundled.) |
| `assets/` | Logo, line-art doodles, sticker SVGs, banana-leaf textures. |
| `preview/` | Design-system cards (colors, type, components, brand). |
| `ui_kits/website/` | Sindhu marketing site recreation (`index.html` + JSX components). |

---

## CONTENT FUNDAMENTALS

### Voice

Warm, confident, a little cheeky. **Sindhu speaks like a Telugu friend who knows your hostel by name.** It mixes English with sprinkled Telugu phrases — never as a gimmick, always as a wink to the locals it feeds. Imagine the founder, not a brand team, writing the copy.

### Person & address

- **"We" for the brand**, **"you" for the eater.** First-person plural keeps it human ("we sealed the pot at 7am") rather than corporate ("Sindhu sealed the pot at 7am").
- Direct, not formal: "Hungry?" not "Are you hungry?"
- Telugu sprinkles speak *to* the reader, like a friendly elbow: *"Bagundi?"*, *"Inko plate?"*, *"Chala bagundi."*

### Casing

- **ALL CAPS** for product names and big banner moments: `DUM BIRYANI`, `HUNGRY? ORDER IN 60 SECONDS.`
- **lowercase** for storytelling and intimate prose: *"from a grandmother's kitchen in coastal andhra…"*
- **Title Case** is rare — used only in functional metadata (Kitchen Hours, Delivery Window).
- Mix sizes dramatically on the same page — giant display next to small handwritten ribbon.

### Tone examples

> **Hero headline:** "DUM-COOKED. DORM-DELIVERED."
> **Hero subhead:** "Sindhu — handcrafted biryani delivered to Mandadam & VIT-AP hostels."
> **Menu blurb:** "Slow-cooked over coals, sealed with dough. The classic that started it all."
> **Marquee:** "FRESH DUM • SLOW COOKED • SOUL SERVED • CHALA BAGUNDI • FRESH DUM •"
> **Coming-soon note (handwritten script):** *"More dishes coming soon. A poc a poc... slowly, slowly."*
> **Delivery zone:** "Mandadam village + VIT-AP University hostels. 522237. That's it. (We like keeping it close, like family.)"
> **Footer:** "© Sindhu 2026 — Made with love in Mandadam."

### Telugu usage

- Section headers can carry a Telugu translation as a smaller secondary line: `Mana Biryani` (Our Biryani), `Mana Katha` (Our Story).
- Telugu script (Devanagari/Telugu Unicode) used sparingly in the logo and special moments — never in body copy.
- Romanised Telugu is the workhorse — accessible to non-readers, warm to locals.

### Emoji & symbols

- **Almost never emoji in product copy.** A single 📍 in a "Delivering to…" chip is the exception.
- The four "Why Sindhu?" icons are **illustrated SVGs**, not emoji. (Brief mentions emoji-style labels — treat those as shorthand for an illustrated icon set, see Iconography.)
- The bullet between marquee phrases is a real `•` (U+2022) or a small line-art doodle (rice grain, chili, spoon).

### Don'ts

- ❌ No "Order now and get 20% off!" / discount-blast voice. This is a craft brand, not a daily-deals app.
- ❌ No corporate "we are committed to bringing you…" Sindhu doesn't announce; it serves.
- ❌ No exclamation pile-ups. One exclamation per page is plenty.

---

## VISUAL FOUNDATIONS

### Color

Saffron-soaked rice meeting modern design. Six-color palette, all warm-leaning except the mint accent. Backgrounds **alternate between cream and saffron full-bleed sections — never plain white.**

| Token | Hex | Role |
|---|---|---|
| `--saffron` | `#E8763A` | Hero color. Big surfaces, primary CTAs. Plays Paput's lime-green role. |
| `--brick` | `#A8341F` | Secondary warm. Marquee bands, accents, hover-darken on saffron. |
| `--cream` | `#F8F1E4` | Default page background. Calm canvas. |
| `--espresso` | `#2A1E17` | Body text and dark surfaces. Never pure `#000`. |
| `--mint` | `#7BA05B` | Coriander pop. Fresh / vegetarian signals, small accents only. |
| `--magenta` | `#D63384` | Surprise highlight. Stickers, badges, rare CTAs. Paput-style jolt. |

Pairings used in production:
- Cream background + espresso text + saffron CTA → the default editorial section.
- Saffron background + cream text + espresso doodle → hero, big bands.
- Brick background + cream text → marquee strips.
- Espresso background + cream text + saffron accent → footer.

### Typography

| Role | Family | Weights | Notes |
|---|---|---|---|
| Display | **Fraunces** | 600–900 | Slightly condensed serif with personality. Used MASSIVE (60–160px on desktop). |
| Body | **Inter** | 400, 500, 600 | Humanist sans. 16–18px body, 14px small. |
| Handwritten / script | **Caveat** | 500, 700 | Disclaimers, signatures, "a poc a poc" ribbon notes. |
| Telugu | **Noto Serif Telugu** | 500, 700 | సింధు logotype + section bilingual labels. |

All four are pulled from Google Fonts (see `fonts/README.md`). The brief named Recoleta / Editorial New / General Sans / Söhne as inspiration — those are paid families. **Fraunces is the closest free analogue to Recoleta/Editorial New, and Inter is the de facto Söhne substitute.** Flagged for you to swap if you license the real ones.

### Backgrounds

- **Full-bleed flat color** is the default. No gradients. No glassmorphism. No image hero overlays.
- **Cream and saffron alternate** down the page; brick is for marquee bands only; espresso for the footer.
- One section per page may carry a soft top-down photo on banana leaf (future, not in v1 mock).
- Hand-drawn line-art doodles (steam pot, rice grain, chili, banana leaf, spoon) scattered as section dividers and corner ornaments. Always in `--espresso` or `--brick`, never in saffron.

### Animation

- **Easing:** soft and editorial — `cubic-bezier(0.22, 1, 0.36, 1)` for entrances, `cubic-bezier(0.4, 0, 0.2, 1)` for transitions. No bounces. No springs.
- **Durations:** 180ms for hover, 280ms for state changes, 600–900ms for first-paint reveals.
- **Marquee:** continuous linear loop, ~40s per pass. Pauses on hover (optional).
- **Sticker rotation:** subtle wobble (±2°) on hover, not constant spin.
- **No parallax. No scroll-jacking.**

### Hover states

- Solid buttons: **darken 8–10%** (saffron → brick), no shadow change.
- Outline buttons: **fill with the outline color**, text flips to cream.
- Cards: **lift 6px** with a softer shadow, and tilt **−1°** (Paput-style lift-and-tilt).
- Text links: underline thickens; never color-shift.

### Press states

- Buttons **shrink to 0.97** and lose 2px of shadow — soft "press," not aggressive.
- Cards: scale 0.99, no tilt.

### Borders

- Primary border: `1.5px solid var(--espresso)` for outline buttons and editorial cards.
- Hairline: `1px solid rgba(42, 30, 23, 0.12)` for dividers inside cards.
- Marquee bands and full-bleed sections have **no borders** — they butt edge-to-edge.

### Shadow system

| Token | Value | Use |
|---|---|---|
| `--shadow-soft` | `0 4px 16px rgba(42, 30, 23, 0.08)` | Default card resting state |
| `--shadow-lift` | `0 12px 32px rgba(42, 30, 23, 0.16)` | Card hover |
| `--shadow-press` | `0 2px 8px rgba(42, 30, 23, 0.12)` | Button press |
| `--shadow-sticker` | `0 6px 18px rgba(168, 52, 31, 0.22)` | Magenta / saffron stickers |

No inner shadows. No multi-layer ambient shadows. Keep it flat-with-a-hint.

### Corner radii

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | `8px` | Chips, small tags |
| `--radius-md` | `20px` | Cards, panels |
| `--radius-lg` | `36px` | Hero illustrations frames, image masks |
| `--radius-pill` | `999px` | Buttons, marquee chips, badges |
| `--radius-blob` | Custom `border-radius: 62% 38% 56% 44% / 50% 60% 40% 50%` | Menu item photo masks (organic blob shapes) |

### Cards

- Background: `--cream` on saffron pages, **#FFFFFF with no border** is forbidden — always cream or a slight tint.
- Padding: 32px desktop / 24px mobile.
- Radius: `--radius-md` (20px) by default.
- Shadow: `--shadow-soft` at rest.
- Border: usually none; if present, `1.5px solid var(--espresso)` for emphasis.

### Layout rules

- Max content width: **1280px**, with **5vw side padding** on desktop, **20px** on mobile.
- 12-column grid on desktop, 4-column on mobile.
- **Breathe.** Section vertical padding: 120px desktop / 64px mobile minimum.
- Hero text margin-bottom: 32px before CTA cluster.
- Mobile-first. Most users are students on phones — thumb-friendly CTAs (min 56px tall), menu cards stack with 20px gap.

### Transparency & blur

- **Never used.** Sindhu is flat and confident. No frosted nav, no overlay scrims (except a pure-espresso 60% scrim if absolutely needed to legibilize text over a future photo).

### Imagery vibe (when real photos arrive)

- Top-down shots on banana leaves.
- Warm natural light (golden hour > studio lighting).
- Slight overhead steam, slight motion.
- Color: warm-toned, slightly desaturated, no cool blues.
- A subtle film grain is OK; no heavy filters.

### Fixed elements

- No sticky header. Top of page only.
- Order CTA appears as a **floating saffron pill** in the bottom-right after the user scrolls past the hero (mobile only).

---

## ICONOGRAPHY

Sindhu's iconography is **hand-drawn line art**, not a Material/Lucide-style geometric set. Think Haven Annecy's "GG"-line ornaments crossed with the casual marker sketches you'd see on a chalkboard menu.

### Approach

- **All custom SVGs**, kept in `assets/icons/`. Stroke-only, 2px stroke, rounded caps, no fills.
- Stroke color follows context: `--espresso` on cream, `--cream` on saffron / brick, `--brick` for accents.
- Default icon size: **40px** for the "Why Sindhu?" strip, **24px** for inline doodles, **120px+** for hero corner ornaments.
- **Never emoji in production UI.** A 📍 pin in the "Delivering to" chip is the single permitted exception (and even that ships as an inline SVG in `ui_kits/website/`).

### Icon set (custom, in `assets/icons/`)

| File | Use |
|---|---|
| `pot.svg` | Biryani pot with steam — hero corner ornament |
| `banana-leaf.svg` | Section divider, full-bleed corner |
| `rice-grain.svg` | Marquee separator, decorative bullets |
| `chili.svg` | Marquee separator, "spicy" tag accent |
| `spoon.svg` | Section divider |
| `flame.svg` | "Slow-cooked dum style" feature icon |
| `wheat.svg` | "Aged basmati" feature icon |
| `scooter.svg` | "30-min delivery" feature icon |
| `rupee.svg` | "Student-friendly pricing" feature icon |
| `pin.svg` | Delivery zone marker |
| `whatsapp.svg` `instagram.svg` `phone.svg` | Footer socials (custom redraws, not brand logos lifted) |

### Stickers (rotating circular badges)

Used 2–3 per page max, scattered like Paput's. Magenta or saffron fill, cream text, 12–14° rotation.

- `sticker-hostel-fav.svg`
- `sticker-dum-special.svg`
- `sticker-vitap-loved.svg`

### Substitution policy

If a screen needs an icon that isn't in the custom set, **draw a new line-art SVG in the same style** — do not reach for Lucide or Heroicons. A geometric utility icon will read as foreign immediately.

---

## Caveats

See the chat closing message for outstanding questions and asks for the founder.
