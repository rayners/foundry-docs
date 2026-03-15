---
sidebar_position: 4
title: API Reference
---

# API Reference

BaneLands exposes a JavaScript API for macro and module integration via `game.banelands.api`.

## Methods

### `rollResourceDie(dieType)`

Rolls a resource die and returns whether it depleted.

```javascript
const result = await game.banelands.api.rollResourceDie('d8');
// Returns: { result: number, depleted: boolean }
```

**Parameters:**
- `dieType` — Die size: `'d6'`, `'d8'`, `'d10'`, or `'d12'`

**Returns:** `{ result: number, depleted: boolean }`

---

### `getResourceDie(actor, consumableType)`

Gets the current die type for a consumable.

```javascript
const die = game.banelands.api.getResourceDie(actor, 'food');
// Returns: 'd8' | 'd10' | 'd12' | 'd6' | null
```

**Parameters:**
- `actor` — A Foundry `Actor` document
- `consumableType` — `'food'`, `'water'`, `'arrows'`, or `'torches'`

**Returns:** Die type string, or `null` if not initialized

---

### `setResourceDie(actor, consumableType, dieType)`

Sets the die type for a consumable directly.

```javascript
await game.banelands.api.setResourceDie(actor, 'arrows', 'd10');
```

**Parameters:**
- `actor` — A Foundry `Actor` document
- `consumableType` — `'food'`, `'water'`, `'arrows'`, or `'torches'`
- `dieType` — `'d6'`, `'d8'`, `'d10'`, `'d12'`, or `'empty'`

---

### `useConsumable(actor, consumableType)`

Uses one unit of a consumable, rolling the die and handling depletion.

```javascript
const steppedDown = await game.banelands.api.useConsumable(actor, 'water');
// Returns: boolean (true if die stepped down)
```

**Parameters:**
- `actor` — A Foundry `Actor` document
- `consumableType` — `'food'`, `'water'`, `'arrows'`, or `'torches'`

**Returns:** `true` if the die stepped down, `false` if it held

---

### `restoreConsumable(actor, consumableType, amount)`

Restores a consumable by stepping the die up.

```javascript
await game.banelands.api.restoreConsumable(actor, 'food', 2);
// Steps food die up by 2 levels (e.g. Empty → D6 → D8)
```

**Parameters:**
- `actor` — A Foundry `Actor` document
- `consumableType` — `'food'`, `'water'`, `'arrows'`, or `'torches'`
- `amount` — Number of steps to restore (1 step = one die size up)

## Example: Foraging Macro

```javascript
// After a successful foraging roll, restore 1 step of food
const actor = game.user.character;
if (!actor) return ui.notifications.warn('No character selected');

await game.banelands.api.restoreConsumable(actor, 'food', 1);
ui.notifications.info('Restored 1 food step from foraging');
```
