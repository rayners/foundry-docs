---
sidebar_position: 3
---

# Module Integration

Learn how to integrate your Foundry VTT module with Errors and Echoes for enhanced error reporting.

## Quick Start

The simplest integration uses the hook-based registration system (recommended for v0.2.0+):

```javascript
// Hook-based registration (recommended)
Hooks.on('errorsAndEchoesReady', (api) => {
  api.register({
    moduleId: 'your-module-id',
    
    // Optional: Provide context for debugging
    contextProvider: () => ({
      gameSystem: game.system.id,
      activeFeatures: yourModule.getActiveFeatures(),
      userConfiguration: yourModule.getRelevantSettings(),
    }),
    
    // Optional: Filter errors to reduce noise
    errorFilter: error => {
      // Return true to filter OUT (not report)
      // Return false to report the error
      return !error.stack.includes('your-module-id');
    },
  });
});
```

## Registration API

### Basic Registration

At minimum, provide your module ID:

```javascript
Hooks.on('errorsAndEchoesReady', (api) => {
  api.register({
    moduleId: 'my-awesome-module'
  });
});
```

### Full Registration Options

```typescript
interface ModuleRegistrationConfig {
  moduleId: string; // Your module's ID (required)
  contextProvider?: () => Record<string, any>; // Optional context provider
  errorFilter?: (error: Error) => boolean; // Optional error filter
  endpoint?: EndpointConfig; // Optional custom endpoint
}
```

## Context Provider

Provide additional debugging context when errors occur:

```javascript
const contextProvider = () => ({
  // Version information
  moduleVersion: game.modules.get('my-module')?.version,
  foundryVersion: game.version,
  
  // Current state
  activeScene: canvas.scene?.name,
  selectedTokens: canvas.tokens?.controlled?.length || 0,
  
  // Module-specific state
  customSetting: game.settings.get('my-module', 'important-setting'),
  featureEnabled: MyModule.isFeatureEnabled(),
  
  // User context (be careful about privacy)
  isGM: game.user.isGM,
  // DON'T include: usernames, IP addresses, email addresses, etc.
});
```

### Context Best Practices

**DO Include:**
- Module version and configuration
- Current game state (scene, tokens, etc.)
- Feature flags and settings
- Error context (what operation was happening)
- System information (game system, Foundry version)

**DON'T Include:**
- User names or identifiers
- IP addresses or network information
- Personal data or private information
- Sensitive configuration (API keys, passwords)
- Large data structures (limit to essential debugging info)

## Error Filtering

Filter which errors to report to reduce noise:

```javascript
const errorFilter = error => {
  // Don't report errors we expect or can't fix
  if (error.message.includes('Network request failed')) return true;
  if (error.message.includes('Permission denied')) return true;
  
  // Only report errors from our module
  if (error.stack && !error.stack.includes('/modules/my-module/')) return true;
  
  // Report this error (return false)
  return false;
};
```

### Filter Return Values

- **Return `true`**: Filter OUT the error (don't report it)
- **Return `false`**: Report the error
- **Return `undefined`**: Report the error (default behavior)

## Manual Error Reporting

Report specific errors with additional context:

```javascript
try {
  // Your code that might error
  riskyOperation();
} catch (error) {
  // Report to error monitoring
  if (window.ErrorsAndEchoesAPI?.reportError) {
    window.ErrorsAndEchoesAPI.reportError(error, {
      operation: 'riskyOperation',
      userAction: 'button-click',
      additionalContext: {
        sceneId: canvas.scene?.id,
        tokenCount: canvas.tokens?.controlled?.length
      }
    });
  }
  
  // Still handle the error normally
  console.error('Operation failed:', error);
  ui.notifications.error('Operation failed. Please try again.');
}
```

## Integration Patterns

### Error Boundaries

Wrap risky operations with error boundaries:

```javascript
class MyModuleFeature {
  async performComplexOperation() {
    try {
      const result = await this.riskyAsyncOperation();
      return result;
    } catch (error) {
      // Report error while preserving normal error handling
      this.reportError(error, { operation: 'performComplexOperation' });
      
      // Handle error normally
      throw error; // Re-throw if calling code should handle it
      // OR provide fallback behavior
    }
  }
  
  reportError(error, context = {}) {
    const errorReporter = game.modules.get('errors-and-echoes');
    if (errorReporter?.active && errorReporter.api?.hasConsent()) {
      errorReporter.api.report(error, {
        module: this.moduleId,
        context: {
          ...context,
          timestamp: Date.now(),
          userAction: this.currentUserAction,
        },
      });
    }
  }
}
```

### Hook Error Reporting

Report errors that occur in Foundry hooks:

```javascript
Hooks.on('updateActor', (actor, data, options, userId) => {
  try {
    myModule.handleActorUpdate(actor, data, options, userId);
  } catch (error) {
    // Report hook errors with context
    window.ErrorsAndEchoesAPI?.reportError(error, {
      hook: 'updateActor',
      actorId: actor.id,
      updateData: data,
      userId: userId
    });
    
    // Don't prevent other modules from handling the hook
    console.error('Error in updateActor hook:', error);
  }
});
```

## Custom Endpoints

Configure a custom error reporting endpoint for your modules:

```javascript
Hooks.on('errorsAndEchoesReady', (api) => {
  api.register({
    moduleId: 'my-module',
    endpoint: {
      name: 'My Module Error Reporting',
      url: 'https://errors.my-domain.com/report/my-module',
      author: 'my-username',
      modules: ['my-module', 'my-other-module'],
      enabled: true,
    },
  });
});
```

See [Endpoint Setup](endpoint-setup.md) for details on creating your own error reporting endpoint.

## Testing Integration

### Test Registration

Verify your module is registered:

```javascript
// Check if your module is registered
const isRegistered = ModuleRegistry.isRegistered('my-module');
console.log('Module registered:', isRegistered);

// Get registration details
const registration = ModuleRegistry.getRegisteredModule('my-module');
console.log('Registration:', registration);
```

### Test Error Reporting

Generate a test error to verify reporting works:

```javascript
// Test manual error reporting
try {
  throw new Error('Test error from my-module');
} catch (error) {
  window.ErrorsAndEchoesAPI.reportError(error, {
    test: true,
    module: 'my-module'
  });
}
```

### Test Context Provider

Verify your context provider returns appropriate data:

```javascript
// Test context provider
const registration = ModuleRegistry.getRegisteredModule('my-module');
if (registration?.contextProvider) {
  const context = registration.contextProvider();
  console.log('Context:', context);
  
  // Verify no sensitive data is included
  console.log('Context size:', JSON.stringify(context).length);
}
```

## Integration Examples

Integration examples are available in the [Examples Repository](https://github.com/rayners/fvtt-errors-and-echoes/tree/main/examples):

- **[journeys-and-jamborees.js](https://github.com/rayners/fvtt-errors-and-echoes/blob/main/examples/journeys-and-jamborees.js)** - Complex gameplay module
- **[simple-weather.js](https://github.com/rayners/fvtt-errors-and-echoes/blob/main/examples/simple-weather.js)** - Environmental effects module  
- **[generic-module.js](https://github.com/rayners/fvtt-errors-and-echoes/blob/main/examples/generic-module.js)** - Template for any module type

## Best Practices

### Registration Timing

- Register during the `ready` hook for best compatibility
- Check if the API exists before registering
- Only register once per module

### Privacy Compliance

- Never collect personally identifiable information
- Provide clear context about what data you're collecting
- Respect user privacy level settings
- Follow GDPR and other privacy regulations

### Error Handling

- Never let error reporting break your module's functionality
- Always handle errors gracefully even if reporting fails
- Don't report the same error repeatedly
- Filter out expected errors and user errors

### Performance

- Keep context providers lightweight and fast
- Avoid expensive operations in context providers
- Limit context data size to essential information
- Use error filters to reduce unnecessary reports

## Next Steps

- **[API Reference](api-reference.md)** - Complete API documentation
- **[Endpoint Setup](endpoint-setup.md)** - Create your own error reporting endpoint
- **[Privacy Guidelines](privacy-guidelines.md)** - Understand privacy requirements