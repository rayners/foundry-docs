---
sidebar_position: 1
title: Introduction
---

# BaneLands

> ⚠️ **ALPHA SOFTWARE - v0.1.2** ⚠️
>
> This module is in early development. The resource die system is implemented and functional.
> The journey system and advanced features are planned for future releases.

A Foundry VTT module that implements Forbidden Lands-inspired resource mechanics for the Dragonbane system. Track consumables using step-dice that degrade as you use them — food, water, arrows, and torches all dwindle across a journey.

## Features

### ✅ Implemented

- **Step-Die Consumables**: Track food, water, arrows, and torches with D6–D12 resource dice
- **Automatic Depletion**: Resource dice step down on 1–2 results, becoming depleted when stepping below D6
- **Character Sheet Integration**: Resource dice display in Dragonbane character sheets with use buttons
- **Configurable Defaults**: Set starting die types per consumable in module settings
- **Module API**: Programmatic access via `game.banelands.api`

### 🚧 Planned

- **Journey System**: Hex-based travel with quarter-day activity management
- **Mishap Tables**: Dynamic complications based on terrain and activity
- **Journeys & Jamborees Integration**: Shared resource tracking with party management

## Requirements

- **Foundry VTT**: v13+
- **Game System**: Dragonbane 3.0.3+

## Getting Started

- [Installation](installation) — Install and enable the module
- [User Guide](user-guide) — Using resource dice in play

## Legal

BaneLands implements generic fantasy RPG mechanics inspired by survival and exploration themes. It does not include copyrighted content from Forbidden Lands or any other published work.

BaneLands is licensed under the MIT License.

## Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/rayners/fvtt-banelands/issues)
- **Discord**: Find help in the Foundry VTT community Discord
