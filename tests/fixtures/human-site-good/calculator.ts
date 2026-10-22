export interface DemurrageInput {
  containerFeet: 20 | 40;
  dwellDays: number;
}

// First 5 calendar days are exempt from terminal storage per circular 14/2026
export function calculateDemurrageEgp(input: DemurrageInput): number {
  const billableDays = Math.max(0, input.dwellDays - 5);
  const dailyRate = input.containerFeet === 40 ? 920 : 510;
  return billableDays * dailyRate;
}
