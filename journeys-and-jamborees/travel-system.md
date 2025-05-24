---
sidebar_position: 2
title: Travel System
---

# Travel System

Manage your party's journeys across the world with J&J's travel mechanics.

:::warning Alpha Feature
Journey tracking features are partially implemented. Some buttons exist but have limited functionality.
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

Movement rates depend on your game system and party composition:

#### Dragonbane Movement
- **On Foot**: 15 km per day
- **Mounted**: 30 km per day
- **Mixed Party**: Uses the slower rate

:::tip
The GM can adjust base movement in the Settings tab to match campaign needs.
:::

## Travel Actions

The Travel tab provides several action buttons for journey management:

### Available Actions

| Action | Purpose | Current Status |
|--------|---------|----------------|
| **Find Path** | Roll pathfinding checks | 🚧 Limited functionality |
| **Random Encounter** | Generate encounters | 🚧 Limited functionality |
| **Roll Weather** | Determine weather conditions | 🚧 Limited functionality |
| **Make Camp** | Set up camp for rest | 🚧 Limited functionality |

:::note Future Development
These features will be fully implemented in upcoming releases. Currently, they serve as reminders for GM actions.
:::

## Travel Roles in Action

Travel roles (assigned in the Members tab) come into play during journeys:

### Pathfinder
- **Skill**: Bushcraft
- **Responsibilities**:
  - Finding the best route
  - Avoiding natural hazards
  - Reducing travel time

### Lookout
- **Skill**: Awareness
- **Responsibilities**:
  - Spotting danger early
  - Finding points of interest
  - Night watch duties

### Quartermaster
- **Skill**: Bartering
- **Responsibilities**:
  - Managing supplies efficiently
  - Finding resources along the way
  - Negotiating with merchants

## Managing Resources During Travel

### Resource Consumption

Default consumption rates (configurable in Settings):
- **Rations**: 1 per character per day
- **Water**: 1 per character per day

:::important
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