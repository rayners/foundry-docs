---
sidebar_position: 5
title: Troubleshooting
---

# Troubleshooting

Common issues and solutions when using the Simple Calendar Compatibility Bridge.

## Installation Issues

### Bridge Not Loading

**Symptoms**: No "Simple Calendar Compatibility Bridge | Ready" message in console

**Solutions**:
1. **Check Module Order**: Ensure calendar module (Seasons & Stars) is installed and active
2. **Clear Cache**: Clear browser cache and reload Foundry
3. **Check Conflicts**: Ensure Simple Calendar is NOT installed alongside the bridge
4. **Restart World**: Sometimes requires a world restart after installation

### Simple Calendar Conflict

**Symptoms**: Error messages about conflicting SimpleCalendar objects

**Solutions**:
1. **Disable Simple Calendar**: The bridge replaces Simple Calendar - don't use both
2. **Check Module List**: Look for "foundryvtt-simple-calendar" in module list
3. **Clean Install**: Disable conflicting module and restart world

### Module Load Order Issues

**Symptoms**: Bridge works but dependent modules don't see the API

**Solutions**:
1. **Wait for Ready Hook**: Some modules need to wait for 'simple-calendar-init' hook
2. **Check Console**: Look for module initialization order in browser console
3. **Manual Refresh**: Try refreshing the browser after all modules load

## Simple Weather Issues

### Weather Not Generating

**Symptoms**: No weather appears, no automatic generation

**Solutions**:
1. **Check Calendar Integration**: Verify Seasons & Stars is working properly
2. **Enable Auto-Generation**: Turn on "Sync with Simple Calendar" in Simple Weather
3. **Set Season Icons**: Ensure calendar seasons use standard icons (spring, summer, fall, winter)
4. **Manual Trigger**: Try manually generating weather first

**Debug Steps**:
```javascript
// Check if Simple Calendar API is available
console.log('SimpleCalendar available:', !!window.SimpleCalendar);
console.log('API methods:', Object.keys(window.SimpleCalendar.api));

// Check current date
console.log('Current date:', SimpleCalendar.api.getCurrentDate());
```

### Weather Not Persisting

**Symptoms**: Weather resets when reloading or changing dates

**Solutions**:
1. **Enable Note Storage**: Turn on "Store weather in Simple Calendar notes" 
2. **GM Permissions**: Only GMs can create calendar notes
3. **Check Journal Entries**: Look for "Simple Weather - Daily Weather" entries
4. **Verify Flags**: Weather data should be stored in entry flags

**Debug Steps**:
```javascript
// Check for weather notes
const notes = SimpleCalendar.api.getNotesForDay(2024, 0, 0); // January 1st
console.log('Notes found:', notes.length);

// Check note flags
notes.forEach(note => {
  console.log('Note flags:', note.flags['simple-weather']);
});
```

### Missing Sidebar Buttons

**Symptoms**: No weather button appears on calendar widgets

**Solutions**:
1. **Enable Attached Mode**: Turn on "Attach to Calendar" in Simple Weather settings
2. **Check Widget Visibility**: Ensure calendar widgets are displayed
3. **Console Errors**: Look for button integration errors in console
4. **Refresh Widgets**: Close and reopen calendar widgets

**Debug Steps**:
```javascript
// Check if buttons are registered
console.log('Sidebar buttons:', SimpleCalendar.api.sidebarButtons);

// Check for calendar widgets
console.log('Calendar widgets:', document.querySelectorAll('.calendar-widget, .calendar-mini-widget'));
```

## SmallTime Issues

### Time Display Not Working

**Symptoms**: SmallTime shows incorrect time or doesn't update

**Solutions**:
1. **Check Calendar Time**: Verify Seasons & Stars time is working
2. **SmallTime Settings**: Configure SmallTime to use Simple Calendar time
3. **Hook Registration**: Ensure SmallTime is listening for time change hooks

### Clock Controls Not Working

**Symptoms**: SmallTime play/pause buttons don't work

**Solutions**:
1. **GM Permissions**: Only GMs can control time advancement
2. **Calendar Module**: Ensure underlying calendar supports time advancement
3. **API Methods**: Check if advance methods are implemented

## Calendar Module Issues

### Seasons & Stars Not Detected

**Symptoms**: Bridge reports no calendar provider found

**Solutions**:
1. **Module Active**: Ensure Seasons & Stars is installed and active
2. **Version Check**: Update to latest version of Seasons & Stars
3. **Integration Interface**: Check if S&S integration interface is available

**Debug Steps**:
```javascript
// Check Seasons & Stars availability
console.log('S&S available:', !!game.seasonsStars);
console.log('S&S integration:', !!game.seasonsStars?.integration);
console.log('S&S API:', !!game.seasonsStars?.api);
```

### Season Sync Issues

**Symptoms**: Simple Weather doesn't use correct season from calendar

**Solutions**:
1. **Season Icons**: Use standard season icons in calendar configuration
2. **Season Setup**: Properly configure seasons in Seasons & Stars
3. **Manual Override**: Use manual season selection if needed

### Date Format Issues

**Symptoms**: Dates appear incorrect or cause errors

**Solutions**:
1. **Bridge Conversion**: The bridge handles format conversion automatically
2. **Custom Calendars**: Ensure custom calendar structure is valid
3. **Fallback Mode**: Check if bridge is using fallback date handling

## API Issues

### Missing Methods

**Symptoms**: Modules report missing Simple Calendar methods

**Solutions**:
1. **Full API**: The bridge implements complete Simple Calendar API
2. **Method Names**: Check for typos in method names
3. **Timing**: Ensure API is ready before calling methods

**Debug Steps**:
```javascript
// List all available API methods
console.log('Available methods:', Object.keys(SimpleCalendar.api));

// Test specific method
console.log('timestampToDate available:', typeof SimpleCalendar.api.timestampToDate);
```

### Hook Issues

**Symptoms**: Modules not receiving Simple Calendar hooks

**Solutions**:
1. **Hook Names**: Use correct hook names from `SimpleCalendar.Hooks`
2. **Registration Timing**: Register hooks after 'simple-calendar-init'
3. **Event Data**: Check hook data format matches expectations

**Debug Steps**:
```javascript
// Test hook system
Hooks.on('simple-calendar-date-time-change', (data) => {
  console.log('Date change hook received:', data);
});

// Trigger date change to test
SimpleCalendar.api.advanceDays(1);
```

## Performance Issues

### Slow Loading

**Symptoms**: Long delay before modules are ready

**Solutions**:
1. **Module Count**: Reduce number of active modules if possible
2. **Browser Performance**: Close other tabs, restart browser
3. **Foundry Performance**: Check Foundry system requirements

### Memory Usage

**Symptoms**: High memory usage, browser slowdown

**Solutions**:
1. **Module Cleanup**: Bridge cleans up on disable
2. **Browser Restart**: Restart browser if memory usage is high
3. **Module Updates**: Ensure all modules are up to date

## Development/Debugging

### Console Debugging

Enable detailed console logging:

```javascript
// Check bridge status
console.log('Bridge status:', game.simpleCalendarCompat);

// Check provider information
console.log('Provider:', game.simpleCalendarCompat?.provider);

// Check API availability
console.log('API ready:', !!SimpleCalendar?.api);

// Test basic functionality
console.log('Current timestamp:', SimpleCalendar.api.timestamp());
console.log('Current date:', SimpleCalendar.api.getCurrentDate());
```

### Common Error Messages

#### "No supported calendar module found"
- Install and activate Seasons & Stars
- Check if calendar module is compatible

#### "Only GMs can create calendar notes"
- Log in as GM to use note features
- Check user permissions

#### "Calendar module API not available"
- Wait for all modules to load
- Check calendar module initialization

### Reporting Issues

When reporting issues, include:

1. **Foundry Version**: Which version of Foundry VTT
2. **Module Versions**: Versions of bridge, calendar module, and affected modules
3. **Console Output**: Any error messages or warnings
4. **Steps to Reproduce**: Detailed steps to recreate the issue
5. **Expected vs Actual**: What should happen vs what actually happens

### Module Compatibility Testing

Test basic compatibility:

```javascript
// Test API completeness
const requiredMethods = [
  'timestamp', 'timestampToDate', 'getCurrentDate',
  'addNote', 'getNotesForDay', 'removeNote',
  'addSidebarButton'
];

requiredMethods.forEach(method => {
  console.log(`${method}:`, typeof SimpleCalendar.api[method]);
});

// Test note functionality (GM only)
if (game.user.isGM) {
  const testNote = await SimpleCalendar.api.addNote(
    'Test Note',
    'Test content',
    SimpleCalendar.api.getCurrentDate(),
    SimpleCalendar.api.getCurrentDate(),
    true
  );
  console.log('Test note created:', testNote);
  
  const notes = SimpleCalendar.api.getNotesForDay(
    testNote.flags['simple-calendar-compat'].startDate.year,
    testNote.flags['simple-calendar-compat'].startDate.month,
    testNote.flags['simple-calendar-compat'].startDate.day
  );
  console.log('Notes retrieved:', notes.length);
  
  await SimpleCalendar.api.removeNote(testNote.id);
  console.log('Test note removed');
}