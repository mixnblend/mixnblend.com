# Deployment Guide

This site deploys automatically to GitHub Pages via GitHub Actions.

## Automatic Deployment

Every push to the `main` branch triggers an automatic deployment.

### How It Works

1. Code is pushed to `main`
2. GitHub Actions workflow (`.github/workflows/deploy.yml`) runs:
   - Installs dependencies
   - Runs linting and type checking
   - Runs tests
   - Builds the site
   - Deploys to GitHub Pages

3. Site is live at the configured URL

## GitHub Pages Setup

### First-Time Setup

1. Go to repository **Settings** → **Pages**

2. Under **Source**, select:
   - Source: **GitHub Actions**

3. Ensure `astro.config.mjs` has correct configuration:

   ```javascript
   export default defineConfig({
     site: 'https://www.mixnblend.com',
     trailingSlash: 'always',
   });
   ```

4. For custom domain:
   - Add a `CNAME` file in `public/` with your domain
   - Configure DNS records with your domain provider
   - Add custom domain in GitHub Pages settings

### Repository Secrets

No secrets are required for basic deployment. If you need environment variables:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add repository secrets
3. Reference them in the workflow file

## Manual Deployment

To deploy manually:

1. Build the site locally:

   ```bash
   npm run build
   ```

2. The `dist/` folder contains the static site

3. Deploy the `dist/` folder to any static hosting service

## Environment Variables

For local development, create a `.env` file:

```
PUBLIC_SITE_URL=http://localhost:4321
```

Production variables should be set in GitHub repository secrets and accessed via the workflow.

## Verifying Deployment

After deployment:

1. Check the **Actions** tab for workflow status
2. Ensure all steps completed successfully
3. Visit the live site URL
4. Test navigation and functionality
5. Check browser console for errors

## Troubleshooting

### Build Fails

- Check the Actions log for error details
- Ensure all tests pass locally first
- Verify dependencies are up to date

### 404 Errors

- Check `astro.config.mjs` `base` path configuration
- Ensure routes match the deployment structure
- Verify `public/` files are in the correct location

### Styling Issues

- Clear browser cache
- Check Tailwind configuration
- Verify CSS imports in layout files

### Images Not Loading

- Ensure images are in `public/` or `src/assets/`
- Check file paths are correct
- Use Astro's `<Image />` component for optimized images

## Rollback

To rollback to a previous version:

1. Go to **Actions** tab
2. Find the successful deployment you want to restore
3. Click **Re-run jobs**

Alternatively:

1. Revert the commit locally
2. Push to `main` to trigger new deployment

## Performance

After deployment, check performance:

- Run Lighthouse audit
- Check Core Web Vitals
- Test on mobile devices
- Verify lazy loading works

Target metrics:

- Performance: 90+
- Accessibility: 100
- Best Practices: 90+
- SEO: 90+
