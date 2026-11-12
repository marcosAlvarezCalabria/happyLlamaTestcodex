# Happy Llama Reminder

Static Astro implementation of `SPEC-HL-004`: one root URL with a Spanish creator mode and an English recipient mode.

## Run locally

```powershell
npm install
npm run dev
```

- `npm install` downloads the project dependencies.
- `npm run dev` starts Astro's local development server and prints the preview URL.

## Verify and build

```powershell
npm run check
npm run build
```

- `npm run check` validates Astro and TypeScript files.
- `npm run build` creates the static site in `dist/`.

The `dist/` folder can be dragged into Netlify Drop. There are no server functions, secrets, database, login, or analytics.

## How the two modes work

- `/` opens the creator.
- `/?id=abc12&t=Hello&b=0&f=With%20love` opens the viewer.
- `t` is the message, `f` the optional sign-off, and `b` the scene from 0 to 7.
- The viewer opens as one full-height reminder rather than a multi-section website.

## Artwork

- Tap motion: `public/assets/hero/happy-llama-tap-walk.mp4` is the four-second Higgsfield walking animation; its matching WebP poster keeps the reminder still until the recipient taps.
- Creator preview: `public/assets/llama/cream-cutout.webp` is a transparent background extraction derived from the supplied product image.
- Scenes: the eight supplied photographs live in `public/assets/scenes/` as WebP files.
- Logo: `public/assets/brand/happy-llama-logo.png` is the supplied company logo.

## Privacy and offline behaviour

All reminder content is encoded in the URL. No personal data is submitted. A small service worker caches the local shell and artwork after the first successful production load so the reminder remains usable during a later connection loss.
