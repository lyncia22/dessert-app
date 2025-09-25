# Dessert App

A modern React + Vite app for dessert lovers to create, save, and share recipes.

## Features

- Add recipes with ingredients, steps, image URL, and tags
- Store locally in your browser (no account needed)
- Search by title, ingredient, or tag
- Share recipe pages via link
- Clean, responsive UI

## Tech Stack

- React 18
- Vite 5
- React Router 6

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Start the dev server

```bash
npm run dev
```

3. Open the URL printed in your terminal (usually http://localhost:5173)

4. Build for production

```bash
npm run build
npm run preview
```

## Notes

- Data is saved in `localStorage` under the key `dessert-app:recipes`.
- To deploy, you can host the `dist/` folder on any static host (Netlify, Vercel, GitHub Pages, etc.).
