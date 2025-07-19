---
sidebar_position: 1
---

# Seasons & Stars

A calendar and timekeeping module for Foundry VTT v13+, designed as an alternative to Simple Calendar with backward compatibility.

## 🌟 Features

### ✅ **Available Now (Alpha)**
- **Clean UI**: Responsive calendar interface with ApplicationV2 architecture
- **Multiple Calendar Views**: Full calendar widget, compact mini widget, and monthly grid view
- **Smart Year Navigation**: Click year to jump instantly instead of clicking arrows repeatedly
- **Real-World Integration**: Gregorian calendars automatically initialize with current date/time
- **Notes System**: Create calendar notes with categories and tags (editing limited to basic journal interface)
- **SmallTime Integration**: Seamless positioning and visual consistency
- **16 Available Calendars**: Switch between core calendars (Gregorian, Golarion PF2e) and calendar pack collections featuring D&D, Pathfinder, Critical Role, and other popular RPG calendars
- **Simple Calendar Compatibility**: API compatibility via separate compatibility bridge module

### 🚧 **Coming Soon**
- **Complete Notes Editing**: Calendar-aware note editing interface for metadata management
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

### **Alpha Testers**
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

### **Widget Switching & UI Enhancements** (v0.2.4+)
- ✅ **Keyboard Shortcuts**: Alt+S for default widget, Alt+Shift+S for mini, Alt+Ctrl+S for grid
- ✅ **Scene Control Integration**: Calendar button in Journal Notes controls for easy access
- ✅ **Cross-Widget Navigation**: Switch between widget types using header controls
- ✅ **Enhanced Mini Widget**: Double-click to open larger view, better SmallTime positioning

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

### **Phase 2: Notes Editing Enhancement** 🚧 *Next (Q3 2025)*
- Calendar-aware note editing interface
- Note metadata management
- Enhanced note browser and filtering

### **Phase 3: Calendar Creation & Import** 📅 *Q4 2025*
- Calendar editor and creation tools
- Migration assistant from Simple Calendar
- Enhanced theming and customization

See the complete [Roadmap](roadmap) for detailed timelines.

## 📄 License

[MIT License](https://github.com/rayners/fvtt-seasons-and-stars/blob/main/LICENSE) - Free for personal and commercial use.

## 🐛 Support & Feedback

- **GitHub**: [Issues & Discussions](https://github.com/rayners/fvtt-seasons-and-stars)
- **Discord**: [Foundry VTT Community](https://discord.gg/foundryvtt) - `#modules` channel

---

**Ready to try a Foundry v13+ calendar solution?** Install Seasons & Stars today and experience the difference!