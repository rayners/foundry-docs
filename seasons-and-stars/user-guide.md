# User Guide

Learn how to use Seasons & Stars to manage time and calendars in your Foundry VTT games.

## Overview

Seasons & Stars provides an intuitive calendar and time management system for your games. Whether you're running a fantasy campaign with custom calendars or a modern setting using Earth time, Seasons & Stars adapts to your needs.

## The Calendar Widget

### Basic Display

The calendar widget shows:

- **Current Date**: Day, month, and year in your selected calendar
- **Current Time**: Hour and minute (if enabled)
- **Day Progress**: Visual progress bar showing time of day
- **Calendar Name**: Which calendar system is active

### Widget Controls

**Calendar Title** (Click to change calendar)
- Opens the calendar selection dialog
- Browse all available calendars
- Preview sample dates and calendar structure

**Date Display** (Click for details)
- Shows detailed date information
- Access to extended calendar features
- View important dates and events

### Time Controls (Game Masters Only)

**Quick Advancement**:
- `+15m` - Advance time by 15 minutes
- `+1h` - Advance time by 1 hour  
- `+1d` - Advance time by 1 day

**Set Time**:
- `Dawn` - Set time to 6:00 AM
- `Noon` - Set time to 12:00 PM
- `Dusk` - Set time to 6:00 PM
- `Night` - Set time to midnight

## Calendar Selection

### Browsing Calendars

Access the calendar browser by:
1. **Clicking the calendar title** in the widget
2. **Using scene controls** (calendar icon in token controls)
3. **Module settings** → Active Calendar

### Calendar Information

Each calendar shows:
- **Name and Setting**: Calendar title and cultural context
- **Sample Date**: Example of date formatting
- **Preview Button**: Detailed calendar information
- **Current Badge**: Shows which calendar is active

### Switching Calendars

1. **Select a calendar** by clicking its card
2. **Preview** (optional) to see structure and sample dates
3. **Click "Switch to [Calendar]"** to activate
4. **Confirmation** appears when switch is complete

## Calendar Types

### Earth Calendars

**Gregorian Calendar**
- Standard Earth calendar with 12 months
- Leap year support (February 29th every 4 years)
- Familiar month and day names
- Perfect for modern or historical Earth settings

### Fantasy Calendars

**Vale Reckoning** (Example Fantasy Calendar)
- Custom month names reflecting fantasy world
- Unique cultural holidays and seasons
- Adapted day/week structure for fantasy settings
- Rich lore and world-building integration

### Custom Calendars

You can add your own calendars by:
1. Creating JSON calendar files
2. Placing them in the module's calendars directory
3. Including translations and cultural context
4. Following the calendar format specification

## Time Management

### Understanding World Time

Seasons & Stars integrates with Foundry's native time system:
- **World Time**: The official game time stored by Foundry
- **Calendar Date**: How world time appears in your calendar
- **Real-time Updates**: Changes sync across all connected players

### Game Master Tools

**Time Advancement**:
- Use widget controls for quick time changes
- Precise control over minutes, hours, and days
- All players see updates automatically

**Scene Integration**:
- Calendar controls in scene toolbar
- Quick access without opening menus
- Keyboard shortcuts for common actions

**Settings Management**:
- Choose active calendar per world
- Configure widget visibility
- Set compatibility options

### Player Experience

**Automatic Updates**:
- Calendar widget updates in real-time
- No manual refresh needed
- Consistent time across all players

**Non-Intrusive**:
- Widget can be minimized or hidden
- Optional notifications for time changes
- Clean, distraction-free design

## Settings and Configuration

### Module Settings

Access through **Settings** → **Module Settings** → **Seasons & Stars**:

| Setting | Description | Options |
|---------|-------------|---------|
| **Active Calendar** | Which calendar to use | List of available calendars |
| **Show Time Widget** | Display calendar widget | Enabled / Disabled |
| **Simple Calendar Compatibility** | API compatibility mode | Enabled / Disabled |

### User Preferences

**Widget Position**:
- Drag the widget to your preferred location
- Position is saved per user
- Automatically remembers placement

**Visibility**:
- Toggle widget with scene controls
- Hide during combat or important scenes
- Quick keyboard access

## Integration Features

### Simple Calendar Compatibility

If you're migrating from Simple Calendar:

1. **Enable compatibility mode** (on by default)
2. **Test existing modules** to ensure they work
3. **Import calendar data** using conversion tools
4. **Switch gradually** to test functionality

### Module Ecosystem

**Journeys & Jamborees**:
- Travel time calculation
- Automatic time advancement during journeys
- Rest and camp time management

**Combat and Initiative**:
- Automatic time advancement during combat
- Round and turn time tracking
- Initiative order integration

**Weather Modules**:
- Seasonal weather patterns
- Calendar-based weather changes
- Climate and biome integration

## Troubleshooting

### Common Issues

**Widget Not Showing**:
1. Check "Show Time Widget" setting is enabled
2. Verify module is enabled in world
3. Try toggling widget with scene controls

**Time Not Advancing**:
1. Ensure you have GM permissions
2. Check if another time module is conflicting
3. Verify world time permissions in Foundry

**Calendar Not Loading**:
1. Check browser console for errors
2. Verify calendar file format is correct
3. Ensure module files are properly installed

### Performance Tips

**Large Worlds**:
- Use widget sparingly in worlds with many players
- Consider disabling auto-updates for very slow connections
- Minimize calendar switching during active play

**Module Conflicts**:
- Disable other calendar modules temporarily
- Check module load order
- Test with minimal modules to isolate issues

## Advanced Usage

### Custom Calendar Creation

Create your own calendars by following the calendar format:

```json
{
  "id": "my-calendar",
  "translations": {
    "en": {
      "label": "My Custom Calendar",
      "description": "A calendar for my fantasy world",
      "setting": "The Kingdom of Mysteria"
    }
  },
  "year": {
    "start": 1000,
    "prefix": "Year",
    "suffix": "of the Mystic Age"
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
  ]
}
```

### API Integration

For module developers, Seasons & Stars provides APIs:

```javascript
// Get current date
const currentDate = game.seasonsStars.api.getCurrentDate();

// Advance time
await game.seasonsStars.api.advanceDays(1);

// Format date
const formatted = game.seasonsStars.api.formatDate(date);

// Simple Calendar compatibility
const scDate = SimpleCalendar.api.getCurrentDate();
```

## Tips and Best Practices

### For Game Masters

1. **Set calendar before session zero** to establish setting expectations
2. **Use quick time controls** during play for smooth pacing
3. **Preview calendars** before switching to understand their structure
4. **Coordinate with travel modules** for automatic time management

### For Players

1. **Bookmark important dates** using journal entries
2. **Track character schedules** using the calendar
3. **Communicate time-sensitive plans** with specific dates
4. **Use calendar context** for character development and backstory

### For Module Developers

1. **Use the compatibility API** for broader module support
2. **Test with multiple calendars** to ensure flexibility
3. **Respect user calendar choices** in time calculations
4. **Document calendar dependencies** clearly for users

Seasons & Stars is designed to enhance your gaming experience with intuitive time management. Explore the features, customize to your preferences, and enjoy seamless calendar integration in your Foundry VTT games! 📅✨