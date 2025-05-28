---
sidebar_position: 6
title: API Reference
---

# API Reference

Developer documentation for integrating with Realms & Reaches.

## Getting Started

### Checking Availability

Always check if Realms & Reaches is available before using the API:

```javascript
// Check if module is installed and active
const realmsModule = game.modules.get('realms-and-reaches');
if (!realmsModule?.active) {
  console.warn('Realms & Reaches not available');
  return;
}

// Access the public API
const realmsAPI = realmsModule.api;
```

### Basic Usage Pattern

```javascript
// Get realm at specific coordinates
const realm = realmsAPI.getRealmAt(x, y);

if (realm) {
  // Use realm data for your mechanics
  const biome = realm.getTag('biome');
  const speedMod = parseFloat(realm.getTag('travel_speed')) || 1.0;
  
  // Apply to your module
  applyTerrainEffects(biome, speedMod);
}
```

## Public API

The public API is available at `game.modules.get('realms-and-reaches').api`:

### Spatial Query Functions

```typescript
// Get realm at coordinates
getRealmAt(x: number, y: number): RealmData | null

// Get all realms in scene
getAllRealms(): RealmData[]

// Get realms by tag
getRealmsByTag(tag: string): RealmData[]

// Get realms by tag key
getRealmsByTagKey(key: string): RealmData[]
```

### CRUD Functions

```typescript
// Create realm
createRealm(realmData: Partial<RealmData>): Promise<RealmData>

// Update realm
updateRealm(realmId: string, updates: Partial<RealmData>): Promise<RealmData | null>

// Delete realm
deleteRealm(realmId: string): Promise<boolean>
```

### Tag Functions

```typescript
// Get tag suggestions
getTagSuggestions(namespace: string): string[]

// Validate tag
validateTag(tag: string): boolean
```

### Data Functions

```typescript
// Export scene data
exportScene(): any

// Import scene data
importScene(data: any): Promise<void>

// Get manager instance
getManager(): RealmManager
```

## RealmData Class

### Tag Methods

```typescript
// Add a tag (validates format)
addTag(tag: string): void

// Remove a specific tag
removeTag(tag: string): boolean

// Check if realm has a tag
hasTag(tag: string): boolean

// Get tag value by key
getTag(key: string): string | null

// Get tag value as number
getTagNumber(key: string): number | null

// Get all tags
getAllTags(): string[]
```

### Spatial Methods

```typescript
// Test if point is inside realm
containsPoint(x: number, y: number): boolean

// Get bounding box
getBounds(): { x: number; y: number; width: number; height: number }
```

## Tag System

### Core Namespaces

| Namespace | Description | Examples |
|-----------|-------------|----------|
| `biome` | Primary ecosystem | `biome:forest` |
| `terrain` | Movement difficulty | `terrain:dense` |
| `climate` | Weather patterns | `climate:temperate` |
| `travel_speed` | Speed modifier | `travel_speed:0.75` |
| `resources` | Available materials | `resources:timber` |
| `elevation` | Altitude category | `elevation:highland` |
| `custom` | User-defined | `custom:haunted` |
| `module` | Module-specific | `module:jj:encounter_chance:0.3` |

### Validation Examples

```javascript
// Valid tags
TagSystem.validateTag('biome:forest');        // ✓
TagSystem.validateTag('travel_speed:0.75');   // ✓
TagSystem.validateTag('custom:haunted');      // ✓
TagSystem.validateTag('module:jj:encounter_chance:0.3'); // ✓

// Invalid tags
TagSystem.validateTag('forest');              // ✗ Missing colon
TagSystem.validateTag('biome:');              // ✗ Missing value
TagSystem.validateTag(':forest');             // ✗ Missing key
```

## Spatial Queries

### Geometry Types

#### Polygon
```javascript
{
  type: 'polygon',
  points: [x1, y1, x2, y2, x3, y3, ...] // Flat array of coordinates
}
```

#### Rectangle  
```javascript
{
  type: 'rectangle',
  x: 150,      // Center X
  y: 150,      // Center Y
  width: 100,  // Total width
  height: 100, // Total height
  rotation: 0  // Rotation in degrees (optional)
}
```

#### Circle
```javascript
{
  type: 'circle',
  x: 100,      // Center X
  y: 100,      // Center Y
  radius: 50   // Radius in pixels
}
```

## Data Formats

### Export Format

```javascript
{
  "format": "realms-and-reaches-v1",
  "metadata": {
    "author": "rayners",
    "created": "2025-05-28T12:00:00Z",
    "version": "1.0.0",
    "description": "Adventure realm data"
  },
  "scenes": {
    "scene-id": {
      "realms": [
        {
          "id": "realm-001",
          "name": "Ancient Forest",
          "geometry": {
            "type": "polygon",
            "points": [0, 0, 100, 0, 100, 100, 0, 100]
          },
          "tags": ["biome:forest", "terrain:dense", "travel_speed:0.75"],
          "metadata": {
            "created": "2025-05-28T12:00:00Z",
            "modified": "2025-05-28T12:00:00Z",
            "author": "rayners",
            "version": "1.0.0"
          }
        }
      ],
      "bounds": { "width": 4000, "height": 4000 }
    }
  }
}
```

## Events

### RealmManager Events

```javascript
const manager = RealmManager.getInstance();

// Listen for realm creation
manager.addEventListener('realmCreated', (event) => {
  const { realm, sceneId } = event.detail;
  console.log(`Realm created: ${realm.name}`);
});

// Listen for realm updates
manager.addEventListener('realmUpdated', (event) => {
  const { realm, sceneId } = event.detail;
  console.log(`Realm updated: ${realm.name}`);
});

// Listen for realm deletion
manager.addEventListener('realmDeleted', (event) => {
  const { realmId, sceneId } = event.detail;
  console.log(`Realm deleted: ${realmId}`);
});
```

## Integration Examples

### Travel Mechanics Integration

```javascript
// Example: Modify travel speed based on terrain
Hooks.on('updateActor', (actor, changes, options, userId) => {
  if (actor.type !== 'party') return;
  
  const realmsAPI = game.modules.get('realms-and-reaches')?.api;
  if (!realmsAPI) return;
  
  // Get realm at party location
  const realm = realmsAPI.getRealmAt(actor.x, actor.y);
  if (!realm) return;
  
  // Apply terrain effects
  const speedMod = parseFloat(realm.getTag('travel_speed')) || 1.0;
  const biome = realm.getTag('biome');
  
  // Modify travel calculations
  const baseSpeed = actor.system.travel.speed;
  const modifiedSpeed = baseSpeed * speedMod;
  
  console.log(`Travel through ${biome}: ${modifiedSpeed} km/day`);
});
```

### Encounter Table Selection

```javascript
// Example: Select encounter tables by biome
function getEncounterTable(x, y) {
  const realmsAPI = game.modules.get('realms-and-reaches')?.api;
  if (!realmsAPI) return 'default-encounters';
  
  const realm = realmsAPI.getRealmAt(x, y);
  if (!realm) return 'default-encounters';
  
  const biome = realm.getTag('biome');
  const terrain = realm.getTag('terrain');
  
  // Build table name from tags
  let tableName = `encounters-${biome}`;
  if (terrain) {
    tableName += `-${terrain}`;
  }
  
  // Check if table exists, fall back to biome or default
  return game.tables.getName(tableName) || 
         game.tables.getName(`encounters-${biome}`) ||
         game.tables.getName('default-encounters');
}
```

### Weather Effects

```javascript
// Example: Apply weather effects based on climate
function applyWeatherEffects(tokenDocument) {
  const realmsAPI = game.modules.get('realms-and-reaches')?.api;
  if (!realmsAPI) return;
  
  const realm = realmsAPI.getRealmAt(tokenDocument.x, tokenDocument.y);
  if (!realm) return;
  
  const climate = realm.getTag('climate');
  const elevation = realm.getTag('elevation');
  
  // Define weather effects
  const weatherEffects = {
    'arctic': { cold: true, wind: true, visibility: 'poor' },
    'tropical': { heat: true, humidity: true, rain: true },
    'arid': { heat: true, sandstorm: true, dehydration: true },
    'temperate': { seasonal: true, moderate: true }
  };
  
  const elevationEffects = {
    'mountain': { cold: true, wind: true, thin_air: true },
    'highland': { cool: true, wind: true },
    'lowland': { moderate: true }
  };
  
  // Combine effects
  const effects = {
    ...weatherEffects[climate],
    ...elevationEffects[elevation]
  };
  
  // Apply to token
  applyEnvironmentalEffects(tokenDocument, effects);
}
```

### Resource Gathering

```javascript
// Example: Check for available resources
function checkAvailableResources(x, y) {
  const realmsAPI = game.modules.get('realms-and-reaches')?.api;
  if (!realmsAPI) return [];
  
  const realm = realmsAPI.getRealmAt(x, y);
  if (!realm) return [];
  
  // Get all resource tags
  const resourceTags = realm.getAllTags()
    .filter(tag => tag.startsWith('resources:'))
    .map(tag => tag.split(':')[1]);
  
  // Map to gathering opportunities
  const resourceMap = {
    'timber': { skill: 'Nature', dc: 15, time: '1 hour' },
    'game': { skill: 'Survival', dc: 12, time: '4 hours' },
    'minerals': { skill: 'Investigation', dc: 18, time: '2 hours' },
    'herbs': { skill: 'Medicine', dc: 14, time: '30 minutes' }
  };
  
  return resourceTags
    .filter(resource => resourceMap[resource])
    .map(resource => ({
      type: resource,
      ...resourceMap[resource]
    }));
}
```

## Error Handling

Always handle potential errors when working with the API:

```javascript
try {
  const realmsAPI = game.modules.get('realms-and-reaches')?.api;
  if (!realmsAPI) {
    throw new Error('Realms & Reaches not available');
  }
  
  const realm = realmsAPI.getRealmAt(x, y);
  if (!realm) {
    console.log('No realm found at coordinates');
    return;
  }
  
  // Use realm data
  processRealmData(realm);
  
} catch (error) {
  console.error('Failed to query realm data:', error);
  // Fall back to default behavior
  useDefaultBehavior();
}
```

## Performance Considerations

### Best Practices
```javascript
// Good: Cache realm lookups
const realmCache = new Map();
function getCachedRealm(x, y) {
  const key = `${Math.floor(x/100)},${Math.floor(y/100)}`;
  if (realmCache.has(key)) {
    return realmCache.get(key);
  }
  
  const realm = realmsAPI.getRealmAt(x, y);
  realmCache.set(key, realm);
  return realm;
}

// Good: Batch operations
const realms = positions.map(pos => realmsAPI.getRealmAt(pos.x, pos.y));

// Bad: Query in tight loops
for (let i = 0; i < 1000; i++) {
  const realm = realmsAPI.getRealmAt(tokens[i].x, tokens[i].y); // Too frequent
}
```

### Memory Usage
- RealmManager instances are singletons per scene
- Large polygon datasets use efficient storage
- Consider clearing unused managers in long-running sessions

---

For more examples and the complete API documentation, see the [GitHub repository](https://github.com/rayners/fvtt-realms-and-reaches).