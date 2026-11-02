# Verification

Verified locally on November 1, 2026 against the production Vite build, using Chromium through Playwright. Desktop and mobile screenshots were also visually inspected. Browser tooling was installed in a temporary directory, without modifying the application dependencies.

## Build checks

- `npm run lint` — passed.
- `npm run build` — passed.
- Production output is approximately 2.4 MB; the supplied 129 MB source asset folder is excluded while originals remain intact.
- The separate 3D chunk is approximately 269 KB compressed. Vite reports its standard large-chunk advisory; the chunk remains lazy loaded.
- The existing 3D dependency combination can emit a `THREE.Clock` deprecation warning. It is an upstream warning, distinct from the zero console errors observed during browser checks.
- Configured production-origin handling was checked for canonical, `og:url`, and absolute Open Graph/Twitter image URLs.

## Browser checks

- Production page and WebGL scene load without browser console errors, page exceptions, or failed local asset requests.
- The RideOut 3D phone renders the actual application screenshots. Navigation/ride-summary screen selection, pause/resume, and phone-turn controls operate.
- All five project filters return the expected project sets.
- All six project dialogs display their associated resume-derived content.
- Dialog keyboard navigation stays inside the dialog; Escape closes it and restores focus to the opener.
- The original RideOut clip plays successfully in the project dialog.
- Skill accordions reveal the corresponding technologies.
- The updated toolkit shows all five groups expanded initially and all 41 skills as accessible icon tiles. All 29 local SVG logos loaded; hover, keyboard focus, Escape, category toggling, and touch tooltips passed browser checks. Tooltip positioning stayed within the mobile viewport, and desktop/mobile axe scans found zero violations in tested states.
- Resume download returns a valid PDF.
- Email copy writes the correct address to the clipboard and reports success.
- Automated axe checks with WCAG 2 A/AA, 2.1 AA, and 2.2 AA tags found zero violations in the tested desktop and mobile page states.
- No horizontal overflow at 320, 390, 768, 1024, and 1440 pixel widths.
- After the readability pass, browser-computed text sizes were checked at 320, 360, 390, 768, 960, 1024, and 1440 pixel widths: no visible DOM text below 12px, project body copy stays at 16px, and no horizontal page overflow. Mobile dialog descriptions and contributions remain 16px. Desktop and mobile-dialog axe scans reported zero violations in the tested states.
- Mobile navigation opens, closes after a selection, and supports Escape with focus restoration.
- Reduced motion renders a static phone preview, avoids downloading the 3D chunk, and disables smooth scrolling.
- Simulated unavailable WebGL renders the static fallback while keeping all portfolio content accessible.
- JavaScript disabled still exposes identity, selected work, email, GitHub, and resume download through the HTML fallback.
- Additional checks passed for the mobile RideOut dialog's automated accessibility scan, denied clipboard access with truthful fallback feedback, simulated data-saving mode, and the no-JavaScript layout at 320 pixels.

## Limits

Automated accessibility checks do not constitute a complete accessibility audit. Screen-reader testing, physical mobile-device testing, Safari/Firefox testing, and a production Lighthouse run have not been performed. Software-rendered Chromium testing does not establish frame rates or GPU/battery performance on visitors' devices.

External sites and app-store availability are outside the portfolio's control. Outgoing URLs were extracted from the supplied resume; no missing project repositories or results were invented. Vercel configuration is supplied, but no authenticated live deployment has been performed.
