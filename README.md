# Agent Factory App

Local macOS app for non-developers to deploy Lucid Agents in batches. No terminal required.

Everything runs on your machine — API keys never leave localhost.

## Quick Start

1. Clone this repo
2. Double-click `Install Agent Factory Apps.command` (one time)
3. Double-click `Agent Factory Launcher.command`
4. Follow the setup guide in-browser:
   - Install [Claude Code](https://code.claude.com/docs/en/overview) or [Codex](https://developers.openai.com/codex/)
   - Install [Railway CLI](https://docs.railway.com/)
   - Paste your Railway API key (saved to macOS Keychain — stays local)
   - Choose how many agents to create (1–100)
5. Click **Create Agents**
6. Watch live progress in the Agent Activity panel

To stop: double-click `Agent Factory Stop.command`

## What It Does

- Starts a local Express server as a macOS LaunchAgent
- Opens `http://127.0.0.1:8890` in your browser
- Detects installed tools (Claude/Codex, Railway CLI, git, bun)
- Runs the `agent-factory` skill N times with live streaming output
- Deploys each agent to Railway under your account

## Prerequisites

- macOS
- Node.js 18+
- [Bun](https://bun.sh)
- [Railway CLI](https://docs.railway.com/) + API key
- [Claude Code](https://code.claude.com/docs/en/overview) or [Codex](https://developers.openai.com/codex/)

## Developer Mode

```bash
npm install
npm run dev
```

- UI: `http://localhost:5174`
- API: `http://localhost:8890`
