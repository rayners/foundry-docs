---
sidebar_position: 5
---

# Endpoint Setup

Learn how to set up your own error reporting endpoint to receive errors from your Foundry VTT modules.

## Overview

Errors and Echoes forwards error reports to configured endpoints using a standard HTTP API. This allows module authors to use any backend service they prefer - from simple webhooks to sophisticated monitoring platforms.

## Standard API Protocol

All endpoints must implement this standard protocol for compatibility.

### Error Reporting Endpoint

**URL Pattern**: `POST /report/{author}`

Your endpoint will receive error reports at this URL pattern, where `{author}` is your author identifier.

### Request Format

```json
{
  "error": {
    "message": "Error description",
    "stack": "Error stack trace",
    "type": "Error",
    "source": "module-name"
  },
  "attribution": {
    "moduleId": "module-name",
    "confidence": "high|medium|low",
    "method": "automatic|manual",
    "source": "stack-trace|user-report"
  },
  "foundry": {
    "version": "12.331",
    "system": {
      "id": "dnd5e",
      "version": "3.0.0"
    },
    "modules": [
      {"id": "module-id", "version": "1.0.0"}
    ],
    "scene": "Scene Name"
  },
  "meta": {
    "timestamp": "2025-06-04T00:00:00.000Z",
    "privacyLevel": "minimal|standard|detailed",
    "reporterVersion": "0.1.2"
  },
  "client": {
    "sessionId": "anonymous-session-id",
    "browser": "Chrome 91.0"
  },
  "moduleContext": {
    // Custom context from your module's context provider
  }
}
```

### Response Format

Your endpoint should respond with this JSON format:

```json
{
  "success": true,
  "eventId": "fc6d8c0c43fc4630ad850ee518f1b9d0",
  "message": "Error report received and processed successfully",
  "timestamp": "2025-06-04T00:00:10.010Z",
  "endpoint": "your-endpoint-name"
}
```

### Error Response Format

For failures, return:

```json
{
  "success": false,
  "message": "Detailed error description",
  "timestamp": "2025-06-04T00:00:10.010Z",
  "endpoint": "your-endpoint-name",
  "retryAfter": 300
}
```

## Implementation Examples

### Express.js Endpoint

Simple Node.js server using Express:

```javascript
const express = require('express');
const app = express();

app.use(express.json());

// Error reporting endpoint
app.post('/report/:author', (req, res) => {
  const { author } = req.params;
  const errorReport = req.body;
  
  console.log(`Error from ${author}:`, errorReport.error.message);
  
  // Process the error (save to database, send to monitoring service, etc.)
  const eventId = generateEventId();
  
  res.json({
    success: true,
    eventId: eventId,
    message: 'Error report received',
    timestamp: new Date().toISOString(),
    endpoint: 'my-error-service'
  });
});

// Connectivity test endpoint
app.post('/test/:author', (req, res) => {
  const { author } = req.params;
  
  res.json({
    success: true,
    eventId: 'test-' + Date.now(),
    message: `Connectivity test successful for ${author}`,
    timestamp: new Date().toISOString(),
    endpoint: 'my-error-service'
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'my-error-service'
  });
});

function generateEventId() {
  return crypto.randomUUID().replace(/-/g, '');
}

app.listen(3000, () => {
  console.log('Error reporting server running on port 3000');
});
```

### Cloudflare Workers

Serverless implementation using Cloudflare Workers:

```javascript
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    if (url.pathname.startsWith('/report/')) {
      return handleErrorReport(request, env);
    } else if (url.pathname.startsWith('/test/')) {
      return handleTest(request, env);
    } else if (url.pathname === '/health') {
      return handleHealth();
    }
    
    return new Response('Not Found', { status: 404 });
  }
};

async function handleErrorReport(request, env) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }
  
  const errorReport = await request.json();
  
  // Forward to your monitoring service (Sentry, etc.)
  const eventId = await forwardToMonitoring(errorReport, env);
  
  return new Response(JSON.stringify({
    success: true,
    eventId: eventId,
    message: 'Error forwarded to monitoring service',
    timestamp: new Date().toISOString(),
    endpoint: 'cloudflare-worker'
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
```

### Discord Webhook

Forward errors to a Discord channel:

```javascript
async function forwardToDiscord(errorReport, webhookUrl) {
  const embed = {
    title: `🚨 Error in ${errorReport.attribution.moduleId}`,
    description: errorReport.error.message,
    color: 0xff0000,
    fields: [
      {
        name: 'Foundry Version',
        value: errorReport.foundry.version,
        inline: true
      },
      {
        name: 'Module',
        value: errorReport.attribution.moduleId,
        inline: true
      },
      {
        name: 'Confidence',
        value: errorReport.attribution.confidence,
        inline: true
      }
    ],
    timestamp: errorReport.meta.timestamp
  };
  
  const payload = {
    embeds: [embed]
  };
  
  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  
  return response.ok;
}
```

## Reference Implementation

A complete reference implementation is available at [sentry-relay](https://github.com/rayners/sentry-relay). This implementation:

- **Forwards to Sentry**: Integrates with Sentry for production error monitoring
- **Security Features**: Includes rate limiting, input validation, and CORS handling
- **Multi-Author Support**: Routes errors to different Sentry projects by author
- **Cloudflare Workers**: Serverless deployment with global edge locations

### Using the Reference Implementation

1. **Fork the Repository**: Start with the sentry-relay code
2. **Configure Sentry**: Set up Sentry projects for your modules
3. **Deploy to Cloudflare**: Use Wrangler to deploy the worker
4. **Set Environment Variables**: Configure your Sentry DSN and allowed origins

## Security Considerations

### Input Validation

Always validate incoming data:

```javascript
function validateErrorReport(report) {
  if (!report.error?.message) {
    throw new Error('Missing error message');
  }
  if (!report.attribution?.moduleId) {
    throw new Error('Missing module ID');
  }
  if (!report.meta?.timestamp) {
    throw new Error('Missing timestamp');
  }
  
  // Additional validation...
}
```

### Rate Limiting

Implement rate limiting to prevent abuse:

```javascript
const rateLimit = new Map();

function checkRateLimit(ip, maxRequests = 100, windowMs = 3600000) {
  const now = Date.now();
  const requests = rateLimit.get(ip) || [];
  
  // Remove old requests
  const recentRequests = requests.filter(time => now - time < windowMs);
  
  if (recentRequests.length >= maxRequests) {
    return false; // Rate limited
  }
  
  recentRequests.push(now);
  rateLimit.set(ip, recentRequests);
  return true;
}
```

### CORS Configuration

Configure CORS for your Foundry domains:

```javascript
function getCORSHeaders(request) {
  const origin = request.headers.get('Origin');
  const allowedOrigins = [
    'https://your-foundry-domain.com',
    'http://localhost:30000' // For local development
  ];
  
  if (allowedOrigins.includes(origin)) {
    return {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400'
    };
  }
  
  return {};
}
```

## Testing Your Endpoint

### Connectivity Test

Errors and Echoes can test your endpoint:

```javascript
// Test from Foundry console
const result = await ErrorReporter.testEndpoint('https://your-endpoint.com/test/your-name');
console.log('Test result:', result);
```

### Manual Testing

Test with curl:

```bash
# Test connectivity
curl -X POST -H "Content-Type: application/json" \
  -d '{"test": true, "timestamp": "2025-06-04T00:00:00.000Z"}' \
  https://your-endpoint.com/test/your-name

# Test error reporting
curl -X POST -H "Content-Type: application/json" \
  -d '{
    "error": {"message": "Test error", "type": "Error", "source": "test"},
    "attribution": {"moduleId": "test", "confidence": "high", "method": "manual", "source": "test"},
    "foundry": {"version": "12.331"},
    "meta": {"timestamp": "2025-06-04T00:00:00.000Z", "privacyLevel": "minimal", "reporterVersion": "0.1.2"}
  }' \
  https://your-endpoint.com/report/your-name
```

## Deployment

### Cloudflare Workers

1. Install Wrangler CLI: `npm install -g wrangler`
2. Login: `wrangler login`
3. Configure `wrangler.toml`
4. Deploy: `wrangler deploy`

### Traditional Hosting

1. Deploy your server code to your hosting provider
2. Configure SSL/TLS certificate (HTTPS required)
3. Set up monitoring and logging
4. Configure rate limiting and security measures

## Monitoring and Alerting

### Error Tracking

- **Sentry**: Production-ready error tracking with alerting
- **LogRocket**: Session replay and error monitoring
- **Bugsnag**: Error monitoring with release tracking
- **Custom**: Build your own with databases and notification systems

### Health Monitoring

- **Uptime Monitoring**: Services like Pingdom, UptimeRobot
- **Performance Monitoring**: Response time and throughput tracking
- **Log Analysis**: Structured logging and analysis tools

## Next Steps

1. **[Integration Guide](integration.md)** - Configure your module to use your endpoint
2. **[Privacy Guidelines](privacy-guidelines.md)** - Ensure compliance with privacy regulations
3. **[API Reference](api-reference.md)** - Complete API documentation