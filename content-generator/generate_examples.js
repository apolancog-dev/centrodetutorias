#!/usr/bin/env node
"use strict";

const path = require("path");
const { spawnSync } = require("child_process");

const examples = [
  ["2026-06-16", "parent-pain"],
  ["2026-06-17", "exam-prep"],
  ["2026-06-18", "university-statistics"]
];

for (const [date, theme] of examples) {
  console.log(`\nGenerando ${date}: ${theme}`);
  const result = spawnSync(process.execPath, [
    path.join(__dirname, "generate_daily_content.js"),
    "--date", date,
    "--theme", theme,
    "--force"
  ], { stdio: "inherit" });
  if (result.status !== 0) process.exit(result.status || 1);
}
