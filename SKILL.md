---
name: sindhu-design
description: Use this skill to generate well-branded interfaces and assets for Sindhu — a biryani-focused restaurant in Mandadam (Amaravathi, AP 522237) serving the local neighbourhood and VIT-AP University hostel students. Contains essential design guidelines, colors, type, fonts, custom line-art icons, the brand logo, and a full website UI kit for prototyping. Brand mood: editorial craft (Haven Annecy) meets playful boldness (Paput Menorca), leaning ~60% playful.
user-invocable: true
---

# Using the Sindhu design system

Read `README.md` first for the full brand context, content fundamentals, visual foundations, and iconography rules. Then explore:

- `colors_and_type.css` — drop into any HTML to inherit color + type tokens. Add `class="sindhu"` to `<html>` or a wrapper for default body/heading styling.
- `assets/` — logo, custom line-art icons (`assets/icons/`), rotating stickers (`assets/stickers/`), the hand-drawn delivery map, and a stylised top-down biryani placeholder.
- `preview/` — small standalone cards showing every token, component, and brand mark in use. Useful as canonical examples.
- `ui_kits/website/` — full landing-page recreation in React + JSX. Lift components for new mocks.

## When making visual artifacts (slides, mocks, throwaway prototypes)

1. Copy `colors_and_type.css` and the `assets/` you need into the artifact's folder.
2. Reference tokens (`var(--saffron)`, `var(--font-display)`, etc.) instead of hard-coding values.
3. Use the line-art SVGs from `assets/icons/` — **never reach for emoji or geometric utility icons (Lucide, Heroicons, etc.)**. They will read foreign immediately. If you need an icon that doesn't exist, draw a new SVG in the same 2px-stroke / rounded-cap style.
4. Honor the alternating cream / saffron background rhythm. Never plain white.
5. ALL CAPS for product names and banner moments. Lowercase for storytelling.

## When working on production code

1. Inline the `@import` from `colors_and_type.css` into your global stylesheet.
2. Convert tokens to your framework's preferred form (Tailwind theme, CSS module variables, etc.).
3. Replicate the components from `ui_kits/website/` — they intentionally cut corners on functionality and exist as visual references. Re-implement with real state, ordering, and routing.

## Default behaviour when this skill is invoked without further guidance

Ask the user what they want to build or design. Some common asks for Sindhu:

- A new section of the marketing site (FAQ, gallery, press, events)
- Instagram post / story templates
- Menu card printables for the kitchen
- WhatsApp order-confirmation message templates
- A founder pitch deck

Then act as an expert designer, output an HTML artifact (or production-shaped code, if asked), and stay in-system: tokens, custom line-art icons, alternating backgrounds, the voice rules from CONTENT FUNDAMENTALS in `README.md`.

## Critical brand rules — do NOT break

- ❌ No pure white backgrounds. Cream `#F8F1E4` is the lightest surface.
- ❌ No pure black. `#2A1E17` (`--espresso`) is the darkest.
- ❌ No emoji in production UI. One 📍 in the "Delivering to…" chip is the only exception, and it ships as inline SVG.
- ❌ No gradients, no glassmorphism, no frosted nav. Sindhu is flat and confident.
- ❌ No discount-blast voice ("Order now and save 20%!"). Sindhu doesn't announce; it serves.
- ❌ No Material/Lucide/Heroicons. Hand-drawn line art only.
