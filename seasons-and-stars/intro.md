---
sidebar_position: 1
---

# Seasons & Stars

A calendar and timekeeping module for Foundry VTT v13+ with clean architecture and generic integration APIs. Features calendar widgets, custom calendar support, and SmallTime integration. Works with Simple Calendar-dependent modules via the Simple Calendar Compatibility Bridge.

## 🌟 Features

### ✅ **Available Now (v0.20.0)**
- **Modern UI**: Calendar interface with ApplicationV2 architecture
- **Multiple Calendar Views**: Full calendar widget, compact mini widget, and monthly grid view
- **Configurable Quick Time Buttons**: Time advancement buttons with live preview and mini widget controls
- **Mini Widget Features**: Optional time display, day-of-week display, and quick time button configuration
- **Play/Pause Time Advancement**: Time advancement controls with combat pause support
- **Year Navigation**: Click year to jump to a specific year
- **Default Date Initialization**: Gregorian calendars can initialize with current date/time
- **SmallTime Integration**: Positioning and visual consistency with SmallTime module
- **Multiple Calendars**: Core calendars plus calendar pack collections featuring D&D (Forgotten Realms, Eberron), Pathfinder (Golarion), Critical Role (Exandria), Roshar (Stormlight Archive), sci-fi calendars (Star Trek, Starfinder, Traveller), and custom formats
- **Notes System**: Create calendar notes with categories and tags (editing limited to basic journal interface)
- **Simple Calendar Compatibility**: API compatibility via separate compatibility bridge module

### 🚧 **Coming Soon**
- **Complete Notes UI**: Note viewing, editing, and management interface
- **Calendar Import/Creation**: In-app calendar editor and Simple Calendar migration tools
- **Advanced Configuration**: Enhanced calendar customization and validation
- **Extended Integrations**: Additional module compatibility and hook enhancements

## 🚀 Quick Start

### Installation
1. Install from Foundry VTT module browser: "Seasons & Stars"
2. Enable the module in your world
3. Configure your preferred calendar in module settings

### Basic Usage
- **Open Calendar**: Click the calendar button in scene controls
- **Change Date**: GMs can click on calendar dates to set world time
- **Quick Time Controls**: Use the mini widget for rapid time advancement
- **Calendar Selection**: Switch between different calendar systems anytime

## 🎯 Who Should Use This

### **Beta Testers**
- Module developers wanting to integrate calendar functionality
- GMs who need reliable timekeeping with clean UI
- Communities wanting to test cutting-edge calendar features

### **Migration Candidates**
- Users seeking a calendar solution for Foundry v13+
- Users wanting better SmallTime integration
- Communities needing custom calendar support

⚠️ **Migration Note**: Simple Calendar users should review current migration limitations including calendar import and note synchronization.

## 🤝 Simple Calendar Compatibility

Seasons & Stars provides **API compatibility** with Simple Calendar integrations via a separate compatibility bridge module:

```javascript
// Install Simple Calendar Compatibility Bridge for module integration
// Weather modules work with bridge installed
const currentDate = SimpleCalendar.api.currentDateTime();
const display = SimpleCalendar.api.timestampToDate(game.time.worldTime);
console.log(`Today is ${display.display.monthName} ${display.display.day}${display.display.daySuffix}`);

// Hook integration works through bridge
Hooks.on(SimpleCalendar.Hooks.DateTimeChange, (data) => {
  // Your existing weather/module code works with bridge
});
```

**Bridge module required** for Simple Calendar-dependent module integration.

## 📋 Requirements

- **Foundry VTT**: v13 or higher
- **Compatibility**: System-agnostic design compatible with Foundry's game systems
- **Permissions**: GM required for time changes

## 🎉 Recent Updates

### **Current Release** (v0.20.0)
- ✅ **JSON Schema Validation**: Calendar format validation system
- ✅ **External Calendar Loading**: Hook system for modules to register calendars programmatically
- ✅ **Calendar Pack Auto-Detection**: Automatic discovery of calendar modules with `seasons-and-stars-*` naming
- ✅ **Dark Sun Calendar Updates**: Updated moon colors and cycles
- ✅ **Module URL Protocol**: Support for `module:module-id` URL references in calendar loading
- ✅ **SmallTime Integration**: Detection and visual consistency with SmallTime module
- ✅ **Error Handling**: Logging and error recovery
- ✅ **Input Validation**: API protection with error messages
- ✅ **TypeScript Support**: Type definitions for development
- ✅ **Testing**: Test suite with widget API coverage

## 🗺️ Development Roadmap

### **Phase 1: Core Foundation** ✅ *Complete*
- Basic calendar system and UI
- Simple Calendar compatibility layer
- Essential user features

### **Phase 2: Calendar Tools** 🚧 *In Progress*
- Calendar editor and creation tools
- Simple Calendar import and migration assistant
- Enhanced calendar validation and customization

### **Phase 3: Notes System Enhancement** 📅 *Future*
- Complete notes editing interface
- Advanced note management and search
- Enhanced weather module integration

See the complete [Roadmap](roadmap) for detailed timelines.

## 📄 License

[MIT License](https://github.com/rayners/fvtt-seasons-and-stars/blob/main/LICENSE) - Free for personal and commercial use.

## 🐛 Support & Feedback

- **GitHub**: [Issues & Discussions](https://github.com/rayners/fvtt-seasons-and-stars)
- **Discord**: [Foundry VTT Community](https://discord.gg/foundryvtt) - `#modules` channel

---

**Ready to try a Foundry v13+ calendar solution?** Install Seasons & Stars today!