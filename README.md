# Kenny Dael Asan — Developer Portfolio

A dark editorial portfolio built in the existing React 19 / Vite 8 JavaScript project. Uses the already-installed Three.js, React Three Fiber, and Drei dependencies. No application dependencies were added.

## Run locally

Use Node.js 22.12+ (or another version supported by the installed Vite package).

```bash
npm ci
npm run dev
```

Open the Local URL printed by Vite.

```bash
npm run lint
npm run build
npm run preview
```

The production site is generated in `dist/`. This is a JavaScript project; no separate TypeScript check or unit-test command is configured.

## What is included

- Responsive single-page navigation with section tracking, a mobile menu, and a skip link.
- An interactive 3D phone showing the published RideOut app: drag to turn, switch between original navigation and ride-summary screens, or use the turn and pause controls.
- A static phone-and-screenshot fallback for reduced motion, data saving, unavailable WebGL 2, or a failed 3D scene. The main portfolio does not depend on the scene loading.
- All six resume projects, five working category filters, and accessible project-detail dialogs.
- RideOut previews extracted from the supplied recordings and a silent 24-second recording that plays only on request.
- Resume-derived about, grouped skills, employment, education, and CompTIA A+ certification.
- A downloadable PDF, email copying with truthful success/failure feedback, email/telephone links, GitHub, and LinkedIn.
- Local fonts, a favicon, social-preview artwork, SEO metadata, and a basic no-JavaScript content fallback.

## Content and architecture

| File | Responsibility |
| --- | --- |
| `src/data/portfolio.js` | Resume-derived profile, projects, contributions, links, skills, employment, education, and certification. Start here when editing content. |
| `src/App.jsx` | Page composition, about, toolkit, journey, and contact sections. |
| `src/components/Navigation.jsx` | Desktop/mobile navigation and active-section tracking. |
| `src/components/HeroShowcase.jsx` | Lazy loading, WebGL/motion checks, static fallback, scene controls, and error boundary. |
| `src/components/PhoneCanvas.jsx` | Geometry, lighting, pointer response, camera controls, and demand rendering when paused/offscreen. |
| `src/components/Projects.jsx` | Project filtering and selection. |
| `src/components/ProjectVisual.jsx` | Real RideOut screenshots and explicitly labeled conceptual illustrations for SentryDrive/Signify. |
| `src/components/ProjectDialog.jsx` | Project contributions, available external links, optional video, and keyboard/focus handling. |
| `src/components/Icon.jsx` | Consistent inline SVG icons. |
| `src/index.css` | Design tokens, layouts, responsive styles, interactions, and reduced-motion rules. |
| `index.html` | Page title, description, Open Graph/Twitter metadata, and no-JavaScript fallback. |
| `vite.config.js` | Vite, optimized-public-asset copying, and production URL metadata. |
| `vercel.json` | Vercel framework, build command, and output directory. |

There is no router dependency: section navigation uses native anchors, and project details use native modal dialogs. These details are not separate indexable project pages.

Change the palette through the CSS variables at the top of `src/index.css`. Edit page-specific editorial copy in `src/App.jsx`. When changing your identity or introduction, also update the static metadata, no-JavaScript fallback in `index.html`, and the social-preview artwork.

The same stylesheet defines a readable type scale: `--text-base` (1rem) for body copy, `--text-sm` (0.875rem) for controls and tags, and `--text-xs` (0.75rem) for supporting labels. Responsive layouts wrap content rather than shrinking these sizes on phones.

## Assets

- `public/media/`: optimized WebP project images and the approximately 737 KB RideOut clip.
- `public/documents/Kenny-Dael-Asan-Resume.pdf`: the downloadable copy of the supplied resume.
- `public/ride-out-assets/`: the original user-supplied assets. These remain available in development and are intentionally excluded from production output by the Vite plugin. Do not point portfolio content at this source folder; put web-ready derivatives in `public/media/`.
- `public/fonts/`: self-hosted Manrope and DM Sans, with their SIL Open Font License files.
- `public/og-image.svg`: editable social-card source. `public/og-image.png` is the exported 1200 × 630 image used by metadata.

The current production output is approximately 2.4 MB. The Three.js scene is a separate lazy-loaded chunk (approximately 269 KB compressed). Vite emits its normal large-chunk advisory for this optional scene; it is not a build failure. Reduced-motion and data-saving visitors do not download the scene chunk. Initial page rendering does not wait for 3D or video.

## Deploy to Vercel

The project follows the [Vercel Vite deployment workflow](https://vercel.com/docs/frameworks/frontend/vite).

1. Push the project to your Git provider and import it into Vercel, or deploy from your authenticated Vercel CLI.
2. Use the **Vite** framework preset, **`npm run build`** build command, and **`dist`** output directory. `vercel.json` supplies these settings.
3. Deploy. No API credentials, backend, or contact-service configuration is needed.
4. Optionally attach your custom domain in Vercel.

For CLI deployment from this folder, run `npx vercel` to sign in/link the project and create a preview. Run `npx vercel --prod` when ready to publish to production. `.vercelignore` excludes local tooling and original media from CLI uploads; optimized assets and the public resume copy are included.

With system environment variables enabled, the build reads Vercel’s [`VERCEL_PROJECT_PRODUCTION_URL`](https://vercel.com/docs/environment-variables/system-environment-variables#vercel_project_production_url) to emit absolute social-image URLs, a canonical URL, and `og:url`. To select a preferred domain explicitly, set **`SITE_URL`** to that full public origin, including `https://`, and rebuild. This setting contains no secret. For local testing, copy `.env.example` to `.env.local` and fill in `SITE_URL` if desired; ordinary local development requires no environment file.

This checkout has been prepared and tested locally; a live Vercel deployment has not been created.

## Optional content to add later

The portfolio is functional with the supplied material. Useful additions are real screenshots/videos for SentryDrive and Signify, project-specific public repository URLs, any available dates for the undated academic projects/certification, and a portrait if wanted. Those details have not been invented. Missing project links are omitted from the interface.

Contact uses working mail, copy, and telephone actions. There is no form or simulated message submission. GitHub links are direct links; the site does not fetch live GitHub statistics.

## Verification

See `docs/verification.md` for the checks performed and their limitations. The temporary browser QA packages are separate from this project's dependencies.
