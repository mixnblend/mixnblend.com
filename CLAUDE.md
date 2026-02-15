# CLAUDE.md — Mix n Blend Band Website

## Project Overview

Static website for Mix n Blend built with Astro, deployed to GitHub Pages.

---

## Tech Stack

- **Framework**: Astro (static site generation)
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages via GitHub Actions
- **Package Manager**: npm (do not use yarn or pnpm)
- **Version Manager**: asdf

---

## Tooling Setup

### Node Version

Use `asdf` for Node version management. Create `.tool-versions` at the repo root:

```
nodejs 22.x.x
```

Use the latest LTS release of Node 22. Do not use `.nvmrc` or `.node-version`.

### Linting and Formatting

Use ESLint and Prettier with configs at the repo root.

`.eslintrc.json` — use `@typescript-eslint` rules, extend `eslint:recommended` and `plugin:@typescript-eslint/recommended`.

`.prettierrc.json`:

```json
{
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 100,
  "tabWidth": 2
}
```

### Pre-commit Hooks

Use Husky for git hooks. Initialise with `npx husky init`.

Add a `commit-msg` hook that runs `commitlint` to enforce conventional commits.

`.husky/commit-msg`:

```sh
npx --no -- commitlint --edit $1
```

`commitlint.config.js`:

```js
module.exports = { extends: ['@commitlint/config-conventional'] };
```

### Commit Message Format

Use [Conventional Commits](https://www.conventionalcommits.org/). Examples:

```
feat: add discography page with streaming embeds
fix: correct album artwork aspect ratio on mobile
docs: update README with deployment instructions
style: apply consistent spacing to navigation
refactor: extract StreamingEmbed into reusable component
test: add unit tests for formatReleaseDate utility
chore: update dependencies
```

---

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:4321)
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
npm run lint:fix     # Run ESLint with auto-fix
npm run format       # Format code with Prettier
npm run format:check # Check formatting without changes
npm run typecheck    # Run TypeScript type checking
npm run test         # Run unit tests
```

There is no Makefile. All commands go through npm scripts.

---

## Project Structure

```
mix-n-blend-website/
├── .husky/
│   └── commit-msg
├── .tool-versions
├── .eslintrc.json
├── .prettierrc.json
├── commitlint.config.js
├── package.json
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── help/
│   ├── help.json            # CLI help index
│   └── help.ts              # Help script
├── docs/
│   ├── CONTRIBUTING.md
│   └── deployment.md
├── public/                   # Unprocessed static files
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer, Navigation
│   │   ├── sections/        # Page sections (Hero, Bio, Discography)
│   │   └── ui/              # Buttons, Cards, Media players
│   ├── layouts/             # Page layouts
│   ├── pages/               # Route pages (index, about, music, news, contact)
│   ├── content/             # Markdown/MDX content collections
│   │   ├── news/            # News articles
│   │   └── releases/        # Album/single release data
│   ├── styles/              # Global styles
│   └── assets/              # Static assets (processed by Astro)
│       ├── images/
│       └── fonts/
└── tests/                    # Unit tests mirroring src/ structure
```

---

## Coding Standards

### General Principles

- **No explanatory comments**: Code should be self-documenting through well-named functions, components, and variables
- **Small, focused modules**: Compose functionality from smaller, single-purpose pieces
- **Meaningful names**: Function and component names describe what they do, not how

### TypeScript

- Strict mode enabled
- Explicit return types on exported functions
- Interfaces over type aliases for object shapes
- No `any` — use `unknown` and narrow types explicitly

### Component Guidelines

- One component per file
- Props interface defined at top of component
- Extract complex logic into separate utility functions
- Keep components focused on rendering; business logic lives elsewhere

```astro
---
interface Props {
  albumTitle: string;
  releaseYear: number;
  artworkSrc: string;
}

const { albumTitle, releaseYear, artworkSrc } = Astro.props;
---

<article class="album-card">
  <!-- Template -->
</article>
```

### File Naming

| Type       | Convention         | Example                |
| ---------- | ------------------ | ---------------------- |
| Components | PascalCase.astro   | `AlbumCard.astro`      |
| Utilities  | camelCase.ts       | `formatReleaseDate.ts` |
| Content    | kebab-case.md      | `summer-tour-2024.md`  |
| Tests      | [filename].test.ts | `AlbumCard.test.ts`    |

---

## Testing

Use a testing framework compatible with Astro (Vitest recommended).

Unit tests are mandatory for:

- All components (test rendering with various props)
- Utility functions
- Content collection schemas

Test files mirror source structure:

```
src/components/AlbumCard.astro  →  tests/components/AlbumCard.test.ts
src/utils/formatDate.ts         →  tests/utils/formatDate.test.ts
```

Run tests before committing:

```bash
npm run test
```

---

## Content Management

### Adding News Articles

Create a new `.md` file in `src/content/news/`:

```markdown
---
title: 'Article Title'
publishDate: 2024-01-15
excerpt: 'Brief summary for listings'
image: '/images/news/article-hero.jpg'
---

Article content here...
```

### Adding Releases

Create a new `.md` file in `src/content/releases/`:

```markdown
---
title: "Album Title"
type: "album" | "single" | "ep"
releaseDate: 2024-01-15
artwork: "/images/releases/album-cover.jpg"
streamingLinks:
  spotify: "https://..."
  apple: "https://..."
trackList:
  - title: "Track One"
    duration: "3:45"
---
```

---

## Streaming Embeds

Use a single reusable component for all streaming platform embeds:

```astro
// src/components/ui/StreamingEmbed.astro

interface Props { platform: 'spotify' | 'bandcamp'; embedId: string; title: string; } const { platform,
embedId, title } = Astro.props; const embedUrls = { spotify: `https://open.spotify.com/embed/album/${embedId}`,
bandcamp: `https://bandcamp.com/EmbeddedPlayer/album=${embedId}`, };

<iframe src={embedUrls[platform]} title={title} loading="lazy" allow="encrypted-media"></iframe>
```

Reference in release content frontmatter:

```markdown
---
title: 'Album Title'
embeds:
  spotify: '4LH4d3cOWNNsVw41Gqt2kv'
  bandcamp: '1234567890'
---
```

These are iframes with no client-side JavaScript required — Astro ships them as static HTML.

---

## Asset Locations

Band assets are available at the following locations (update these links):

| Asset Type       | Location                                                                  |
| ---------------- | ------------------------------------------------------------------------- |
| Photos           | `../mixnblend_site_assets/band_photos/`                                   |
| Bios             | `../mixnblend_site_assets/biography/`                                     |
| Discography      | `https://www.discogs.com/artist/1358150-Mix-N-Blend?superFilter=Releases` |
| Album Artwork    | `../mixnblend_site_assets/other_photos`                                   |
| Site Backgrounds | `../mixnblend_site_assets/other_photos/`                                  |

Download and place in appropriate `src/assets/` or `public/` directories.

ImageMagick is installed and available for image resizing and optimisation.

---

## Environment Variables

For local development, create `.env`:

```
PUBLIC_SITE_URL=http://localhost:4321
```

Generate this file using hygen:

```bash
npx hygen env new
```

Production variables are set in GitHub repository secrets.

---

## Deployment

### GitHub Pages Setup

The site deploys automatically via GitHub Actions on push to `main`.

Workflow location: `.github/workflows/deploy.yml`

Required repository settings:

1. Settings → Pages → Source: "GitHub Actions"
2. Ensure `astro.config.mjs` has correct `site` and `base` values:

```javascript
export default defineConfig({
  site: 'https://[USERNAME].github.io',
  base: '/[REPO_NAME]',
});
```

### Manual Deploy

```bash
npm run build
# dist/ folder contains deployable static site
```

---

## Performance Considerations

- Use Astro's built-in image optimisation (`<Image />` component)
- Lazy load images below the fold
- Prefer static generation over client-side rendering
- Minimise client-side JavaScript — use `client:*` directives sparingly

---

## Accessibility

- Semantic HTML throughout
- All images require meaningful `alt` text
- Keyboard navigation support
- Colour contrast meets WCAG AA minimum
- Skip links for main content

---

## Browser Support

Target modern browsers (last 2 versions). No IE11 support.

---

## Help System

The repository includes a CLI help system. Run:

```bash
npm run help
npm run help -- <topic>
```

Help topics are defined in `help/help.json`. Add new topics as needed.

---

## Constraints — What Not To Do

**Do not use yarn or pnpm.** npm only.

**Do not create a Makefile.** All commands are npm scripts.

**Do not use `.nvmrc` or `.node-version`.** Use `.tool-versions` with asdf.

**Do not use `any` types.** Use `unknown` and narrow explicitly where the type is genuinely unknown.

**Do not add unnecessary client-side JavaScript.** Astro's strength is static HTML — use `client:*` directives only when truly needed.

---

## Othe Notes

There is an example boilerplate project with some of my lint etc files set up at ../bdd-example
It's not anything to do with the functionality but you may find it useful in terms of document patterns etc.

## Definition of Done

- [ ] Site builds cleanly with `npm run build`
- [ ] All unit tests pass with `npm run test`
- [ ] No lint errors (`npm run lint`)
- [ ] No type errors (`npm run typecheck`)
- [ ] `npm run format:check` passes
- [ ] Commitlint hook fires correctly on commits
- [ ] Site deploys successfully to GitHub Pages
- [ ] All images have meaningful alt text
- [ ] Site passes Lighthouse accessibility audit
