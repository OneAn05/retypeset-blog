# 恋爱笔记

A multilingual static blog built with [Astro](https://astro.build/). It preserves the typography-focused layout and blog features of its upstream reference while providing neutral starter branding for your own site.

## Features

- Astro, TypeScript, and UnoCSS
- Chinese, English, Spanish, Japanese, Russian, and Traditional Chinese routes
- Markdown and MDX posts, tags, RSS, Atom, sitemap, robots.txt, and Open Graph images
- Responsive typography, light/dark mode, view transitions, table of contents, KaTeX, Mermaid, code-copy buttons, image zoom, and media embeds
- Optional Giscus, Twikoo, Waline, analytics, and remote image settings, disabled by default

## Requirements

- Node.js 24 or later
- pnpm 10 or later
- Git

## Local Development

```bash
pnpm install
pnpm dev
```

Use `pnpm lint` for linting and `pnpm build` for a production build. Create a new post with `pnpm new-post <file-name>`.

## Customize

Update `src/config.ts` with your name, GitHub username, site URL, social links, and optional external service credentials. Update the six entries in `src/i18n/ui.ts` and the Markdown files under `src/content/` with your own content.

The default GitHub Pages configuration publishes to `https://onean05.github.io/retypeset-blog/`.

## GitHub Pages

1. Create a GitHub repository named `retypeset-blog` under your account.
2. Confirm that `OneAn05` is your GitHub username in `src/config.ts` and `package.json`.
3. Push the `main` branch to GitHub.
4. In the repository settings, set Pages > Build and deployment > Source to **GitHub Actions**.

The included workflow builds and deploys the site on every push to `main`.

## License and Credits

This project is distributed under the [MIT License](LICENSE), including the upstream copyright notice required by that license.

It is based on [Astro Theme Retypeset](https://github.com/radishzzz/astro-theme-retypeset), which credits [Typography](https://github.com/moeyua/astro-theme-typography), [Fuwari](https://github.com/saicaca/fuwari), [Redefine](https://github.com/EvanNotFound/hexo-theme-redefine), [AstroPaper](https://github.com/satnaing/astro-paper), [heti](https://github.com/sivan/heti), and [EarlySummerSerif](https://github.com/GuiWonder/EarlySummerSerif).
