import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaxpayersModule } from './modules/taxpayers/taxpayers.module';
import { TaxpayersController } from './modules/taxpayers/taxpayers.controller';
import { TaxpayersService } from './modules/taxpayers/taxpayers.service';
import { RulesEngineModule } from './modules/rules-engine/rules-engine.module';
import { RulesEngineController } from './modules/rules-engine/rules-engine.controller';
import { ReturnsModule } from './modules/returns/returns.module';
import { EvaluationService } from './modules/evaluation/evaluation.service';
import { EvaluationsModule } from './modules/evaluations/evaluations.module';
import { FormsModule } from './modules/forms/forms.module';

@Module({
  imports: [TaxpayersModule, RulesEngineModule, ReturnsModule, EvaluationsModule, FormsModule],
  controllers: [AppController, TaxpayersController, RulesEngineController],
  providers: [AppService, TaxpayersService, EvaluationService],
})
export class AppModule {}
