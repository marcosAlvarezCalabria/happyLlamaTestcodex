# Walk colour and outline regression — 2026-11-12

## Impact

Production deploy `6af5d7009182866552a6d645` changed the llama's colour and showed a dark contour when the recipient tapped it to walk. Deploy `6af62d2972094349c1d6532f` aligned the colour but still showed accumulated silhouettes from earlier frames during playback.

## Cause

- The resting image (`happy-llama-walk-rest-v2.webp`) and animated image (`happy-llama-walk-v3.webp`) came from differently graded exports.
- The shared CSS `drop-shadow` followed the animated WebP's hard alpha boundary and read as an outline around the moving llama.
- Every full-canvas `ANMF` frame in the animated WebP was encoded to alpha-blend over the previous frame without disposal. Transparent areas therefore retained earlier poses and produced a visible trail.

## Correction

- The resting asset is now a lossless export of the animated asset's opening frame, so both states begin with identical visible pixels and alpha.
- The silhouette-following drop shadow was removed from the viewer llama.
- All 120 animated WebP frames now replace the full canvas instead of blending over it.
- The corrected asset URLs are versioned as `v5` and the service-worker cache is advanced to `v16` so clients do not reuse either defective animation.

## Verification

- `astro check` completes with no errors.
- `astro build` completes successfully.
- The Impeccable detector reports no findings for the changed UI files.
- A twelve-frame sample spanning the complete animation shows one clean llama pose per frame with no accumulated silhouettes.
- At a 390 × 844 mobile viewport, the resting and walking states keep the same colour and clean edge, the `v5` animation loads, and the viewer returns to rest after playback.

## Prevention

Generate the resting frame from the exact delivered motion asset, encode full-canvas transparent WebP frames with no blending, version both URLs together, and inspect samples across the full animation over a real scene in viewer QA.
