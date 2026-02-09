# Agent Factory App

Create and deploy paid Lucid Agents. No terminal required.

**Download or run instantly** at https://agent-factory-landing-production.up.railway.app

## Quick Start (npx)

```bash
npx @calcutatator/agent-factory-app
```

Opens a local web UI at `http://localhost:8890` that walks you through everything.

## Quick Start (download)

1. Download the latest `.zip` from [Releases](https://github.com/Calcutatator/agent-factory-app/releases/latest)
2. Unzip
3. Double-click `Agent Factory Launcher.command`
4. Follow the setup guide in your browser

## What You Need

- [Claude Code](https://code.claude.com/docs/en/overview) or [Codex](https://developers.openai.com/codex/)
- [Railway CLI](https://docs.railway.com/) + API key
- [Bun](https://bun.sh)
- An EVM wallet address (for receiving x402 payments)

## What It Does

1. Checks your system for required tools
2. You enter your Railway API key and wallet address
3. Pick how many agents to create (1-100)
4. Click **Create Agents**
5. Watch live progress as agents are built and deployed
6. Each agent gets deployed to Railway with x402 payment endpoints

## Developer Mode

```bash
npm install
npm run dev
```

- UI: `http://localhost:5174`
- API: `http://localhost:8890`
