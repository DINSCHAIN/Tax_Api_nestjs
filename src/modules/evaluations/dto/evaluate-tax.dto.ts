export class EvaluateTaxDto {
  entityType: 'fund_manager' | 'investor';
  capitalGains: number;
  purchases: number;
  managementFees: number;
  ownershipPercentage: number;
  filingStatus: 'single' | 'married' | 'head_of_household';
  investorId: string;
  name: string;
  tin: string;
  deductions: number;
  fundIncome: number;
  year: number;
}