---
title: Developer Guide
---

# Developer Guide

Complete API reference and integration guide for module developers working with Seasons & Stars.

## 🚀 Getting Started

### API Access
Seasons & Stars exposes its API through the global `game` object:

```javascript
// Check if Seasons & Stars is available
if (game.seasonsStars) {
  const currentDate = game.seasonsStars.api.getCurrentDate();
  console.log('Current date:', currentDate);
}
```

### Detecting Seasons & Stars
```javascript
// Method 1: Direct check
const hasSeasonsStars = !!game.seasonsStars;

// Method 2: Feature detection
const hasAdvancedCalendar = typeof game.seasonsStars?.api?.getCurrentDate === 'function';

// Method 3: Version check (when available)
const version = game.seasonsStars?.VERSION;
```

## 🔧 Core API

### Date Retrieval

#### `getCurrentDate()`
Get the current date from the active calendar.

```javascript
// Get current date from active calendar
const currentDate = game.seasonsStars.api.getCurrentDate();
// Returns: { year: 2024, month: 12, day: 25, weekday: 3, time: { hour: 14, minute: 30, second: 0 } }
```

:::note Calendar-Specific Operations
The `calendarId` parameter is planned for future implementation but not currently supported. All operations use the currently active calendar.
:::

**Returns:** `CalendarDate | null`

### Time Manipulation

#### `advanceDays(days: number)`
Advance world time by specified number of days.

```javascript
// Advance by 1 day
await game.seasonsStars.api.advanceDays(1);

// Go back 3 days (negative values)
await game.seasonsStars.api.advanceDays(-3);
```

#### `advanceHours(hours: number)`
Advance world time by specified number of hours.

```javascript
// Advance by 8 hours (long rest)
await game.seasonsStars.api.advanceHours(8);
```

#### `advanceMinutes(minutes: number)`
Advance world time by specified number of minutes.

```javascript
// Advance by 30 minutes
await game.seasonsStars.api.advanceMinutes(30);
```

#### Other Time Functions
```javascript
// Time advancement functions
await game.seasonsStars.api.advanceMinutes(minutes);
await game.seasonsStars.api.advanceWeeks(weeks);
await game.seasonsStars.api.advanceMonths(months);
await game.seasonsStars.api.advanceYears(years);
```

### Calendar Metadata

#### `getMonthNames()`
Get array of month names for the active calendar.

```javascript
// Get month names from active calendar
const months = game.seasonsStars.api.getMonthNames();
// Returns: ["January", "February", "March", ...]
```

**Returns:** `string[]`

#### `getWeekdayNames()`
Get array of weekday names for the active calendar.

```javascript
// Get weekday names from active calendar
const weekdays = game.seasonsStars.api.getWeekdayNames();
// Returns: ["Sunday", "Monday", "Tuesday", ...]
```

**Returns:** `string[]`

### Enhanced Features

#### `getSunriseSunset(date: CalendarDate)`
Get sunrise and sunset times for a specific date.

```javascript
const currentDate = game.seasonsStars.api.getCurrentDate();
const sunTimes = game.seasonsStars.api.getSunriseSunset(currentDate);
// Returns: { sunrise: 6, sunset: 18 }
```

**Returns:** `{ sunrise: number; sunset: number }`

:::note Basic Implementation
Currently returns default values (6 AM sunrise, 6 PM sunset). This can be enhanced in future versions with calendar-specific astronomical calculations.
:::

#### `getSeasonInfo(date: CalendarDate)`
Get season information for a specific date.

```javascript
const currentDate = game.seasonsStars.api.getCurrentDate();
const season = game.seasonsStars.api.getSeasonInfo(currentDate);
// Returns: { name: "Winter", icon: "winter" }
```

**Returns:** `{ name: string; icon: string }`

:::note Basic Implementation
Currently uses simple month-range matching to determine seasons. Future versions may include more sophisticated season calculation based on calendar-specific rules.
:::

### Date Conversion

#### `dateToWorldTime(date: CalendarDate)`
Convert a calendar date to Foundry world time.

```javascript
const date = {
  year: 2024,
  month: 12,
  day: 25,
  weekday: 3,
  time: { hour: 12, minute: 0, second: 0 }
};

const worldTime = game.seasonsStars.api.dateToWorldTime(date);
console.log('World time:', worldTime); // Returns timestamp in seconds
```

#### `worldTimeToDate(timestamp: number)`
Convert Foundry world time to calendar date.

```javascript
const currentTime = game.time.worldTime;
const date = game.seasonsStars.api.worldTimeToDate(currentTime);
console.log('Calendar date:', date);
```

### Date Formatting

#### `formatDate(date: CalendarDate, options?: DateFormatOptions)`
Format a date according to calendar conventions.

```javascript
const date = game.seasonsStars.api.getCurrentDate();

// Default formatting
const formatted = game.seasonsStars.api.formatDate(date);
// Returns: "December 25th, 2024 CE"

// Custom formatting options
const custom = game.seasonsStars.api.formatDate(date, {
  includeTime: true,
  includeWeekday: true,
  format: 'long'
});
// Returns: "Wednesday, December 25th, 2024 CE at 2:30 PM"
```

**Options:**
```typescript
interface DateFormatOptions {
  includeTime?: boolean;
  includeWeekday?: boolean;
  includeYear?: boolean;
  format?: 'short' | 'long' | 'numeric';
}
```

### Calendar Management

#### `getActiveCalendar()`
Get the currently active calendar definition.

```javascript
const calendar = game.seasonsStars.api.getActiveCalendar();
console.log('Active calendar:', calendar.id);
console.log('Months:', calendar.months.map(m => m.name));
```

#### `setActiveCalendar(calendarId: string)`
Switch to a different calendar system.

```javascript
// Switch to Vale Reckoning calendar
await game.seasonsStars.api.setActiveCalendar('vale-reckoning');

// Switch back to Gregorian
await game.seasonsStars.api.setActiveCalendar('gregorian');
```

#### `getAvailableCalendars()`
Get list of all available calendar IDs.

```javascript
const calendars = game.seasonsStars.api.getAvailableCalendars();
console.log('Available calendars:', calendars);
// Returns: ['gregorian', 'vale-reckoning', 'custom-calendar']
```

## 🔄 Simple Calendar Compatibility

Seasons & Stars provides a **clean integration interface** that enables compatibility with Simple Calendar-dependent modules through the **[Simple Calendar Compatibility Bridge](/simple-calendar-compat/intro)**.

:::important Architecture Change
In future versions, Seasons & Stars will provide a clean integration interface that the separate **Simple Calendar Compatibility Bridge** module uses to provide Simple Calendar API compatibility.
:::

### Integration Interface

Seasons & Stars exposes a standardized integration interface that compatibility bridges can use:

```javascript
// Check if S&S integration interface is available
const integration = game.seasonsStars?.integration;

if (integration?.isAvailable) {
  console.log('S&S Integration Interface available');
  console.log('API methods:', Object.keys(integration.api));
  console.log('Widget support:', !!integration.widgets);
  console.log('Hook support:', !!integration.hooks);
}
```

### For Simple Calendar Compatibility

To use Simple Calendar-dependent modules with Seasons & Stars:

1. **Install Seasons & Stars** (this module)
2. **Install [Simple Calendar Compatibility Bridge](/simple-calendar-compat/installation)**
3. **Install your Simple Calendar-dependent modules** (Simple Weather, SmallTime, etc.)

The compatibility bridge provides Simple Calendar API compatibility using S&S as the underlying calendar system.

### Integration Interface API

The integration interface provides these methods for compatibility bridges:

```javascript
const integration = game.seasonsStars.integration;

// Core date operations
const currentDate = integration.api.getCurrentDate();
const convertedDate = integration.api.worldTimeToDate(timestamp);
const timestamp = integration.api.dateToWorldTime(date);

// Calendar metadata (newly implemented)
const months = integration.api.getMonthNames();
const weekdays = integration.api.getWeekdayNames();

// Enhanced features (basic implementations)
const sunTimes = integration.api.getSunriseSunset(date);
const season = integration.api.getSeasonInfo(date);

// Widget integration ✅
if (integration.widgets.mini) {
  integration.widgets.mini.addSidebarButton('myButton', 'fas fa-star', 'My Button', callback);
  integration.widgets.mini.removeSidebarButton('myButton');  // ✅ Implemented
  const hasButton = integration.widgets.mini.hasSidebarButton('myButton');  // ✅ Implemented
}

// Hook integration
integration.hooks.onDateChanged((event) => {
  console.log('Date changed:', event.newDate);
});
```

:::tip Developer Tip
Use the integration interface rather than the direct S&S API when building compatibility modules. This ensures your module works consistently across different S&S versions.
:::

### Widget Integration API ✅

Seasons & Stars provides a widget system for adding custom buttons and integrations:

```typescript
interface SeasonsStarsWidgets {
  addSidebarButton(name: string, icon: string, tooltip: string, callback: Function): void;  // ✅ Implemented
  removeSidebarButton(name: string): void;  // ✅ Implemented  
  hasSidebarButton(name: string): boolean;  // ✅ Implemented
  show(): void;  // ✅ Implemented
  hide(): void;  // ✅ Implemented
  toggle(): void;  // ✅ Implemented
}
```

**Usage Example:**
```javascript
// Add a custom button to calendar widget
game.seasonsStars.widgets.main.addSidebarButton(
  'weather',
  'fas fa-cloud-sun', 
  'Toggle Weather',
  () => WeatherApp.toggle()
);

// Add button to mini widget  
game.seasonsStars.widgets.mini.addSidebarButton(
  'notes',
  'fas fa-sticky-note',
  'Quick Note',
  () => createQuickNote()
);

// Remove button when no longer needed
game.seasonsStars.widgets.main.removeSidebarButton('weather');

// Check if button exists
if (game.seasonsStars.widgets.mini.hasSidebarButton('notes')) {
  console.log('Notes button is active');
}
```

## 🪝 Hook System ✅

### Seasons & Stars Hooks ✅

#### `seasons-stars:dateChanged`
Fired when the world time changes.

```javascript
Hooks.on('seasons-stars:dateChanged', (data) => {
  console.log('Date changed from', data.oldTime, 'to', data.newTime);
  console.log('New date:', data.newDate);
  console.log('Time delta:', data.delta, 'seconds');
  
  // Update your module's time-sensitive features
  updateWeatherForNewDate(data.newDate);
  refreshTimedAbilities();
});
```

**Data Structure:**
```typescript
interface DateChangeData {
  newDate: CalendarDate;
  oldTime: number;
  newTime: number;
  delta: number;
}
```

#### `seasons-stars:calendarChanged`
Fired when the active calendar system changes.

```javascript
Hooks.on('seasons-stars:calendarChanged', (data) => {
  console.log('Calendar changed to:', data.newCalendarId);
  console.log('New calendar data:', data.calendar);
  
  // Recalculate seasonal effects, holidays, etc.
  recalculateSeasonalEffects(data.calendar);
});
```

#### `seasons-stars:ready`
Fired when Seasons & Stars is fully initialized.

```javascript
Hooks.on('seasons-stars:ready', (data) => {
  console.log('Seasons & Stars ready');
  console.log('Manager:', data.manager);
  console.log('API:', data.api);
  
  // Safe to use Seasons & Stars API
  initializeCalendarIntegration();
});
```

#### `seasons-stars:registerExternalCalendars` (Added in v0.8.0)

Fired during initialization to allow modules to register calendars programmatically. This provides an alternative to calendar packs for dynamic calendar registration.

```javascript
Hooks.on('seasons-stars:registerExternalCalendars', ({ registerCalendar, manager }) => {
  // Register a custom calendar
  const myCalendar = {
    id: 'my-custom-calendar',
    name: 'My Custom Calendar',
    months: [
      { name: 'First Month', days: 30 },
      { name: 'Second Month', days: 31 }
    ],
    weekdays: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5'],
    // ... full calendar definition
  };
  
  const sourceInfo = {
    name: 'My Calendar Module',
    version: '1.0.0',
    type: 'external'
  };
  
  const success = registerCalendar(myCalendar, sourceInfo);
  console.log('Calendar registered:', success);
  
  // Register multiple calendars
  calendarsToRegister.forEach(calendar => {
    registerCalendar(calendar, sourceInfo);
  });
});
```

**Registration Callback Parameters:**

```typescript
interface ExternalCalendarRegistration {
  registerCalendar: (calendar: CalendarDefinition, source: SourceInfo) => boolean;
  manager: CalendarManager;
}

interface SourceInfo {
  name: string;     // Module/source name
  version: string;  // Module version
  type: 'external'; // Source type identifier
}
```

**When to Use:**
- **Calendar Packs**: Best for distributable collections, auto-detection, no JavaScript required
- **External Registration Hook**: Best for runtime registration, dynamic calendars, programmatic control

### Debug and Development Hooks ✅

Seasons & Stars provides additional hooks for debugging and development:

#### `seasons-stars:noteCreated` ✅
Fired when a calendar note is created.

```javascript
Hooks.on('seasons-stars:noteCreated', (data) => {
  console.log('Note created:', data.note);
  console.log('Date:', data.date);
  console.log('Created by:', data.userId);
  
  // Integrate with other modules
  updateWeatherForNote(data.note, data.date);
});
```

**Data Structure:**
```typescript
interface NoteCreatedData {
  note: CalendarNote;
  date: CalendarDate;
  userId: string;
}
```

### Simple Calendar Hook Compatibility

#### Mapped Hooks
```javascript
// These hooks are automatically mapped for compatibility:
Hooks.on(SimpleCalendar.Hooks.DateTimeChange, (data) => {
  // Equivalent to 'seasons-stars:dateChanged'
});

Hooks.on(SimpleCalendar.Hooks.Ready, (data) => {
  // Equivalent to 'seasons-stars:ready'
});
```

### Available Debug APIs ✅

Seasons & Stars exposes several debug and diagnostic APIs:

#### `game.seasonsStars.manager.getDebugInfo()` ✅
Get comprehensive debug information about the calendar system.

```javascript
const debugInfo = game.seasonsStars.manager.getDebugInfo();
console.log('Calendar Engine State:', debugInfo.engine);
console.log('Current Date:', debugInfo.currentDate);
console.log('Active Calendar:', debugInfo.activeCalendar);
console.log('World Time:', debugInfo.worldTime);
console.log('Conversion Test:', debugInfo.conversionTest);
```

#### `game.seasonsStars.categories` 🚧
Access the note categories system (when notes system is enabled).

```javascript
// Get all available categories
const categories = game.seasonsStars.categories?.getAll();
console.log('Available categories:', categories);

// Add custom category
game.seasonsStars.categories?.addCategory({
  id: 'custom',
  name: 'Custom Events',
  color: '#ff6b6b',
  icon: 'fas fa-star'
});
```

:::warning Implementation Status
The notes system including categories is fully implemented but may not be exposed in all S&S versions. Check for availability before use.
:::

#### Calendar Validation APIs ✅

```javascript
// Validate calendar definition
const validation = game.seasonsStars.manager.validateAllCalendars();
console.log('Calendar validation results:', validation);

// Get detailed validation for specific calendar
const detailedValidation = game.seasonsStars.manager.getActiveEngine().validateWithHelp();
console.log('Detailed validation:', detailedValidation);
```

## 📊 Calendar Data Structures

### CalendarDate Interface
```typescript
interface CalendarDate {
  year: number;
  month: number;        // 1-based (1 = first month)
  day: number;          // 1-based (1 = first day)
  weekday: number;      // 0-based (0 = first weekday)
  intercalary?: string; // Special day name (optional)
  time?: {
    hour: number;       // 0-23
    minute: number;     // 0-59
    second: number;     // 0-59
  };
}
```

### Calendar Structure
```typescript
interface SeasonsStarsCalendar {
  id: string;
  translations: {
    [languageCode: string]: {
      label: string;
      description?: string;
      setting?: string;
    };
  };
  
  year: {
    epoch: number;      // Starting year for calculations
    currentYear: number; // Default current year
    prefix: string;     // Text before year (e.g., "")
    suffix: string;     // Text after year (e.g., " CE")
    startDay: number;   // Which weekday the epoch starts on
  };
  
  months: CalendarMonth[];
  weekdays: CalendarWeekday[];
  intercalary: CalendarIntercalary[]; // Special days
  
  leapYear: {
    rule: 'none' | 'gregorian' | 'custom';
    interval?: number;  // For custom rules
    month?: string;     // Which month gets extra days
    extraDays?: number; // How many extra days
  };
  
  time: {
    hoursInDay: number;    // Usually 24
    minutesInHour: number; // Usually 60
    secondsInMinute: number; // Usually 60
  };
}
```

## 🔧 Integration Examples

### Weather Module Integration
```javascript
class WeatherManager {
  constructor() {
    this.setupCalendarIntegration();
  }
  
  setupCalendarIntegration() {
    // Support both Simple Calendar and Seasons & Stars
    if (window.SimpleCalendar) {
      Hooks.on(SimpleCalendar.Hooks.DateTimeChange, this.onDateChange.bind(this));
      this.calendarAPI = SimpleCalendar.api;
    }
    
    // Direct Seasons & Stars integration (preferred)
    if (game.seasonsStars) {
      Hooks.on('seasons-stars:dateChanged', this.onDateChange.bind(this));
      this.calendarAPI = game.seasonsStars.api;
    }
  }
  
  onDateChange(data) {
    const currentDate = this.calendarAPI.getCurrentDate();
    const season = this.calculateSeason(currentDate);
    const weather = this.generateWeather(season, currentDate);
    
    this.updateWeatherDisplay(weather);
    this.saveWeatherToNotes(currentDate, weather);
  }
  
  calculateSeason(date) {
    // Use calendar months to determine season
    const calendar = this.calendarAPI.getActiveCalendar();
    const monthsPerSeason = calendar.months.length / 4;
    return Math.floor((date.month - 1) / monthsPerSeason);
  }
  
  async saveWeatherToNotes(date, weather) {
    // Method 1: Simple Calendar compatibility (via bridge)
    if (this.calendarAPI.addNote) {
      await this.calendarAPI.addNote({
        date: date,
        title: 'Weather',
        content: weather.description,
        category: 'weather'
      });
    }
    
    // Method 2: Direct S&S notes API ✅ (when available)
    if (game.seasonsStars.notes) {
      await game.seasonsStars.notes.createNote({
        title: 'Daily Weather',
        content: weather.description,
        startDate: date,
        category: 'weather',
        allDay: true,
        playerVisible: true
      });
    }
    
    // Method 3: Module flag storage ✅ (always available)
    if (game.seasonsStars.notes?.setNoteModuleData) {
      await game.seasonsStars.notes.setNoteModuleData(
        'weather-data',
        `weather-${date.year}-${date.month}-${date.day}`,
        {
          temperature: weather.temperature,
          conditions: weather.conditions,
          windSpeed: weather.windSpeed,
          timestamp: Date.now()
        }
      );
    }
  }
}
```

### Time-Sensitive Spell Effects
```javascript
class SpellEffectManager {
  constructor() {
    Hooks.on('seasons-stars:dateChanged', this.checkExpiringEffects.bind(this));
  }
  
  async addTimedEffect(actorId, effectData, duration) {
    const currentDate = game.seasonsStars.api.getCurrentDate();
    const expirationTime = game.time.worldTime + duration;
    
    // Store expiration time with effect
    const effect = {
      ...effectData,
      expirationTime: expirationTime,
      startDate: currentDate
    };
    
    await this.storeEffect(actorId, effect);
  }
  
  checkExpiringEffects(data) {
    const currentTime = data.newTime;
    
    // Check all active effects
    for (const [actorId, effects] of this.activeEffects) {
      const expired = effects.filter(e => e.expirationTime <= currentTime);
      
      expired.forEach(effect => {
        this.removeEffect(actorId, effect);
        ui.notifications.info(`${effect.name} effect has expired on ${actorId}`);
      });
    }
  }
}
```

### Calendar Event System
```javascript
class EventManager {
  constructor() {
    this.events = new Map();
    this.setupEventHandling();
  }
  
  setupEventHandling() {
    Hooks.on('seasons-stars:dateChanged', this.checkEvents.bind(this));
    Hooks.on('seasons-stars:calendarChanged', this.convertEventDates.bind(this));
  }
  
  addRecurringEvent(eventData) {
    const event = {
      id: foundry.utils.randomID(),
      name: eventData.name,
      description: eventData.description,
      recurrence: eventData.recurrence, // 'daily', 'weekly', 'monthly', 'yearly'
      startDate: eventData.startDate,
      endDate: eventData.endDate
    };
    
    this.events.set(event.id, event);
  }
  
  checkEvents(data) {
    const currentDate = data.newDate;
    
    for (const event of this.events.values()) {
      if (this.shouldTriggerEvent(event, currentDate)) {
        this.triggerEvent(event, currentDate);
      }
    }
  }
  
  shouldTriggerEvent(event, currentDate) {
    // Check if event should trigger on current date
    switch (event.recurrence) {
      case 'daily':
        return true;
      case 'weekly':
        return currentDate.weekday === event.startDate.weekday;
      case 'monthly':
        return currentDate.day === event.startDate.day;
      case 'yearly':
        return currentDate.month === event.startDate.month && 
               currentDate.day === event.startDate.day;
      default:
        return false;
    }
  }
}
```

## 🔄 Migration Guide

### From Simple Calendar

#### Phase 1: Basic Compatibility
Your existing Simple Calendar integration should work immediately:

```javascript
// This code continues working unchanged:
const currentDate = SimpleCalendar.api.currentDateTime();
const formatted = SimpleCalendar.api.timestampToDate(game.time.worldTime);

Hooks.on(SimpleCalendar.Hooks.DateTimeChange, (data) => {
  // Your existing hook handler
});
```

#### Phase 2: Enhanced Integration
Migrate to native Seasons & Stars API for better features:

```javascript
// Old Simple Calendar code:
const oldDate = SimpleCalendar.api.currentDateTime();

// New Seasons & Stars code:
const newDate = game.seasonsStars.api.getCurrentDate();

// Benefits: Better type safety, more features, direct access
```

#### Phase 3: Notes System Migration
When Phase 2 releases, migrate note handling:

```javascript
// Old Simple Calendar notes:
const notes = SimpleCalendar.api.getNotes(date);

// New Seasons & Stars notes:
const notes = game.seasonsStars.api.getNotes(date);
```

### Notes System API ✅

If the notes system is available, you can use the comprehensive notes API:

```javascript
// Check if notes system is available
if (game.seasonsStars.notes) {
  // Create a note
  const note = await game.seasonsStars.notes.createNote({
    title: 'Important Event',
    content: 'Something significant happens today.',
    startDate: game.seasonsStars.api.getCurrentDate(),
    category: 'event',
    allDay: true,
    playerVisible: true
  });
  
  // Find notes for a specific date
  const currentDate = game.seasonsStars.api.getCurrentDate();
  const todaysNotes = await game.seasonsStars.notes.findNotesByDate(currentDate);
  
  // Store module-specific data
  await game.seasonsStars.notes.setNoteModuleData(
    note.id,
    'my-module',
    { customData: 'module specific information' }
  );
  
  // Retrieve module data
  const moduleData = await game.seasonsStars.notes.getNoteModuleData(
    note.id,
    'my-module'
  );
}
```

:::info Notes System Status
The notes system is implemented in S&S core with CRUD operations, categories, search functionality, and module flag support. It provides Simple Calendar notes API compatibility.
:::

### From Custom Time Systems

#### Step 1: Replace Time Calculations
```javascript
// Old custom time code:
function advanceGameTime(hours) {
  const newTime = game.time.worldTime + (hours * 3600);
  game.time.advance(newTime - game.time.worldTime);
}

// New Seasons & Stars code:
async function advanceGameTime(hours) {
  await game.seasonsStars.api.advanceHours(hours);
}
```

#### Step 2: Use Calendar-Aware Functions
```javascript
// Old date calculation:
function addDaysToDate(date, days) {
  // Complex calculation considering month lengths, leap years, etc.
}

// New calendar-aware calculation:
function addDaysToDate(date, days) {
  return game.seasonsStars.api.dateToWorldTime(
    game.seasonsStars.manager.getActiveEngine().addDays(date, days)
  );
}
```

## 🎯 Best Practices

### Error Handling
```javascript
// Always check if Seasons & Stars is available
function safeGetCurrentDate() {
  if (!game.seasonsStars?.api?.getCurrentDate) {
    console.warn('Seasons & Stars not available');
    return null;
  }
  
  try {
    return game.seasonsStars.api.getCurrentDate();
  } catch (error) {
    console.error('Failed to get current date:', error);
    return null;
  }
}
```

### Performance Considerations
```javascript
// Cache calendar data instead of repeated API calls
class CalendarCache {
  constructor() {
    this.calendarData = null;
    this.lastUpdate = 0;
    
    Hooks.on('seasons-stars:calendarChanged', () => {
      this.invalidateCache();
    });
  }
  
  getCalendar() {
    const now = Date.now();
    if (!this.calendarData || now - this.lastUpdate > 60000) {
      this.calendarData = game.seasonsStars.api.getActiveCalendar();
      this.lastUpdate = now;
    }
    return this.calendarData;
  }
  
  invalidateCache() {
    this.calendarData = null;
    this.lastUpdate = 0;
  }
}
```

### Graceful Degradation
```javascript
// Support multiple calendar systems
class UniversalCalendarAdapter {
  constructor() {
    this.adapter = this.detectCalendarSystem();
  }
  
  detectCalendarSystem() {
    if (game.seasonsStars) {
      return new SeasonsStarsAdapter();
    } else if (window.SimpleCalendar) {
      return new SimpleCalendarAdapter();
    } else {
      return new FallbackAdapter();
    }
  }
  
  getCurrentDate() {
    return this.adapter.getCurrentDate();
  }
  
  onDateChange(callback) {
    this.adapter.onDateChange(callback);
  }
}
```

### Module Dependencies
```javascript
// In your module.json
{
  "relationships": {
    "systems": [],
    "requires": [],
    "recommends": [
      {
        "id": "seasons-and-stars",
        "type": "module",
        "reason": "Enhanced calendar functionality"
      }
    ]
  }
}
```

---

**Need more help?** Check the [User Guide](./user-guide) for basic usage or visit our [GitHub Discussions](https://github.com/your-username/seasons-and-stars/discussions) for developer support.