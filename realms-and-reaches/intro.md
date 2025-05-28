---
sidebar_position: 1
title: Introduction
---

# Realms & Reaches

> **🚀 Alpha Release**: Core functionality complete and ready for testing!

A Foundry VTT module that provides a queryable biome and terrain layer for narrative-driven gameplay, exploration mechanics, and system integration.

## Overview

**Realms & Reaches** lets GMs paint biome and terrain regions on any scene, then query that data for travel mechanics, encounter generation, and environmental effects. Unlike modules focused on tactical movement, this is designed for exploration, sandbox play, and integration with other modules.

### Key Features

- **🗺️ Custom Terrain Layer**: Draw polygon regions representing biomes, terrain types, and environmental zones
- **🏷️ Flexible Tagging**: Tag-based data system supports any properties (`biome:forest`, `terrain:dense`, `travel_speed:0.75`)
- **📤 Data Sharing**: Export/import realm data between installations and share with the community
- **🔌 Module Integration**: Clean API for other modules to query realm data
- **🎮 System Agnostic**: Works with any game system (D&D 5e, Pathfinder 2e, Dragonbane, etc.)

### Perfect For

- **Hexcrawl campaigns** with detailed biome effects
- **Sandbox exploration** with environmental variety
- **Travel-focused games** needing terrain modifiers
- **Module developers** wanting environmental data
- **Community content creators** sharing detailed maps

## What's Working

- ✅ **Tag-based realm data** with 8 core namespaces (biome, terrain, climate, etc.)
- ✅ **Spatial queries** - Fast point-in-polygon detection for coordinate-based lookups
- ✅ **Data persistence** - Automatic saving to scene flags with export/import
- ✅ **Validation system** - Smart tag suggestions and conflict detection
- ✅ **API foundation** - Full CRUD operations for programmatic access
- ✅ **Canvas drawing layer** - Visual realm creation with polygon, rectangle, and circle tools
- ✅ **Properties UI** - Complete tag editor interface with real-time validation
- ✅ **Layer controls** - Integrated drawing tools in Foundry's left sidebar

## Quick Start Preview

```javascript
// Get realm data at coordinates
const realm = game.realmsAndReaches.api.getRealmAt(x, y);

if (realm) {
  const biome = realm.getTag('biome');        // "forest"
  const speed = realm.getTagNumber('travel_speed'); // 0.75
  const isHaunted = realm.hasTag('custom:haunted'); // true/false
}

// Create a new realm programmatically
await game.realmsAndReaches.api.createRealm({
  name: 'Dark Forest',
  geometry: { type: 'polygon', points: [0,0, 100,0, 100,100, 0,100] },
  tags: ['biome:forest', 'terrain:dense', 'travel_speed:0.5', 'custom:haunted']
});
```

## Core Concepts

### Realms

A **realm** is a polygon region on a scene with associated metadata. Each realm can represent:

- **Biomes**: Forest, desert, mountain, swamp, arctic
- **Terrain**: Dense, sparse, rocky, marshy, civilized
- **Environmental effects**: Temperature, weather patterns, resources
- **Game mechanics**: Travel speeds, encounter tables, skill modifiers

### Tag System

Realms use a flexible tag-based system instead of fixed properties:

```javascript
// Example realm tags
[
  "biome:forest",           // Core biome type
  "terrain:dense",          // Terrain difficulty
  "travel_speed:0.75",      // Movement modifier
  "climate:temperate",      // Weather patterns
  "resources:timber",       // Available resources
  "resources:game",         // Huntable animals
  "custom:haunted",         // Custom properties
  "module:jj:encounter_chance:0.3"  // Module-specific data
]
```

This system allows:
- **Flexibility**: Add any properties you need
- **Extensibility**: Modules can define their own tag conventions
- **Future-proofing**: No breaking changes when adding new features
- **Community standards**: Shared tag vocabularies emerge naturally

## Next Steps

- 📖 **[Getting Started](getting-started)** - Complete tutorial for first-time users
- 📚 **[User Guide](user-guide)** - Comprehensive feature reference
- 🔧 **[API Reference](api-reference)** - Developer documentation
- 🔗 **[GitHub Repository](https://github.com/rayners/fvtt-realms-and-reaches)** - Source code and issues

## Links

- **GitHub**: [github.com/rayners/fvtt-realms-and-reaches](https://github.com/rayners/fvtt-realms-and-reaches)
- **Foundry Hub**: [foundryvtt-hub.com/package/realms-and-reaches](https://foundryvtt-hub.com/package/realms-and-reaches)
- **Discord**: [discord.gg/foundryvtt](https://discord.gg/foundryvtt)

---

**Made with ❤️ for the Foundry VTT community**