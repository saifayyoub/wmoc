# World Merit Oujda Council

Static website for the World Merit Oujda Council. Built with plain HTML, CSS and JavaScript — no build step.

## Files

- `index.html` — page content and structure
- `style.css` — styling
- `script.js` — events list, mobile menu, active nav highlighting and join form
- `vercel.json` — tells Vercel this is a static site with no build command
- `thanks.html` — thank-you page shown after a successful form submission

## Run locally

```bash
cd wmoc
python -m http.server 8000
```

Then open http://localhost:8000.

## Edit content

- **Club facts, vision, contact details:** `index.html`
- **Events:** the `events` array at the top of `script.js`
- **Join form:** submits to FormSubmit.co, which emails applications to `worldmeritoujda@gmail.com`. On first use, check that inbox and click the confirmation link FormSubmit sends; then submit a test to verify delivery. The visitor is redirected to `thanks.html`.

The club principles follow the official World Merit wording: inclusivity, member-driven, collaborative, plus the council promise to learn, act, connect and grow. Sources: https://worldmerit.org/about-world-merit and https://worldmerit.org/programmes/councils

## Deploy to Vercel

1. Push this folder to GitHub (repo `wmoc`).
2. In Vercel, choose **Add New → Project**, import the `wmoc` repo and click **Deploy**.
   Framework preset: **Other / None**. Build command: empty. Output directory: root.
3. Every future push to `main` redeploys automatically.
