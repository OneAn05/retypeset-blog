---
title: Theme feature check (local draft)
published: 2026-07-30
description: Local-only checks for Markdown and media features.
tags:
  - internal
draft: true
toc: true
lang: zh
abbrlink: theme-feature-check
---

This local-only draft verifies the theme features that are not present in the
published articles. It is available during `pnpm dev` only and is excluded from
production builds.

## Math

Inline math: $E = mc^2$.

$$
\int_0^1 x^2\,dx = \frac{1}{3}
$$

## Code copy

```ts
const message = 'The copy button should copy this line.'
console.log(message)
```

## Mermaid

```mermaid
flowchart LR
  A[Markdown] --> B[Astro]
  B --> C[Rendered page]
```

## Image zoom

![Local test image](/icons/og-logo.png)

## Media embeds

::youtube{id="9pP0pIgP2kE"}

::bilibili{id="BV1sK4y1Z7KG"}

::spotify{url="https://open.spotify.com/track/0HYAsQwJIO6FLqpyTeD3l6"}
