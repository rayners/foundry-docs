---
sidebar_position: 6
---

# Privacy Guidelines

Essential privacy guidelines for implementing error reporting in Foundry VTT modules.

## Privacy-First Principles

Error reporting must always prioritize user privacy and comply with relevant privacy regulations including GDPR, CCPA, and other data protection laws.

### Core Principles

1. **Opt-In Only**: Error reporting must never be enabled by default
2. **Minimal Data**: Collect only what's necessary for debugging
3. **User Control**: Users must have full control over their data
4. **Transparency**: Clearly document what data is collected and why
5. **No PII**: Never collect personally identifiable information

## What NOT to Collect

### Personally Identifiable Information (PII)

**NEVER collect any of these:**

- **User names or real names**
- **Email addresses**
- **IP addresses** (beyond basic geolocation for routing)
- **User IDs that can be traced to individuals**
- **Chat messages or private communications**
- **Character names or personal details**
- **File paths containing usernames** (sanitize paths)
- **Session tokens or authentication data**

### Sensitive Game Data

**Avoid collecting:**

- **Character sheet details**
- **Campaign-specific story information**
- **Private rolls or hidden information**
- **Player passwords or access tokens**
- **Custom compendium data that might be copyrighted**

## What You CAN Collect

### Technical Information

**Safe to collect for debugging:**

- **Error messages and stack traces** (sanitized)
- **Module version numbers**
- **Foundry VTT version**
- **Game system and version**
- **Browser type and version** (general categories)
- **Active modules list** (names and versions only)
- **Scene information** (general type, not specific names)
- **Anonymous session identifiers** (rotating daily)

### Module-Specific Context

**Appropriate context data:**

- **Feature flags and settings** (non-personal)
- **Operation being performed** when error occurred
- **Module state information** (non-personal)
- **Configuration options** (non-personal)
- **Performance metrics** (timing, memory usage)

## Implementation Guidelines

### Anonymous Session IDs

Use rotating, anonymous session identifiers:

```javascript
// Generate daily-rotating anonymous session ID
function generateSessionId() {
  const today = new Date().toISOString().split('T')[0];
  const seed = `${today}-${Math.random().toString(36).substr(2, 9)}`;
  return btoa(seed).substr(0, 16); // Base64 encoded, truncated
}
```

### Data Sanitization

Always sanitize collected data:

```javascript
function sanitizeStackTrace(stack) {
  return stack
    // Remove user-specific file paths
    .replace(/\/Users\/[^\/]+/g, '/Users/***')
    .replace(/C:\\Users\\[^\\]+/g, 'C:\\Users\\***')
    .replace(/\/home\/[^\/]+/g, '/home/***')
    // Remove potential personal identifiers
    .replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '***@***.***')
    .replace(/\b\d{4}-\d{4}-\d{4}-\d{4}\b/g, '****-****-****-****');
}

function sanitizeErrorMessage(message) {
  return message
    // Remove potential personal information patterns
    .replace(/user:\s*[^\s]+/gi, 'user: ***')
    .replace(/player:\s*[^\s]+/gi, 'player: ***')
    .replace(/character:\s*[^\s]+/gi, 'character: ***');
}
```

### Context Provider Best Practices

Implement safe context providers:

```javascript
// GOOD: Safe context provider
const contextProvider = () => ({
  moduleVersion: game.modules.get('my-module')?.version,
  foundryVersion: game.version,
  gameSystem: game.system.id,
  systemVersion: game.system.version,
  sceneType: canvas.scene?.type || 'unknown',
  tokenCount: canvas.tokens?.controlled?.length || 0,
  isGM: game.user.isGM,
  moduleSettings: {
    featureEnabled: game.settings.get('my-module', 'feature-enabled'),
    debugMode: game.settings.get('my-module', 'debug-mode')
  }
});

// BAD: Privacy-violating context provider
const badContextProvider = () => ({
  userName: game.user.name, // DON'T - PII
  userEmail: game.user.email, // DON'T - PII
  characterName: game.user.character?.name, // DON'T - Personal
  sceneName: canvas.scene?.name, // RISKY - May contain personal info
  chatHistory: game.messages.contents, // DON'T - Private communications
  playerList: game.users.map(u => u.name) // DON'T - PII
});
```

## Consent Management

### Granular Privacy Levels

Implement multiple privacy levels to give users control:

```javascript
// Privacy level configuration
const PRIVACY_LEVELS = {
  minimal: {
    description: 'Error details and module attribution only',
    includes: ['error', 'moduleId', 'foundryVersion', 'timestamp']
  },
  standard: {
    description: 'Basic debugging information',
    includes: ['minimal', 'gameSystem', 'moduleList', 'sessionId']
  },
  detailed: {
    description: 'Comprehensive debugging context',
    includes: ['standard', 'browserInfo', 'sceneType', 'moduleContext']
  }
};
```

### Consent Expiration

Implement consent expiration:

```javascript
// Check if consent is still valid
function hasValidConsent() {
  const consentDate = game.settings.get('errors-and-echoes', 'consent-date');
  const expirationDays = 365; // 1 year
  
  if (!consentDate) return false;
  
  const daysSinceConsent = (Date.now() - consentDate) / (1000 * 60 * 60 * 24);
  return daysSinceConsent < expirationDays;
}
```

### Per-Module Consent

Allow users to control reporting per module:

```javascript
// Check module-specific consent
function hasModuleConsent(moduleId) {
  const moduleConsent = game.settings.get('errors-and-echoes', 'module-consent') || {};
  return moduleConsent[moduleId] === true;
}
```

## Legal Compliance

### GDPR Compliance

**For EU users, you must:**

1. **Obtain explicit consent** before collecting any data
2. **Provide clear information** about what data is collected
3. **Allow data deletion** upon request
4. **Implement data portability** if requested
5. **Report data breaches** within 72 hours
6. **Appoint a DPO** if processing large amounts of data

### CCPA Compliance

**For California users, you must:**

1. **Provide privacy notices** about data collection
2. **Allow opt-out** of data collection
3. **Provide data deletion** upon request
4. **Not discriminate** against users who opt out

## Documentation Requirements

### Privacy Policy

Create a comprehensive privacy policy that covers:

```markdown
# Privacy Policy for [Module Name]

## Data Collection
We collect the following information when error reporting is enabled:
- Error messages and stack traces (sanitized)
- Module version and configuration
- Foundry VTT version and game system
- Anonymous session identifier (changes daily)

## Data Usage
Collected data is used solely for:
- Identifying and fixing bugs in our module
- Improving module stability and performance
- Understanding compatibility issues

## Data Storage
- Data is stored securely with our error monitoring service
- Data is automatically deleted after 90 days
- No personally identifiable information is collected

## User Rights
You have the right to:
- Opt out of error reporting at any time
- Request deletion of your data
- Access information about what data we've collected

## Contact
For privacy concerns or data deletion requests:
- Email: privacy@yourmodule.com
- GitHub: [Your Repository]/issues
```

### User Interface

Provide clear privacy controls in your module settings:

```javascript
// Example settings registration
game.settings.register('my-module', 'error-reporting-enabled', {
  name: 'Enable Error Reporting',
  hint: 'Allow anonymous error reports to help improve this module. See our Privacy Policy for details about what data is collected.',
  scope: 'world',
  config: true,
  type: Boolean,
  default: false // Always default to disabled
});

game.settings.register('my-module', 'privacy-level', {
  name: 'Privacy Level',
  hint: 'Choose how much information to include in error reports.',
  scope: 'world',
  config: true,
  type: String,
  choices: {
    'minimal': 'Minimal (Error details only)',
    'standard': 'Standard (Basic debugging info)',
    'detailed': 'Detailed (Comprehensive context)'
  },
  default: 'minimal'
});
```

## Testing Privacy Compliance

### Data Audit Checklist

- [ ] No PII is collected in any context provider
- [ ] Error messages are sanitized of personal information
- [ ] Stack traces have file paths sanitized
- [ ] Session IDs are anonymous and rotating
- [ ] Default settings have error reporting disabled
- [ ] Users can disable reporting at any time
- [ ] Privacy policy is comprehensive and accessible
- [ ] Data retention period is clearly documented
- [ ] Data deletion process is documented and functional

### Automated Testing

```javascript
// Test for PII in context data
function testContextPrivacy() {
  const context = myModule.getErrorContext();
  const contextStr = JSON.stringify(context);
  
  // Test for common PII patterns
  const piiPatterns = [
    /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/, // Email
    /\b\d{3}-\d{3}-\d{4}\b/, // Phone number
    /\buser:\s*[^\s]+/i, // User names
    /\/Users\/[^\/]+/, // File paths with usernames
  ];
  
  for (const pattern of piiPatterns) {
    if (pattern.test(contextStr)) {
      console.error('Potential PII detected in context:', pattern);
      return false;
    }
  }
  
  return true;
}
```

## Best Practices Summary

1. **Default to Privacy**: Error reporting should be opt-in and disabled by default
2. **Minimize Data**: Collect only what's absolutely necessary for debugging
3. **Sanitize Everything**: Clean all data before transmission
4. **Respect User Choice**: Allow granular control over privacy levels
5. **Be Transparent**: Clearly document what data is collected and why
6. **Plan for Deletion**: Implement data deletion procedures
7. **Regular Audits**: Regularly review what data you're collecting
8. **Stay Updated**: Keep up with privacy law changes

## Resources

- **GDPR Information**: [European Commission GDPR Guide](https://ec.europa.eu/info/law/law-topic/data-protection_en)
- **CCPA Information**: [California Attorney General CCPA Guide](https://oag.ca.gov/privacy/ccpa)
- **Privacy by Design**: [Privacy Commissioner of Canada](https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/p_principle/)

## Next Steps

- **[API Reference](api-reference.md)** - Implement privacy-compliant error reporting
- **[Endpoint Setup](endpoint-setup.md)** - Set up secure error collection endpoints
- **[Integration Guide](integration.md)** - Integrate privacy controls into your module