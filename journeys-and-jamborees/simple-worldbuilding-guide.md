---
sidebar_position: 8
title: Simple Worldbuilding Guide
---

# Simple Worldbuilding System Guide

This guide explains how to use Journeys & Jamborees with the Simple Worldbuilding system, including special considerations and workarounds.

## Overview

Simple Worldbuilding is a minimal system that allows complete customization. However, it has strict limitations on actor types that require special handling for J&J.

## Known Limitations

### ⚠️ Party Actor Type Not Available

Simple Worldbuilding only allows actor types defined in its `template.json` file. You'll see this limitation:

- The "Party" actor type won't appear in the actor creation dropdown
- This is **expected behavior** and not a bug
- The module works around this limitation automatically

### How J&J Handles This

The module detects Simple Worldbuilding and:
1. Skips trying to register the Party actor type
2. Uses an alternative approach for party management
3. All features still work, just accessed differently

## Setting Up J&J with Simple Worldbuilding

### Step 1: Configure Your Attributes

Since Simple Worldbuilding uses custom attributes, you need to:

1. Define attributes that represent skills in your game
2. Common examples:
   - `navigation` or `survival` for pathfinding
   - `perception` or `awareness` for lookout duties  
   - `social` or `leadership` for quartermaster role

### Step 2: Configure Module Settings

1. Go to **Game Settings → Module Settings → Journeys & Jamborees**
2. Configure these settings:
   - **Movement Rate**: Set to your preferred units (default: 1 unit/day)
   - **Pathfinder Skill**: Select your navigation attribute
   - **Lookout Skill**: Select your perception attribute
   - **Quartermaster Skill**: Select your social attribute

### Step 3: Create Characters

Before creating a party:
1. Create at least one character
2. Add your custom attributes to the character
3. This allows the skill dropdowns to populate

### Step 4: Working with Parties

Due to the actor type limitation:
1. Parties are created through the module's API
2. Use the provided macros or commands
3. Party management works normally once created

## Recommended Attribute Setup

Here's a suggested attribute structure for Simple Worldbuilding:

```
Physical Attributes:
- strength
- agility  
- endurance

Mental Attributes:
- intelligence
- perception
- willpower

Social Attributes:
- charisma
- empathy
- leadership

Skill Attributes:
- survival (for pathfinding)
- awareness (for lookout)
- negotiation (for quartermaster)
```

## Configuration Examples

### Fantasy Setting
```javascript
{
  movement: {
    onFoot: 20,  // leagues per day
    mounted: 40,
    units: "leagues"
  },
  skills: {
    pathfinder: "survival",
    lookout: "perception",
    quartermaster: "leadership"
  }
}
```

### Sci-Fi Setting
```javascript
{
  movement: {
    onFoot: 50,  // kilometers per day
    mounted: 200, // with vehicle
    units: "km"
  },
  skills: {
    pathfinder: "navigation",
    lookout: "sensors",
    quartermaster: "logistics"
  }
}
```

### Post-Apocalyptic Setting
```javascript
{
  movement: {
    onFoot: 15,  // miles per day
    mounted: 30,  // with vehicle
    units: "miles"
  },
  skills: {
    pathfinder: "wastelandLore",
    lookout: "danger sense",
    quartermaster: "scavenging"
  }
}
```

## Tips for Simple Worldbuilding Users

### 1. Skill System Design
- Create consistent skill attributes across all characters
- Use descriptive names that match your setting
- Consider grouping related skills

### 2. Movement Rates
- Adjust rates to match your world scale
- Consider different terrain types
- Factor in your setting's technology level

### 3. Resource Management
- Define what rations and water represent in your world
- Could be energy cells, fuel, morale, etc.
- Adjust consumption rates accordingly

### 4. Travel Roles
- Rename roles to fit your setting
- Pathfinder → Navigator, Guide, Scout
- Lookout → Sentinel, Watcher, Sensor Operator
- Quartermaster → Supply Officer, Resource Manager

## Troubleshooting

### "Party actor type not available"
This is normal for Simple Worldbuilding. Use the alternative creation method.

### Skills not showing in dropdowns
1. Create a character first
2. Add attributes to the character
3. Reload the world if needed

### Movement calculations seem wrong
- Check your unit settings
- Verify movement rates match your world scale
- Remember rates are per day, not per hour

## Advanced Usage

### Custom Macros

Create macros for common party operations:

```javascript
// Create a new party
const partyData = {
  name: "The Survivors",
  type: "character", // Uses character type as base
  flags: {
    "journeys-and-jamborees": {
      isParty: true
    }
  }
};
const party = await Actor.create(partyData);
```

### API Integration

Access Simple Worldbuilding data:

```javascript
const actor = game.actors.getName("John");
const survivalSkill = actor.system.attributes.survival?.value || 0;
```

## Best Practices

1. **Plan Your Attributes**: Design a coherent attribute system before starting
2. **Document Your Setup**: Keep notes on your configuration
3. **Test Thoroughly**: Try all features with your custom setup
4. **Share Your Config**: Help other Simple Worldbuilding users
5. **Be Creative**: Adapt the module's features to your unique setting

## Getting Help

If you encounter issues specific to Simple Worldbuilding:
1. Check this guide first
2. Verify your attribute setup
3. Test with default settings
4. Report issues on GitHub with your configuration