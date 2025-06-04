---
sidebar_position: 7
---

# Testing & Debugging

Comprehensive testing and debugging guide for Errors and Echoes integration.

## Testing Your Integration

### Basic Integration Test

Verify your module is properly registered:

```javascript
// Test module registration
Hooks.once('ready', () => {
  // Check if API is available
  if (!window.ErrorsAndEchoesAPI) {
    console.warn('Errors and Echoes API not available');
    return;
  }
  
  // Register your module
  window.ErrorsAndEchoesAPI.register({
    moduleId: 'your-module-id',
    contextProvider: () => ({ test: true })
  });
  
  // Verify registration
  setTimeout(() => {
    const isRegistered = ModuleRegistry.isRegistered('your-module-id');
    console.log('Module registered:', isRegistered);
    
    if (isRegistered) {
      console.log('✅ Integration test passed');
    } else {
      console.error('❌ Integration test failed');
    }
  }, 1000);
});
```

### Context Provider Testing

Test your context provider function:

```javascript
function testContextProvider() {
  const registration = ModuleRegistry.getRegisteredModule('your-module-id');
  
  if (!registration?.contextProvider) {
    console.error('No context provider found');
    return;
  }
  
  try {
    const context = registration.contextProvider();
    
    // Check context structure
    console.log('Generated context:', context);
    console.log('Context size:', JSON.stringify(context).length, 'bytes');
    
    // Test for PII (see privacy guidelines)
    const contextStr = JSON.stringify(context);
    const piiPatterns = [
      /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/, // Email
      /\/Users\/[^\/]+/, // User paths
      /user:\s*[^\s]+/i, // User names
    ];
    
    let hasPII = false;
    piiPatterns.forEach(pattern => {
      if (pattern.test(contextStr)) {
        console.error('⚠️ Potential PII detected:', pattern);
        hasPII = true;
      }
    });
    
    if (!hasPII) {
      console.log('✅ Context provider privacy check passed');
    }
    
    return context;
  } catch (error) {
    console.error('❌ Context provider error:', error);
  }
}
```

### Error Filter Testing

Test your error filter function:

```javascript
function testErrorFilter() {
  const registration = ModuleRegistry.getRegisteredModule('your-module-id');
  
  if (!registration?.errorFilter) {
    console.log('No error filter configured');
    return;
  }
  
  // Test cases
  const testErrors = [
    new Error('Network request failed'),
    new Error('Permission denied'),
    new Error('Your module specific error'),
    new Error('Script error.'),
  ];
  
  testErrors.forEach(error => {
    error.stack = `/modules/your-module-id/script.js:1:1`;
    const shouldFilter = registration.errorFilter(error);
    console.log(`Error: "${error.message}" - Filtered: ${shouldFilter}`);
  });
}
```

## Manual Error Testing

### Generate Test Errors

Create controlled test scenarios:

```javascript
// Test manual error reporting
function testManualReporting() {
  if (!window.ErrorsAndEchoesAPI?.reportError) {
    console.error('Manual reporting not available');
    return;
  }
  
  try {
    // Create a test error
    const testError = new Error('Test error from manual testing');
    testError.stack = `Error: Test error
    at testManualReporting (/modules/your-module-id/test.js:1:1)
    at HTMLButtonElement.<anonymous> (/modules/your-module-id/test.js:5:5)`;
    
    // Report with context
    window.ErrorsAndEchoesAPI.reportError(testError, {
      test: true,
      operation: 'manual-test',
      userAction: 'button-click',
      moduleVersion: game.modules.get('your-module-id')?.version
    });
    
    console.log('✅ Manual error report sent');
  } catch (error) {
    console.error('❌ Manual reporting failed:', error);
  }
}

// Test automatic error capturing
function testAutomaticCapture() {
  // This error should be automatically captured
  setTimeout(() => {
    throw new Error('Test automatic error capture from your-module-id');
  }, 100);
}

// Test async error capturing
async function testAsyncErrors() {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('Test async error')), 100);
    });
  } catch (error) {
    // This should be captured if it bubbles up
    throw error;
  }
}
```

### Hook Error Testing

Test error reporting in Foundry hooks:

```javascript
// Test hook error reporting
Hooks.on('updateActor', (actor, data, options, userId) => {
  if (data.testError) {
    // Intentional test error
    throw new Error('Test hook error from your-module-id');
  }
});

// Trigger the test
function testHookError() {
  const actor = game.actors.contents[0];
  if (actor) {
    actor.update({ testError: true });
  }
}
```

## Endpoint Testing

### Test Endpoint Connectivity

Test your error reporting endpoint:

```javascript
async function testEndpointConnectivity() {
  const testUrl = 'https://your-endpoint.com/test/your-author';
  
  try {
    const response = await fetch(testUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        test: true,
        timestamp: new Date().toISOString(),
        source: 'manual-test'
      })
    });
    
    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Endpoint connectivity test passed:', result);
    } else {
      console.error('❌ Endpoint test failed:', result);
    }
  } catch (error) {
    console.error('❌ Endpoint connectivity error:', error);
  }
}
```

### Test Error Report Format

Verify your endpoint receives properly formatted reports:

```javascript
async function testErrorReportFormat() {
  const testReport = {
    error: {
      message: 'Test error message',
      stack: 'Error: Test\n    at test.js:1:1',
      type: 'Error',
      source: 'your-module-id'
    },
    attribution: {
      moduleId: 'your-module-id',
      confidence: 'high',
      method: 'manual',
      source: 'user-report'
    },
    foundry: {
      version: game.version,
      system: {
        id: game.system.id,
        version: game.system.version
      }
    },
    meta: {
      timestamp: new Date().toISOString(),
      privacyLevel: 'minimal',
      reporterVersion: '1.0.0'
    },
    client: {
      sessionId: 'test-session-123',
      browser: navigator.userAgent.split(' ')[0]
    }
  };
  
  try {
    const response = await fetch('https://your-endpoint.com/report/your-author', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testReport)
    });
    
    const result = await response.json();
    console.log('Error report test result:', result);
  } catch (error) {
    console.error('Error report test failed:', error);
  }
}
```

## Debug Tools

### Error Reporter Status

Check the status of the error reporter:

```javascript
function checkErrorReporterStatus() {
  const errorReporter = game.modules.get('errors-and-echoes');
  
  if (!errorReporter?.active) {
    console.log('❌ Errors and Echoes module not active');
    return;
  }
  
  console.log('✅ Errors and Echoes is active');
  
  // Check API availability
  if (window.ErrorsAndEchoesAPI) {
    console.log('✅ API is available');
  } else {
    console.log('❌ API not available');
  }
  
  // Check consent status
  const hasConsent = game.settings.get('errors-and-echoes', 'error-reporting-enabled');
  console.log('User consent:', hasConsent ? '✅ Enabled' : '❌ Disabled');
  
  // Check privacy level
  const privacyLevel = game.settings.get('errors-and-echoes', 'privacy-level');
  console.log('Privacy level:', privacyLevel);
  
  // Check registered modules
  const stats = ModuleRegistry.getStats();
  console.log('Registration stats:', stats);
}
```

### Registry Inspection

Inspect the module registry:

```javascript
function inspectRegistry() {
  console.log('=== Module Registry Inspection ===');
  
  const allModules = ModuleRegistry.getAllRegisteredModules();
  console.log(`Total registered modules: ${allModules.length}`);
  
  allModules.forEach(module => {
    console.log(`\n📦 ${module.moduleId}`);
    console.log(`  Registered: ${new Date(module.registeredAt).toLocaleString()}`);
    console.log(`  Context Provider: ${module.contextProvider ? '✅' : '❌'}`);
    console.log(`  Error Filter: ${module.errorFilter ? '✅' : '❌'}`);
    console.log(`  Custom Endpoint: ${module.endpoint ? '✅' : '❌'}`);
    
    if (module.endpoint) {
      console.log(`  Endpoint URL: ${module.endpoint.url}`);
      console.log(`  Endpoint Enabled: ${module.endpoint.enabled ? '✅' : '❌'}`);
    }
  });
}
```

### Error Attribution Testing

Test error attribution accuracy:

```javascript
function testErrorAttribution() {
  // Create errors with different stack traces
  const testCases = [
    {
      name: 'Module Error',
      stack: `Error: Test
        at moduleFunction (/modules/your-module-id/script.js:10:5)
        at onClick (/modules/your-module-id/ui.js:25:10)`
    },
    {
      name: 'Core Error',
      stack: `Error: Test
        at coreFunction (/foundry.js:100:5)
        at hookCall (/foundry.js:200:10)`
    },
    {
      name: 'Other Module Error',
      stack: `Error: Test
        at otherFunction (/modules/other-module/script.js:50:5)`
    }
  ];
  
  testCases.forEach(testCase => {
    const error = new Error('Test attribution error');
    error.stack = testCase.stack;
    
    // Test attribution (this would normally be internal)
    const attribution = window.ErrorsAndEchoes?.ErrorAttribution.attributeToModule(error, {
      source: 'javascript',
      timestamp: Date.now()
    });
    
    console.log(`${testCase.name}:`, attribution);
  });
}
```

## Performance Testing

### Context Provider Performance

Test context provider performance:

```javascript
function testContextProviderPerformance() {
  const registration = ModuleRegistry.getRegisteredModule('your-module-id');
  
  if (!registration?.contextProvider) {
    console.log('No context provider to test');
    return;
  }
  
  const iterations = 1000;
  const start = performance.now();
  
  for (let i = 0; i < iterations; i++) {
    registration.contextProvider();
  }
  
  const end = performance.now();
  const avgTime = (end - start) / iterations;
  
  console.log(`Context provider performance:`);
  console.log(`  ${iterations} iterations in ${(end - start).toFixed(2)}ms`);
  console.log(`  Average: ${avgTime.toFixed(4)}ms per call`);
  
  if (avgTime > 10) {
    console.warn('⚠️ Context provider may be too slow (>10ms average)');
  } else {
    console.log('✅ Context provider performance is good');
  }
}
```

### Memory Usage Testing

Monitor memory usage:

```javascript
function testMemoryUsage() {
  if (!performance.memory) {
    console.log('Memory API not available');
    return;
  }
  
  const before = performance.memory.usedJSHeapSize;
  
  // Generate 100 test error reports
  for (let i = 0; i < 100; i++) {
    const testError = new Error(`Test error ${i}`);
    window.ErrorsAndEchoesAPI?.reportError(testError, {
      test: true,
      iteration: i
    });
  }
  
  // Force garbage collection if available
  if (window.gc) {
    window.gc();
  }
  
  setTimeout(() => {
    const after = performance.memory.usedJSHeapSize;
    const increase = after - before;
    
    console.log(`Memory usage test:`);
    console.log(`  Before: ${(before / 1024 / 1024).toFixed(2)} MB`);
    console.log(`  After: ${(after / 1024 / 1024).toFixed(2)} MB`);
    console.log(`  Increase: ${(increase / 1024).toFixed(2)} KB`);
    
    if (increase > 1024 * 1024) { // 1MB
      console.warn('⚠️ Significant memory increase detected');
    } else {
      console.log('✅ Memory usage is reasonable');
    }
  }, 2000);
}
```

## Debugging Common Issues

### API Not Available

```javascript
// Debug API availability issues
function debugAPIAvailability() {
  console.log('=== API Availability Debug ===');
  
  // Check module status
  const module = game.modules.get('errors-and-echoes');
  console.log('Module found:', !!module);
  console.log('Module active:', module?.active);
  
  // Check user permissions
  console.log('User is GM:', game.user.isGM);
  
  // Check initialization
  console.log('API available:', !!window.ErrorsAndEchoesAPI);
  
  // Check for conflicts
  const errorModules = Array.from(game.modules.values())
    .filter(m => m.active && m.id.includes('error'))
    .map(m => m.id);
  console.log('Other error-related modules:', errorModules);
}
```

### Registration Failures

```javascript
// Debug registration issues
function debugRegistration(moduleId) {
  console.log(`=== Registration Debug for ${moduleId} ===`);
  
  try {
    // Check if already registered
    const existing = ModuleRegistry.getRegisteredModule(moduleId);
    console.log('Existing registration:', existing);
    
    // Test registration
    window.ErrorsAndEchoesAPI.register({
      moduleId: moduleId,
      contextProvider: () => ({ debug: true })
    });
    
    // Verify registration
    const registered = ModuleRegistry.isRegistered(moduleId);
    console.log('Registration successful:', registered);
    
  } catch (error) {
    console.error('Registration error:', error);
  }
}
```

### Error Reporting Failures

```javascript
// Debug error reporting issues
function debugErrorReporting() {
  console.log('=== Error Reporting Debug ===');
  
  // Check consent
  const hasConsent = game.settings.get('errors-and-echoes', 'error-reporting-enabled');
  console.log('Has consent:', hasConsent);
  
  // Check network connectivity
  navigator.onLine && console.log('Network online:', navigator.onLine);
  
  // Test with minimal error
  try {
    window.ErrorsAndEchoesAPI.reportError(new Error('Debug test'), {
      debug: true
    });
    console.log('Error reporting call successful');
  } catch (error) {
    console.error('Error reporting failed:', error);
  }
}
```

## Automated Testing

### Test Suite Template

```javascript
// Complete test suite for your module integration
class ErrorReportingTestSuite {
  constructor(moduleId) {
    this.moduleId = moduleId;
    this.results = [];
  }
  
  async runAllTests() {
    console.log(`🧪 Running Error Reporting Test Suite for ${this.moduleId}`);
    
    await this.testRegistration();
    await this.testContextProvider();
    await this.testErrorFilter();
    await this.testManualReporting();
    await this.testEndpointConnectivity();
    
    this.printResults();
  }
  
  async testRegistration() {
    try {
      window.ErrorsAndEchoesAPI.register({
        moduleId: this.moduleId,
        contextProvider: () => ({ test: true })
      });
      
      const isRegistered = ModuleRegistry.isRegistered(this.moduleId);
      this.addResult('Registration', isRegistered, 'Module registration');
    } catch (error) {
      this.addResult('Registration', false, error.message);
    }
  }
  
  async testContextProvider() {
    try {
      const registration = ModuleRegistry.getRegisteredModule(this.moduleId);
      const context = registration?.contextProvider?.();
      
      const hasContext = !!context;
      const isObject = typeof context === 'object';
      const hasNoFunc = !JSON.stringify(context).includes('function');
      
      this.addResult('Context Provider', hasContext && isObject && hasNoFunc, 
        'Context provider returns valid object');
    } catch (error) {
      this.addResult('Context Provider', false, error.message);
    }
  }
  
  async testErrorFilter() {
    try {
      const registration = ModuleRegistry.getRegisteredModule(this.moduleId);
      if (registration?.errorFilter) {
        const testError = new Error('Test');
        const result = registration.errorFilter(testError);
        this.addResult('Error Filter', typeof result === 'boolean', 
          'Error filter returns boolean');
      } else {
        this.addResult('Error Filter', true, 'No filter configured (optional)');
      }
    } catch (error) {
      this.addResult('Error Filter', false, error.message);
    }
  }
  
  async testManualReporting() {
    try {
      window.ErrorsAndEchoesAPI.reportError(new Error('Test'), { test: true });
      this.addResult('Manual Reporting', true, 'Manual error reporting works');
    } catch (error) {
      this.addResult('Manual Reporting', false, error.message);
    }
  }
  
  async testEndpointConnectivity() {
    // This would test your specific endpoint
    this.addResult('Endpoint', true, 'Endpoint test not implemented');
  }
  
  addResult(test, passed, message) {
    this.results.push({ test, passed, message });
  }
  
  printResults() {
    console.log('\n📊 Test Results:');
    this.results.forEach(result => {
      const icon = result.passed ? '✅' : '❌';
      console.log(`${icon} ${result.test}: ${result.message}`);
    });
    
    const passed = this.results.filter(r => r.passed).length;
    const total = this.results.length;
    console.log(`\n🎯 ${passed}/${total} tests passed`);
  }
}

// Run the test suite
new ErrorReportingTestSuite('your-module-id').runAllTests();
```

This comprehensive testing guide helps ensure your error reporting integration is working correctly and efficiently.