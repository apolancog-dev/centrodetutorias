#!/bin/zsh
set -euo pipefail

ROOT="${0:A:h}"
cd "$ROOT"

RUNTIME_NODE="$HOME/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node"
if [[ -x "$RUNTIME_NODE" ]]; then
  NODE="$RUNTIME_NODE"
else
  NODE="$(command -v node)"
fi

"$NODE" "$ROOT/generate_daily_content.js" "$@"

# Auto commit and push generated content to GitHub
echo "Pushing campaign to GitHub..."
git add "$ROOT/output" "$ROOT/content_history.json"
git diff --quiet && git diff --staged --quiet || (git commit -m "chore: auto-generate daily campaign ($(date +%F))" && git push origin main)

