---
sidebar_position: 2
---

# Installation

Get Errors and Echoes installed and configured in your Foundry VTT instance.

## Requirements

- **Foundry VTT**: Version 11 or higher
- **User Role**: Game Master (GM) permissions required to configure error reporting
- **Browser**: Modern browser with JavaScript enabled

## Installation Methods

### Method 1: Foundry Package Manager (Recommended)

1. Open Foundry VTT as a Game Master
2. Navigate to **Setup** → **Add-on Modules**
3. Click **Install Module**
4. Search for "Errors and Echoes"
5. Click **Install**
6. Enable the module in your world

### Method 2: Manual Installation

1. Download the latest release from [GitHub Releases](https://github.com/rayners/fvtt-errors-and-echoes/releases)
2. Extract the zip file to your Foundry `modules/` directory
3. Restart Foundry VTT
4. Enable the module in your world settings

### Method 3: Manifest URL

Use this manifest URL in Foundry's module installer:
```
https://github.com/rayners/fvtt-errors-and-echoes/releases/latest/download/module.json
```

## Initial Configuration

### Step 1: Enable the Module

1. Launch your world as Game Master
2. Go to **Settings** → **Manage Modules**
3. Find "Errors and Echoes" in the module list
4. Check the box to enable it
5. Click **Save Module Settings**

### Step 2: Configure Privacy Settings

1. Open **Game Settings** → **Module Settings**
2. Find the **Errors and Echoes** section
3. Configure your privacy preferences:
   - **Enable Error Reporting**: Turn on/off error collection
   - **Privacy Level**: Choose Minimal, Standard, or Detailed
   - **Consent Expiration**: Set how long consent lasts (default: 1 year)

### Step 3: Review Registered Modules

1. In the module settings, view the **Registered Modules** list
2. This shows which modules have registered for enhanced error reporting
3. You can enable/disable reporting for specific modules

## Privacy Levels Explained

### Minimal
- Error message and stack trace
- Module attribution
- Foundry version
- Timestamp

### Standard (Default)
- Everything from Minimal, plus:
- Active system and version
- List of active modules and versions
- Anonymous session ID (daily rotating)

### Detailed
- Everything from Standard, plus:
- Browser name and version
- Current scene name
- Module-provided context data

## Verification

After installation, verify everything is working:

### Check Module Status

1. Open the browser console (F12)
2. Look for the startup message: `"Errors and Echoes initialized successfully"`
3. Check that `window.ErrorsAndEchoesAPI` is available

### Test Error Reporting

If you have modules registered with endpoints:

1. Open browser console
2. Run: `window.ErrorsAndEchoesAPI.reportError(new Error("Test error"), { test: true })`
3. Check that the error appears in your configured monitoring system

### Verify Settings

1. Go to **Game Settings** → **Module Settings**
2. Confirm all Errors and Echoes settings are visible
3. Test changing privacy levels and ensure they save properly

## Troubleshooting

### Module Not Appearing in Settings

- Ensure you have GM permissions
- Verify the module is enabled in **Manage Modules**
- Check browser console for initialization errors

### API Not Available

If `window.ErrorsAndEchoesAPI` is undefined:

- Check that the module loaded successfully
- Look for JavaScript errors in the console
- Verify you're running as a GM (API is only available to GMs)

### Settings Not Saving

- Ensure you have proper GM permissions
- Check for browser localStorage issues
- Verify no other modules are conflicting

## Next Steps

Once installed and configured:

1. **[Module Integration](integration.md)** - If you're a module author, learn how to register your module
2. **[API Reference](api-reference.md)** - Explore the full API capabilities
3. **[Privacy Guidelines](privacy-guidelines.md)** - Understand privacy best practices

## Support

If you encounter issues during installation:

1. Check the [GitHub Issues](https://github.com/rayners/fvtt-errors-and-echoes/issues) for known problems
2. Search existing issues before creating a new one
3. Include your Foundry version, browser, and any console errors when reporting issues