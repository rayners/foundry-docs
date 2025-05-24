---
sidebar_position: 1
title: Party Management
---

# Party Management

Learn how to create and manage adventuring parties in Journeys & Jamborees.

## Creating a Party

### Your First Party

1. **Open the Actors tab** in Foundry VTT
2. **Click "Create Actor"**
3. **Select "Party"** from the actor type dropdown
4. **Name your party** (e.g., "The Brave Adventurers")
5. **Click "Create"**

Your new party actor will appear in the actors list and can be placed on scenes as a token.

### Party Tokens

Party actors can be placed on scenes just like character tokens. This is useful for:
- Representing the party on travel maps
- Tracking party position during overland journeys
- Visual reference for group activities

## Managing Party Members

### Adding Characters

There are several ways to add characters to a party:

#### Drag and Drop
- **Drag a character** from the Actors list
- **Drop it** onto the party sheet
- The character is automatically added

#### Bulk Addition
- **"Add All Your Characters"** - Adds all characters you own
- **"Add All Characters"** (GM only) - Adds all player characters at once

### Removing Characters

- **Players** can only remove their own characters
- **GMs** can remove any character
- Click the **remove button** (X) next to a character's name

### Character Status

Each party member has a status that affects their availability:

| Status | Description | Can Hold Roles | Consumes Resources |
|--------|-------------|----------------|-------------------|
| **Active** | Fully participating in party activities | ✅ Yes | ✅ Yes |
| **Traveling** | Moving with party but busy with other activities | ❌ No | ✅ Yes |
| **Staying Behind** | Not with the party (at camp, in town, etc.) | ❌ No | ❌ No |

To change a character's status:
1. Find the character in the party sheet
2. Use the **status dropdown** next to their name
3. Select the new status

## Travel Roles

Travel roles organize party responsibilities during journeys. Each role uses specific skills:

### Available Roles

| Role | Skill Used | Responsibilities |
|------|------------|------------------|
| **Pathfinder** | Bushcraft | Navigation and route-finding |
| **Lookout** | Awareness | Spotting danger and opportunities |
| **Quartermaster** | Bartering | Managing supplies and resources |

### Assigning Roles

1. Open the party sheet
2. Go to the **Members tab**
3. Scroll to **"Travel Roles"**
4. Select characters from dropdown menus

:::note
Only characters with "Active" status can be assigned to roles.
:::

## Downtime Activities

Characters with "Traveling" status can perform downtime activities while the party moves:

- **None** - Just traveling
- **Hunting** - Attempting to find food
- **Fishing** - Trying to catch fish
- **Foraging** - Searching for edible plants
- **Crafting** - Making or repairing items
- **Healing** - Recovering from injuries

## Permissions and Ownership

### How Permissions Work

Journeys & Jamborees uses Foundry's permission system with smart defaults:

#### Player Permissions
- Can add/remove **only their own characters**
- Cannot modify other players' characters
- Automatically gain **ownership** of parties containing their characters

#### GM Permissions
- Can manage **all characters** in any party
- Can modify **all party settings**
- Full access to **all party features**

### Automatic Ownership

When a character joins a party:
1. The character's owner **gains party ownership**
2. All party owners can **view and edit** shared information
3. Permissions update **automatically** as members change

This ensures everyone can contribute to party management while maintaining appropriate boundaries.

## Best Practices

### Party Organization
- Create **one party per adventure group**
- Name parties descriptively (e.g., "Tuesday Night Heroes")
- Use party tokens on overland maps

### Member Management
- Add all player characters at session start
- Update character status as the story progresses
- Remove characters who leave the adventure

### Role Assignment
- Match roles to character strengths
- Rotate roles for variety
- Consider backup assignments for absent players

## Troubleshooting

### Common Issues

**Characters not appearing in party:**
- Verify character ownership
- Check that the character exists in the Actors directory
- Try refreshing the party sheet (F5)

**Cannot assign roles:**
- Ensure character status is "Active"
- Check that roles aren't already assigned
- Verify you have permission to edit the party

**Permission errors:**
- Confirm you own the character you're adding
- Check with your GM about party permissions
- Try removing and re-adding the character

### Getting Help

If you encounter issues:
1. Check this documentation
2. Ask your GM to verify permissions
3. Report bugs on [GitHub](https://github.com/rayners/fvtt-journeys-and-jamborees/issues)
4. Visit the Foundry VTT Discord for community help