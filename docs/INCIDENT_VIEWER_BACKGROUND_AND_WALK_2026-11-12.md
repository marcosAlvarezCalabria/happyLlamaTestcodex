# Viewer background and walk regression — 2026-11-12

## Impact

Production deploy `6af59d443aa27a885b0632f0` rendered the selected scene independently on the outer reminder and the inner hero, which looked like two different backgrounds. Mobile browser overscroll could expose the root paper-white background below the reminder. The replacement CSS walk moved the llama too little to read as walking.

## Cause

- `--scene-image` was used as a background on both `.reminder-card` and `.hero-stage`.
- The viewer did not override the document root's paper background.
- The walk keyframes only shifted the cutout through a narrow horizontal range.

## Correction and prevention

The selected scene is now painted once on the reminder; the hero is transparent over it. Viewer root and overscroll surfaces use the ink colour. The tap sequence crosses a visibly larger distance, forces a reliable animation restart, and resets on `animationend`. Mobile QA must include the page edge and a mid-animation frame, not only the resting hero.
