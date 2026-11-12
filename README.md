# Happy Llama Keepsake

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
- `t` is the message, `f` the optional sign-off, and `b` the scene from 0 to 5.
- The selected outfit is stored in the browser under `happy-llama-outfit:<id>` and never leaves the device.

## Replace the demo artwork

The current llama and scenes are illustrated placeholders. Do not present them as real product photography.

- Hero image: replace `public/assets/hero/llama.svg` with the real cut-out while keeping the same filename, or update the path in `Hero.astro`.
- Dress-up base: replace `public/assets/llama/base.svg`.
- Scenes: replace the six files in `public/assets/scenes/` while keeping their filenames.
- Accessories: replace the aligned layers in `public/assets/accessories/`. Each layer uses the same 500 × 600 canvas as the base llama.
- Logo: `public/assets/brand/happy-llama-logo.png` is the supplied company logo.

For production, the real llama photograph and every accessory PNG should be exported to exactly the same transparent canvas so the layers stay aligned.

## Privacy and offline behaviour

All card content is encoded in the URL. No personal data is submitted. A small service worker caches the local shell and artwork after the first successful production load so dress-up remains usable during a later connection loss.
