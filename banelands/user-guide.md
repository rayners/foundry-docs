---
sidebar_position: 3
title: User Guide
---

# User Guide

## Resource Dice

BaneLands tracks four consumable resources for each character using step-dice:

| Consumable | Default Die | Purpose |
|-----------|-------------|---------|
| Food | D8 | Daily sustenance |
| Water | D8 | Drinking water |
| Arrows | D8 | Ranged ammunition |
| Torches | D6 | Light sources |

### The Step-Die Sequence

Resource dice step down as you use them:

**D12 → D10 → D8 → D6 → Empty**

When a die rolls 1 or 2, it steps down one level. When a D6 would step down, the resource is depleted (Empty).

### Using a Resource

On a Dragonbane character sheet, find the **Consumables** section in the Inventory tab. Each resource has a **Use** button.

Clicking **Use**:
1. Rolls the current resource die
2. If the result is 1 or 2, the die steps down
3. A chat message reports the result and any depletion

### Adjusting Resources Manually

Use the dropdown next to each resource to set a specific die value — useful when restocking from a market or after foraging.

Setting a resource back to D6, D8, D10, or D12 represents restocking it.

### Depleted Resources

A depleted resource (Empty) is greyed out on the character sheet. The character has run out of that consumable until they restock.

## Module Settings

Access via **Settings** → **Module Settings** → **BaneLands**:

- **Auto-Initialize Consumables**: Automatically set up resource dice for new characters
- **Default Food Die / Water Die / Arrow Die / Torch Die**: Configure starting die types
- **Debug Mode**: Enable detailed logging in the browser console
