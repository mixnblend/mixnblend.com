# Contributing to Mix n Blend Website

Thank you for your interest in contributing to the Mix n Blend website!

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Install dependencies: `npm install`
4. Create a new branch: `git checkout -b feature/your-feature-name`

## Development Workflow

### Before You Code

1. Read [CLAUDE.md](../CLAUDE.md) for coding standards and project structure
2. Ensure you understand the requirements
3. Check existing issues to avoid duplicate work

### While Coding

1. Follow the coding standards in CLAUDE.md:
   - No explanatory comments (self-documenting code)
   - Small, focused modules
   - Meaningful names
   - Strict TypeScript (no `any`)

2. Write tests for new functionality:
   - Unit tests for all components
   - Tests for utility functions
   - Mirror source structure in tests/

3. Run checks frequently:
   ```bash
   npm run lint
   npm run typecheck
   npm run test
   ```

### Commit Messages

We use [Conventional Commits](https://www.conventionalcommits.org/). Format:

```
<type>: <description>

[optional body]
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**

```
feat: add discography page with streaming embeds
fix: correct album artwork aspect ratio on mobile
docs: update README with deployment instructions
```

The commit-msg hook will enforce this format.

### Before Committing

The pre-commit hook will automatically run:

- Format checking
- Linting
- Type checking

Fix any issues before committing.

### Definition of Done

Before submitting a PR, ensure:

- [ ] Code builds cleanly (`npm run build`)
- [ ] All tests pass (`npm run test`)
- [ ] No lint errors (`npm run lint`)
- [ ] No type errors (`npm run typecheck`)
- [ ] Code is formatted (`npm run format:check`)
- [ ] All images have meaningful alt text
- [ ] Changes are documented (if needed)

## Pull Request Process

1. Update documentation if needed
2. Ensure all checks pass
3. Write a clear PR description:
   - What changes were made
   - Why they were needed
   - How to test them

4. Link any related issues
5. Request review from maintainers

## Adding Content

### News Articles

Create a new `.md` file in `src/content/news/`:

```markdown
---
title: 'Article Title'
publishDate: 2024-01-15
excerpt: 'Brief summary'
image: '/images/news/article.jpg'
---

Article content here...
```

### Music Releases

Create a new `.md` file in `src/content/releases/`:

```markdown
---
title: 'Album Title'
type: 'album'
releaseDate: 2024-01-15
artwork: '/images/releases/cover.jpg'
streamingLinks:
  spotify: 'https://...'
  apple: 'https://...'
---

Album description...
```

## Questions?

Feel free to open an issue for questions or clarifications.

Thank you for contributing!
