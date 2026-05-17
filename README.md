# Anvay Moghe | ENGL398B ePortfolio

A single-page ePortfolio for **ENGL398B: Writing for Social Entrepreneurs** — built with Vite, React, and TypeScript.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Use these settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`

No environment variables are required.

## Pitch video (MP4)

1. Copy your file into the project as `public/pitch-video.mp4`.
2. In `src/data.ts`, `pitchVideoSrc` should be `'/pitch-video.mp4'` (this is the default).
3. Rebuild or refresh the dev server.

The site uses a standard HTML `<video>` player—no YouTube or paid hosting required. Keep the file reasonably small (under ~50 MB) so deploys stay fast.

## Editing content

Most copy lives in `src/data.ts`. Section layout and narratives are in `src/App.tsx`.
