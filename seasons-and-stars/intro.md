---
sidebar_position: 1
---

# Seasons & Stars

A calendar and timekeeping module for Foundry VTT v13+, designed as an alternative to Simple Calendar with backward compatibility.

## 🌟 Features

### ✅ **Available Now (Beta)**
- **Clean UI**: Responsive calendar interface with ApplicationV2 architecture
- **Multiple Calendar Views**: Full calendar widget, compact mini widget, and monthly grid view
- **Smart Year Navigation**: Click year to jump instantly instead of clicking arrows repeatedly
- **Real-World Integration**: Gregorian calendars automatically initialize with current date/time
- **Simple Calendar Compatibility**: Weather modules and existing integrations work immediately
- **SmallTime Integration**: Seamless positioning and visual consistency
- **Multiple Calendar Support**: Switch between Gregorian, Vale Reckoning, and custom calendars

### 🚧 **Coming Soon**
- **Notes System**: Full calendar event and note management with Journal integration
- **Weather Module Support**: Complete Simple Calendar notes API for weather details
- **Advanced Configuration**: In-app calendar editor and migration tools
- **Extended Integrations**: Enhanced module compatibility and hook system

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
- Users seeking a Foundry v13+ compatible alternative to Simple Calendar
- Module developers wanting to integrate calendar functionality
- GMs who need reliable timekeeping with clean UI

### **Migration Candidates**
- Simple Calendar users experiencing compatibility issues with Foundry v13+
- Users wanting better SmallTime integration
- Communities needing custom calendar support

## 🤝 Simple Calendar Compatibility

Seasons & Stars provides **automatic compatibility** with existing Simple Calendar integrations:

```javascript
// Weather modules work immediately
const currentDate = SimpleCalendar.api.currentDateTime();
const display = SimpleCalendar.api.timestampToDate(game.time.worldTime);
console.log(`Today is ${display.display.monthName} ${display.display.day}${display.display.daySuffix}`);

// Hook integration continues working
Hooks.on(SimpleCalendar.Hooks.DateTimeChange, (data) => {
  // Your existing weather/module code works unchanged
});
```

**No code changes required** for basic weather module integration.

## 📋 Requirements

- **Foundry VTT**: v13 or higher
- **Compatibility**: All game systems (system-agnostic design)
- **Permissions**: GM required for time changes

## 🗺️ Development Roadmap

### **Phase 1: Core Foundation** ✅ *Complete*
- Basic calendar system and UI
- Simple Calendar compatibility layer
- Essential user features

### **Phase 2: Notes & Integration** 🚧 *Next (Q1 2025)*
- Full notes system with Journal integration
- Complete weather module support
- Advanced hook system

### **Phase 3: Advanced Features** 📅 *Q2 2025*
- Calendar editor and creation tools
- Migration assistant from Simple Calendar
- Enhanced theming and customization

See the complete [Roadmap](roadmap) for detailed timelines.

## 📄 License

[MIT License](https://github.com/your-username/seasons-and-stars/blob/main/LICENSE) - Free for personal and commercial use.

## 🐛 Support & Feedback

- **GitHub**: [Issues & Discussions](https://github.com/your-username/seasons-and-stars)
- **Discord**: [Foundry VTT Community](https://discord.gg/foundryvtt) - `#modules` channel

---

**Ready to try a Foundry v13+ calendar solution?** Install Seasons & Stars today and experience the difference!