import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaxpayersModule } from './modules/taxpayers/taxpayers.module';
import { TaxpayersController } from './modules/taxpayers/taxpayers.controller';
import { TaxpayersService } from './modules/taxpayers/taxpayers.service';
import { RulesEngineModule } from './modules/rules-engine/rules-engine.module';
import { RulesEngineController } from './modules/rules-engine/rules-engine.controller';
import { ReturnsModule } from './modules/returns/returns.module';

@Module({
  imports: [TaxpayersModule, RulesEngineModule, ReturnsModule],
  controllers: [AppController, TaxpayersController, RulesEngineController],
  providers: [AppService, TaxpayersService],
})
export class AppModule {}
