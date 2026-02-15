# Mix n Blend - Band Website

Static website for Mix n Blend built with Astro and deployed to GitHub Pages.

## Tech Stack

- **Framework**: Astro (static site generation)
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages via GitHub Actions
- **Package Manager**: npm
- **Version Manager**: asdf

## Quick Start

### Prerequisites

- Node.js 22.x (managed via asdf)
- npm (comes with Node.js)

### Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd mixnblend_site
   ```

2. Install Node.js 22 via asdf:

   ```bash
   asdf install
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:4321`

## Available Commands

Run `npm run help` to see all available commands with descriptions.

### Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Code Quality

- `npm run lint` - Check for code issues
- `npm run lint:fix` - Auto-fix linting issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check formatting
- `npm run typecheck` - Run TypeScript checks

### Testing

- `npm run test` - Run tests with Vitest

## Project Structure

See [CLAUDE.md](./CLAUDE.md) for detailed project structure and coding standards.

## Documentation

- [CLAUDE.md](./CLAUDE.md) - Complete project guidelines and standards
- [docs/CONTRIBUTING.md](./docs/CONTRIBUTING.md) - Contribution guidelines
- [docs/deployment.md](./docs/deployment.md) - Deployment instructions

## Contributing

Please read [CONTRIBUTING.md](./docs/CONTRIBUTING.md) before submitting pull requests.

## License

Copyright © 2024 Mix n Blend. All rights reserved.
