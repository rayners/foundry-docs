---
sidebar_position: 7
title: System Configuration
---

# System Configuration Guide

Journeys & Jamborees is designed to work with multiple game systems. This guide explains how to configure the module for your chosen system and how to add support for new systems.

## Supported Systems

The module comes pre-configured for these systems:

### 🐉 Dragonbane
- **Movement**: 15km/day on foot, 30km/day mounted
- **Skills**: BUSHCRAFT (pathfinding), AWARENESS (lookout), BARTER (quartermaster)
- **Encounters**: 1d20, encounter on 18+
- **Weather**: Custom 1d6 table
- **Special Features**: Full food gathering system

### ⚔️ D&D 5th Edition
- **Movement**: 24 miles/day on foot, 30 miles/day mounted
- **Skills**: Survival (pathfinding), Perception (lookout), Persuasion (quartermaster)
- **Encounters**: 1d20, encounter on 18+
- **Weather**: 1d20 roll

### 🗡️ Pathfinder 2nd Edition
- **Movement**: 24 miles/day on foot, 32 miles/day mounted
- **Skills**: Survival (pathfinding), Perception (lookout), Society (quartermaster)
- **Encounters**: 1d20, encounter on 18+
- **Weather**: 1d20 roll

### 🏔️ Forbidden Lands
- **Movement**: 10km/day on foot, 20km/day mounted
- **Skills**: Survival (pathfinding), Scouting (lookout), Manipulation (quartermaster)
- **Encounters**: Custom d66 table
- **Weather**: 1d6 roll

### 🏗️ Simple Worldbuilding
- **Movement**: 1 unit/day on foot, 2 units/day mounted
- **Skills**: User-defined attributes
- **Encounters**: 1d20, encounter on 15+
- **Weather**: 1d6 roll

## Module Settings

Access settings via: **Game Settings → Module Settings → Journeys & Jamborees**

### Movement Settings
- **Base Movement (On Foot)**: Daily travel distance when walking
- **Base Movement (Mounted)**: Daily travel distance when riding
- **Movement Units**: The unit of measurement (km, miles, etc.)

### Skill Settings
- **Pathfinder Skill**: Which skill to use for navigation rolls
- **Lookout Skill**: Which skill to use for spotting danger
- **Quartermaster Skill**: Which skill to use for supply management
- **Hunting Skill** (Dragonbane): Which skill to use for hunting
- **Foraging Skill** (Dragonbane): Which skill to use for foraging

### Dice Settings
- **Encounter Dice Formula**: What to roll for random encounters
- **Encounter Threshold**: Minimum roll needed for an encounter
- **Weather Dice Formula**: What to roll for weather

### Resource Settings
- **Rations Per Character Per Day**: Food consumption rate
- **Water Per Character Per Day**: Water consumption rate

## Configuring for Your System

### Step 1: Check System Detection
When you first enable the module, it automatically detects your game system and loads appropriate defaults.

### Step 2: Adjust Movement Rates
1. Open module settings
2. Set appropriate movement rates for your system
3. Change units if needed (miles vs kilometers)

### Step 3: Configure Skills
1. The module detects available skills automatically
2. Select which skills match each travel role
3. If skills aren't showing, create a character with skills first

### Step 4: Set Dice Formulas
1. Configure encounter rolls for your system's mechanics
2. Adjust threshold values as needed
3. Set weather dice if your system uses weather rules

## Adding Support for New Systems

### For Users

If your system isn't pre-configured:

1. **Use Default Settings**: The module will work with generic defaults
2. **Manual Configuration**: Adjust all settings manually for your system
3. **Share Your Config**: Post your settings on GitHub to help others

### For Developers

To add official support for a new system:

1. **Fork the Repository**
2. **Add System Configuration** in `src/system-config.ts`:
   ```typescript
   export const SYSTEM_CONFIGS = {
     'your-system-id': {
       movement: {
         onFoot: 24,
         mounted: 48,
         units: 'miles'
       },
       skills: {
         pathfinderSkillName: 'navigation',
         lookoutSkillName: 'perception',
         quartermasterSkillName: 'logistics'
       },
       dice: {
         encounterFormula: '1d20',
         encounterThreshold: 15,
         weatherFormula: '2d6'
       },
       defaultPartyImage: 'icons/your-system/party.png'
     }
   };
   ```

3. **Create System Adapter** in `src/system-adapter.ts`:
   ```typescript
   class YourSystemAdapter extends SystemAdapter {
     getSkillValue(actor, skillName) {
       // Return the skill value for your system
     }
     
     async rollSkill(actor, skillName, options) {
       // Implement skill rolling for your system
     }
   }
   ```

4. **Test Thoroughly** with your system
5. **Submit a Pull Request**

## Troubleshooting

### Skills Not Appearing
- Create at least one character with skills
- Check that the system is properly detected
- Try reloading the world

### Movement Calculations Wrong
- Verify units are set correctly
- Check that movement rates match your system's expectations
- Consider terrain modifiers in your calculations

### Dice Rolls Not Working
- Ensure dice formulas are valid Foundry expressions
- Test formulas in chat first: `/r 1d20`
- Check console for error messages

## API Access

Developers can access system configuration programmatically:

```javascript
const jjApi = game.modules.get('journeys-and-jamborees').api;
const config = jjApi.systemConfig.getCurrentSystemConfig();

console.log(config.movement.onFoot); // Base movement rate
console.log(config.skills.pathfinderSkillName); // Skill name
```

## Best Practices

1. **Test Your Configuration**: Make a test party and verify all features work
2. **Document Custom Settings**: Keep notes on your configuration
3. **Share With Community**: Help others with the same system
4. **Report Issues**: File bugs for system-specific problems
5. **Consider Automation**: Some systems may benefit from custom adapters