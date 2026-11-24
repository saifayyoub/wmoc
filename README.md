# World Merit Oujda Council

Static website for the World Merit Oujda Council. Built with plain HTML, CSS and JavaScript — no build step.

## Files

- `index.html` — page content and structure
- `style.css` — styling
- `script.js` — events list, mobile menu, active nav highlighting and join form
- `vercel.json` — tells Vercel this is a static site with no build command

## Run locally

```bash
cd wmoc
python -m http.server 8000
```

Then open http://localhost:8000.

## Edit content

- **Club facts, vision, contact details:** `index.html`
- **Events:** the `events` array at the top of `script.js`
- **Join form:** currently shows a success message in the browser only. To collect real applications, connect it to a backend, Google Form or email service in `script.js`.

The club principles follow the official World Merit wording: inclusivity, member-driven, collaborative, plus the council promise to learn, act, connect and grow. Sources: https://worldmerit.org/about-world-merit and https://worldmerit.org/programmes/councils

## Deploy to Vercel

1. Push this folder to GitHub (repo `wmoc`).
2. In Vercel, choose **Add New → Project**, import the `wmoc` repo and click **Deploy**.
   Framework preset: **Other / None**. Build command: empty. Output directory: root.
3. Every future push to `main` redeploys automatically.
