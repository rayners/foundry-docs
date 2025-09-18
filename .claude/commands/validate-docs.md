---
allowed-tools: Bash(npm:*), Bash(git:*), Bash(date:*), Bash(ls:*), Bash(find:*), Read, Grep, Glob, WebFetch
argument-hint: [module-name]
description: Validate user-facing documentation for a module within this docs site
model: claude-3-haiku-20240307
---

Validate documentation for module: $1

Check the user-facing documentation for this module within the documentation site repository.

## Available Modules
- journeys-and-jamborees
- argon-dragonbane
- realms-and-reaches
- seasons-and-stars
- simple-calendar-compat
- errors-and-echoes
- familiar

## Documentation Validation Checklist

### 1. Content Accuracy & Date Verification
- Scan all .md files in $1/ directory for placeholder dates
- Check that version references are generic and verifiable
- Verify no hyperbolic claims ("works with all systems", "fully tested")
- Ensure feature claims match tested reality
- Use `date` command to verify any timestamps are current

### 2. Link and Image Validation
- Check all image references use `/img/filename.png` format (not `images/file.png`)
- Verify no `../README.md` or `../CONTRIBUTING.md` links exist
- Test internal documentation links work within the site
- Validate external links are accessible

### 3. Build Compatibility
- Run `npm run build` to ensure the site builds successfully
- Check module appears correctly in navigation
- Verify sidebar configuration in `sidebars-[module].ts` is valid
- Test that module route `/[module-name]/` works

### 4. Documentation Standards Compliance
- Check frontmatter exists and is properly formatted
- Verify intro page exists and follows structure
- Ensure installation guide is current and testable
- Check API documentation (if applicable) matches current module state

### 5. Site Integration
- Verify module appears in docusaurus.config.ts plugins
- Check navbar and footer links are configured
- Ensure module card exists on landing page (if applicable)

Report findings as:
- ✅ **PASSED**: [description]
- ❌ **FAILED**: [specific issue and location]
- ⚠️  **WARNING**: [potential improvement]
- 📝 **RECOMMENDATION**: [suggested action]

Focus on user-facing documentation quality and accuracy for Foundry VTT users visiting docs.rayners.dev.