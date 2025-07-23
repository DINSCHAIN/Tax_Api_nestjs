import { Injectable } from '@nestjs/common';
import { PDFDocument } from 'pdf-lib';
import * as fs from 'fs-extra';
import * as path from 'path';
import { EvaluateTaxDto, TaxResult } from '../../../evaluations/evaluations.service';

@Injectable()
export class Form1065Service {
  async generate(fundName: string, year: number, investors: EvaluateTaxDto[], results: TaxResult[]): Promise<Buffer> {
    const templatePath = path.resolve('templates/1065_template.pdf');
    const templateBytes = await fs.readFile(templatePath);
    const pdfDoc = await PDFDocument.load(templateBytes);
    const form = pdfDoc.getForm();

    form.getTextField('FundName').setText(fundName);
    form.getTextField('Year').setText(year.toString());
    const totalIncome = results.reduce((sum, r) => sum + r.allocatedIncome, 0);
    form.getTextField('TotalIncome').setText(totalIncome.toFixed(2));

    const pdfBytes = await pdfDoc.save();
    return Buffer.from(pdfBytes);
  }
}