# Mark Wexler — markwexler.com

The site build in the **editorial (Lexicon)** direction — Mark's selected
concept. His work as a published journal: frameworks rendered as dictionary
entries, paper/ink/oxblood palette, editorial typography.

This is the design reference for the WordPress theme + plugin build that follows.
The alternate *modern/minimal* concept is archived in its own repo
(`mark-wexler-modern`, private).

## Pages

| File | Route | What it is |
|------|-------|------------|
| `index.html`      | `/`           | Homepage — cover, manifesto, the Lexicon, seven keynotes, Proof Points, Changemaker Chronicles module |
| `consulting.html` | `/consulting` | The Montara Circle methodology + consulting services |
| `press.html`      | `/press`      | Press & Media — featured coverage, awards, media contact |
| `insights.html`   | `/insights`   | Insights — talks, panels, and the film teaser (videos) |
| `contact.html`    | `/contact`    | Contact — speaking & consulting inquiry form |

Navigation (all pages): **About · Press & Media · Consulting · Check Availability.**
The footer's *Explore* column mirrors the nav exactly.

## Structure

Shared assets, so the multi-page site maps cleanly onto a WordPress theme
(`header` / `footer` partials + page templates):

```
index.html, consulting.html, press.html, insights.html, contact.html
assets/
  site.css                     shared design system
  app.js                       nav, scroll reveals, count-up stats, form handling
  mark.jpg                     hero portrait
  Mark_Wexler_Speaker_Pack.pdf downloadable speaker pack
```

Fonts load via Google Fonts (Archivo, Newsreader, IBM Plex Mono).

## Deploy on GitHub Pages

Settings → Pages → deploy from branch `main`, root. The site is served at the
repo root (`index.html`).

## Placeholders to confirm before launch

- **Email addresses** — `booking@markwexler.com`, `media@markwexler.com` are placeholders.
- **LinkedIn URL** — `linkedin.com/in/mark-wexler` is a placeholder.
- **Contact form** — currently shows an inline confirmation (mockup). Wire to
  Mark's inbox in the WordPress build.
- **Press logo bar** — rendered as monochrome wordmarks (CNN, Forbes, CNBC, Fast
  Company, TechCrunch, USA Today, VICE, MarketWatch). Swap for real logo files if desired.
- Figures shown: **$100M+** capital raised, **~500K** reached, **60K** largest audience,
  **$2M+** returned to Not For Sale by REBBL.
