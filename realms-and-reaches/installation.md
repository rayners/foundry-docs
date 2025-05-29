---
sidebar_position: 2
title: Installation
---

# Installation Guide

Learn how to install and set up Realms & Reaches in your Foundry VTT world.

## Prerequisites

- **Foundry VTT v13 or later**
- **GM permissions** in your world
- **A scene to work with** (any size)

## Installation Methods

### Option A: From Foundry (Recommended)

1. **Open Foundry VTT** and navigate to your world
2. **Go to Add-on Modules** tab
3. **Click "Install Module"**
4. **Search for "Realms & Reaches"** or paste the manifest URL:
   ```
   https://github.com/rayners/fvtt-realms-and-reaches/releases/latest/download/module.json
   ```
5. **Click Install** and wait for download to complete
6. **Enable the module** in your world settings

### Option B: Manual Installation

1. **Download** the latest release from [GitHub](https://github.com/rayners/fvtt-realms-and-reaches/releases)
2. **Extract** the zip file to your `Data/modules/` directory
3. **Restart Foundry VTT**
4. **Enable the module** in your world settings

## Verification

After installation, you should see a new map icon in the left sidebar when viewing a scene. This is the Realms layer control.

If you don't see it:
1. **Check module is enabled** in world settings
2. **Refresh your browser** after enabling
3. **Check console for errors** (F12 → Console tab)
4. **Verify Foundry VTT version** (v13+ required)

## Browser Compatibility

### Recommended Browsers
- **Chrome** (latest version)
- **Firefox** (latest version)
- **Safari** (latest version)
- **Edge** (latest version)

### Requirements
- **ES2020 support**
- **WebGL capability**
- **Canvas API support**
- **Hardware acceleration** (recommended for best performance)

## System Requirements

### Minimum
- **Foundry VTT v13+**
- **2GB RAM**
- **Modern browser with WebGL**

### Recommended
- **Foundry VTT v13+**
- **4GB RAM**
- **Hardware-accelerated graphics**
- **High-resolution display**

## Initial Setup

Once installed and enabled:

1. **Navigate to any scene** (the Canvas tab)
2. **Look for the map icon** in the left sidebar controls
3. **Click it** to activate the Realms layer
4. **You should see the Realms & Reaches toolbar** with drawing tools

Congratulations! You're ready to start creating realms.

## Next Steps

- 📖 **[Getting Started](getting-started)** - Create your first realm
- 📚 **[User Guide](user-guide)** - Learn all the features
- 🔧 **[API Reference](api-reference)** - For developers

## Troubleshooting

### Module Not Appearing

**Problem**: Can't see the Realms layer controls

**Solutions**:
1. **Check module is enabled** in world settings
2. **Refresh your browser** after enabling
3. **Check console for errors** (F12 → Console tab)
4. **Verify Foundry VTT version** (v13+ required)
5. **Try disabling other modules** to check for conflicts

### Performance Issues

**Problem**: Slow drawing or laggy interface

**Solutions**:
1. **Enable hardware acceleration** in browser settings
2. **Close other applications** to free memory
3. **Use simpler polygon shapes** where possible
4. **Reduce browser zoom level** if very high
5. **Check graphics drivers** are up to date

### Console Errors

**Problem**: JavaScript errors in browser console

**Solutions**:
1. **Check for module conflicts** - disable other modules temporarily
2. **Clear browser cache** and reload
3. **Update Foundry VTT** to latest version
4. **Report the error** on [GitHub Issues](https://github.com/rayners/fvtt-realms-and-reaches/issues)

## Getting Help

If you encounter installation issues:

1. **Check the troubleshooting section** above
2. **Search existing issues** on [GitHub](https://github.com/rayners/fvtt-realms-and-reaches/issues)
3. **Ask on Discord** in the #modules channel of [Foundry VTT Discord](https://discord.gg/foundryvtt)
4. **Create a bug report** with details about your setup and the problem

When reporting issues, please include:
- **Foundry VTT version**
- **Browser and version**
- **Operating system**
- **Error messages** from browser console
- **Steps to reproduce** the problem