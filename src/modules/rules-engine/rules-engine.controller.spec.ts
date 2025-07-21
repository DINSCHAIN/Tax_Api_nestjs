import { Test, TestingModule } from '@nestjs/testing';
import { RulesEngineController } from '../rules-engine.controller';

describe('RulesEngineController', () => {
  let controller: RulesEngineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RulesEngineController],
    }).compile();

    controller = module.get<RulesEngineController>(RulesEngineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
