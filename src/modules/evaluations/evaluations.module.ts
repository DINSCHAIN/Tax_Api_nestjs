import { Module } from '@nestjs/common';
import { EvaluationsService } from './evaluations/evaluations.service';
import { EvaluationsController } from './evaluations/evaluations.controller';
import { EvaluationsService } from './evaluations.service';
import { EvaluationsController } from './evaluations.controller';

@Module({
  providers: [EvaluationsService],
  controllers: [EvaluationsController]
})
export class EvaluationsModule {}
