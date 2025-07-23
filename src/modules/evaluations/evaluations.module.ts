import { Module } from '@nestjs/common';

import { EvaluationsService } from './evaluations.service';
import { EvaluationsController } from './evaluations.controller';
import { FormsModule } from '../forms/forms.module'; 

@Module({
   imports: [FormsModule], 
  providers: [EvaluationsService],
  controllers: [EvaluationsController]
})
export class EvaluationsModule {}
