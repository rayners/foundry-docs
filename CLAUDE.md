# Claude Memory File for Foundry Docs

This file contains important information and patterns to remember when working on the documentation site.

## Project Overview

This is the centralized documentation site for Foundry VTT modules, hosted at https://docs.rayners.dev using GitHub Pages.

## Technology Stack

- **Static Site Generator**: Docusaurus v3 with TypeScript
- **Hosting**: GitHub Pages with custom domain
- **Deployment**: GitHub Actions workflow (automated)
- **Search**: Planned - either Algolia or local search plugin

## Site Structure

```
/
├── journeys-and-jamborees/    # J&J module documentation
├── argon-dragonbane/         # ARGON module documentation
├── src/                      # React components and pages
├── static/                   # Static assets (images, etc.)
├── sidebars-jj.ts           # J&J sidebar configuration
├── sidebars-argon.ts        # ARGON sidebar configuration
└── docusaurus.config.ts     # Main site configuration
```

## Multi-Module Setup

Each module has its own documentation instance configured in `docusaurus.config.ts`:
- Separate routing (`/journeys-and-jamborees`, `/argon-dragonbane`)
- Independent sidebars
- Module-specific navigation items

## Development Commands

```bash
npm start       # Start development server
npm run build   # Build for production
npm run serve   # Serve production build locally
```

## Deployment

The site uses GitHub Actions for automated deployment:
1. Push to main branch triggers the workflow
2. Builds the site with Docusaurus
3. Deploys to GitHub Pages
4. Custom domain handled via CNAME file

**Note**: The workflow file needs `workflow` scope permissions to be added via GitHub UI.

## Adding New Modules

To add a new module:
1. Create a new directory for the module docs
2. Add a new docs plugin instance in `docusaurus.config.ts`
3. Create a sidebar configuration file (`sidebars-[module].ts`)
4. Add navigation item to the navbar
5. Update the landing page with a module card

## Content Guidelines

- Use Markdown for all documentation
- Include frontmatter for sidebar positioning
- Use relative links between pages
- Add images to `/static/img/` directory
- Keep a consistent structure across modules

## Known Issues

- Default blog and docs directories from Docusaurus template need removal
- GitHub Actions workflow requires manual addition due to OAuth limitations

## Linear Integration

Documentation work is tracked in Linear:
- Team: Foundry Modules
- Project: Documentation Site Infrastructure
- Related issues: FOU-37, FOU-38, FOU-39, FOU-40, FOU-41

## Testing and Validation

Before deploying:
1. Run `npm run build` to ensure no build errors
2. Test with `npm run serve` to verify production build
3. Check all internal links work correctly
4. Verify module navigation is functional

## Current Project Status

### Completed Issues
- **FOU-37** ✅ - GitHub Pages setup and domain configuration
- **FOU-38** ✅ - Docusaurus implementation with custom theme

### In Progress
- **FOU-39** - Migrate J&J documentation to docs site
  - Copy README content to main module page
  - Migrate User Guide to docs site structure
  - Move Localization Guide with proper formatting
  - Update J&J README to link to docs site

### Upcoming
- **FOU-40** - Set up automated builds and deployment
- **FOU-41** - Create landing page and multi-module navigation
- **FOU-43** - Create comprehensive documentation for ARGON Dragonbane

### Recent Changes (2025-05-23)
- Applied slate gray theme with purple/blue accent colors
- Fixed module status badges (J&J: development, ARGON: stable)
- Created placeholder documentation to prevent sidebar errors
- Added comprehensive quick start and installation guides for J&J
- Updated ARGON intro to reflect it's been released for over a year

## GitHub Actions Workflow

The workflow file (`deploy.yml`) needs to be manually added to `.github/workflows/` due to OAuth permissions:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    name: Build Docusaurus
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci
        
      - name: Build website
        run: npm run build

      - name: Upload Build Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: build

  deploy:
    name: Deploy to GitHub Pages
    needs: build
    if: github.ref == 'refs/heads/main'
    
    permissions:
      pages: write
      id-token: write

    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```