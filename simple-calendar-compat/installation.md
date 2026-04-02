---
sidebar_position: 2
title: Installation
---

# Installation Guide

This guide will walk you through installing the Simple Calendar Compatibility Bridge with your preferred calendar module.

## Prerequisites

- Foundry VTT v12 or v13
- A supported calendar module (Seasons & Stars recommended)

## Step-by-Step Installation

### 1. Install a Calendar Module

First, install your preferred calendar module:

#### Option A: Seasons & Stars (Recommended)

1. Open Foundry VTT's Add-on Modules tab
2. Search for "Seasons & Stars"
3. Click Install
4. Activate the module in your world

#### Option B: Other Calendar Modules

- Support for additional calendar modules coming soon
- The bridge uses an extensible provider architecture

### 2. Install the Compatibility Bridge

1. Open Foundry VTT's Add-on Modules tab
2. Search for "Simple Calendar Compatibility Bridge"
3. Click Install (ensure v0.3.0 or later for full hook support)
4. Activate the module in your world

:::warning Important
Do **NOT** install the original Simple Calendar module alongside this bridge. They conflict with each other since they provide the same API.
:::

### 3. Install Compatible Modules

Now you can install any modules that depend on Simple Calendar:

#### Simple Weather
1. Search for "Simple Weather" in the modules tab
2. Install and activate
3. Configure as needed - all features will work

#### SmallTime
1. Search for "SmallTime" in the modules tab
2. Install and activate
3. Time display will integrate automatically

#### Other Modules
- Any module expecting Simple Calendar API should work
- Report issues if you find incompatibilities

## Module Load Order

The modules should load in this order (Foundry handles this automatically):

1. **Calendar Module** (e.g., Seasons & Stars)
2. **Simple Calendar Compatibility Bridge**
3. **Compatible Modules** (e.g., Simple Weather, SmallTime)

## Verification

To verify the installation worked:

1. **Check Console**: Open browser console (F12) and look for:
   ```
   🌉 Simple Calendar Compatibility Bridge | Ready
   ```

2. **Check Simple Weather**: If using Simple Weather:
   - You should see weather buttons on calendar widgets
   - Weather should generate automatically with date changes
   - "Store weather in Simple Calendar notes" option should work

3. **Check SmallTime**: If using SmallTime:
   - Time display should appear and update correctly
   - Clock controls should work

## Troubleshooting Installation

### Module Not Working?

1. **Check Conflicts**: Ensure Simple Calendar is **NOT** installed
2. **Verify Load Order**: Calendar module → Bridge → Dependent modules
3. **Check Browser Console**: Look for error messages
4. **Restart World**: Sometimes a restart is needed for proper initialization

### Missing Features?

1. **Calendar Module Support**: Ensure your calendar module is supported
2. **Module Updates**: Make sure all modules are up to date
3. **Report Issues**: Create an issue with specific module combinations

## Configuration

The bridge works automatically with zero configuration required. However, you may want to configure:

### Calendar Module Settings

Configure your calendar module (Seasons & Stars) according to its documentation:
- Set up calendar structure (months, days, seasons)
- Configure time display preferences
- Set up any custom calendars

### Compatible Module Settings

Configure your compatible modules normally:
- **Simple Weather**: All settings work as documented
- **SmallTime**: All settings work as documented
- Other modules should work with their standard settings

## Next Steps

Once installed, check out:
- [Simple Weather Integration](simple-weather-integration.md) - Detailed Simple Weather features
- [API Reference](api-reference.md) - Full API compatibility details
- [Troubleshooting](troubleshooting.md) - Common issues and solutions