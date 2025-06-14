---
sidebar_position: 4
---

# Advanced Features

Explore the technical capabilities and developer features of Foundry Familiar.

## 🏗️ Architecture Overview

### Core Components

**LLM Integration**:
- OpenAI-compatible chat completions API
- Tool-calling system for Foundry data access
- Conversation history for multi-turn interactions

**Tool System**:
- `list_journals()`: Returns available journal entries
- `read_journal(name)`: Reads full journal content
- `search_journals(query)`: Searches journals by content/name

**Foundry Integration**:
- Uses `game.journal` collection for data access
- Outputs responses via `ChatMessage.create()`
- Strips HTML from journal content for cleaner processing

### Technical Implementation

**API Pattern**:
```javascript
// Main API endpoints exposed on game object
game.foundryFamiliar = {
  ask: askWithTools,
  summon: simplePrompt,
  settings: openSettings
};
```

**Tool Execution**:
- LLM responses parsed via regex for tool calls
- Tools executed in Foundry context
- Results fed back to LLM for final response

## ⚙️ Configuration Options

### Endpoint Types

**Ollama (Local)**:
- Default URL: `http://localhost:11434/v1/chat/completions`
- Model format: `qwen3`, `llama2`, etc.
- No API key required

**OpenAI (Cloud)**:
- URL: `https://api.openai.com/v1/chat/completions`
- Model format: `gpt-3.5-turbo`, `gpt-4`, etc.
- Requires API key

**Local Proxy**:
- Custom URL for proxy setups
- Useful for advanced networking configurations
- Follows OpenAI API format

**Custom Endpoint**:
- Any OpenAI-compatible service
- Ollama, LocalAI, OpenRouter, etc.
- Full URL customization

### Advanced Settings

**Temperature Control**:
- `0.0`: Completely deterministic
- `0.1-0.3`: Focused and factual
- `0.4-0.7`: Balanced creativity
- `0.8-1.0`: Very creative and unpredictable

**Token Management**:
- Max tokens limit response length
- Typical values: 500-2000 tokens
- Higher values allow longer responses

**System Prompt Customization**:
```
You are a helpful assistant for a D&D 5e campaign set in the Forgotten Realms. You can read journal entries and help the Game Master manage their campaign. Always stay in character as a knowledgeable sage. Be concise but helpful.
```

## 🛠️ Developer Information

### Module Structure

```
fvtt-familiar/
├── src/
│   ├── module.ts           # Main module entry
│   ├── core/
│   │   ├── familiar-manager.ts     # Core LLM integration
│   │   ├── llm-service.ts          # API communication
│   │   └── tool-system.ts          # Foundry tool integration
│   └── ui/
│       └── settings-dialog.ts     # Configuration interface
├── templates/
│   └── settings-dialog.hbs        # Settings UI template
└── styles/
    └── familiar.scss              # Module styling
```

### API Reference

**Main Interface**:
```typescript
interface FoundryFamiliarAPI {
  ask(prompt: string): Promise<void>;
  summon(prompt: string): Promise<void>;
  settings(): void;
}
```

**Settings Interface**:
```typescript
interface FamiliarSettings {
  endpoint: 'ollama' | 'openai' | 'proxy' | 'custom';
  baseUrl: string;
  model: string;
  apiKey: string;
  temperature: number;
  maxTokens: number;
  systemPrompt: string;
}
```

### Tool System Extension

**Adding New Tools**:
```typescript
const tools = {
  list_journals: () => {
    return game.journal.contents.map(j => j.name);
  },
  
  read_journal: (name: string) => {
    const journal = game.journal.getName(name);
    return journal?.pages.contents[0]?.text.content || 'Journal not found';
  },
  
  // Add your custom tool here
  custom_tool: (param: string) => {
    // Your implementation
    return result;
  }
};
```

**Tool Call Format**:
The AI returns tool calls in this format:
```
I'll help you with that. Let me check your journals.

[TOOL_CALL: list_journals()]

Based on your journals, I can see...
```

## 🔌 Integration Patterns

### Module Compatibility

**With Other Calendar Modules**:
- Can reference journal entries about calendar events
- Ask AI about scheduling and time-related campaign elements

**With Weather Modules**:
- Query AI about weather patterns in your campaign
- Generate weather descriptions for different regions

**With Combat Modules**:
- Ask AI to summarize combat encounters from session notes
- Generate tactical advice based on previous battles

### Hook Integration

**Listening for AI Events**:
```javascript
Hooks.on('familiar:responseGenerated', (response) => {
  // Handle AI response
  console.log('AI said:', response);
});

Hooks.on('familiar:toolUsed', (toolName, params, result) => {
  // Track tool usage
  console.log(`Tool ${toolName} used with ${params}:`, result);
});
```

### Custom Prompts for Different Games

**D&D 5e**:
```
You are a helpful assistant for a D&D 5e campaign. Reference official rules when appropriate and help with spell descriptions, monster stats, and rule clarifications.
```

**Call of Cthulhu**:
```
You are an assistant for a Call of Cthulhu campaign. Help maintain the atmospheric horror tone and reference Lovecraftian lore when appropriate.
```

**Custom World**:
```
You are an assistant for a fantasy campaign set in the world of [Your World]. The magic system works by [description]. Technology level is [level]. Help maintain consistency with these world rules.
```

## 🔍 Debugging & Diagnostics

### Console Debugging

**Check Module Status**:
```javascript
// Verify module is loaded
console.log(game.foundryFamiliar);

// Check settings
console.log(game.settings.get('foundry-familiar', 'endpoint'));
```

**Test API Connection**:
```javascript
// Manual connection test
game.foundryFamiliar.testConnection();
```

**Debug Tool Execution**:
```javascript
// Enable debug logging
game.settings.set('foundry-familiar', 'debugMode', true);
```

### Common Development Issues

**API Timeouts**:
- Increase timeout values for slow models
- Check network connectivity
- Verify endpoint URLs

**Tool Parsing Errors**:
- Check regex patterns for tool call detection
- Verify tool function exists
- Debug with console.log in tool functions

**Memory Issues**:
- Monitor conversation history size
- Implement conversation pruning
- Clear history when needed

## 🚀 Performance Optimization

### Local AI Performance

**Model Selection**:
- Smaller models (qwen3): Faster, less capable
- Larger models (llama2-70b): Slower, more capable
- Choose based on your hardware and needs

**Hardware Considerations**:
- GPU acceleration dramatically improves speed
- More RAM allows larger context windows
- SSD storage helps with model loading

### API Optimization

**Request Efficiency**:
- Batch tool calls when possible
- Limit conversation history length
- Use appropriate max token limits

**Caching Strategies**:
- Cache frequent journal lookups
- Store AI responses for repeated questions
- Implement smart invalidation

---

**Next**: Return to the [main documentation](intro) or check out the [user guide](user-guide).