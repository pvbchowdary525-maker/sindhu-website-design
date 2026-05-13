# Sindhu — biryani site

Static site. Drop on Vercel as-is. No build step.

## Files

- `index.html` — single page, React via CDN
- `colors_and_type.css` — design tokens
- `styles.css` — layout + components
- `assets/` — logo, icons, stickers, placeholder, map
- `vercel.json` — clean URLs + cache headers

## Deploy

### Option A — drag & drop (fastest)
1. Go to https://vercel.com → New Project → "deploy without a Git repo" (or use Vercel CLI)
2. Drag entire folder
3. Done. Live URL appears.

### Option B — Git
```
git init
git add .
git commit -m "sindhu site"
git remote add origin <your-repo>
git push -u origin main
```
Then import repo on Vercel. Framework preset: **Other**. No build command. Output dir: `.` (root).

### Option C — Vercel CLI
```
npm i -g vercel
vercel
```

## What's wired
- WhatsApp number: **+91 73960 18423** (in `index.html` → `WHATSAPP_NUMBER`)
- All "Order Now" / menu card taps open WhatsApp draft on your number
- Instagram, phone, footer links — edit constants at top of `<script>` block

## Adding real photos
Drop JPGs into `assets/photos/` with these exact names:
- `dum-biryani.jpg`
- `fry-biryani.jpg`
- `mix-biryani.jpg`
- `story.jpg`

Until then, SVG placeholder auto-fills.

## Production note
Currently using in-browser Babel (great for v1, slower first paint). When ready, convert to Vite + React for ~3x faster load. Ask Claude to do that step when you want it.
