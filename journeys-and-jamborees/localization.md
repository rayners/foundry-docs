---
sidebar_position: 2
title: Localization
---

# Localization Guide

Journeys & Jamborees supports full localization for international users. This guide explains how to contribute translations or create new language packs.

## Current Status

| Language | Status | Contributor |
|----------|--------|-------------|
| **English (en)** | ✅ Complete | Core team |
| Other languages | 🌐 Welcome | Community |

## Creating a Translation

### Step 1: Copy the English File

Create a new translation file based on the English template:

```bash
cp languages/en.json languages/[language-code].json
```

**Common language codes:**
- `de` - German (Deutsch)
- `fr` - French (Français)  
- `es` - Spanish (Español)
- `it` - Italian (Italiano)
- `pt` - Portuguese (Português)
- `ja` - Japanese (日本語)
- `ko` - Korean (한국어)
- `zh` - Chinese (中文)

### Step 2: Update module.json

Add your language to the module's language list:

```json
"languages": [
  {
    "lang": "en",
    "name": "English",
    "path": "languages/en.json"
  },
  {
    "lang": "de",
    "name": "Deutsch",
    "path": "languages/de.json"
  }
]
```

### Step 3: Translate the Strings

Edit your language file, translating values while keeping the JSON structure intact:

```json
{
  "J&J": {
    "ui": {
      "party-sheet": {
        "members": "Mitglieder",           // German
        "rations": "Rationen",
        "water": "Wasser"
      }
    }
  }
}
```

## Translation Guidelines

### ⚠️ Important Rules

1. **DO NOT** change the keys, only the values:
   ```json
   // ✅ Correct
   "members": "Mitglieder"
   
   // ❌ Wrong - don't change the key
   "mitglieder": "Mitglieder"
   ```

2. **Keep placeholders** intact:
   ```json
   // Placeholders like {name} must remain
   "characterJoined": "{name} ist der Gruppe beigetreten"
   ```

3. **Respect UI space** - Keep labels concise for buttons and headers

### Translation Tips

#### Context Matters

Consider where strings appear:
- **Labels**: Keep short for UI elements
- **Descriptions**: Can be more detailed
- **Tooltips**: Balance clarity and brevity
- **Error messages**: Clear and helpful

#### Game Terminology

Match official game translations when possible:
- "Pathfinder" → Use official Dragonbane term
- "Rations" → Match system terminology
- Character attributes → Follow game system

#### Cultural Adaptation

- Use appropriate formality levels
- Consider cultural context
- Maintain consistent tone throughout

## File Structure

The translation file follows this hierarchy:

```json
{
  "J&J": {
    "ui": {
      "party-sheet": {
        // Main sheet labels
      },
      "tabs": {
        // Tab names
      },
      "buttons": {
        // Button labels
      }
    },
    "members": {
      // Member management
    },
    "travelStatus": {
      // Travel states
    },
    "travelRoles": {
      // Role names
    },
    "characterStatus": {
      // Character states
    },
    "resources": {
      // Resource names
    },
    "settings": {
      // Configuration labels
    },
    "messages": {
      // Notifications
    }
  }
}
```

## Testing Your Translation

### Local Testing

1. **Set Foundry language** to your translation
2. **Load a world** with J&J enabled
3. **Check all UI elements** render correctly
4. **Test different scenarios**:
   - Long character names
   - Maximum party size
   - All tabs and dialogs

### Quality Checks

- [ ] All strings translated
- [ ] Special characters display correctly
- [ ] UI elements don't overflow
- [ ] Consistent terminology throughout
- [ ] Placeholders work properly

## Submitting Translations

### During Alpha/Beta

While the module is in development:

1. **Create a GitHub issue** with your translation attached
2. **Share via Discord** in the module channel
3. **Wait for inclusion** in next release

### Future Contribution Process

Once the module accepts pull requests:

1. **Fork** the repository
2. **Add** your translation file
3. **Update** `module.json`
4. **Test** thoroughly
5. **Submit** a pull request

## Translation Maintenance

### Keeping Current

- New features may add strings
- Check for updates each release
- Join the translator community
- Watch for breaking changes

### Version Tracking

Each translation should note:
- Module version translated for
- Last update date
- Translator credits
- Completion percentage

## Common Translation Challenges

### String Length

Some languages need more space:
- German: Often 30% longer
- Asian languages: May be shorter
- Plan for flexibility

### Grammatical Differences

- Plural forms vary by language
- Gender agreement requirements
- Word order differences

### Technical Terms

Balance between:
- Translating for clarity
- Keeping recognizable terms
- Matching game system

## Resources

### Tools

- **JSON validators** - Check file syntax
- **Translation memory** - Consistency tools
- **Community glossaries** - Shared terms

### Getting Help

- **GitHub Issues** - Technical questions
- **Discord** - Translation discussions
- **Community forums** - Localization tips

## Credits

Translators are credited in:
- Module credits
- GitHub contributors
- Release notes
- This documentation

Thank you for helping make Journeys & Jamborees accessible to players worldwide! 🌍