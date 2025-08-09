---
sidebar_position: 1
---

# Seasons & Stars

A calendar and timekeeping module for Foundry VTT v13+ with clean architecture and generic integration APIs. Features calendar widgets, custom calendar support, and SmallTime integration. Works with Simple Calendar-dependent modules via the Simple Calendar Compatibility Bridge.

## 🌟 Features

### ✅ **Available Now (Alpha v0.10.0)**
- **Modern UI**: Clean, responsive calendar interface with ApplicationV2 architecture
- **Multiple Calendar Views**: Full calendar widget, compact mini widget, and monthly grid view
- **Configurable Quick Time Buttons**: Customizable time advancement buttons with live preview and dedicated mini widget controls
- **Smart Mini Widget**: Optional time display, configurable day-of-week display, and dedicated quick time button configuration
- **Play/Pause Time Advancement**: Time advancement controls with automatic combat pause
- **Smart Year Navigation**: Click year to jump instantly instead of clicking arrows repeatedly
- **Convenient Defaults**: Gregorian calendars can initialize with current date/time
- **SmallTime Integration**: Seamless positioning and visual consistency. Time display intelligently hidden when SmallTime is present (configurable)
- **17 Available Calendars**: Including the new Roshar calendar for Stormlight Archive campaigns, plus calendar pack collections featuring D&D, Pathfinder, Critical Role, and other popular RPG calendars
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
- **Compatibility**: All game systems (system-agnostic design)
- **Permissions**: GM required for time changes

## 🎉 Recent Updates

### **Latest Features** (v0.10.0 - August 2025)
- ✅ **Always Show Quick Time Buttons**: Option to display time advancement controls permanently
- ✅ **Enhanced Mini Widget**: Configurable day-of-week display and optional time display
- ✅ **Dedicated Mini Widget Controls**: Separate quick time button configuration for compact view
- ✅ **Roshar Calendar**: Support for Stormlight Archive campaigns with Brandon Sanderson's calendar system
- ✅ **Play/Pause Time Controls**: Time advancement with automatic combat pause functionality
- ✅ **Intercalary Day Support**: Advanced calendar features including "before" intercalary days
- ✅ **PF2e Package**: Dedicated Pathfinder 2e integration extracted into separate package

### **SmallTime Integration Improvements**
- ✅ **Better Detection**: Improved SmallTime element detection across different setups
- ✅ **Visual Consistency**: Styling matches SmallTime background for seamless integration
- ✅ **Smart Positioning**: Positions above SmallTime with player list fallback
- ✅ **Performance**: Direct instance tracking for faster response times

### **Production Features** (v0.2.0+)
- ✅ **Error Handling**: Better logging and graceful failure recovery
- ✅ **Input Validation**: API protection with helpful error messages
- ✅ **TypeScript Support**: Type definitions for reliable development
- ✅ **Testing**: Comprehensive test suite with reliable widget API coverage

## 🗺️ Development Roadmap

### **Phase 1: Core Foundation** ✅ *Complete*
- Basic calendar system and UI
- Simple Calendar compatibility layer
- Essential user features

### **Phase 2: Calendar Tools** 🚧 *Next (Q3-Q4 2025)*
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

**Ready to try a Foundry v13+ calendar solution?** Install Seasons & Stars today and experience the difference!