---
sidebar_position: 1
title: Introduction
---

# Journeys & Jamborees

> ⚠️ **ALPHA SOFTWARE - v0.1.0** ⚠️
> 
> This module is in early development and is not ready for production use.
> Features are incomplete, APIs will change, and bugs are expected.
> 
> **Do not use this in your active games yet!**

A comprehensive party management system for Foundry VTT that works with multiple game systems including Dragonbane, D&D 5e, Pathfinder 2e, and more.

## About

Journeys & Jamborees transforms how groups handle travel, resources, and party dynamics by treating the party as a cohesive unit with its own character sheet. Instead of juggling individual character inventories and tracking party resources across multiple sheets, J&J provides a unified Party actor that serves as the central hub for group activities.

## Core Concept

The module introduces a new actor type - the Party - which represents your adventuring group as a whole. This party actor has its own sheet where players can:

- Manage party membership and character status
- Assign travel roles like pathfinder, lookout, and quartermaster
- Track shared resources such as food, water, and gold
- Maintain a party inventory separate from individual characters
- Record the party's journey and important events

Players can assign their characters to the party, and the system automatically handles permissions so everyone can contribute to party management while maintaining appropriate boundaries.

## Current Status

### ✅ Implemented Features

- **Party Actor**: Custom actor type representing the entire party
- **Character Management**: Add/remove party members with proper permission handling
- **Character Status**: Track active, traveling, or staying behind status
- **Travel Roles**: Assign pathfinder, lookout, and quartermaster roles
- **Resource Tracking**: Manage shared rations, water, and gold with automatic consumption
- **Party Inventory**: Shared inventory separate from character items
- **Multi-System Support**: Works with D&D 5e, Pathfinder 2e, Forbidden Lands, Simple Worldbuilding, and more
- **Rest Mechanics**: Automatic resource consumption when camping
- **Food Gathering** (Dragonbane): Hunting, fishing, and foraging with customizable RollTables
- **Journey Tracking**: Distance-based travel with configurable movement rates
- **Testing Framework**: Comprehensive test suite with Vitest and Quench integration
- **Basic Localization**: English language support with framework for translations

### 🚧 In Development

- Enhanced journey logging with session history
- Advanced weather and encounter systems
- Mount management
- Multi-language support
- Additional system integrations
- Advanced automation features

### 📋 Planned Features

- Campaign journal integration
- Party achievements/milestones
- Trade route management
- Expanded downtime activities
- Vehicle support

## Why Journeys & Jamborees?

Traditional VTTs handle individual characters well, but party-level activities often require manual coordination and bookkeeping. J&J solves this by providing dedicated tools for:

- **Shared Resource Management**: No more asking "who's carrying the rations?"
- **Travel Coordination**: Everyone knows their role and the party's destination
- **Group Decisions**: See at a glance who's participating in activities
- **Campaign Continuity**: Track the party's story across sessions

## Getting Started

Ready to begin your journey? Check out our:

- [Installation Guide](installation) - Get J&J running in your game
- [Quick Start Guide](quick-start) - Start using J&J in minutes
- [User Guide](party-management) - Comprehensive feature documentation

## Support & Community

- **GitHub Issues**: [Report bugs or request features](https://github.com/rayners/fvtt-journeys-and-jamborees/issues)
- **Discord**: Find us on the Foundry VTT Discord
- **Documentation**: You're here! Browse the guides for detailed information

## License

Journeys & Jamborees is licensed under the MIT License, making it free and open source software.