# Walk colour and outline regression — 2026-11-12

## Impact

Production deploy `6af5d7009182866552a6d645` changed the llama's colour and showed a dark contour when the recipient tapped it to walk.

## Cause

- The resting image (`happy-llama-walk-rest-v2.webp`) and animated image (`happy-llama-walk-v3.webp`) came from differently graded exports.
- The shared CSS `drop-shadow` followed the animated WebP's hard alpha boundary and read as an outline around the moving llama.

## Correction

- The resting asset is now a lossless export of the animated asset's opening frame, so both states begin with identical visible pixels and alpha.
- The silhouette-following drop shadow was removed from the viewer llama.
- The asset URLs were versioned as `v4` and the service-worker cache was advanced to `v15` so clients do not reuse the old pair.

## Verification

- `astro check` completes with no errors.
- `astro build` completes successfully.
- The Impeccable detector reports no findings for the changed UI files.
- At a 390 × 844 mobile viewport, the resting and walking states keep the same colour and clean edge, the `v4` animation loads, and the viewer returns to rest after playback.

## Prevention

Generate the resting frame from the exact delivered motion asset, version both URLs together, and include a mid-animation mobile screenshot over a real scene in viewer QA.
