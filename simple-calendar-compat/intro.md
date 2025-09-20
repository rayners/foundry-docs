---
sidebar_position: 1
title: Introduction
---

# Simple Calendar Compatibility Bridge

A Foundry VTT module that provides Simple Calendar API compatibility for modern calendar modules like **Seasons & Stars**.

## Overview

The Simple Calendar Compatibility Bridge acts as a translation layer between modules that expect the Simple Calendar API and modern calendar implementations. This allows you to use Foundry v12 and v13 compatible calendar modules while maintaining compatibility with existing modules that depend on Simple Calendar.

## Key Features

- **Extensive API Coverage**: Implements most of the Simple Calendar API surface (50+ methods)
- **Automatic Detection**: Uses S&S Integration Interface for seamless integration
- **Hook Bridging**: Translates between S&S hooks and Simple Calendar hook formats
- **CSS/DOM Compatibility**: Dynamically adds all required Simple Calendar CSS classes and DOM structure
- **Minimal Configuration**: Works automatically after installation
- **Clean Architecture**: Separation of concerns between calendar and compatibility layers

## Supported Calendar Modules

- ✅ **Seasons & Stars v2.0+** - Full support via Integration Interface
- ✅ **Seasons & Stars v1.x** - Legacy support via wrapper
- 🔄 **Other calendar modules** - Extensible architecture for future integrations

## Compatible Modules

This bridge enables the following modules to work with modern calendar systems:

### ✅ **Tested & Supported**
- **SmallTime** - Time display widget with complete integration
- **Simple Weather** - Weather system with core features working:
  - ✅ Sidebar button integration on calendar widgets
  - ✅ Weather data storage in calendar notes (when "Store weather in Simple Calendar notes" is enabled)
  - ✅ Season-based weather using calendar season information
  - ✅ All attachment modes (attached/detached to calendar)
  - ⚠️ Basic sunrise/sunset times (6 AM/6 PM defaults)
  - ⚠️ Simple season detection (month-range based)

### 🔄 **Expected to Work**
- **Calendar/Weather** - Advanced weather systems
- Any module expecting Simple Calendar API

## Why Use This Bridge?

### For Foundry v12 and v13 Users

Simple Calendar has limited support for newer Foundry versions, but many modules still depend on it. This bridge lets you:

- Use modern calendar modules like Seasons & Stars
- Keep your existing calendar-dependent modules working
- Get the best of both worlds: modern calendar features + existing module compatibility

### For Module Developers

- **Focused Development**: Calendar modules can focus on calendar functionality without Simple Calendar compatibility
- **Reduced Maintenance**: No need to maintain Simple Calendar compatibility in each module
- **Extensibility**: Easy to add support for new calendar modules

## Quick Start

Ready to get started? Check out our [Installation Guide](installation.md) to set up the compatibility bridge with your preferred calendar module.