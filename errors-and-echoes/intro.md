---
sidebar_position: 1
---

# Errors and Echoes

Anonymous error reporting for Foundry VTT modules to help authors improve their modules.

## Overview

Errors and Echoes is a privacy-focused error reporting system for Foundry VTT that helps module developers identify and fix issues in their modules. The system captures JavaScript errors, promise rejections, console errors, and Foundry hook errors, then reports them to configured endpoints with sophisticated module attribution and privacy controls.

**🔒 Privacy First**: All error reporting is opt-in only with granular privacy controls. The module never swallows errors - all errors remain visible to users in the console and dev tools.

## Key Features

- **Anonymous Error Reporting**: No personally identifiable information is collected
- **Sophisticated Module Attribution**: Advanced stack trace analysis to identify which module caused an error
- **Granular Privacy Controls**: Three privacy levels from minimal to detailed data collection
- **Rate Limiting & Deduplication**: Prevents spam and respects user bandwidth
- **Foundry-Native Integration**: Built on Foundry's settings system with proper GM-only controls
- **Never Swallows Errors**: All errors remain visible to users - reporting happens in addition to normal error display

## Implementation Status

| Feature                        | Status          | Notes                                                                           |
| ------------------------------ | --------------- | ------------------------------------------------------------------------------- |
| 🔍 Error Capture               | ✅ Complete     | Captures JavaScript errors, promise rejections, console errors, and hook errors |
| 🏷️ Module Attribution          | ✅ Complete     | Advanced stack trace analysis and hook context detection                        |
| 🔒 Privacy Controls            | ✅ Complete     | Three privacy levels with granular consent management                           |
| ⚙️ Settings UI                 | ✅ Complete     | Foundry-native configuration interface with registered modules display          |
| 📊 Manual Reporting            | ✅ Complete     | Direct error reporting API for modules                                          |
| 🔗 **Module Registration API** | ✅ **Complete** | **Full registration system with context providers and filters**                 |
| 🧪 Testing Infrastructure      | ✅ **Complete** | **Comprehensive test suite with 35 passing tests**                              |

## Quick Start

For module developers who want to get started quickly:

1. **[Installation Guide](installation.md)** - Get Errors and Echoes set up in your Foundry instance
2. **[Module Integration](integration.md)** - Register your module for enhanced error reporting
3. **[API Reference](api-reference.md)** - Complete API documentation and examples

## Privacy and Consent

Error reporting is completely opt-in and privacy-focused:

- **No PII Collection**: Never collects usernames, email addresses, IP addresses, or other personally identifiable information
- **GM-Only Control**: Only Game Masters can enable error reporting for their world
- **Granular Privacy Levels**: Choose from Minimal, Standard, or Detailed data collection
- **User Transparency**: All collected data is clearly documented and users have full control

## For Module Authors

Errors and Echoes provides a complete error reporting ecosystem:

- **[Registration API](integration.md)** - Register your module with context providers and error filters
- **[Endpoint Setup](endpoint-setup.md)** - Set up your own error reporting endpoint
- **[Privacy Guidelines](privacy-guidelines.md)** - Best practices for privacy-compliant error reporting

## Reference Implementation

A complete reference implementation for error reporting endpoints is available at [sentry-relay](https://github.com/rayners/sentry-relay), demonstrating integration with Sentry for production error monitoring.

## Community and Support

- **GitHub Repository**: [fvtt-errors-and-echoes](https://github.com/rayners/fvtt-errors-and-echoes)
- **Issues and Feature Requests**: Use GitHub Issues for bug reports and feature requests
- **Community Discussion**: Join the discussion on Discord

## Legal and Compliance

This module complies with GDPR and other privacy regulations. See the [Privacy Policy](privacy-policy.md) and [Legal Compliance](legal-compliance.md) documentation for details.