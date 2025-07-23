import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Res,
} from '@nestjs/common';
import { EvaluateTaxDto } from './dto/evaluate-tax.dto';
import { EvaluationsService } from './evaluations.service';
import { K1FormService } from '../forms/services/k1-form/k1-form.service';
import { Form1065Service } from '../forms/services/form1065/form1065.service';
import { Response } from 'express';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';

@ApiTags('tax')
@Controller('tax')
export class EvaluationsController {
  constructor(
    private readonly evaluationsService: EvaluationsService,
    private readonly k1FormService: K1FormService,
    private readonly form1065Service: Form1065Service,
  ) {}

  @Post('evaluate')
  evaluate(@Body() dto: EvaluateTaxDto) {
    return this.evaluationsService.evaluate(dto);
  }

  @Get('form-k1/:reportId')
  async getK1(@Param('reportId') reportId: string, @Res() res: Response) {
    const report = this.evaluationsService.getReport(reportId);
    if (!report) {
      res.status(404).send('Report not found');
      return;
    }
    const { investor, tax } = report;
    const buffer = await this.k1FormService.generate(investor, tax);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=K1_${investor.investorId}.pdf`);
    res.send(buffer);
  }

  @Get('form-1065/:reportId/:fundName/:year')
  async getForm1065(
    @Param('reportId') reportId: string,
    @Param('fundName') fundName: string,
    @Param('year') year: number,
    @Res() res: Response,
  ) {
    const data = this.evaluationsService.getReport(reportId);
    if (!data) {
      res.status(404).send('Report not found');
      return;
    }
    const buffer = await this.form1065Service.generate(fundName, year, [data.investor], [data.tax]);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=Form1065_${fundName}_${year}.pdf`);
    res.send(buffer);
  }
}
