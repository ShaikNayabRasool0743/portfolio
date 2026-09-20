# Portfolio Deployment Guide

A guide for deploying **Shaik Nayab Rasool's Personal Portfolio** to Netlify for free via GitHub.

---

## 1. Local Development

Install all dependencies:
```bash
npm install
```

Run the local development server:
```bash
npm run dev
```

Visit `http://localhost:5173` to view the website locally.

---

## 2. Production Build

Compile TypeScript and build the optimized production assets:
```bash
npm run build
```

This will create or update the `dist/` directory with:
- `dist/index.html`
- `dist/assets/` (bundled JS & CSS)
- `dist/_redirects` (Netlify SPA routing rules)
- Static assets (`profile.png`, `resume.pdf`, `favicon.svg`, `robots.txt`, `sitemap.xml`)

---

## 3. Production Preview

Test the production build locally before deploying:
```bash
npm run preview
```

Open the preview URL in your browser and verify:
- Homepage loads cleanly: `http://localhost:4173/`
- Deep project routes work:
  - `http://localhost:4173/projects/sales-data-analysis`
  - `http://localhost:4173/projects/fake-news-detection`
  - `http://localhost:4173/projects/url-shortener`
- Resume viewing and downloading functions properly.

---

## 4. Push to GitHub

1. Create a new empty repository on GitHub (e.g. `shaik-portfolio` or `portfolio`). Do not initialize it with a README or license if you already have this local code.
2. In your local project folder (`C:\Users\shaik\.gemini\antigravity\scratch\shaik-portfolio`), initialize and commit your files:

```bash
git init
git add .
git commit -m "Initial production portfolio release"
git branch -M main
```

3. Connect your GitHub remote and push (replace `YOUR_USERNAME` and `YOUR_REPOSITORY` with your actual GitHub details):

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

---

## 5. Deploy on Netlify (Free Plan)

1. Log into your [Netlify](https://app.netlify.com/) account.
2. Click **Add new project** &rarr; **Import an existing project**.
3. Select **GitHub** as your Git provider and authorize Netlify.
4. Select your portfolio repository from the list.
5. In the **Site configuration** screen, configure the following:
   - **Branch to deploy**: `main`
   - **Base directory**: *(leave empty)*
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **Deploy site**.
7. Netlify will run `npm run build` and publish your site at a free `https://<site-name>.netlify.app` domain.

---

## 6. SPA Direct Route Handling

Because this application uses client-side routing (`react-router-dom`), opening deep routes directly (or refreshing a route like `/projects/fake-news-detection`) requires Netlify to serve `index.html`.

This is pre-configured via:
- `public/_redirects`:
  ```text
  /*    /index.html   200
  ```
- `netlify.toml`:
  ```toml
  [build]
    command = "npm run build"
    publish = "dist"

  [[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200
  ```

During `npm run build`, Vite copies `public/_redirects` directly into `dist/_redirects`, ensuring 0 404 errors on direct navigation or page refresh.

---

## 7. Recommended Netlify Site Name

In Netlify under **Site configuration** &rarr; **Change site name**, choose a clean name:
- `shaiknayabrasool.netlify.app` (Recommended)
- `shaik-nayab-rasool.netlify.app`
- `nayabrasool-portfolio.netlify.app`

---

## 8. Continuous Deployment & Future Updates

Whenever you make changes in the future, commit and push to GitHub:
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```
Netlify will automatically detect the new commit on `main`, run the build command, and update the live website within seconds.
