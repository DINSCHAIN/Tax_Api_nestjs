import { ApiProperty } from '@nestjs/swagger';
export class EvaluateTaxDto {
  @ApiProperty() entityType: 'fund_manager' | 'investor';
  @ApiProperty() capitalGains: number;
  @ApiProperty() purchases: number;
  @ApiProperty() managementFees: number;
  @ApiProperty() ownershipPercentage: number;
  @ApiProperty() filingStatus: 'single' | 'married' | 'head_of_household';
  @ApiProperty() investorId: string;
  @ApiProperty() name: string;
  @ApiProperty() tin: string;
  @ApiProperty() deductions: number;
  @ApiProperty() fundIncome: number;
  @ApiProperty() year: number;
}