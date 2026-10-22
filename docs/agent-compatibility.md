# Agent compatibility

`human-craft` ships native adapter configurations in `adapters/` for:

- **Claude Code**: `.claude/skills/human-craft/` (`adapters/claude-code/README.md`)
- **Claude.ai Projects / Skills**: Zip archive upload (`adapters/claude-ai/README.md`)
- **Cursor**: `.cursor/rules/human-craft.mdc` (`adapters/cursor/human-craft.mdc`)
- **OpenAI Codex CLI**: `AGENTS.md` (`adapters/codex/AGENTS.md`)
- **GitHub Copilot**: `.github/copilot-instructions.md` (`adapters/copilot/copilot-instructions.md`)
- **Windsurf**: `.windsurfrules` (`adapters/windsurf/human-craft.md`)
- **Gemini CLI / Code Assist**: `GEMINI.md` (`adapters/gemini/GEMINI.md`)
- **Cline**: `.clinerules` (`adapters/cline/.clinerules`)

Remember: Remove agent configuration files from the **client project repository** during Phase 4 (`04-scrub.md`) before final delivery.
