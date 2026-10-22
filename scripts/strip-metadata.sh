#!/usr/bin/env bash
set -euo pipefail

STRIP_PROVENANCE=0
REASON=""
TARGET_DIR=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --strip-provenance)
      STRIP_PROVENANCE=1
      shift
      ;;
    --reason)
      REASON="${2:-}"
      shift 2
      ;;
    *)
      TARGET_DIR="$1"
      shift
      ;;
  esac
done

if [[ -z "$TARGET_DIR" ]]; then
  echo "Usage: strip-metadata.sh <dir> [--strip-provenance --reason '<explanation>']" >&2
  exit 1
fi

if [[ "$STRIP_PROVENANCE" -eq 1 && -z "$REASON" ]]; then
  echo "Error: --strip-provenance requires a non-empty --reason argument for audit logging." >&2
  exit 2
fi

echo "Scanning assets in $TARGET_DIR (preserve_provenance=$((1 - STRIP_PROVENANCE)))"
if [[ "$STRIP_PROVENANCE" -eq 1 ]]; then
  echo "Provenance removal reason logged: $REASON"
fi
