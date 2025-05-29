---
sidebar_position: 4
title: Requirements
---

# System Requirements & Compatibility

Learn about Foundry VTT compatibility, system requirements, and browser support for Realms & Reaches.

## Foundry VTT Compatibility

### Supported Versions
- **Foundry VTT v13+**: Full compatibility and required
- **Future versions**: Will be supported as they release

### Minimum Version
- **v13.315** or later required
- Earlier versions are not supported

## System Compatibility

### Game Systems

Realms & Reaches is **system agnostic** and works with any game system:

#### Verified Compatible
- **D&D 5th Edition** (dnd5e)
- **Pathfinder 2e** (pf2e)
- **Dragonbane** (dragonbane)
- **Simple Worldbuilding** (worldbuilding)
- **Forbidden Lands** (forbidden-lands)

#### Universal Support
- **Any game system** - The module uses Foundry's core APIs
- **Custom systems** - No system-specific dependencies
- **Homebrew systems** - Full compatibility

### Module Integration

#### Native Integration
- **[Journeys & Jamborees](https://github.com/rayners/fvtt-journeys-and-jamborees)** - Automatic travel mechanics integration

#### Compatible Modules
- **Weather modules** - Via module-specific tags
- **Travel modules** - Via public API integration
- **Encounter modules** - Via biome-based table selection
- **Custom modules** - Via comprehensive developer API

#### Potential Conflicts
- **Other terrain modules** - May conflict with canvas layer controls
- **Heavy canvas modifications** - Test for performance impact

## Browser Requirements

### Recommended Browsers
| Browser | Minimum Version | Recommended |
|---------|-----------------|-------------|
| **Chrome** | 90+ | Latest |
| **Firefox** | 88+ | Latest |
| **Safari** | 14+ | Latest |
| **Edge** | 90+ | Latest |

### Required Features
- **ES2020 JavaScript support**
- **WebGL 1.0 or 2.0**
- **Canvas API support**
- **Local Storage access**
- **File API support** (for import/export)

### Performance Features
- **Hardware acceleration** (strongly recommended)
- **GPU acceleration** for canvas rendering
- **WebGL support** for smooth drawing

## Hardware Requirements

### Minimum System
- **CPU**: Dual-core 2.0GHz
- **RAM**: 4GB system memory
- **Graphics**: Integrated graphics with WebGL support
- **Storage**: 50MB free space for module

### Recommended System
- **CPU**: Quad-core 2.5GHz or better
- **RAM**: 8GB+ system memory
- **Graphics**: Dedicated GPU with hardware acceleration
- **Storage**: SSD recommended for better I/O performance

### Performance Scaling
- **Large datasets**: More RAM helps with complex scenes
- **Many realms**: GPU acceleration improves rendering
- **Complex polygons**: CPU performance affects drawing responsiveness

## Network Requirements

### Basic Usage
- **No special requirements** - Module works offline after installation
- **Standard Foundry networking** for multiplayer sessions

### Data Sharing
- **File upload/download** capability for import/export
- **Standard web access** for downloading from GitHub releases

## Platform Support

### Operating Systems
- **Windows 10/11** ✅
- **macOS 10.15+** ✅
- **Linux (Ubuntu, etc.)** ✅
- **Chrome OS** ✅ (with Chrome browser)

### Mobile/Tablet
- **Limited support** - Touch interface not optimized
- **Basic viewing** works on tablets
- **Creation tools** require mouse/pointer device

## Performance Considerations

### Scene Size Impact
| Scene Size | Realm Count | Performance |
|------------|-------------|-------------|
| Small (2k×2k) | &lt;50 realms | Excellent |
| Medium (4k×4k) | 50-200 realms | Good |
| Large (8k×8k) | 200-500 realms | Fair |
| Huge (16k×16k) | 500+ realms | Variable* |

*Performance depends on polygon complexity and hardware

### Optimization Tips
- **Reduce polygon points** for complex shapes
- **Use simpler shapes** (rectangles, circles) where appropriate
- **Minimize overlapping realms** in dense areas
- **Regular data cleanup** of unused realms

## Known Limitations

### Current Version (0.1.0)
- **No realm editing** after creation (properties only)
- **No multi-selection** of realms
- **No bulk operations** (copy, move, delete multiple)
- **No undo/redo** for drawing operations

### By Design
- **GM-only creation** - Players can view but not create realms
- **Scene-based storage** - Realms tied to specific scenes
- **Client-side rendering** - No server-side performance impact

## Testing Your Setup

### Quick Performance Test
1. **Create a complex polygon** with 20+ points
2. **Draw several overlapping realms**
3. **Test real-time editing** of properties
4. **Monitor browser performance** (F12 → Performance tab)

### Compatibility Check
1. **Verify layer controls** appear in sidebar
2. **Test drawing tools** work smoothly
3. **Confirm export/import** functions properly
4. **Check console** for any errors (F12 → Console)

### Integration Test
1. **Install with other modules** you use
2. **Test for conflicts** or performance issues
3. **Verify API access** if you use custom modules
4. **Check canvas rendering** remains smooth

## Getting Support

### Performance Issues
1. **Check hardware acceleration** is enabled
2. **Update graphics drivers**
3. **Close unnecessary browser tabs**
4. **Try with minimal module set**

### Compatibility Problems
1. **Update Foundry VTT** to latest stable version
2. **Update browser** to latest version
3. **Disable conflicting modules** temporarily
4. **Check JavaScript console** for errors

### Reporting Issues
Include this information when reporting compatibility issues:
- **Foundry VTT version**
- **Browser and version**
- **Operating system**
- **Other active modules**
- **Error messages** from console
- **Steps to reproduce** the problem

## Future Compatibility

### Planned Support
- **Foundry VTT v13+** - Fully supported and required
- **Mobile optimization** - Planned for future versions
- **Additional integrations** - More module partnerships

### API Stability
- **Current API** will remain stable through v1.0
- **Deprecation warnings** for any breaking changes
- **Migration guides** for major version updates

---

For the most up-to-date compatibility information, check the [GitHub repository](https://github.com/rayners/fvtt-realms-and-reaches) and [release notes](https://github.com/rayners/fvtt-realms-and-reaches/releases).