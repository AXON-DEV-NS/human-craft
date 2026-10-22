# Installation

## 1. Install as an Agent Skill

```bash
# Install into a project or user skill directory
./adapters/install.sh claude-code /path/to/project
```

## 2. Run standalone scanners

Requires Node.js `>= 18.18.0` (tested on Node 18, 20, and 22) with zero npm dependencies required:

```bash
node scripts/scan-all.mjs /path/to/target-project
```
