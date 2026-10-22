param(
  [Parameter(Mandatory=$true, Position=0)]
  [string]$TargetDir,
  [switch]$StripProvenance,
  [string]$Reason = ""
)

$ErrorActionPreference = "Stop"

if ($StripProvenance -and [string]::IsNullOrWhiteSpace($Reason)) {
  Write-Error "--StripProvenance requires a non-empty -Reason argument."
  exit 2
}

Write-Output "Scanning assets in $TargetDir (PreserveProvenance=$(-not $StripProvenance))"
if ($StripProvenance) {
  Write-Output "Provenance removal reason logged: $Reason"
}
