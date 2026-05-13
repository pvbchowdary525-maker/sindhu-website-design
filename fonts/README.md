# Fonts

Sindhu uses **four families**, all currently pulled from **Google Fonts** via a single `@import` in `colors_and_type.css`. No local `.ttf`/`.woff2` files are bundled — the import URL is the source of truth.

## Families in use

| Role | Family | Source | Substitution note |
|---|---|---|---|
| Display | **Fraunces** | Google Fonts | Substituted for **Recoleta / Editorial New** named in the brief. Fraunces has a similarly bold, slightly condensed editorial serif with strong personality. Closest free analogue. ⚠️ Flag to user. |
| Body | **Inter** | Google Fonts | Substituted for **Söhne / General Sans**. Inter is the established neutral humanist sans on the web. ⚠️ Flag to user. |
| Handwritten / script | **Caveat** | Google Fonts | Substituted for **GG-style** signature script implied by Haven references. Caveat reads as a casual marker; close enough for v1. ⚠️ Flag to user. |
| Telugu | **Noto Serif Telugu** | Google Fonts | Direct match — no substitution. |

## How to swap to licensed fonts

If you license Recoleta / Editorial New / Söhne / General Sans:

1. Drop the woff2 files into this folder.
2. Replace the `@import` at the top of `colors_and_type.css` with `@font-face` blocks pointing at the local files.
3. Update `--font-display` and `--font-body` in `:root` to lead with the licensed family. Keep Fraunces/Inter as fallbacks so anything that hasn't been re-tested still renders.

## Loading

The single `@import` keeps things simple but blocks render briefly. For production, consider moving to `<link rel="preconnect">` + `<link rel="stylesheet">` in the document `<head>` for parallel loading:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,800;9..144,900&family=Inter:wght@400;500;600;700&family=Caveat:wght@500;700&family=Noto+Serif+Telugu:wght@500;700&display=swap" rel="stylesheet">
```
