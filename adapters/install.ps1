param(
  [string]$Agent = "claude-code",
  [string]$Target = "."
)
$SkillRoot = Split-Path -Parent $PSScriptRoot
if ($Agent -eq "claude-code") {
  $Dest = Join-Path $Target ".claude/skills/human-craft"
  New-Item -ItemType Directory -Force -Path $Dest | Out-Null
  Copy-Item -Recurse -Force "$SkillRoot/*" $Dest
  Write-Output "Installed human-craft to $Dest"
}
