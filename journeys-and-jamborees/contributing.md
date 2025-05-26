---
sidebar_position: 1
title: Contributing
---

# Contributing to Journeys & Jamborees

Thank you for your interest in contributing to Journeys & Jamborees! We welcome community involvement.

:::info Alpha Status
This project is in ALPHA stage. We accept bug reports, testing feedback, documentation improvements, and case-by-case code contributions.
:::

## Current Contribution Status

| Type | Status | Notes |
|------|--------|-------|
| **Bug Reports** | ✅ Accepting | Use our [bug report template](https://github.com/rayners/fvtt-journeys-and-jamborees/blob/main/.github/ISSUE_TEMPLATE/bug_report.md) |
| **Feature Requests** | ✅ Accepting | Use our [feature request template](https://github.com/rayners/fvtt-journeys-and-jamborees/blob/main/.github/ISSUE_TEMPLATE/feature_request.md) |
| **Testing Feedback** | ✅ Accepting | Especially across different game systems |
| **Documentation** | ✅ Accepting | Improvements and examples welcome |
| **Translations** | ✅ Accepting | See [Localization Guide](localization) |
| **Code PRs** | ⚠️ Case-by-case | Please discuss first |

## Quick Start

### 🐛 Report Bugs

Use our structured [bug report template](https://github.com/rayners/fvtt-journeys-and-jamborees/blob/main/.github/ISSUE_TEMPLATE/bug_report.md) which includes:

- Multi-system support (Dragonbane, D&D 5e, Pathfinder 2e, etc.)
- Environment details checklist
- Console error collection
- Reproduction steps format

#### Good Bug Report Example

```markdown
**Description**: Characters disappear from party when changing scenes

**Steps to Reproduce**:
1. Create party with 3 characters
2. Switch to different scene
3. Open party sheet

**Expected**: All 3 characters still in party
**Actual**: Only 1 character remains

**Environment**:
- Foundry: v11.315
- Dragonbane: v1.0.3
- Browser: Chrome 120
- OS: Windows 11

**Console Error**:
```
TypeError: Cannot read property 'id' of undefined
    at PartySheet._onDrop (party-sheet.js:142)
```
```

### 🧪 Test the Module

Be an early adopter and help us improve:

#### Testing Focus Areas

- **Party Management**: Adding/removing characters
- **Resource Tracking**: Consumption calculations
- **Travel System**: Role assignments and status
- **Permissions**: Player vs GM capabilities
- **Edge Cases**: Unusual configurations

#### Testing Checklist

- [ ] Create parties with 1-10 characters
- [ ] Test all character status combinations
- [ ] Try all travel role assignments
- [ ] Verify resource warnings work
- [ ] Check permission boundaries
- [ ] Test with multiple players
- [ ] Try breaking things creatively!

### 💡 Request Features

Use our [feature request template](https://github.com/rayners/fvtt-journeys-and-jamborees/blob/main/.github/ISSUE_TEMPLATE/feature_request.md) which includes:

- Game system compatibility checklist
- Integration considerations
- Use case descriptions

We welcome:
- **UX improvements** - Better workflows
- **Integration ideas** - Other module compatibility
- **Creative uses** - Unexpected applications
- **Accessibility** - Making J&J more inclusive

Before suggesting features:
1. Check the [roadmap](intro#planned-features)
2. Search existing issues
3. Focus on the "why" not just "what"

### 🌍 Contribute Translations

Help make J&J accessible worldwide:
- See our [Localization Guide](localization)
- No coding required
- Full credit given

## Getting Started with Code Contributions

For code contributions, please review our comprehensive documentation:

### 📚 Essential Documents

- **[Contributing Guide](https://github.com/rayners/fvtt-journeys-and-jamborees/blob/main/CONTRIBUTING.md)** - Complete development workflow
- **[Security Policy](https://github.com/rayners/fvtt-journeys-and-jamborees/blob/main/SECURITY.md)** - Vulnerability reporting
- **[Support Guide](https://github.com/rayners/fvtt-journeys-and-jamborees/blob/main/SUPPORT.md)** - Community channels
- **[Pull Request Template](https://github.com/rayners/fvtt-journeys-and-jamborees/blob/main/.github/pull_request_template.md)** - PR requirements

### 🔄 Contribution Workflow

1. **Discuss First**: Open an issue for features
2. **Follow Guidelines**: Use our code style and conventions
3. **Test Thoroughly**: Unit tests + Quench tests
4. **Document Changes**: Update relevant docs

### Development Setup

```bash
# Clone the repository
git clone https://github.com/rayners/fvtt-journeys-and-jamborees.git

# Install dependencies
npm install

# Build the module
npm run build

# Link to Foundry
npm run link
```

### Code Standards

#### TypeScript Guidelines
- Strict mode enabled
- Explicit typing preferred
- Avoid `any` types
- Document complex logic

#### Style Guide
- Prettier for formatting
- ESLint for quality
- Clear naming conventions
- Meaningful comments

#### Example Code Style

```typescript
/**
 * Adds a character to the party with permission checks
 * @param character - The character actor to add
 * @returns Whether the character was successfully added
 */
async addCharacter(character: Actor): Promise<boolean> {
  // Check permissions first
  if (!this.canUserModify(game.user, character)) {
    ui.notifications.warn("J&J.notifications.noPermission");
    return false;
  }

  // Add character logic here...
  return true;
}
```

### Pull Request Process

When we open for contributions:

1. **Fork & Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Follow code standards
   - Add/update tests
   - Update documentation

3. **Test Thoroughly**
   - Run `npm test`
   - Test in Foundry
   - Check edge cases

4. **Submit PR**
   - Clear description
   - Reference issues
   - Include screenshots

### Commit Convention

We use conventional commits:

```
feat: Add party treasury management
fix: Correct resource calculation for staying members
docs: Update travel system examples
style: Format party sheet templates
refactor: Simplify permission checking
test: Add party creation tests
chore: Update build dependencies
```

## Getting Help

### Questions?

- **Discord**: Find us in #module-development
- **GitHub**: Open a discussion
- **Documentation**: Check guides first

### Response Times

- **Bug Reports**: Usually within 48 hours
- **Feature Ideas**: May take longer
- **PRs**: Once we're accepting them

## Recognition

Contributors are recognized in:
- GitHub contributors list
- Module credits
- Release notes
- This documentation

## Code of Conduct

Be respectful and constructive:
- Welcome newcomers
- Provide helpful feedback
- Focus on improving the module
- Respect differing opinions

Thank you for helping make Journeys & Jamborees better! 🎉