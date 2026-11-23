# Md. Mahabub Hassan — Portfolio Website

Personal academic and athletics portfolio for **Md. Mahabub Hassan**, Anthropology graduate from Shahjalal University of Science and Technology (SUST), qualitative researcher, and competitive cricketer.

## Local Development

```bash
npm install
npm run dev
```

## Verification Scripts

```bash
npm run lint    # TypeScript typecheck (tsc --noEmit)
npm test        # Unit tests via node:test
npm run build   # Typecheck + production Vite bundle to dist/
npm run preview # Preview built production bundle locally
```

## Deploying to GitHub & Vercel

1. Initialize and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. Import the GitHub repository in **Vercel**:
   - **Framework Preset:** Vite (configured automatically via `vercel.json`)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Environment Variables:** None required (100% static client-side bundle)
3. Click **Deploy**.
