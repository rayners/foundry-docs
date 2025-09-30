---
sidebar_position: 4
title: API Reference
---

# API Reference

The Simple Calendar Compatibility Bridge implements the complete Simple Calendar API (v0.3.0+), providing full compatibility for modules that depend on Simple Calendar.

## Core Time Methods

### `timestamp(): number`
Returns the current Foundry world time in seconds.

```javascript
const currentTime = SimpleCalendar.api.timestamp();
console.log('Current world time:', currentTime);
```

### `timestampToDate(timestamp: number): SimpleCalendarDate`
Converts a Foundry timestamp to a complete Simple Calendar date object.

```javascript
const dateInfo = SimpleCalendar.api.timestampToDate(game.time.worldTime);
console.log(`Today is ${dateInfo.display.monthName} ${dateInfo.display.day}${dateInfo.display.daySuffix}`);
// Output: "Today is December 25th"
```

**Returns**: Date object with display formatting properties:
- `year`, `month`, `day` - Numeric date values (0-based month/day for SC compatibility)
- `hour`, `minute`, `second` - Time components
- `dayOfTheWeek` - Day of week (0-based)
- `display` - Formatted display strings
- `weekdays` - Array of weekday names
- `currentSeason` - Season information with icon

### `getCurrentDate(): SimpleCalendarDate`
Gets the current calendar date with formatting.

```javascript
const today = SimpleCalendar.api.getCurrentDate();
console.log('Current date:', today.display.date);
```

## Time Advancement

### `advanceDays(days: number): Promise<void>`
Advances the calendar by the specified number of days.

```javascript
await SimpleCalendar.api.advanceDays(7); // Advance one week
```

### `advanceHours(hours: number): Promise<void>`
Advances the calendar by the specified number of hours.

```javascript
await SimpleCalendar.api.advanceHours(8); // Advance 8 hours
```

### `advanceMinutes(minutes: number): Promise<void>`
Advances the calendar by the specified number of minutes.

```javascript
await SimpleCalendar.api.advanceMinutes(30); // Advance 30 minutes
```

## Date Calculations

### `timestampPlusInterval(timestamp: number, interval: object): number`
Adds a time interval to a timestamp, handling calendar-aware calculations.

```javascript
const futureTime = SimpleCalendar.api.timestampPlusInterval(
  game.time.worldTime,
  { day: 3, hour: 6 } // 3 days and 6 hours from now
);
```

**Interval object properties**:
- `year` - Years to add
- `month` - Months to add (calendar-aware)
- `day` - Days to add
- `hour` - Hours to add
- `minute` - Minutes to add
- `second` - Seconds to add

### `dateToTimestamp(date: object): number`
Converts a Simple Calendar date object back to a Foundry timestamp.

```javascript
const timestamp = SimpleCalendar.api.dateToTimestamp({
  year: 2024,
  month: 0, // January (0-based)
  day: 0,   // 1st (0-based)
  hour: 12,
  minute: 0,
  second: 0
});
```

## Note Management

### `getNotesForDay(year: number, month: number, day: number): JournalEntry[]`
Retrieves all calendar notes for a specific date.

```javascript
const notes = SimpleCalendar.api.getNotesForDay(2024, 0, 0); // January 1st, 2024
console.log(`Found ${notes.length} notes for this date`);
```

**Parameters**: Uses 0-based month and day for Simple Calendar compatibility.

### `addNote(title: string, content: string, startDate: object, endDate: object, allDay: boolean): Promise<JournalEntry>`
Creates a new calendar note that supports flag operations.

```javascript
const weatherNote = await SimpleCalendar.api.addNote(
  'Weather Report',
  'Sunny and warm today',
  { year: 2024, month: 0, day: 0 },
  { year: 2024, month: 0, day: 0 },
  true
);

// Simple Weather can now set flags on this note
await weatherNote.setFlag('foundryvtt-simple-weather', 'dailyWeather', weatherData);
```

### `removeNote(noteId: string): Promise<void>`
Removes a calendar note by its ID.

```javascript
await SimpleCalendar.api.removeNote(noteId);
```

## UI Integration

### `addSidebarButton(name: string, icon: string, tooltip: string, isToggle: boolean, callback: Function): void`
Adds a button to calendar widget sidebars.

```javascript
SimpleCalendar.api.addSidebarButton(
  'weather',
  'fas fa-cloud',
  'Toggle Weather Display',
  false,
  () => toggleWeatherPanel()
);
```

**Parameters**:
- `name` - Unique button identifier
- `icon` - FontAwesome icon class
- `tooltip` - Button tooltip text
- `isToggle` - Whether button should toggle (legacy parameter)
- `callback` - Function to call when clicked

## Icon Constants

### `SimpleCalendar.Icons`
Season icon constants used by Simple Weather and other modules.

```javascript
const seasonIcons = {
  Fall: SimpleCalendar.Icons.Fall,       // 'fall'
  Winter: SimpleCalendar.Icons.Winter,   // 'winter'
  Spring: SimpleCalendar.Icons.Spring,   // 'spring'
  Summer: SimpleCalendar.Icons.Summer    // 'summer'
};
```

## Hook System

### Available Hooks

#### `simple-calendar-date-time-change`
Fired when the calendar date or time changes.

```javascript
Hooks.on('simple-calendar-date-time-change', (data) => {
  console.log('Date changed:', data.date);
  console.log('Current moons:', data.moons);
  console.log('Current seasons:', data.seasons);
});
```

#### `simple-calendar-init`
Fired when Simple Calendar API is ready.

```javascript
Hooks.on('simple-calendar-init', () => {
  console.log('Simple Calendar API is ready');
  // Initialize modules that depend on Simple Calendar
});
```

#### `simple-calendar-clock-start-stop`
Fired when the calendar clock starts or stops.

```javascript
Hooks.on('simple-calendar-clock-start-stop', (data) => {
  if (data.started) {
    console.log('Clock started');
  } else {
    console.log('Clock stopped');
  }
});
```

### Complete Hook Support (v0.3.0+)

All Simple Calendar hooks are fully implemented and bridged:

```javascript
const hookNames = SimpleCalendar.Hooks;
// Contains:
// - DateTimeChange: 'simple-calendar-date-time-change'
// - Init: 'simple-calendar-init'
// - ClockStartStop: 'simple-calendar-clock-start-stop'
// - PrimaryGM: 'simple-calendar-primary-gm'
// - Ready: 'simple-calendar-ready'
```

Additional hooks fired for compatibility:
- `'simple-calendar-date-change'` - Fired on date changes
- `'simple-calendar-time-change'` - Fired on time changes
- `'simple-calendar-year-change'` - Fired on year changes
- `'simple-calendar-month-change'` - Fired on month changes

## Clock Control

### `clockStatus(): { started: boolean }`
Returns the current clock running state.

```javascript
const status = SimpleCalendar.api.clockStatus();
if (status.started) {
  console.log('Clock is running');
}
```

### `startClock(): void`
Starts the calendar clock.

```javascript
SimpleCalendar.api.startClock();
```

### `stopClock(): void`
Stops the calendar clock.

```javascript
SimpleCalendar.api.stopClock();
```

## Legacy Support Methods

### `addMonths(date: object, months: number): object`
Adds months to a date object.

```javascript
const futureDate = SimpleCalendar.api.addMonths(currentDate, 3);
```

### `addYears(date: object, years: number): object`
Adds years to a date object.

```javascript
const futureDate = SimpleCalendar.api.addYears(currentDate, 1);
```

### `formatDateTime(date: object, format?: string): string`
Formats a date object as a string.

```javascript
const formatted = SimpleCalendar.api.formatDateTime(currentDate);
```

## Data Structures

### SimpleCalendarDate Object

```typescript
interface SimpleCalendarDate {
  year: number;
  month: number;          // 0-based for Simple Calendar compatibility
  day: number;            // 0-based for Simple Calendar compatibility
  dayOfTheWeek: number;   // 0-based day of week
  hour: number;
  minute: number;
  second: number;
  dayOffset: number;
  sunrise: number;        // Sunrise time in hours
  sunset: number;         // Sunset time in hours
  display: {
    date: string;         // Formatted date string
    time: string;         // Formatted time string
    weekday: string;      // Weekday name
    day: string;          // Day number as string
    monthName: string;    // Month name
    month: string;        // Month number as string
    year: string;         // Year as string
    daySuffix: string;    // Ordinal suffix (st, nd, rd, th)
    yearPrefix: string;   // Year prefix if any
    yearPostfix: string;  // Year suffix if any
  };
  weekdays: string[];     // Array of weekday names
  showWeekdayHeadings: boolean;
  currentSeason: {
    icon: string;         // Season icon identifier
  };
}
```

## Error Handling

The bridge includes comprehensive error handling and fallback mechanisms:

- **Calendar Module Missing**: Falls back to basic Foundry time when no calendar module available
- **API Failures**: Graceful degradation with console warnings
- **Date Conversion**: Robust handling of date format differences between systems
- **Permission Checks**: Proper GM-only restrictions for time advancement and note management

## Integration Notes

### Date Format Conversion
The bridge handles conversion between:
- **Simple Calendar Format**: 0-based months and days
- **Seasons & Stars Format**: 1-based months and days
- **Storage Format**: 1-based for database storage keys

### Performance Considerations
- **Efficient Note Lookup**: Uses indexed date keys for fast note retrieval
- **Lazy Loading**: Calendar integration loaded only when needed
- **Memory Management**: Minimal memory footprint with cleanup on module disable

### Module Dependencies
The bridge automatically detects and integrates with:
- **Seasons & Stars v2.0+**: Via Integration Interface
- **Seasons & Stars v1.x**: Via legacy wrapper
- **Future Calendar Modules**: Via extensible provider architecture