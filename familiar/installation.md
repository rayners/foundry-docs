---
sidebar_position: 2
---

# Installation & Setup

Complete guide to installing and configuring Foundry Familiar in your FoundryVTT world.

## 📦 Installation

### Step 1: Install the Module

**Option A: Manual Installation (Current Method)**

1. Go to [GitHub Releases](https://github.com/rayners/fvtt-familiar/releases)
2. Download the latest `module.zip` file
3. Extract the ZIP to your FoundryVTT modules directory:
   - **Windows**: `%localappdata%/FoundryVTT/Data/modules/`
   - **macOS**: `~/Library/Application Support/FoundryVTT/Data/modules/`
   - **Linux**: `~/.local/share/FoundryVTT/Data/modules/`
4. Restart FoundryVTT

**Option B: Foundry Package Manager (Coming Soon)**

1. Open the Add-on Modules tab in your Foundry setup
2. Click "Install Module"
3. Search for "Foundry Familiar"
4. Click Install

### Step 2: Enable the Module

1. Launch your world
2. Go to **Settings** → **Manage Modules**
3. Find "Foundry Familiar" and check the box
4. Click **Save Module Settings**
5. The module is now active in your world

## ⚙️ AI Service Configuration

### Choosing Your AI Service

**🏠 Ollama (Recommended - Only Tested Option)**

- **Status**: ✅ Confirmed working with qwen3 model
- **Pros**: Free, private, no data leaves your computer
- **Cons**: Requires setup, uses computer resources
- **Best for**: Users who want privacy and don't mind technical setup

**⚠️ OpenAI (UNTESTED)**

- **Status**: ❌ No testing performed yet
- **Risk**: May not work properly or at all
- **Best for**: Advanced users willing to test

### Setting Up Ollama (Recommended)

1. **Install Ollama**:
   - Visit [ollama.com](https://ollama.com)
   - Download for your operating system
   - Follow installation instructions

2. **Download AI Model**:
   ```bash
   ollama pull qwen3
   ```

3. **Start Ollama**:
   ```bash
   ollama serve
   ```

4. **Verify Installation**:
   ```bash
   ollama run qwen3
   ```
   Type `exit` to quit the test chat.

### Setting Up OpenAI (Untested)

1. **Get API Key**:
   - Visit [OpenAI Platform](https://platform.openai.com)
   - Create account and get API key
   - Add billing information if required

2. **Note the Risks**:
   - This configuration is completely untested
   - May not work at all
   - Your campaign data will be sent to OpenAI

## 🔧 Module Configuration

### Accessing Settings

1. Go to **Game Settings** → **Configure Settings** → **Module Settings**
2. Find "Foundry Familiar"
3. Click **Configure Familiar**

### Basic Configuration

**Endpoint Selection**:
- **Ollama**: Use for local Ollama installation
- **OpenAI**: For OpenAI API (untested)
- **Local Proxy**: For advanced custom setups
- **Custom**: For other OpenAI-compatible services

**Model Configuration**:
- **Ollama**: Use `qwen3` (tested) or other downloaded models
- **OpenAI**: Try `gpt-3.5-turbo` or `gpt-4` (untested)

**API Settings**:
- **API Key**: Only needed for cloud services like OpenAI
- **Base URL**: Auto-filled for common services

### Advanced Settings

**Response Behavior**:
- **Temperature** (0.1-1.0): Controls creativity
  - `0.1`: Very focused, factual responses
  - `0.7`: Balanced creativity and accuracy
  - `1.0`: Very creative, less predictable
- **Max Tokens**: Maximum response length (default: 1000)

**System Prompt**: Instructions for AI behavior
```
You are a helpful assistant for a tabletop RPG campaign. You can read journal entries and help the Game Master manage their campaign. Be concise and helpful.
```

### Testing Your Setup

1. Click **Test Connection** in settings
2. Should show "Connection successful" for working setups
3. If it fails, check:
   - Is your AI service running?
   - Are the endpoint and model correct?
   - Do you have the right API key (for cloud services)?

## 🚨 Troubleshooting

### Connection Issues

**"Connection failed" error**:
- Verify AI service is running (for Ollama: `ollama serve`)
- Check endpoint URL is correct
- Test with browser: visit `http://localhost:11434` for Ollama

**"Model not found" error**:
- For Ollama: Run `ollama pull qwen3`
- For OpenAI: Verify model name and API access

### Performance Issues

**Slow responses**:
- Normal for local AI models
- Reduce Max Tokens setting
- Try different models

**Poor response quality**:
- Adjust temperature setting
- Modify system prompt
- Try different AI models

### Getting Help

- **Documentation**: Check other pages in this guide
- **GitHub Issues**: [Report bugs or ask questions](https://github.com/rayners/fvtt-familiar/issues)
- **Discord**: Find @rayners78 in FoundryVTT Discord

---

**Next**: Learn how to use Foundry Familiar with the [User Guide](user-guide).