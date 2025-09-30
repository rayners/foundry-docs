---
sidebar_position: 3
title: Simple Weather Integration
---

# Simple Weather Integration

The Simple Calendar Compatibility Bridge provides Simple Weather integration with modern calendar modules like Seasons & Stars. Most Simple Weather features work as expected.

## Features Overview

### ✅ **Weather Generation**
- **Climate-based Weather**: Hot, temperate, and cold climates with appropriate weather patterns
- **Seasonal Variation**: Weather adapts to calendar seasons automatically
- **Humidity Control**: Barren, modest, and verdant humidity levels affect precipitation
- **Temperature Display**: Celsius and Fahrenheit support with realistic seasonal variation

### ✅ **Calendar Integration**
- **Sidebar Buttons**: Weather controls appear on all calendar widgets (main, mini, grid)
- **Automatic Generation**: Weather updates automatically when date changes
- **Season Synchronization**: Uses calendar season information for weather generation
- **Date/Time Display**: Shows current calendar date and time

### ✅ **Weather Persistence**
- **Note Storage**: Support for "Store weather in Simple Calendar notes" feature
- **Historical Weather**: Weather data persists between sessions and date changes
- **Flag Support**: Weather data stored in journal entry flags for compatibility
- **Legacy Support**: Works with existing Simple Weather note formats

### ✅ **Attachment Modes**
- **Attached Mode**: Weather panel slides out from calendar widgets
- **Detached Mode**: Weather appears as standalone window
- **Player Controls**: Configurable player visibility and interaction

### ✅ **Weather Effects**
- **Scene Integration**: Automatic scene weather effects
- **FX Master Support**: Integration with weather effect systems
- **Manual Override**: GM can manually set weather for special events
- **Effect Toggle**: Easy on/off controls for weather effects

## Configuration

Simple Weather works with standard configuration when using the compatibility bridge:

### Weather Settings

All standard Simple Weather settings work:
- **Climate Selection**: Choose hot, temperate, or cold climate
- **Humidity Level**: Select barren, modest, or verdant conditions
- **Season Control**: Use calendar seasons or manual override
- **Temperature Units**: Celsius or Fahrenheit display
- **Player Visibility**: Control what players can see

### Calendar Integration Settings

- **Attach to Calendar**: Enable for sidebar integration with calendar widgets
- **Store in Calendar Notes**: Enable for weather persistence between sessions
- **Show Date/Time**: Display calendar date and time information
- **Auto Generate**: Automatically create weather when date changes

## Season Mapping

The bridge properly maps calendar seasons to Simple Weather:

| Calendar Season Icon | Simple Weather Season |
|---------------------|----------------------|
| `spring` | Spring |
| `summer` | Summer |
| `fall` | Fall |
| `winter` | Winter |

### Custom Calendar Support

For custom calendars in Seasons & Stars:
1. Set up seasons in your calendar configuration
2. Assign standard season icons (spring, summer, fall, winter) to your seasons
3. Simple Weather will automatically use the correct season for weather generation

## Weather Persistence

When "Store weather in Simple Calendar notes" is enabled:

### How It Works
1. **Note Creation**: Weather data stored as journal entries with calendar date flags
2. **Flag Storage**: Complete weather data stored in `simple-weather.dailyWeather` flags
3. **Date Lookup**: Weather retrieved when revisiting previous dates
4. **Legacy Support**: Works with existing Simple Weather note formats

### Note Structure
- **Title**: "Simple Weather - Daily Weather"
- **Content**: "Today's weather: [temperature] - [description]"
- **Flags**: Complete WeatherData object including climate, humidity, season info
- **Date Key**: Internal date mapping for efficient retrieval

### Benefits
- Weather history persists between sessions
- GMs can review past weather when players ask "what was the weather like yesterday?"
- Consistent weather when time travel or flashbacks occur
- Full weather data available for custom scripting

## User Interface

### GM Interface
- **Weather Controls**: Full weather generation and manual override controls
- **Forecast Display**: 7-day weather forecast with hover details
- **Calendar Integration**: Weather buttons appear on calendar widgets
- **Manual Weather**: Override weather for special events or locations

### Player Interface
- **Limited Controls**: Configurable visibility of weather information
- **Date Display**: Current calendar date and time from calendar module
- **Weather Display**: Current weather conditions and temperature
- **Chat Integration**: Weather announcements in chat when configured

## Troubleshooting

### Weather Not Generating?
1. **Check Calendar Module**: Ensure Seasons & Stars is active and configured
2. **Verify Bridge**: Look for "Simple Calendar Compatibility Bridge | Ready" in console
3. **Season Setup**: Ensure calendar has seasons with standard icons
4. **Simple Weather Settings**: Check "Sync with Simple Calendar" is enabled

### Weather Not Persisting?
1. **Enable Note Storage**: Turn on "Store weather in Simple Calendar notes"
2. **GM Permissions**: Only GMs can create/modify weather notes
3. **Check Journal**: Look for "Simple Weather - Daily Weather" entries
4. **Flag Data**: Weather data should be in entry flags

### Missing Sidebar Buttons?
1. **Attachment Mode**: Enable "Attach to Calendar" in Simple Weather settings
2. **Calendar Widgets**: Ensure calendar widgets are visible
3. **Module Load Order**: Calendar → Bridge → Simple Weather
4. **Browser Console**: Check for integration messages

### Season Not Syncing?
1. **Season Icons**: Use standard season icons in calendar configuration
2. **Manual Override**: Check if season is manually set instead of "Sync"
3. **Calendar Configuration**: Verify seasons are properly configured
4. **Hemisphere**: Consider manual season override for southern hemisphere

## Known Limitations

### Current Implementation Status

#### ✅ **Fully Implemented** (v0.3.0+)
- **Complete Simple Weather Features**: Weather generation, persistence, UI integration
- **Full Hook Support**: All Simple Calendar hooks properly bridged for weather events
- **Calendar Integration**: Date synchronization, season mapping, sidebar buttons
- **Note Storage**: Complete weather history storage in calendar notes with flag support
- **Icon Constants**: Full season icon mapping for weather generation
- **Weather Effects**: Scene integration, FX Master support, manual override capabilities

#### 🔄 **Working with Defaults**
- **Sunrise/Sunset Times**: Uses configurable defaults (6 AM/6 PM)
  - Works correctly for Simple Weather's needs
  - Can be customized via calendar module if needed
- **Season Detection**: Uses calendar's built-in season information
  - Properly maps calendar seasons to weather generation

:::note Implementation Status
As of v0.3.0, the bridge provides complete Simple Weather support. All features work as expected, including weather generation, persistence, hook support, and UI integration.
:::

## Advanced Usage

### Custom Weather Events
- Use manual weather override for special events
- "Pause updates" prevents automatic weather changes
- Choose unnatural weather for supernatural events
- Temperature override for specific scenarios

### Weather Effects Control
- Toggle weather effects per scene or globally
- FX Master integration for enhanced visual effects
- Scene weather integration with Foundry core
- Manual effect toggle during indoor scenes

### Scripting Integration
- Access weather data through Simple Calendar API
- Custom macros can read current weather
- Flag data available for advanced automation
- Hook into weather change events for custom responses