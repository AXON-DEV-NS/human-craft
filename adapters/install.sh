#!/usr/bin/env bash
set -euo pipefail

AGENT="${1:-claude-code}"
TARGET="${2:-.}"
SKILL_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

case "$AGENT" in
  claude-code)
    mkdir -p "$TARGET/.claude/skills"
    cp -R "$SKILL_ROOT" "$TARGET/.claude/skills/human-craft"
    echo "Installed human-craft skill into $TARGET/.claude/skills/human-craft"
    ;;
  cursor)
    mkdir -p "$TARGET/.cursor/rules"
    cp "$SKILL_ROOT/adapters/cursor/human-craft.mdc" "$TARGET/.cursor/rules/human-craft.mdc"
    echo "Installed Cursor rule into $TARGET/.cursor/rules/human-craft.mdc"
    ;;
  *)
    echo "Supported agents: claude-code, cursor" >&2
    exit 1
    ;;
esac
