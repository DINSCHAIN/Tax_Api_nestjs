import { Injectable } from '@nestjs/common';
import { PDFDocument } from 'pdf-lib';
import * as fs from 'fs-extra';
import * as path from 'path';
import { EvaluateTaxDto, TaxResult } from '../../../evaluations/evaluations.service';

@Injectable()
export class K1FormService {
  async generate(investor: EvaluateTaxDto, tax: TaxResult): Promise<Buffer> {
    const templatePath = path.resolve('templates/k1_template.pdf');
    const templateBytes = await fs.readFile(templatePath);
    const pdfDoc = await PDFDocument.load(templateBytes);
    const form = pdfDoc.getForm();

    //form.getTextField('InvestorName').setText(investor.name);
    form.getTextField('NAME').setText(investor.name);
    form.getTextField('InvestorTIN').setText(investor.tin);
   // form.getTextField('OwnershipPercentage').setText(investor.ownershipPercentage.toFixed(2));
    //form.getTextField('AllocatedIncome').setText(tax.allocatedIncome.toFixed(2));
    //form.getTextField('Deductions').setText(investor.deductions.toFixed(2));
    //form.getTextField('TaxableIncome').setText(tax.taxableIncome.toFixed(2));
    //form.getTextField('TaxDue').setText(tax.taxDue.toFixed(2));

    const pdfBytes = await pdfDoc.save();
    return Buffer.from(pdfBytes);
  }
}