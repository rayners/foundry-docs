# Requirements

System requirements and compatibility information for Seasons & Stars.

## Foundry VTT Requirements

### Minimum Version
- **Foundry VTT**: v13 or later
- **License**: Any Foundry license tier (Gamemaster, Player, Developer)

### Recommended Version
- **Foundry VTT**: Latest stable v13+ release for optimal performance
- Latest stable release recommended for best compatibility

### Why v13+?
Seasons & Stars is built specifically for Foundry v13+ to take advantage of:
- **ApplicationV2**: Modern application framework for better performance
- **Enhanced APIs**: Improved time management and UI systems
- **Type Safety**: Better TypeScript integration
- **Future-Proofing**: Aligned with Foundry's development direction

## Browser Compatibility

### Supported Browsers
- **Chrome**: v90+ (recommended)
- **Firefox**: v88+
- **Safari**: v14+
- **Edge**: v90+

### Browser Features Required
- **ES2020 Support**: Modern JavaScript features
- **CSS Grid**: Advanced layout capabilities
- **WebGL**: For canvas rendering (standard Foundry requirement)
- **Local Storage**: For user preferences

### Mobile Support
- **Limited**: Mobile browsers work but experience may vary
- **Touch**: Basic touch interaction supported
- **Responsive**: UI adapts to smaller screens
- **Performance**: May be slower on mobile devices

## Server Requirements

### Foundry Server
- **RAM**: Minimum requirements same as base Foundry
- **Storage**: Additional ~2MB for module files
- **CPU**: No additional requirements beyond Foundry baseline

### Network
- **Bandwidth**: Standard Foundry requirements
- **Latency**: Low latency recommended for real-time updates
- **Concurrent Users**: Scales with Foundry's user limits

## Module Compatibility

### Compatible Modules

**Calendar Integration**:
- ✅ **Simple Calendar**: Full API compatibility mode
- ✅ **Calendar/Weather**: Works through Simple Calendar API
- ✅ **SmallTime**: Compatible timekeeping
- ✅ **About Time**: Basic time management compatibility

**Journey & Travel**:
- ✅ **Journeys & Jamborees**: Native integration planned
- ✅ **Drag Ruler**: Time calculation integration
- ✅ **Travel Time**: Compatible time advancement

**Combat & Initiative**:
- ✅ **Combat Utility Belt**: Time tracking compatibility
- ✅ **Turn Marker**: Compatible with time advancement
- ✅ **Combat Enhancements**: Standard Foundry time integration

**Quality of Life**:
- ✅ **Monk's Enhanced Journal**: Date integration
- ✅ **DF Hotkeys**: Compatible keyboard shortcuts
- ✅ **PopOut!**: Widget can be popped out

### Potentially Incompatible

**Time Management Conflicts**:
- ⚠️ **Other Calendar Modules**: May conflict if both try to manage time
- ⚠️ **Custom Time Systems**: Modules that override Foundry's time system
- ⚠️ **Time Manipulation**: Modules that directly modify world time

**UI Conflicts**:
- ⚠️ **UI Overhauls**: Major UI modifications may affect widget positioning
- ⚠️ **Scene Controls**: Modules that heavily modify scene controls

### Testing Recommendations

When using multiple modules:
1. **Test in development world** before using in campaigns
2. **Enable one module at a time** to isolate conflicts
3. **Check browser console** for error messages
4. **Verify time advancement** works correctly

## Game System Compatibility

### Verified Compatible Systems
- ✅ **D&D 5e**: Complete integration
- ✅ **Pathfinder 2e**: Full calendar support
- ✅ **World Building**: Designed for custom settings
- ✅ **Simple Worldbuilding**: Well-suited for homebrew

### Tested Systems
- ✅ **Forbidden Lands**: Calendar integration tested
- ✅ **Dragonbane**: Compatible with ARGON modules
- ✅ **Savage Worlds**: Basic time tracking works
- ✅ **Fate Core**: Calendar features functional

### Universal Compatibility
Seasons & Stars is **system-agnostic** and should work with any game system that:
- Uses standard Foundry time mechanics
- Doesn't override core time APIs
- Allows custom module integration

## Performance Requirements

### Minimum Performance
- **Widget Updates**: 30-second refresh intervals
- **Memory Usage**: ~5MB additional RAM usage
- **CPU Usage**: Minimal impact during normal use

### Recommended Performance
- **Modern Hardware**: Recent desktop/laptop for best experience
- **Stable Connection**: For real-time synchronization
- **Updated Browser**: Latest browser versions for optimization

### Large World Considerations
For worlds with many players (10+):
- **Reduce Update Frequency**: Increase widget refresh intervals
- **Minimize Calendar Switching**: Avoid frequent calendar changes
- **Monitor Performance**: Watch for lag during time advancement

## Development Requirements

### For Module Developers

**TypeScript**:
- **Node.js**: v16+ for development environment
- **TypeScript**: v4.7+ for type checking
- **Build Tools**: Rollup, Webpack, or similar

**API Usage**:
- **Simple Calendar API**: For backward compatibility
- **Seasons & Stars API**: For native integration
- **Foundry APIs**: Standard game.time integration

**Testing Environment**:
- **Development World**: Separate world for testing
- **Multiple Calendars**: Test with different calendar systems
- **Time Scenarios**: Test various time advancement scenarios

### Calendar Creation

**File Format**:
- **JSON**: Valid JSON format required
- **UTF-8 Encoding**: For international character support
- **Validation**: Schema validation recommended

**Translations**:
- **Multi-language**: Support for multiple languages
- **Fallbacks**: English fallback for missing translations
- **Cultural Context**: Rich descriptions encouraged

## Security Considerations

### Data Privacy
- **Local Storage**: User preferences stored locally
- **No External Calls**: No data sent to external servers
- **World Isolation**: Data isolated per world

### File Safety
- **Calendar Files**: Only JSON calendar files should be added
- **Module Updates**: Updates through standard Foundry mechanisms
- **Permissions**: Follows Foundry permission system

### GM Controls
- **Time Management**: Only GMs can advance time
- **Calendar Switching**: World-level setting, GM controlled
- **Widget Settings**: Per-user client settings

## Troubleshooting Requirements

### Debug Information

Enable debug logging by:
1. **Browser Console**: F12 → Console tab
2. **Foundry Logs**: Settings → Developer Mode
3. **Module Logs**: Look for "Seasons & Stars" entries

### System Information Needed

For support requests, provide:
- **Foundry Version**: Exact version number
- **Browser**: Browser name and version
- **Operating System**: OS and version
- **Module List**: Other enabled modules
- **Error Messages**: Full error text from console

### Test Environment

Create a minimal test setup:
1. **Fresh World**: New world with minimal modules
2. **Seasons & Stars Only**: Disable other modules
3. **Default Settings**: Reset to default configuration
4. **Reproduce Issue**: Verify issue persists

## Migration Requirements

### From Simple Calendar

**Pre-Migration**:
- **Backup World**: Create world backup before migration
- **Document Settings**: Note current Simple Calendar configuration
- **Test Environment**: Try migration in development world first

**During Migration**:
- **Compatibility Mode**: Enable Simple Calendar compatibility
- **Module Testing**: Test critical modules with both systems
- **Data Conversion**: Use migration tools when available

**Post-Migration**:
- **Verify Function**: Ensure all features work as expected
- **Module Updates**: Update dependent modules if needed
- **User Training**: Brief players on new interface

## Support Requirements

### Community Support
- **GitHub Issues**: Primary support channel
- **Discord**: Community help in #modules
- **Documentation**: Comprehensive guides available

### Professional Support
- **Consulting**: Available for complex integrations
- **Custom Development**: Calendar creation services
- **Training**: Module development workshops

Ready to get started? Check the [Installation Guide](installation) for setup instructions! 🚀