---
sidebar_position: 5
title: User Guide
---

# User Guide

Complete reference for Realms & Reaches features and workflows.

## Scene Controls *(GM Only)*

Realms & Reaches provides intelligent travel controls that automatically adapt to your scene configuration.

### Auto-Detection System

The module automatically detects the appropriate travel scale for each scene:

- **Realm Travel** (hex grids, km/miles/leagues): For overland travel and wilderness exploration
- **Region Travel** (square grids, ft/meters/yards): For tactical movement and local exploration

### Detection Priority

1. **Grid Type** *(primary)*: Hex grids → Realm, Square grids → Region
2. **Distance Units** *(fallback)*: km/miles/leagues → Realm, ft/meters/yards → Region  
3. **Manual Override** *(highest)*: Always respected when configured

### Configuring Scene Travel

1. **Right-click a scene** and select **Configure**
2. **Enable travel controls** checkbox to activate the feature
3. **Choose travel scale**:
   - **Auto-detect** *(default)*: Uses grid type and distance units
   - **Realm**: Force realm-scale travel controls
   - **Region**: Force region-scale travel controls  
   - **None**: Disable travel controls entirely

### Using Scene Controls

When enabled, travel controls appear in the scene toolbar:

#### Realm Scale Controls
- **Select Realm**: Click to select existing realm areas
- **Create Realm**: Launch realm creation dialog with drawing tools

#### Region Scale Controls  
- **Select Region**: Click to select existing local regions
- **Create Region**: Access standard Foundry region tools for tactical areas

### Integration with Standard Tools

- **Realm controls** integrate with the existing Region layer for polygon drawing
- **Region controls** use Foundry's built-in region creation workflow
- **Seamless workflow** between different scales of travel and exploration

:::tip Automatic Detection
This system allows GMs to work with travel data at the appropriate scale without manual configuration in most cases.
:::

## Interface Overview

### Layer Controls

The Realms & Reaches controls appear in the left sidebar when the module is active:

| Tool | Purpose | Shortcut |
|------|---------|----------|
| Select | Select and manipulate existing realms | S |
| Polygon | Draw irregular shapes | P |
| Rectangle | Draw rectangular regions | R |
| Circle | Draw circular areas | C |
| Properties | Edit selected realm properties | E |
| Export | Save realm data to file | - |
| Import | Load realm data from file | - |

### Visual Feedback

#### Realm Display
- **Inactive realms**: Semi-transparent fill with colored border
- **Selected realm**: Bright border with higher opacity fill
- **During drawing**: Red preview outline shows current shape

#### Color Coding
Realms are automatically colored based on their primary biome tag:
- **Forest** 🟢: Green
- **Desert** 🟡: Goldenrod  
- **Mountain** ⚪: Gray
- **Swamp** 🟤: Dark olive
- **Grassland** 🟩: Yellow-green
- **Arctic** 🔷: Sky blue
- **Unknown** 🔵: Default blue

## Drawing and Editing

### Polygon Tool

Perfect for irregular terrain features like coastlines, forest edges, or mountain ranges.

#### Basic Usage
1. **Select the Polygon tool** from controls
2. **Click to place each point** of your polygon
3. **Right-click or press Enter** to complete
4. **Press Escape** to cancel

#### Advanced Techniques
- **Closing hint**: When near the starting point, a completion line appears
- **Precision placement**: Use grid snapping for exact positioning
- **Complex shapes**: No limit on number of points

### Rectangle Tool

Ideal for structured regions like urban districts, farmland, or administrative boundaries.

#### Use Cases
- Urban districts and neighborhoods
- Agricultural fields and farmland
- Military zones and borders
- Trade route segments

### Circle Tool

Best for point-based features, magical effects, or resource deposits.

#### Use Cases
- Cities and settlements
- Magical effect zones
- Resource deposits
- Points of interest
- Blast or influence areas

### Editing Existing Realms

#### Selection
- **Click with Select tool** to choose a realm
- **Double-click any realm** to open properties immediately
- **Selected realms** show bright borders

#### Deletion
- **Select realm** and press Delete/Backspace
- **Confirm deletion** in safety dialog
- **Use Properties dialog** Delete button for alternative method

## Tag Management

### Tag Format and Validation

#### Required Format
All tags must follow the `key:value` pattern:
- ✅ `biome:forest`
- ✅ `travel_speed:0.75`
- ✅ `custom:haunted`
- ❌ `forest` (missing colon)
- ❌ `biome:` (missing value)

#### Validation Feedback
- **Green border**: Valid tag format
- **Red border**: Invalid format with tooltip explanation
- **Autocomplete**: Suggests valid completions as you type

### Core Tag Namespaces

#### Biome Tags (`biome:`)
Define the primary ecosystem type:
- `biome:forest` - Temperate woodlands
- `biome:desert` - Arid wastelands
- `biome:mountain` - High altitude rocky terrain
- `biome:swamp` - Wetlands and marshes
- `biome:grassland` - Plains and prairies
- `biome:tundra` - Cold, treeless regions
- `biome:jungle` - Tropical rainforests
- `biome:coast` - Shoreline areas
- `biome:cultivated` - Farmland and settlements

#### Terrain Tags (`terrain:`)
Describe movement conditions and physical characteristics:
- `terrain:dense` - Thick vegetation, slow movement
- `terrain:sparse` - Open terrain, easy movement
- `terrain:rocky` - Difficult footing, climbing required
- `terrain:marshy` - Wet, unstable ground
- `terrain:smooth` - Even surfaces, fast travel
- `terrain:flat` - Level ground

#### Climate Tags (`climate:`)
Weather patterns and temperature ranges:
- `climate:temperate` - Moderate temperatures, seasonal variation
- `climate:arctic` - Cold, snow, ice
- `climate:tropical` - Hot, humid, wet/dry seasons
- `climate:arid` - Dry, little precipitation

#### Travel Speed Tags (`travel_speed:`)
Movement rate modifiers for travel mechanics:
- `travel_speed:0.25` - Extremely difficult (1/4 speed)
- `travel_speed:0.5` - Difficult terrain (1/2 speed)
- `travel_speed:0.75` - Somewhat difficult (3/4 speed)
- `travel_speed:1.0` - Normal speed (baseline)
- `travel_speed:1.25` - Easy terrain (1.25x speed)
- `travel_speed:1.5` - Roads and clear paths (1.5x speed)

#### Resource Tags (`resources:`)
Available materials and opportunities (can have multiple):
- `resources:timber` - Wood for construction
- `resources:game` - Huntable animals
- `resources:minerals` - Metal ores and gems
- `resources:water` - Fresh water sources
- `resources:herbs` - Medicinal plants
- `resources:food` - Edible plants and fruits

#### Custom Tags (`custom:`)
User-defined properties for unique features:
- `custom:haunted` - Supernatural presence
- `custom:sacred` - Religious significance
- `custom:dangerous` - General hazard warning
- `custom:peaceful` - Safe haven
- `custom:magical` - Arcane properties

#### Module Tags (`module:`)
Integration with other Foundry modules:
- `module:jj:encounter_chance:0.3` - Journeys & Jamborees encounter rate
- `module:weather:storm_chance:high` - Weather module integration

## Data Management

### Scene Storage

Realm data is automatically stored in scene flags and persists with your world:

#### Automatic Saving
- **Real-time**: Changes save immediately
- **Scene flags**: Data stored in scene flags
- **World backup**: Included in standard Foundry world backups

### Export System

#### Export Process
1. **Click Export** in layer controls
2. **Choose filename** (defaults to scene name)
3. **Select location** to save file
4. **File contains** all realm data plus metadata

#### Use Cases
- **Backup**: Regular export for data safety
- **Sharing**: Send to other GMs or players
- **Publishing**: Include with adventure modules
- **Migration**: Move data between worlds

### Import System

#### Import Process
1. **Click Import** in layer controls
2. **Select JSON file** to import
3. **Preview data** and conflicts
4. **Choose merge strategy**:
   - **Merge**: Add new realms, keep existing
   - **Replace**: Delete existing, add imported
   - **Skip conflicts**: Only add non-conflicting realms
5. **Confirm import**

## Advanced Techniques

### Layered Regions

Create complex environmental effects by overlapping realms:

#### Example: Mountain Forest
```
Base layer: biome:mountain, elevation:highland, travel_speed:0.6
Forest layer: biome:forest, terrain:dense, resources:timber
Combined effect: Mountain forest with slow travel and timber resources
```

### Complex Geometries

#### Irregular Coastlines
- Use polygon tool with many points
- Follow actual map features closely
- Consider performance vs. detail trade-offs

#### Urban Districts
- Rectangular regions for structured areas
- Overlapping circles for neighborhood boundaries
- Custom tags for district characteristics

### Performance Optimization

#### Large Datasets
- **Simplify geometry**: Reduce polygon point count
- **Strategic placement**: Focus on gameplay-relevant areas
- **Regular cleanup**: Remove unused or obsolete realms

## Campaign Integration

### Journeys & Jamborees Integration

#### Automatic Effects
When J&J integration is enabled:
- **Travel speeds** automatically modified by `travel_speed:` tags
- **Encounter tables** selected based on `biome:` tags
- **Weather effects** influenced by `climate:` tags

#### Setup
1. **Install both modules**
2. **Enable J&J integration** in settings
3. **Create realm data** with appropriate tags
4. **J&J automatically queries** realm data during travel

## Best Practices

### Design Principles

#### Start Simple
- Begin with basic biome and terrain tags
- Add complexity gradually as needed
- Focus on gameplay-relevant properties

#### Be Consistent
- Use the same tag values across your campaign
- Document your conventions for other GMs

### Tagging Strategies

#### Minimal Viable Tags
For quick setup, focus on:
- `biome:` for basic environment
- `travel_speed:` for movement mechanics
- One or two custom tags for flavor

#### Common Patterns

##### Wilderness Hexcrawl
```
Forest: biome:forest, terrain:dense, travel_speed:0.75, resources:timber
Plains: biome:grassland, terrain:sparse, travel_speed:1.25, resources:food
Mountains: biome:mountain, terrain:rocky, elevation:highland, travel_speed:0.5
```

##### Urban Campaign
```
Noble District: biome:cultivated, terrain:smooth, travel_speed:1.5, custom:wealthy
Docks: biome:coast, terrain:flat, travel_speed:1.0, resources:water
Slums: biome:cultivated, terrain:dense, travel_speed:0.75, custom:dangerous
```

## Keyboard Shortcuts

- **Escape**: Cancel current drawing or clear selection
- **Enter**: Complete polygon drawing
- **Delete**: Remove selected realm (with confirmation)

## Troubleshooting

### Common Issues

#### "Realms not appearing"
**Solutions**:
- Check the Realms layer is active (map icon highlighted)
- Verify you completed the shape (right-click or Enter)
- Try selecting with Select tool to highlight

#### "Properties dialog won't open"
**Solutions**:
- Ensure you have GM permissions
- Make sure a realm is selected (bright border)
- Try clicking directly on the realm area

#### "Tags showing as invalid"
**Solutions**:
- Check format: must be `key:value` with exactly one colon
- Verify characters: only letters, numbers, underscore, hyphen, period
- Try suggested values from autocomplete

#### "Performance problems"
**Solutions**:
- Reduce polygon complexity (fewer points)
- Use simpler shapes where possible
- Check browser hardware acceleration

### Getting Help

#### Documentation
- **[API Reference](api-reference)** - For developers
- **[Getting Started](getting-started)** - For new users

#### Community Support
- **Discord**: #modules channel in [Foundry VTT server](https://discord.gg/foundryvtt)
- **GitHub**: [Issues and discussions](https://github.com/rayners/fvtt-realms-and-reaches)

---

This guide covers the complete feature set of Realms & Reaches. For the latest updates, check the [GitHub repository](https://github.com/rayners/fvtt-realms-and-reaches).