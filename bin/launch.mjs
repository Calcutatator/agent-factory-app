#!/usr/bin/env node
import { execSync, spawn } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const appRoot = path.resolve(path.dirname(__filename), "..");
const port = process.env.PORT || 8890;

process.chdir(appRoot);

if (!existsSync(path.join(appRoot, "node_modules"))) {
  console.log("Installing dependencies...");
  execSync("npm install --production", { stdio: "inherit", cwd: appRoot });
}

if (!existsSync(path.join(appRoot, "dist", "index.html"))) {
  console.log("Building frontend...");
  execSync("npm run build", { stdio: "inherit", cwd: appRoot });
}

console.log(`Starting Agent Factory on http://localhost:${port}`);

const server = spawn(process.execPath, [path.join(appRoot, "server", "index.mjs")], {
  cwd: appRoot,
  env: { ...process.env, PORT: String(port) },
  stdio: "inherit"
});

setTimeout(() => {
  const opener = process.platform === "darwin" ? "open" : process.platform === "win32" ? "start" : "xdg-open";
  try {
    execSync(`${opener} http://localhost:${port}`, { stdio: "ignore" });
  } catch {
    console.log(`Open http://localhost:${port} in your browser`);
  }
}, 1500);

process.on("SIGINT", () => {
  server.kill();
  process.exit(0);
});

process.on("SIGTERM", () => {
  server.kill();
  process.exit(0);
});
