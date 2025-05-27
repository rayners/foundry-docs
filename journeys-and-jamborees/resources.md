---
sidebar_position: 3
title: Resource Management
---

# Resource Management

Keep your party supplied and ready for adventure with J&J's resource tracking system.

## Overview

Journeys & Jamborees tracks essential party resources that are consumed during travel and adventures. The system provides visual feedback and warnings to help you manage supplies effectively.

## Core Resources

### Rations
- **Purpose**: Food supplies for the party
- **Default Consumption**: 1 per character per day
- **Storage**: Party inventory

### Water
- **Purpose**: Drinking water for the party  
- **Default Consumption**: 1 per character per day
- **Storage**: Party inventory

### Gold
- **Purpose**: Shared party funds
- **Default Consumption**: None (manual tracking)
- **Storage**: Party sheet header

## Resource Display

Resources are displayed in multiple locations for easy access:

### Party Sheet Header
- Quick view of current resource levels
- Rations and water counters
- Gold display
- Visual warnings when low

### Inventory Tab
- Detailed resource management
- Add/remove buttons
- Item listing
- Quantity tracking

## Managing Resources

### Adding Resources

To increase resource counts:

1. **Via Inventory Tab**:
   - Navigate to the Inventory tab
   - Click the **+ button** next to the resource
   - Increase quantity as needed

2. **Direct Edit**:
   - Click on the resource number in the header
   - Type the new value
   - Press Enter to confirm

### Using Resources

To decrease resource counts:

1. **Manual Deduction**:
   - Click the **- button** to decrease by 1
   - Edit the number directly for larger changes

2. **Distribute Button**:
   - Use for role-playing resource allocation
   - Helps track who carries what (flavor only)

## Resource Warnings

The system provides automatic warnings:

### Visual Indicators
- **Green**: Sufficient resources
- **Red**: Insufficient for party size
- **Warning Icons**: When critically low

### Calculation Logic
- Checks resources against party size
- Only counts "Active" and "Traveling" members
- "Staying Behind" members don't consume resources

## Consumption Rates

### Default Rates

| Resource | Per Character | Per Day |
|----------|--------------|---------|
| Rations | 1 | Daily |
| Water | 1 | Daily |

### Customizing Rates

GMs can adjust consumption in the Settings tab:
- **Rations Per Character Per Day**
- **Water Per Character Per Day**
- Rates can be decimal values (e.g., 0.5 for half rations)

### Consumption Rules

Resources are consumed by:
- ✅ **Active** status characters
- ✅ **Traveling** status characters  
- ❌ **Staying Behind** characters (do not consume)

## Party Inventory

### Shared Storage

The party inventory is separate from character inventories:
- **Centralized management** of group resources
- **No weight tracking** (currently)
- **Accessible to all** party members

### Adding Items

1. **Create New Items**:
   - Click "Add" in the inventory
   - Fill in item details
   - Set quantity

2. **Drag from Characters**:
   - Open a character sheet
   - Drag items to party sheet
   - Items are copied (not moved)

### Managing Items

- **Edit**: Click the edit icon to modify
- **Delete**: Click trash icon to remove
- **Quantity**: Track stackable items
- **Notes**: Add descriptions as needed

## Best Practices

### Resource Planning

1. **Calculate Journey Needs**:
   - Days of travel × party size × consumption rate
   - Add 20-30% buffer for delays

2. **Stock Strategically**:
   - Buy in bulk at towns
   - Hunt/forage to supplement
   - Track water sources on map

### During Adventures

1. **Daily Deduction**:
   - Deduct at end of each travel day
   - Account for special circumstances
   - Note any resource finds

2. **Monitor Levels**:
   - Check before major decisions
   - Plan resupply stops
   - Consider splitting party if low

### GM Guidelines

1. **Resource Availability**:
   - Make resources meaningful but not tedious
   - Vary availability by region
   - Use scarcity for drama

2. **Automation Settings**:
   - Enable auto-consumption for ease
   - Adjust rates for campaign style
   - Use warnings to prompt decisions

## Advanced Usage

### Resource Types

Consider tracking additional resources:
- **Torches**: For dungeon exploration
- **Rope**: For climbing/traversal
- **Ammunition**: For ranged combat
- **Feed**: For mounts and animals

### Survival Scenarios

Resource management becomes critical during:
- **Desert Crossings**: Double water consumption
- **Winter Travel**: Extra rations needed
- **Sea Voyages**: No foraging possible
- **Dungeon Delves**: Limited resupply

### Economic Considerations

- **Bulk Discounts**: Reduce costs for large purchases
- **Regional Pricing**: Vary by availability
- **Trade Goods**: Some resources as currency
- **Spoilage**: Fresh food time limits

## Troubleshooting

### Common Issues

**Resources showing red despite having enough**:
- Check party member status
- Verify consumption settings
- Refresh the party sheet

**Cannot modify resource amounts**:
- Ensure you have party ownership
- Check if sheet is locked
- Try using +/- buttons instead

**Resources not consuming automatically**:
- Check auto-consumption setting
- Verify travel status
- Manual deduction may be required

## Future Enhancements

Planned improvements include:

### Automation
- Automatic daily consumption
- Rest-based deduction
- Foraging integration
- Water source tracking

### Expanded Resources
- Custom resource types
- Resource quality levels
- Spoilage tracking
- Container management

### Integration
- Shop connectivity
- Crafting system ties
- Survival skill bonuses
- Environmental effects

## Food Gathering System (Dragonbane)

When playing Dragonbane with the Core Set module, the food gathering system provides automated resource acquisition.

### Gathering Methods

Characters can gather food through three methods:

#### 🏹 Hunting
- **Skill**: Configurable (default: Hunting & Fishing)
- **Requirements**: Ranged weapon (range ≥10) or traps
- **Results**: Various animals providing 1d3 to 3d6 rations
- **Risk**: Some animals are dangerous if hunt fails

#### 🎣 Fishing  
- **Skill**: Configurable (default: Hunting & Fishing)
- **Requirements**: Fishing rod or net
- **Results**: 1d8 rations with rod, 1d10 with net
- **Best Use**: Near water sources

#### 🌿 Foraging
- **Skill**: Configurable (default: BUSHCRAFT)
- **Difficulty**: Varies by season (summer easiest, winter hardest)
- **Results**: 1d4 to 1d8 rations depending on success
- **Special**: May find poisonous plants on failure

### Using the System

1. **Assign Activities**: Set character downtime to hunting/fishing/foraging
2. **Make Camp**: Food gathering happens automatically
3. **Check Results**: See chat messages for outcomes
4. **Update Resources**: Successful gathering adds to party rations

### Customizing Food Tables

The module uses RollTables for flexible results:

#### Creating Custom Tables

1. **Name Your Table**:
   - Hunting: Include "hunting" in the name
   - Foraging: Include "foraging" in the name
   - Example: "Arctic Hunting Table"

2. **Add Table Entries**:
   ```
   | Roll | Result | Flags |
   |------|--------|-------|
   | 1-2 | Arctic Hare | 1d3 rations, weapon/trap |
   | 3-4 | Seal | 1d6 rations, weapon only |
   | 5-6 | Polar Bear | 3d6 rations, dangerous |
   ```

3. **Configure Flags** (in table result settings):
   ```json
   {
     "journeys-and-jamborees": {
       "rations": "1d6",
       "requiresWeapon": true,
       "canUseTrap": false,
       "dangerous": true
     }
   }
   ```

#### Flag Reference

| Flag | Type | Description |
|------|------|-------------|
| `rations` | string/number | Amount of food (e.g., "2d6" or 5) |
| `requiresWeapon` | boolean | Needs ranged weapon |
| `canUseTrap` | boolean | Can use traps |
| `dangerous` | boolean | Dangerous if failed |
| `special` | string | Special effects for foraging |

### Environmental Tables

Create region-specific tables for immersion:

#### Desert Hunting
- Lizard (1 ration, trap only)
- Desert Hare (1d2 rations)
- Antelope (1d6 rations, weapon only)
- Giant Scorpion (2d4 rations, dangerous)

#### Arctic Foraging  
- Lichen (1 ration)
- Arctic Berries (1d3 rations)
- Pine Bark (1d2 rations)
- Nothing Edible (0 rations)

#### Swamp Fishing
- Mudfish (1d4 rations)
- Swamp Eel (1d6 rations)
- Giant Catfish (2d6 rations)
- Poisonous Fish (0 rations, special: poison)

### Best Practices

1. **Balance Risk/Reward**: Include both good and poor results
2. **Consider Equipment**: Make some prey weapon-only
3. **Add Variety**: Mix common and rare results
4. **Season Appropriately**: Winter tables should be harsher
5. **Test Tables**: Roll manually to check balance

### Integration Tips

- Link gathering success to weather conditions
- Create quest hooks from rare hunting results  
- Use dangerous animals as combat encounters
- Trade exotic meats at settlements
- Track special ingredients for crafting