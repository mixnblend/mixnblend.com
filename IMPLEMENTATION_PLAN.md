# Mix n Blend Website - Implementation Plan

## Context

This plan outlines the implementation of the Mix n Blend band website. The basic Astro project structure is in place with TypeScript, Tailwind CSS, linting, testing, and deployment configured. Now we need to build out the actual website with components, pages, and content.

**Why**: Create a professional band website to showcase Mix n Blend's music, news, biography, and photos.

**Current State**:

- Astro project initialized with strict TypeScript
- Content collections configured for news and releases
- Basic Layout and index page created
- Build pipeline, testing, and git hooks working
- No actual content or components yet

**Available Assets**:

- 34 professional band photos (JPEG, 2626-4256px, 7-15MB each, 347MB total)
- Biography markdown (612 bytes) at `../mixnblend_site_assets/biography/biography.md`
- ZigZag Magazine article (15KB) at `../mixnblend_site_assets/biography/article.md`
- Banner image: `cropped-strawberryfields.png` (1500x522px)

## Implementation Approach

### Phase 1: Foundation - Layout Components

**Critical Files**:

- `src/layouts/Layout.astro` - enhance with SEO, meta tags, Header/Footer
- `src/components/layout/Header.astro` - create navigation
- `src/components/layout/Footer.astro` - create footer
- `src/components/layout/Navigation.astro` - reusable nav component

**Why First**: Every page depends on the layout. Header and Footer are used across the entire site.

**Implementation**:

1. **Header Component** (`src/components/layout/Header.astro`):
   - Props: `currentPath: string`
   - Contains site logo/title and main navigation
   - Links: Home, About, Music, News, Contact
   - Mobile-first responsive (hamburger menu for small screens)
   - Semantic HTML (`<header>`, `<nav>`)
   - Accessible (ARIA labels, keyboard nav)

2. **Footer Component** (`src/components/layout/Footer.astro`):
   - Copyright info
   - Social media links (Facebook, Discogs, streaming platforms)
   - Secondary navigation (optional)
   - Semantic `<footer>` element

3. **Navigation Component** (`src/components/layout/Navigation.astro`):
   - Props: `links: Array<{href, label}>`, `currentPath: string`
   - Reusable nav list with active state highlighting
   - Used by Header

4. **Enhanced Layout** (`src/layouts/Layout.astro`):
   - Add Header and Footer components
   - Enhance props: `title`, `description?`, `image?`, `type?`
   - Add SEO meta tags
   - Add Open Graph tags
   - Add JSON-LD structured data for band

**Pattern**: Follow existing `Layout.astro` structure. Import components in frontmatter, use in template.

### Phase 2: UI Components

**Critical Files**:

- `src/components/ui/Button.astro` - reusable button
- `src/components/ui/AlbumCard.astro` - display releases
- `src/components/ui/NewsCard.astro` - display news articles
- `src/components/ui/StreamingEmbed.astro` - music embeds
- `src/components/ui/SocialLinks.astro` - social media icons

**Why Second**: These are reusable building blocks for sections and pages.

**Implementation**:

1. **Button** - variants (primary/secondary/outline), sizes, link or button element
2. **AlbumCard** - album artwork, title, type, date, streaming links, link to detail page
3. **NewsCard** - article image, title, excerpt, date, link to article
4. **StreamingEmbed** - platform-specific iframes (Spotify, Bandcamp, Apple, YouTube)
5. **SocialLinks** - display social icons with accessible links

**Pattern**: Each component has TypeScript `interface Props`, destructures props, uses Tailwind classes.

### Phase 3: Section Components

**Critical Files**:

- `src/components/sections/Hero.astro` - hero banner
- `src/components/sections/BioSection.astro` - biography display
- `src/components/sections/DiscographySection.astro` - releases grid
- `src/components/sections/NewsSection.astro` - news articles list
- `src/components/sections/GallerySection.astro` - photo grid
- `src/components/sections/ContactSection.astro` - contact info

**Why Third**: Sections compose UI components and are used by pages.

**Implementation**:

1. **Hero** - full-width banner with background image, title, subtitle, CTA
2. **BioSection** - text content with optional image, responsive two-column layout
3. **DiscographySection** - query releases collection, grid of AlbumCards, filter by type
4. **NewsSection** - query news collection, list of NewsCards, limit prop
5. **GallerySection** - grid of band photos, lazy loading
6. **ContactSection** - contact info, social links, booking info

**Pattern**: Sections query content collections in frontmatter, pass data to UI components.

### Phase 4: Pages

**Critical Files**:

- `src/pages/index.astro` - home page
- `src/pages/about.astro` - biography page
- `src/pages/music.astro` - discography listing
- `src/pages/music/[slug].astro` - individual release pages
- `src/pages/news.astro` - news listing
- `src/pages/news/[slug].astro` - individual article pages
- `src/pages/contact.astro` - contact page

**Why Fourth**: Pages compose sections and depend on all previous components.

**Implementation**:

1. **Home** (`index.astro`):
   - Hero (band name, tagline, background image)
   - Bio section (abbreviated)
   - Featured releases (3 most recent)
   - Recent news (3 most recent)
   - Gallery preview (6-8 photos)
   - CTA (streaming links)

2. **About** (`about.astro`):
   - Page hero
   - Full biography from `biography.md`
   - Gallery section (extensive)
   - Awards/recognition (SAMA nominations)

3. **Music** (`music.astro`):
   - Page hero
   - All releases from collection
   - Grid of AlbumCards
   - Links to streaming platforms

4. **Release Detail** (`music/[slug].astro`):
   - Dynamic routing with `getStaticPaths()`
   - Large artwork
   - Release details, track list
   - StreamingEmbed components
   - Streaming links

5. **News** (`news.astro`):
   - Page hero
   - All news articles
   - Grid of NewsCards
   - Sort by date (newest first)

6. **Article Detail** (`news/[slug].astro`):
   - Dynamic routing with `getStaticPaths()`
   - Article hero image
   - Metadata (date)
   - Markdown content rendered
   - Back to news link

7. **Contact** (`contact.astro`):
   - Page hero
   - Contact info
   - Social links
   - Booking/press info

**Pattern**: Import Layout and sections, query collections with `getCollection()`, pass to section components.

### Phase 5: Content & Assets

**Critical Files**:

- `src/content/news/zakifo-interview.md` - create from article.md
- `src/content/releases/*.md` - create real release data
- `src/assets/images/` - add optimized photos
- `public/` - add any static assets

**Implementation**:

1. **Clean article.md**:
   - Remove website navigation HTML
   - Extract actual article content (starts line 90)
   - Create proper frontmatter (title, publishDate, excerpt, image)
   - Save as `src/content/news/zakifo-interview.md`

2. **Copy biography**:
   - Use in About page BioSection component
   - Content already clean markdown

3. **Image optimization**:
   - Select 1 hero image for home page (landscape, ~DSC_7500-7600 range)
   - Select 8-12 photos for home gallery
   - Select 1-2 for about page
   - Copy originals to `src/assets/images/band/` (Astro will optimize)
   - Copy banner to `src/assets/images/cropped-strawberryfields.png`

4. **Create release content**:
   - Research Mix n Blend discography on Discogs
   - Create content files for each release
   - Find album artwork
   - Find Spotify/Bandcamp embed IDs

**Pattern**: Follow schema in `src/content/config.ts`, use frontmatter for metadata.

### Phase 6: Styling

**Critical Files**:

- `tailwind.config.mjs` - custom theme
- `src/styles/global.css` - global styles

**Implementation**:

1. **Tailwind config**:
   - Define brand color palette
   - Set typography scale
   - Configure spacing
   - Add custom utilities

2. **Global styles**:
   - Add custom font imports (if needed)
   - Base typography
   - Focus states for accessibility
   - Responsive utilities

**Pattern**: Use Tailwind utilities in components, minimal custom CSS.

### Phase 7: Utilities & Tests

**Critical Files**:

- `src/utils/sortByDate.ts` - sort content by date
- `src/utils/truncateText.ts` - truncate with ellipsis
- `tests/` - add tests for all utilities and key components

**Implementation**:

1. Create utility functions as needed
2. Follow pattern from `src/utils/formatDate.ts`
3. Write tests following `tests/utils/formatDate.test.ts` pattern
4. Test UI components (AlbumCard, NewsCard, Button)

**Pattern**: Each utility has corresponding `.test.ts` file, uses Vitest.

### Phase 8: Accessibility & Performance

**Implementation**:

1. **Accessibility**:
   - Add meaningful alt text to all images
   - Ensure heading hierarchy (h1 → h2 → h3)
   - Add ARIA labels where needed
   - Test keyboard navigation
   - Verify color contrast (WCAG AA)
   - Add skip links

2. **Performance**:
   - Use `<Image />` component for all images
   - Lazy load below-fold images
   - Minimize client-side JS
   - Optimize font loading

3. **SEO**:
   - Meta descriptions on all pages
   - Open Graph tags
   - Create sitemap.xml
   - Create robots.txt
   - Add JSON-LD structured data

**Pattern**: Follow CLAUDE.md guidelines for accessibility and performance.

## Implementation Order

**Day 1-2: Foundation**

1. Header, Footer, Navigation components
2. Enhanced Layout component
3. Button, SocialLinks components

**Day 3-4: Components** 4. AlbumCard, NewsCard, StreamingEmbed 5. Hero, BioSection components 6. DiscographySection, NewsSection, GallerySection, ContactSection

**Day 5-7: Pages** 7. Home page (index.astro) 8. About page 9. Music page + release detail pages 10. News page + article detail pages 11. Contact page

**Day 8: Content** 12. Clean and add zakifo-interview.md 13. Optimize and add band photos 14. Create release content files 15. Add real data

**Day 9: Polish** 16. Styling refinements 17. Responsive design testing 18. Accessibility audit 19. Performance optimization

**Day 10: Testing** 20. Write component tests 21. Write utility tests 22. Cross-browser testing 23. Final QA

## Key Technical Decisions

1. **Image Strategy**: Store originals in `src/assets/images/`, use Astro `<Image />` component for automatic optimization, lazy load below-fold

2. **Content Collections**: Use existing schema in `src/content/config.ts`, markdown frontmatter for metadata

3. **Styling**: Tailwind utility classes for all styling, mobile-first responsive, semantic HTML

4. **JavaScript**: Minimize client-side JS, use `client:*` directives only for mobile menu toggle

5. **Testing**: Unit tests for utilities, component tests for UI, target 80%+ coverage

## Verification

After implementation:

1. **Build**: `npm run build` succeeds
2. **Tests**: `npm run test` all pass
3. **Lint**: `npm run lint` no errors
4. **Type check**: `npm run typecheck` no errors
5. **Format**: `npm run format:check` passes

**Manual Testing**:

- All 7 pages load correctly
- Navigation works on all pages
- Dynamic routes work (music/[slug], news/[slug])
- Images load and are optimized
- Streaming embeds work
- Responsive on mobile (320px), tablet (768px), desktop (1280px)
- Cross-browser (Chrome, Firefox, Safari, Edge)
- Accessibility: keyboard nav, alt text, ARIA labels
- Performance: Lighthouse score ≥ 90

**Content Verification**:

- Biography displays correctly on About page
- ZigZag article displays correctly as news article
- All internal links work
- All external links work (Discogs, streaming platforms)

## Critical Files Reference

1. `src/content/config.ts` - Content schemas (all content structure)
2. `src/layouts/Layout.astro` - Base layout (all pages use this)
3. `src/components/ui/AlbumCard.astro` - Core component pattern
4. `src/utils/formatDate.ts` - Utility function pattern
5. `tailwind.config.mjs` - Design system configuration

## Existing Utilities to Reuse

- `formatDate()` from `src/utils/formatDate.ts` - use for displaying publishDate and releaseDate throughout the site

## Notes

- The article.md file needs significant cleanup - remove all navigation HTML (lines 1-89), extract actual content starting around line 90
- Biography.md is already clean and ready to use
- Will need to research discography on Discogs to create accurate release content
- May need to find streaming embed IDs manually from Spotify/Bandcamp
- Consider creating a mobile menu with minimal JavaScript (checkbox hack fallback)
- SAMA nominations mentioned in biography should be highlighted on About page
