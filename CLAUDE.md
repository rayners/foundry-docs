# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the centralized documentation site for Foundry VTT modules, hosted at https://docs.rayners.dev using GitHub Pages.

## Technology Stack

- **Static Site Generator**: Docusaurus v3.7.0 with TypeScript
- **React**: v19.0.0 with MDX support
- **TypeScript**: v5.6.2
- **Node.js**: Requires v18.0 or higher
- **Hosting**: GitHub Pages with custom domain
- **Deployment**: GitHub Actions workflow (automated)

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
- Independent sidebars configured in `sidebars-jj.ts` and `sidebars-argon.ts`
- Module-specific navigation items in the navbar
- Custom theme with module-specific accent colors (purple for J&J, red for ARGON)
- Default docs and blog plugins are disabled

## Development Commands

```bash
npm start         # Start development server on http://localhost:3000
npm run build     # Build for production (outputs to ./build)
npm run serve     # Serve production build locally
npm run clear     # Clear Docusaurus cache
npm run typecheck # Run TypeScript type checking
npm run deploy    # Deploy using Docusaurus (not typically used - we use GitHub Actions)
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
- Use relative links between pages (within the docs site only)
- **Images**: Must be in `/static/img/` directory and referenced as `/img/filename.png`
- Keep a consistent structure across modules

### Image Handling (IMPORTANT)
- **Correct**: `![Screenshot](/img/module-screenshot.png)` → file at `/static/img/module-screenshot.png`
- **Wrong**: `![Screenshot](images/screenshot.png)` → module subdirectory (causes build failures)
- Docusaurus serves static assets from `/static/` at the root URL path
- Never create `images/` subdirectories within module documentation folders

### Link Handling (CRITICAL)
- **Internal links**: `[User Guide](user-guide.md)` or `[API](api-reference.md)`
- **Cross-module links**: `[J&J Guide](/journeys-and-jamborees/intro)` (absolute paths within site)
- **External links**: `[GitHub](https://github.com/user/repo)` for repository links
- **NEVER**: `[README](../README.md)` or `[Contributing](../CONTRIBUTING.md)` (causes build failures)
- **Rule**: Any `../` link pointing outside the docs directory structure will break the build

### Build Failure Prevention Checklist
- [ ] All images are in `/static/img/` and referenced as `/img/filename.png`
- [ ] No `../README.md` or `../CONTRIBUTING.md` links exist
- [ ] No `images/` subdirectories in module folders
- [ ] All `../` links stay within the docs structure
- [ ] Local `npm run build` succeeds before committing

## Architecture Notes

- The site uses custom Docusaurus plugin instances for each module rather than the default docs plugin
- Each module maintains its own documentation directory with markdown files
- The landing page (`src/pages/index.tsx`) displays module cards with status badges
- Custom CSS in `src/css/custom.css` implements the slate gray theme with hover effects

## Linear Integration

Documentation work is tracked in Linear:
- Team: Foundry Modules
- Project: Documentation Site Infrastructure
- Related issues: FOU-37, FOU-38, FOU-39, FOU-40, FOU-41

## Testing and Validation

**ALWAYS run `npm run build` locally before committing to prevent deployment failures!**

Before deploying:
1. Run `npm run typecheck` to check TypeScript types
2. **MANDATORY**: Run `npm run build` to ensure no build errors
3. Test with `npm run serve` to verify production build
4. Check all internal links work correctly
5. Verify module navigation is functional
6. Ensure all documentation files have proper frontmatter for sidebar positioning
7. **CRITICAL**: Verify all image references exist before committing
   - Images must be in `/static/img/` directory (NOT in module subdirectories)
   - Use `![Alt Text](/img/filename.png)` format (absolute path from static)
   - Never reference `images/` subdirectories in module folders
8. **CRITICAL**: Verify all markdown links are internal to the docs site
   - Use relative links like `[User Guide](user-guide.md)` within modules
   - Never link to `../README.md` or `../CONTRIBUTING.md` (causes build failures)
   - Link to GitHub repository directly: `[GitHub](https://github.com/user/repo)`

### Common Build Failure Causes
1. **Broken image references**: `![Image](images/file.png)` instead of `![Image](/img/file.png)`
2. **External README links**: `[Guide](../README.md)` instead of internal links
3. **Missing image files**: Referenced images that don't exist in `/static/img/`
4. **Relative parent directory links**: Any `../` links outside the docs structure

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

## Module Documentation Status

### Journeys and Jamborees (`/journeys-and-jamborees`)
- Status: Development (purple badge)
- 11 documentation files covering installation, quick start, API reference, etc.
- Comprehensive travel system and party management documentation

### ARGON Dragonbane (`/argon-dragonbane`)
- Status: Stable (red badge)
- Basic documentation with intro, requirements, and installation
- Released for over a year, needs expanded documentation (FOU-43)

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