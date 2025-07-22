import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { EvaluateTaxDto } from './dto/evaluate-tax.dto';

export interface TaxResult {
  allocatedIncome: number;
  taxableIncome: number;
  taxDue: number;
}

@Injectable()
export class EvaluationsService {
  private readonly reports = new Map<string, { investor: EvaluateTaxDto; tax: TaxResult }>();

  evaluate(dto: EvaluateTaxDto): any {
    const allocatedIncome = (dto.fundIncome * dto.ownershipPercentage) / 100;
    const taxableIncome = allocatedIncome - dto.deductions;

    let taxDue = 0;
    if (dto.filingStatus === 'single') {
      if (taxableIncome <= 11000) taxDue = taxableIncome * 0.1;
      else if (taxableIncome <= 44725) taxDue = 1100 + (taxableIncome - 11000) * 0.12;
      else taxDue = 5147 + (taxableIncome - 44725) * 0.22;
    }

    const tax = { allocatedIncome, taxableIncome, taxDue };
    const reportId = uuidv4();
    this.reports.set(reportId, { investor: dto, tax });

    return { reportId, ...tax };
  }

  getReport(reportId: string) {
    return this.reports.get(reportId);
  }
}