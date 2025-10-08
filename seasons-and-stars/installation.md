# Installation

This guide will help you install and configure Seasons & Stars for your Foundry VTT server.

## Requirements

- **Foundry VTT**: Version 13 or later
- **Browser**: Modern browser with ES2020 support
- **Permissions**: Ability to install modules (requires Admin or Assistant level)

## Installation Methods

### Method 1: Module Browser (Recommended)

1. **Open Foundry VTT** and navigate to your **Game Worlds** tab
2. **Launch your world** or create a new one
3. Go to **Settings** → **Manage Modules**
4. Click **Install Module**
5. Search for **"Seasons & Stars"**
6. Click **Install** next to the Seasons & Stars entry
7. **Enable the module** in your world

### Method 2: Manifest URL

For pre-release versions or if not available in the module browser:

1. Go to **Settings** → **Manage Modules**
2. Click **Install Module**
3. Paste this manifest URL in the **Manifest URL** field:
   ```
   https://github.com/rayners/fvtt-seasons-and-stars/releases/latest/download/module.json
   ```
4. Click **Install**
5. **Enable the module** in your world

### Method 3: Manual Installation

For development or pre-release versions:

1. **Download** the latest release from [GitHub](https://github.com/rayners/fvtt-seasons-and-stars/releases)
2. **Extract** the ZIP file to your Foundry `Data/modules/` directory
3. **Restart** Foundry VTT
4. **Enable the module** in your world settings

## Initial Configuration

After installation, Seasons & Stars will automatically:

1. **Load default calendars** (Gregorian calendar included)
2. **Initialize with current world time**
3. **Add scene controls** for easy access
4. **Show the calendar widget** (if enabled in settings)

### First Launch

When you first enable Seasons & Stars:

1. The **calendar widget** will appear showing the current date
2. **Scene controls** will include a calendar icon
3. **Module settings** will be available in the settings menu

## Settings Configuration

Access Seasons & Stars settings through **Settings** → **Module Settings** → **Seasons & Stars**.

### Core Settings

| Setting | Description | Default |
|---------|-------------|---------|
| **Active Calendar** | Which calendar system to use | Gregorian |
| **Show Time Widget** | Display the calendar widget on the UI | Enabled |
| **Simple Calendar Compatibility** | Enable compatibility with Simple Calendar API | Enabled |

### Calendar Selection

To change your active calendar:

1. **Click the calendar widget** title or use scene controls
2. **Browse available calendars** in the selection dialog
3. **Preview calendars** to see sample dates and structure
4. **Select a calendar** and click "Switch"

## Verification

To verify Seasons & Stars is working correctly:

1. **Check the calendar widget** appears in your UI
2. **Click the calendar title** to open the selection dialog
3. **Use scene controls** to toggle the widget
4. **Advance time** using GM controls (if you're a GM)

## Compatibility

### Simple Calendar Migration

If you're migrating from Simple Calendar:

1. **Install Seasons & Stars** alongside Simple Calendar
2. **Enable compatibility mode** (enabled by default)
3. **Test your existing modules** to ensure they work
4. **Import your calendar data** using migration tools (when available)
5. **Disable Simple Calendar** once everything is working

### Other Modules

Seasons & Stars is designed to work with popular Foundry modules:

- ✅ **Foundry modules using the Simple Calendar API**
- ✅ **Combat and time-tracking modules**  
- ✅ **Weather and environment modules**
- ✅ **Journey and travel modules**

## Troubleshooting

### Widget Not Appearing

1. Check that **"Show Time Widget"** is enabled in settings
2. Verify the module is **enabled** in your world
3. **Refresh your browser** and reload the world

### Calendar Not Loading

1. Check the **browser console** for error messages
2. Verify you're running **Foundry v13+**
3. **Disable other calendar modules** temporarily to test

### Simple Calendar Conflicts

1. **Disable Simple Calendar** temporarily
2. Test if Seasons & Stars works alone
3. **Enable compatibility mode** if both need to run together
4. Verify both modules are enabled and restart Foundry

## Getting Help

Need assistance? Here's where to find help:

- **[User Guide](user-guide)**: Comprehensive feature documentation
- **[GitHub Issues](https://github.com/rayners/fvtt-seasons-and-stars/issues)**: Bug reports and feature requests
- **[Discord](https://discord.gg/foundryvtt)**: Community support in #modules

## Next Steps

Now that Seasons & Stars is installed:

1. **Explore the [User Guide](user-guide)** to learn all features
2. **Experiment with different calendars** using the selection dialog
3. **Try the GM time controls** if you're running a game
4. **Check out the [ApplicationV2 Development Guide](applicationv2-development)** if you're interested in modern Foundry development

Seasons & Stars is now installed and ready to use.