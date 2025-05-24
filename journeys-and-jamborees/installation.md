---
sidebar_position: 2
title: Installation
---

# Installation Guide

There are several ways to install the Journeys & Jamborees module in your Foundry VTT instance.

## Method 1: Foundry Module Browser (Recommended)

1. Open Foundry VTT and navigate to the **Add-on Modules** tab
2. Click **Install Module**
3. Search for "Journeys & Jamborees"
4. Click **Install**
5. Wait for the installation to complete

## Method 2: Manifest URL

If the module isn't available in the browser yet, you can install it directly:

1. Open Foundry VTT and navigate to the **Add-on Modules** tab
2. Click **Install Module**
3. Paste this manifest URL:
   ```
   https://github.com/rayners/fvtt-journeys-and-jamborees/releases/latest/download/module.json
   ```
4. Click **Install**

## Method 3: Manual Installation

1. Download the latest release from [GitHub Releases](https://github.com/rayners/fvtt-journeys-and-jamborees/releases)
2. Extract the zip file
3. Copy the extracted folder to your Foundry VTT modules directory:
   - Windows: `%appdata%/FoundryVTT/Data/modules`
   - macOS: `~/Library/Application Support/FoundryVTT/Data/modules`
   - Linux: `~/.local/share/FoundryVTT/Data/modules`
4. Rename the folder to `journeys-and-jamborees` if needed
5. Restart Foundry VTT

## Activation

After installation:

1. Launch your world
2. Navigate to **Game Settings** → **Manage Modules**
3. Find "Journeys & Jamborees" in the list
4. Check the checkbox to enable it
5. Click **Save Module Settings**

The module is now active and ready to use!

## Verification

To verify the installation:

1. Open the Actors directory
2. Click **Create Actor**
3. You should see "party" as an available actor type
4. The module is successfully installed if you can create a party actor

## Troubleshooting

If you encounter issues:

- Ensure your Foundry VTT version meets the [requirements](requirements)
- Check that the module folder is named exactly `journeys-and-jamborees`
- Try clearing your browser cache and reloading
- Check the console (F12) for any error messages

For additional help, please [open an issue](https://github.com/rayners/fvtt-journeys-and-jamborees/issues) on GitHub.