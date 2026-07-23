# Project demo videos

Drop your demo clips here, then reference the filename in `data/content.ts`.

## How to wire a video

1. Export a short screen recording (MP4, H.264, ideally < 15 MB, muted or with audio).
2. Save it here, e.g. `artha-demo.mp4`.
3. (Optional) Save a poster/thumbnail frame in `/public/images/`, e.g. `artha-poster.jpg`.
4. In `data/content.ts`, on the matching project, set:

   ```ts
   video: "artha-demo.mp4",
   poster: "artha-poster.jpg", // optional
   ```

That's it. The player is lazy (`preload="none"`) — nothing downloads until a
visitor clicks play, so videos never hurt your Lighthouse score on load.

## Suggested filenames (match the ids in content.ts)

- `artha-demo.mp4`            → Artha.ai
- `resume-analyzer-demo.mp4`  → AI Resume Analyzer
