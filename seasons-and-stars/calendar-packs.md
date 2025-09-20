---
sidebar_position: 6
---

# Calendar Packs

Calendar packs are **auto-detected Foundry modules** that provide additional calendars for Seasons & Stars. They enable the community to create and share collections of themed calendars without requiring any coding knowledge.

## 🌟 Key Features

- **🔄 Auto-Detection**: Automatically discovered and loaded when modules are enabled
- **📦 Pure Data**: No JavaScript required - just JSON configuration files  
- **🎯 Themed Collections**: Group related calendars (Fantasy, Sci-Fi, Historical, etc.)
- **🏷️ Rich Metadata**: Preview text, tags, descriptions, and source attribution
- **🛡️ Safe Loading**: Validated against JSON schemas with error handling

## 🔧 How Calendar Packs Work

### Auto-Detection System

Seasons & Stars scans for enabled modules starting with `seasons-and-stars-` and automatically loads their calendars. For example:

- `seasons-and-stars-fantasy` (Fantasy RPG calendars)
- `seasons-and-stars-scifi` (Science fiction calendars)  
- `seasons-and-stars-homebrew` (Custom campaign calendars)

### Module Structure

Calendar pack modules follow a simple structure:

```
seasons-and-stars-mypack/
├── module.json           # Foundry module definition
├── README.md            # Documentation  
└── calendars/
    ├── index.json        # Collection metadata
    ├── calendar1.json    # Individual calendar files
    └── calendar2.json
```

### User Experience

- Calendar pack calendars appear in the calendar selection dialog
- Show distinctive "Module: Pack Name" badges for source identification
- Include preview text showing the calendar's unique date formatting
- Organized by tags for easy discovery

## 📦 Available Calendar Packs

### Official Packs

**Fantasy Calendar Pack** (`seasons-and-stars-fantasy`)
- D&D 5e calendars (Forgotten Realms, Eberron, Greyhawk) 
- Pathfinder (Golarion)
- Critical Role (Exandria)
- Stormlight Archive (Roshar calendar)
- Dark Sun, Warhammer Fantasy, and more

**Sci-Fi Calendar Pack** (`seasons-and-stars-scifi`)
- Star Trek calendars and stardates
- Traveller Imperial calendar
- Starfinder systems

### Community Packs

Community-created calendar packs can be found on the [Foundry Package Registry](https://foundryvtt.com/packages/) by searching for "seasons-and-stars".

## 🚀 Using Calendar Packs

### Installation

1. **Install Seasons & Stars** core module first
2. **Find Calendar Packs** on the Foundry Package Registry or GitHub
3. **Install Pack Modules** through Foundry's module manager
4. **Enable Modules** - calendars are automatically detected and loaded

### Selecting Calendars

1. Open **Seasons & Stars Settings** or click the calendar title in the widget
2. Click **"Choose Calendar"** 
3. Browse calendars organized by source:
   - 📅 **Built-in**: Core S&S calendars (Gregorian, Vale Reckoning)
   - 🧩 **Module**: Calendar pack calendars 
   - ☁️ **External**: URL-loaded calendars
4. Select your preferred calendar and save

### Calendar Information

Each calendar shows:
- **Name and Description**: What the calendar is for
- **Preview Text**: Sample date formatting (e.g., "15th of Goldmoon, 1024 AR")
- **Source Badge**: Which pack or module provides it
- **Tags**: Genre, system, or setting categories

## 🛠️ For Developers

### Creating Calendar Packs

Developers can create calendar packs using these key requirements:

#### Module Configuration

**module.json** must include:
```json
{
  "id": "seasons-and-stars-mypack",
  "title": "My Calendar Pack",
  "description": "Custom calendars for my campaigns",
  "version": "1.0.0",
  "relationships": {
    "requires": [
      {
        "id": "seasons-and-stars",
        "type": "module",
        "compatibility": {
          "minimum": "0.7.0"
        }
      }
    ]
  }
}
```

#### Collection Metadata

**calendars/index.json** defines the collection:
```json
{
  "name": "My Calendar Collection",
  "description": "Custom calendars for fantasy campaigns",
  "version": "1.0.0",
  "author": "Your Name",
  "calendars": [
    "calendar1.json",
    "calendar2.json"
  ],
  "tags": ["fantasy", "homebrew"]
}
```

#### Individual Calendars

Each calendar file follows the standard calendar format described in the [Developer Guide](developer-guide) with additional metadata:

```json
{
  "id": "my-custom-calendar",
  "translations": {
    "en": {
      "label": "My Custom Calendar",
      "description": "A calendar for my fantasy world",
      "setting": "The Kingdom of Mysteria"
    }
  },
  "year": {
    "epoch": 1000,
    "currentYear": 1024,
    "prefix": "Year ",
    "suffix": " of the Mystic Age",
    "startDay": 0
  },
  "months": [
    {
      "id": "firstmoon",
      "name": "First Moon",
      "days": 30
    }
  ],
  "weekdays": [
    {
      "id": "moonday",
      "name": "Moonday"
    }
  ],
  "tags": ["fantasy", "homebrew"],
  "preview": "1st of First Moon, 1024 of the Mystic Age"
}
```

### API Access

Calendar packs can be managed programmatically:

```javascript
// Load calendars from a specific module
await game.seasonsStars.api.loadModuleCalendars('seasons-and-stars-mypack');

// Access calendar manager for advanced operations  
const manager = game.seasonsStars.calendarManager;
const availableCalendars = manager.getAvailableCalendars();

// Check what packs are loaded
const loadedPacks = manager.getLoadedCalendarPacks();
```

## 🔍 Technical Implementation

Calendar packs leverage Seasons & Stars' robust loading system:

- **URL Resolution**: `module:` protocol resolves to actual file paths
- **Schema Validation**: All calendars validated against JSON schemas
- **Error Handling**: Comprehensive error reporting with fallback behavior
- **Source Tracking**: Full attribution and metadata preservation
- **Performance**: Lazy loading and efficient caching

## 🐛 Troubleshooting

### Common Issues

**"No calendar pack modules found"**
- Ensure module IDs start with `seasons-and-stars-`
- Check that modules are enabled in Foundry
- Verify modules have required dependency on seasons-and-stars

**"Failed to load calendars from module"**
- Check browser console for detailed error messages
- Validate JSON syntax in `index.json` and calendar files
- Ensure `calendars/index.json` exists and follows schema

**Calendars not appearing in selection**
- Enable debug logging: `game.settings.set('seasons-and-stars', 'debugMode', true)`
- Check for validation errors in console
- Verify calendar files follow the required format

### Getting Help

- **[GitHub Issues](https://github.com/rayners/fvtt-seasons-and-stars/issues)**: Report bugs and feature requests
- **[Discord](https://discord.gg/foundryvtt)**: Join the Foundry VTT Discord #modules channel
- **[Developer Guide](developer-guide)**: Technical API documentation

---

Calendar packs represent a powerful way to extend Seasons & Stars with community-created content while maintaining the simplicity and reliability that users expect from the module system.