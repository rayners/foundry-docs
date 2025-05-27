---
sidebar_position: 2
title: Travel System
---

# Travel System

Manage your party's journeys across the world with J&J's travel mechanics.

:::info System Support
Travel mechanics adapt to your game system with appropriate movement rates, skills, and dice formulas.
:::

## Travel Status

Set your party's current activity to reflect what they're doing:

| Status | Description | Use When |
|--------|-------------|----------|
| **Traveling** | Party is on the move | During active travel between locations |
| **Resting** | Taking a break | Short stops for meals or brief rest |
| **Camping** | Set up for the night | Extended rest periods, overnight camps |

To change travel status:
1. Open the party sheet
2. Go to the **Travel tab**
3. Select status from the dropdown

## Journey Tracking

Track your party's progress across the world:

### Setting Up a Journey

1. Navigate to the **Travel tab**
2. Fill in journey details:
   - **Origin**: Where you're starting from
   - **Destination**: Where you're heading
   - **Total Distance**: How far the journey is
   - **Distance Traveled**: Progress so far
   - **Terrain Type**: The primary terrain you're crossing

### Movement Calculation

Movement rates are configured per game system:

| System | On Foot | Mounted | Units |
|--------|---------|---------|-------|
| **Dragonbane** | 15 | 30 | km/day |
| **D&D 5e** | 24 | 30 | miles/day |
| **Pathfinder 2e** | 24 | 32 | miles/day |
| **Forbidden Lands** | 10 | 20 | km/day |
| **Simple Worldbuilding** | 1 | 2 | units/day |

:::tip Customization
GMs can adjust movement rates in Module Settings to match campaign needs.
:::

## Travel Actions

The Travel tab provides several action buttons for journey management:

### Available Actions

| Action | Purpose | How It Works |
|--------|---------|---------------|
| **Find Path** | Roll pathfinding checks | Uses assigned pathfinder's skill |
| **Random Encounter** | Generate encounters | Rolls system-specific dice formula |
| **Roll Weather** | Determine weather conditions | System-dependent weather generation |
| **Make Camp** | Set up camp for rest | Triggers overnight resource consumption |

## Travel Roles in Action

Travel roles (assigned in the Members tab) come into play during journeys:

### Pathfinder
- **Skill**: Varies by system (Survival, BUSHCRAFT, etc.)
- **Responsibilities**:
  - Finding the best route
  - Avoiding natural hazards
  - Reducing travel time

### Lookout
- **Skill**: Varies by system (Perception, AWARENESS, etc.)
- **Responsibilities**:
  - Spotting danger early
  - Finding points of interest
  - Night watch duties

### Quartermaster
- **Skill**: Varies by system (Persuasion, BARTER, etc.)
- **Responsibilities**:
  - Managing supplies efficiently
  - Finding resources along the way
  - Negotiating with merchants

## Managing Resources During Travel

### Resource Consumption

Default consumption rates (configurable in Settings):
- **Rations**: 1 per character per day
- **Water**: 1 per character per day

### Automatic Consumption

When making camp or resting overnight:
1. Resources are automatically consumed (if enabled)
2. Consumption based on active/traveling members only
3. Visual feedback shows resources deducted
4. Warnings appear for insufficient supplies

:::important Status Matters
Only characters with "Active" or "Traveling" status consume resources. Those "Staying Behind" don't eat from party supplies.
:::

### Resource Warnings

The party sheet provides visual warnings:
- Resources turn **red** when below party needs
- Warnings appear when supplies run low
- Automatic calculations based on party size

## Best Practices

### Planning Journeys
1. **Calculate distance** before departing
2. **Stock adequate supplies** (add buffer for delays)
3. **Assign appropriate roles** based on terrain
4. **Consider travel pace** vs supply consumption

### During Travel
1. **Update distance traveled** regularly
2. **Track resource consumption** at day's end
3. **Note important events** in the journal
4. **Adjust roles** as situations change

### GM Tips
- Use party tokens on overland maps
- Create custom terrains with movement modifiers
- Implement weather effects on travel speed
- Track time passed for world events

## Integrating with Your Game

### Session Start Checklist
- [ ] Verify party composition
- [ ] Check resource levels
- [ ] Confirm travel roles
- [ ] Set journey parameters

### During Play
- Update journey progress after each travel day
- Deduct resources appropriately
- Roll for encounters based on settings
- Describe terrain and weather

### Session End
- Note current location
- Record distance traveled
- Update party journal
- Plan next session's route

## Food Gathering (Dragonbane)

When playing Dragonbane with the Core Set module, characters can gather food during travel:

### Downtime Activities

Characters with "Traveling" status can perform:
- **Hunting**: Track and kill animals for meat
- **Fishing**: Catch fish with rod or net
- **Foraging**: Find edible plants and fungi

### How It Works

1. Assign downtime activities in the Members tab
2. Characters automatically attempt gathering when making camp
3. Success depends on skills and equipment:
   - Hunting requires ranged weapons or traps
   - Fishing needs rod or net
   - Foraging difficulty varies by season

### Customizing Food Tables

The module uses RollTables for results, allowing full customization:
1. Create tables named "J&J Hunting Table" or "J&J Foraging Table"
2. Add appropriate creatures/plants for your setting
3. Set flags for special properties (rations, danger, etc.)

See the [Resources Guide](resources) for detailed food gathering information.

## Future Features

The travel system will expand with:

### Enhanced Journey Tracking
- Detailed route mapping
- Waypoint management
- Travel history log
- Distance calculator

### Weather Integration
- Dynamic weather generation
- Weather effects on travel
- Seasonal considerations
- Regional weather patterns

### Encounter System
- Customizable encounter tables
- Terrain-based encounters
- Time-of-day variations
- Encounter difficulty scaling

### Mount Management
- Mount inventory
- Mount conditions
- Speed calculations
- Care requirements