# Shaik Nayab Rasool — Portfolio

A personal portfolio website and interactive resume for **Shaik Nayab Rasool**, an AI/ML Developer, Python Developer, and Computer Science Graduate from Ongole, Andhra Pradesh, India.

Built with a modern, high-performance web stack featuring clean architecture, dual dark/light themes inspired by modern editorial engineering platforms, accessible navigation, and deep project case studies.

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler / Build Tool**: Vite 8
- **Styling**: Tailwind CSS (with custom design system CSS variables)
- **Routing**: React Router 7 (SPA with Netlify direct route redirects)
- **Animations**: Framer Motion (with `prefers-reduced-motion` compliance)
- **Icons**: Lucide React + custom SVG icons

## Features

- **Recruiter-First Narrative**: Clear executive positioning, verified skills, and career timeline.
- **Responsive Layout**: Fluid experience across mobile, tablet, laptop, and 4K screens without horizontal overflow.
- **Deep Project Case Studies**: Individual routes (`/projects/:slug`) detailing problems, approaches, architecture, and learnings.
- **Dual Theme Support**: Segmented Dark (`#08090A` deep canvas) and Light (`#F8FAFC` slate canvas) toggle with `localStorage` persistence.
- **Verified Resume Integration**: Direct in-browser viewing and 1-click download of verified resume PDF.
- **Contact & Outreach Channels**: Direct `mailto:` dispatch, pre-filled Gmail composer fallback, and verified GitHub & LinkedIn profiles.
- **Production SEO**: Semantic HTML5, dynamic metadata, Open Graph cards, Twitter cards, `sitemap.xml`, `robots.txt`, and JSON-LD structured data.

## Projects

1. **Sales Data Analysis Dashboard** (`/projects/sales-data-analysis`)
   - Cleaned and analyzed sales datasets using Python, Excel, and SQL. Developed interactive Power BI dashboards to identify sales trends, KPIs, and generate accurate business insights.
2. **Fake News Detection Using Machine Learning & NLP** (`/projects/fake-news-detection`)
   - Developed a Fake News Detection system using Python, Machine Learning, and NLP to classify news articles as real or fake with TF-IDF vectorization and Streamlit.
3. **URL-Shortener Application** (`/projects/url-shortener`)
   - Developed a simple and user-friendly URL Shortener application using Python, Tkinter, and the PyShorteners library with desktop GUI and input handling.

## Local Development

Install dependencies:
```bash
npm install
```

Start development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

## Production Build

Run TypeScript type-checking and bundling:
```bash
npm run build
```
This generates optimized production static assets in the `dist/` folder.

## Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Deployment

This portfolio is configured for **Netlify** using the Netlify Free plan:
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **SPA Routing**: Handled via `public/_redirects` (`/*  /index.html  200`) and `netlify.toml`.

See `DEPLOYMENT.md` for step-by-step instructions on connecting GitHub to Netlify.
