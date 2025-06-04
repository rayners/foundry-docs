---
sidebar_position: 4
---

# API Reference

Complete API documentation for Errors and Echoes module integration.

## ErrorsAndEchoesAPI Interface

The main API is exposed via `window.ErrorsAndEchoesAPI`:

```typescript
interface ErrorsAndEchoesAPI {
  register: (config: ModuleRegistrationConfig) => void;
  reportError: (error: Error, context?: Record<string, any>) => void;
}
```

### API Availability

The API is only available when:
- The Errors and Echoes module is active
- User has Game Master permissions
- Module has completed initialization

Always check for API availability:

```javascript
if (window.ErrorsAndEchoesAPI) {
  // API is available
  window.ErrorsAndEchoesAPI.register({ moduleId: 'my-module' });
} else {
  // API not available (module not loaded or user not GM)
  console.log('Errors and Echoes API not available');
}
```

## Module Registration

### register(config)

Register your module for enhanced error reporting.

```typescript
interface ModuleRegistrationConfig {
  moduleId: string; // Your module's ID (required)
  contextProvider?: () => Record<string, any>; // Optional context provider function
  errorFilter?: (error: Error) => boolean; // Optional error filter function
  endpoint?: EndpointConfig; // Optional custom endpoint configuration
}
```

#### Parameters

- **moduleId** (`string`, required): Your module's unique identifier
- **contextProvider** (`function`, optional): Function that returns debugging context
- **errorFilter** (`function`, optional): Function to filter which errors to report
- **endpoint** (`EndpointConfig`, optional): Custom error reporting endpoint

#### Example

```javascript
window.ErrorsAndEchoesAPI.register({
  moduleId: 'my-awesome-module',
  
  contextProvider: () => ({
    moduleVersion: game.modules.get('my-awesome-module')?.version,
    currentScene: canvas.scene?.name,
    activeFeatures: MyModule.getActiveFeatures()
  }),
  
  errorFilter: (error) => {
    // Don't report network errors
    return error.message.includes('fetch');
  }
});
```

### Context Provider Function

The context provider function is called whenever an error occurs and should return an object with debugging information.

```typescript
type ContextProvider = () => Record<string, any>;
```

#### Best Practices

- Keep the function lightweight and fast
- Only include data relevant for debugging
- Never include personally identifiable information
- Limit data size to essential information

#### Example Context Providers

**Basic Context:**
```javascript
const contextProvider = () => ({
  moduleVersion: game.modules.get('my-module')?.version,
  foundryVersion: game.version,
  gameSystem: game.system.id
});
```

**Detailed Context:**
```javascript
const contextProvider = () => ({
  // Version info
  moduleVersion: game.modules.get('my-module')?.version,
  foundryVersion: game.version,
  systemId: game.system.id,
  systemVersion: game.system.version,
  
  // Current state
  sceneId: canvas.scene?.id,
  sceneName: canvas.scene?.name,
  selectedTokens: canvas.tokens?.controlled?.map(t => t.id) || [],
  
  // Module settings
  importantSetting: game.settings.get('my-module', 'important-setting'),
  featureFlags: {
    advancedMode: MyModule.isAdvancedModeEnabled(),
    debugMode: MyModule.isDebugEnabled()
  },
  
  // User context (non-identifying)
  isGM: game.user.isGM,
  userRole: game.user.role
});
```

### Error Filter Function

The error filter function determines whether an error should be reported.

```typescript
type ErrorFilter = (error: Error) => boolean;
```

#### Return Values

- **`true`**: Filter OUT the error (don't report it)
- **`false`**: Report the error
- **`undefined`**: Report the error (default behavior)

#### Example Filters

**Filter by Error Type:**
```javascript
const errorFilter = (error) => {
  // Don't report network errors
  if (error.message.includes('fetch failed')) return true;
  if (error.message.includes('Network request failed')) return true;
  
  // Don't report permission errors
  if (error.message.includes('Permission denied')) return true;
  
  // Report everything else
  return false;
};
```

**Filter by Stack Trace:**
```javascript
const errorFilter = (error) => {
  // Only report errors from our module
  if (!error.stack) return true; // No stack trace
  if (!error.stack.includes('/modules/my-module/')) return true;
  
  // Report errors from our module
  return false;
};
```

**Complex Filtering:**
```javascript
const errorFilter = (error) => {
  // Filter out known issues
  const knownIssues = [
    'ResizeObserver loop limit exceeded',
    'Non-Error promise rejection captured',
    'Script error.'
  ];
  
  if (knownIssues.some(issue => error.message.includes(issue))) {
    return true; // Filter out
  }
  
  // Filter errors from other modules unless they affect us
  if (error.stack && !error.stack.includes('/modules/my-module/')) {
    // Check if error might affect our module
    const criticalErrors = ['TypeError', 'ReferenceError'];
    if (!criticalErrors.includes(error.constructor.name)) {
      return true; // Filter out
    }
  }
  
  return false; // Report the error
};
```

## Manual Error Reporting

### reportError(error, context)

Manually report an error with additional context.

```typescript
reportError(error: Error, context?: Record<string, any>): void
```

#### Parameters

- **error** (`Error`, required): The error object to report
- **context** (`object`, optional): Additional context for the error

#### Example

```javascript
try {
  await complexOperation();
} catch (error) {
  window.ErrorsAndEchoesAPI.reportError(error, {
    operation: 'complexOperation',
    userAction: 'button-click',
    parameters: { param1: 'value1' },
    context: {
      sceneId: canvas.scene?.id,
      tokenCount: canvas.tokens?.controlled?.length
    }
  });
  
  // Handle error normally
  ui.notifications.error('Operation failed');
}
```

## Module Registry Functions

Direct access to the module registry for advanced use cases:

```typescript
// Check if a module is registered
ModuleRegistry.isRegistered(moduleId: string): boolean;

// Get registration details
ModuleRegistry.getRegisteredModule(moduleId: string): RegisteredModule | undefined;

// Get all registered modules
ModuleRegistry.getAllRegisteredModules(): RegisteredModule[];

// Get registration statistics
ModuleRegistry.getStats(): RegistrationStats;
```

### Examples

```javascript
// Check registration status
const isRegistered = ModuleRegistry.isRegistered('my-module');
console.log('My module is registered:', isRegistered);

// Get registration details
const registration = ModuleRegistry.getRegisteredModule('my-module');
if (registration) {
  console.log('Context provider:', typeof registration.contextProvider);
  console.log('Error filter:', typeof registration.errorFilter);
}

// List all registered modules
const allModules = ModuleRegistry.getAllRegisteredModules();
console.log('Registered modules:', allModules.map(m => m.moduleId));

// Get statistics
const stats = ModuleRegistry.getStats();
console.log(`${stats.totalRegistrations} modules registered`);
console.log(`${stats.withContextProviders} have context providers`);
console.log(`${stats.withErrorFilters} have error filters`);
```

## Type Definitions

### RegisteredModule

```typescript
interface RegisteredModule {
  moduleId: string;
  contextProvider?: () => Record<string, any>;
  errorFilter?: (error: Error) => boolean;
  endpoint?: EndpointConfig;
  registeredAt: number; // Timestamp
}
```

### EndpointConfig

```typescript
interface EndpointConfig {
  name: string; // Human-readable endpoint name
  url: string; // Endpoint URL
  author: string; // Author identifier
  modules: string[]; // Modules this endpoint handles
  enabled: boolean; // Whether endpoint is active
}
```

### RegistrationStats

```typescript
interface RegistrationStats {
  totalRegistrations: number;
  withContextProviders: number;
  withErrorFilters: number;
  withCustomEndpoints: number;
  registrationsByHour: number[]; // Last 24 hours
}
```

## Error Report Format

When errors are reported, they follow this structure:

```typescript
interface ErrorReport {
  error: {
    message: string;
    stack?: string;
    type: string;
    source: string;
  };
  attribution: {
    moduleId: string;
    confidence: 'high' | 'medium' | 'low' | 'none';
    method: 'stack-trace' | 'hook-context' | 'pattern-match' | 'unknown';
    source: string;
  };
  foundry: {
    version: string;
    system?: { id: string; version: string };
    modules?: Array<{ id: string; version: string }>;
    scene?: string;
  };
  client?: {
    sessionId: string;
    browser?: string;
  };
  meta: {
    timestamp: string;
    privacyLevel: 'minimal' | 'standard' | 'detailed';
    reporterVersion: string;
  };
  moduleContext?: Record<string, any>; // From your context provider
}
```

## Privacy and Consent

### Consent Checking

```javascript
// Check if user has consented to error reporting
const errorReporter = game.modules.get('errors-and-echoes');
if (errorReporter?.active && errorReporter.api) {
  if (errorReporter.api.hasConsent()) {
    console.log('Error reporting enabled');
    console.log('Privacy level:', errorReporter.api.getPrivacyLevel());
  }
}
```

### Privacy Levels

- **Minimal**: Error message, stack trace, module attribution, Foundry version, timestamp
- **Standard**: Minimal + active system/modules, anonymous session ID  
- **Detailed**: Standard + browser info, scene name, module context

## Testing and Debugging

### Test Registration

```javascript
// Test module registration
window.ErrorsAndEchoesAPI.register({ moduleId: 'test-module' });

// Verify registration
const isRegistered = ModuleRegistry.isRegistered('test-module');
console.log('Test module registered:', isRegistered);
```

### Test Error Reporting

```javascript
// Generate test error
try {
  throw new Error('Test error from my module');
} catch (error) {
  window.ErrorsAndEchoesAPI.reportError(error, { test: true });
}
```

### Debug Context Provider

```javascript
// Test context provider
const registration = ModuleRegistry.getRegisteredModule('my-module');
if (registration?.contextProvider) {
  const context = registration.contextProvider();
  console.log('Generated context:', context);
  console.log('Context size:', JSON.stringify(context).length, 'bytes');
}
```

## Error Handling

The API is designed to be resilient:

- All functions are safe to call even if the module isn't loaded
- Errors in context providers won't break error reporting
- Invalid registrations are logged but don't throw exceptions
- Network failures in error reporting are handled gracefully

Always wrap API calls in try-catch for production code:

```javascript
try {
  window.ErrorsAndEchoesAPI?.register({
    moduleId: 'my-module',
    contextProvider: () => getContext()
  });
} catch (error) {
  console.warn('Failed to register with Errors and Echoes:', error);
}
```