---
sidebar_position: 3
---

# User Guide

Learn how to use Foundry Familiar to enhance your FoundryVTT campaigns with AI assistance.

## 💡 Basic Usage

### Console Commands

Open the browser console (F12) and use these commands:

```javascript
// Ask questions with full journal access
game.foundryFamiliar.ask('What happened in the last session?');

// Simple questions without journal access
game.foundryFamiliar.summon('Give me some tavern names');

// Open settings dialog
game.foundryFamiliar.settings();
```

### Chat Commands

Type these directly in FoundryVTT chat:

```
/ask Who is the mayor of Waterdeep in my campaign?
/familiar Generate 5 random NPC names
```

## 🎯 Practical Examples

### Session Preparation

**Get campaign summaries**:
```javascript
game.foundryFamiliar.ask('List all journals and summarize what the party learned about the dragon cult');
```

**Track NPCs**:
```javascript
game.foundryFamiliar.ask('What NPCs did the party meet in the last three sessions?');
```

**Find unresolved plots**:
```javascript
game.foundryFamiliar.ask('Search through my journals for unresolved plot threads');
```

### During Play

**Quick NPC lookup**:
```javascript
game.foundryFamiliar.ask('Find information about Lord Blackwood in my journals');
```

**Location details**:
```javascript
game.foundryFamiliar.ask('Search my session notes for tavern names');
```

**Current objectives**:
```javascript
game.foundryFamiliar.ask('Look through recent journals and tell me the party current objectives');
```

### Creative Assistance

**Generate complications**:
```javascript
game.foundryFamiliar.summon('Generate some complications for traveling through the Whispering Woods');
```

**Describe locations**:
```javascript
game.foundryFamiliar.summon('What would a typical day look like in the mining town of Rockfall?');
```

**Create items**:
```javascript
game.foundryFamiliar.summon('Create a short description of a mysterious magical artifact');
```

## 🔍 Understanding the Tools

### `ask()` vs `summon()`

**Use `ask()` when**:
- You want the AI to read your journal entries
- You need campaign-specific information
- You're asking about your world or NPCs

**Use `summon()` when**:
- You want general creative assistance
- You don't need campaign-specific context
- You want faster responses (no journal reading)

### Journal Tools Available

The AI can use these tools when you use `ask()`:

- **list_journals()**: See all available journal entries
- **read_journal(name)**: Read specific journal content
- **search_journals(query)**: Find journals by content

## 🎮 Best Practices

### Writing Good Prompts

**Be specific**:
- ❌ "Tell me about my campaign"
- ✅ "Summarize what the party learned about the villain in the last two sessions"

**Ask for what you need**:
- ❌ "Help with my game"
- ✅ "Generate 3 complications for the party's journey to the haunted forest"

**Use context**:
- ❌ "Who is John?"
- ✅ "Find information about John the blacksmith in my journals"

### Organizing Journals for AI

**Use descriptive titles**:
- ✅ "Session 12 - Dragon Cult Investigation"
- ❌ "Notes"

**Include key information**:
- NPC names and relationships
- Important locations
- Plot developments
- Party decisions

**Separate by topic**:
- Session summaries
- NPC profiles
- Location descriptions
- Plot threads

### Managing AI Responses

**Response length**:
- Adjust "Max Tokens" in settings for shorter/longer responses
- Ask for "brief summary" or "detailed analysis" as needed

**Response style**:
- Modify the system prompt for different tones
- Ask for bullet points, narratives, or specific formats

## 🛡️ Privacy & Security

### Local AI (Ollama)
- ✅ Your campaign data never leaves your computer
- ✅ No internet required after setup
- ✅ Complete privacy

### Cloud AI (OpenAI)
- ⚠️ Your campaign data is sent to the AI service
- ⚠️ Subject to the service's privacy policy
- ⚠️ Requires internet connection

### Data Usage
- Foundry Familiar only accesses journal entries you ask it to read
- No automatic data collection or transmission
- You control what information the AI sees

## 🔧 Tips & Tricks

### Performance Optimization

**For faster responses**:
- Use `summon()` when you don't need journal access
- Keep journal entries focused and well-organized
- Reduce Max Tokens setting for shorter responses

**For better quality**:
- Write clear, descriptive journal entries
- Use consistent naming for NPCs and locations
- Include context in your questions

### Common Workflows

**Session Prep Routine**:
1. `ask('Summarize the last session')`
2. `ask('What unresolved plots need attention?')`
3. `ask('Which NPCs should appear next?')`
4. `summon('Generate 3 random encounters for [location]')`

**During Play**:
1. `ask('What do my notes say about [NPC name]?')`
2. `ask('Find information about [location]')`
3. `summon('Generate a quick description of [thing]')`

## 🚨 Troubleshooting

### Common Issues

**AI can't find information**:
- Check if the information is actually in your journals
- Try different search terms
- Ask the AI to list all journals first

**Responses seem random**:
- Lower the temperature setting
- Be more specific in your questions
- Check that you're using `ask()` for campaign questions

**Slow performance**:
- Normal for local AI models
- Try reducing Max Tokens
- Use `summon()` for non-campaign questions

### Getting Better Results

**If responses are too creative**:
- Lower temperature to 0.1-0.3
- Add "be factual" to your prompts
- Use more specific questions

**If responses are too boring**:
- Raise temperature to 0.7-1.0
- Ask for "creative" or "interesting" responses
- Use `summon()` for creative tasks

---

**Next**: Learn about [Advanced Features](advanced-features) and development information.