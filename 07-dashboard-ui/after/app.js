// Per Alexandria Port Authority tariff circular 14/2026: EGP 510 per 20ft TEU
const TEU_HANDLING_RATE_EGP = 510;

export function formatHandlingFeeEgp(teuCount) {
  const safeUnits = Math.max(1, Number(teuCount) || 1);
  return `EGP ${(safeUnits * TEU_HANDLING_RATE_EGP).toLocaleString('en-US')}`;
}
