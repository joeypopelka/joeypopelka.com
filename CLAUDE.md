# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static personal website for joeypopelka.com. Plain HTML/CSS/vanilla JS — no build step, no framework, no dependencies. Deployed via GitHub Pages from the `main` branch; the `CNAME` file binds the custom domain, so changes pushed to `main` go live directly.

## Running locally

Open `index.html` in a browser, or serve the directory (e.g. `python -m http.server`) to mirror GitHub Pages path behavior. There is no build, lint, or test setup.

## Architecture

Single-page app with hash-based routing across three files:

- **`index.html`** — Page shell. `<main>` holds one `<section>` per "page" (`#home`, `#contact`), each keyed by `id`. The header is injected, not authored here: `<div id="site-header">` is filled by `components.js`.
- **`components.js`** — Renders the shared header (`#site-header.innerHTML`) and runs the router. `navigate()` shows the section whose `id` matches `window.location.hash` (defaulting to `#home`) by toggling the `hidden` attribute on every other section. It runs on load and on `hashchange`.
- **`styles.css`** — All styling. Uses the Jost font (Futura alternative) from Google Fonts; the accent color is `#8B3223`.

### Adding a "page"

1. Add a `<section id="newpage">` inside `<main>` in `index.html` (mark it `hidden` if not the default).
2. Add a `<a href="#newpage">` link to the `<nav>` markup inside `components.js`.

The router needs no changes — it matches sections to nav links by `id`/hash automatically.

## Assets

Images live in `pictures/`. Note filenames contain spaces (e.g. `Coonley Combo.png`), so reference them exactly as-is in `src` attributes.
