# Revival Fit — Polished Static Site

This repository contains a single‑page website for Revival Fit. The design has been refined for a premium, high‑end presentation while keeping the code simple and easy to edit.

Overview
- Single page layout: Header, Hero, Framework, Membership, About, Contact, Footer.
- Clean, minimal design with refined typography, spacing, and subtle motion for a high‑quality feel.
- Uses mailto links for signups and contact; can be swapped for a backend or payment provider later.

Files added
- index.html — main site
- assets/css/styles.css — refined styles and responsive layout
- assets/js/main.js — small client-side handlers (subscribe + contact)
- CNAME — sets custom domain to revival.fit

Deploying to GitHub Pages
1. These files have been committed to the `main` branch. GitHub Pages can serve from `main` (root).
2. Settings → Pages: set Custom domain to `revival.fit` if not already set. The CNAME file is included.
3. Confirm DNS: revival.fit should point to GitHub Pages A records and allow HTTPS provisioning.

Notes
- Buttons use mailto links for now; replace with a payment or subscription provider when ready.
- The site is intentionally simple — easy to iterate on and extend when you want to add backend features.
