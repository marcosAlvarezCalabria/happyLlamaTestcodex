# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- The Happy Llama owner creates a keepsake link on a phone at a market stall or after an online sale.
- The recipient, often a child or family member outside Ireland, opens the keepsake in a mobile browser by tapping an NFC tag.

## Product Purpose

Create a personal, lightweight digital memory that travels with a physical Happy Llama: a message, a Galway–Peru scene, and a llama the recipient can dress up. Success means the seller can create a valid link in moments and the recipient can enjoy it without installing an app.

## Positioning

The keepsake is carried entirely by one NFC-safe URL; the recipient's outfit is stored only on that device and for that card. There is no account, server, database, adoption flow, or in-experience shopping.

## Operating Context

The seller writes a short message, optional sign-off, and chooses one of six scenes. The generated URL is written to the llama's NFC pendant with NFC Tools. A recipient later opens that URL in a default iPhone or Android browser.

## Capabilities and Constraints

- Static Astro output for Netlify; no SSR, functions, database, login, analytics, chat, location, or checkout.
- Creator and viewer share the root URL and are selected from query parameters.
- Message and scene travel in the URL. Outfit state persists in `localStorage` using the card ID.
- Mobile-first, narrow-screen and low-end Android support; 44px minimum touch targets and reduced-motion support.
- Viewer language is English. Creator language is Spanish.
- Real transparent llama photography and generated Galway/Peru scenes are not supplied yet; the build must work with clearly replaceable local placeholders.

## Brand Commitments

The product is Happy Llama: warm, handcrafted, playful, gift-oriented, and never corporate. Use Nunito, the action pink `#FF0088`, dark text on a light base, and the supplied Happy Llama logo. The brand story connects work made in Peru and finished in Galway.

## Evidence on Hand

- Product specification: `C:\Users\Marcos\Downloads\spec-hl-004.md`.
- Supplied logo: `C:\Users\Marcos\AppData\Local\Temp\codex-clipboard-2fa52394-64cf-4f43-b15e-7953bb6962fc.png`.
- Official site: `https://www.happyllama.ie/`; its current catalogue confirms llama hats, sunglasses, glasses, and headphones.
- No real cut-out llama image, fitted accessory layers, testimonial, metric, or final scene image was supplied for this build. Future work must not present placeholders as product photography.

## Product Principles

- One joyful tap from physical keepsake to personal memory.
- Keep creation fast enough for a busy market stall.
- Let the recipient play without collecting data or requiring an account.
- Make every media layer replaceable without changing application logic.
- Prefer lightweight, resilient browser features over dependencies.

## Accessibility & Inclusion

The experience must be usable by children and on narrow mobile screens, with clear labels, large touch targets, strong contrast, keyboard access, and motion that respects `prefers-reduced-motion`.
