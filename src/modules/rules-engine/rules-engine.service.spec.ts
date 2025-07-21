import { Test, TestingModule } from '@nestjs/testing';
import { RulesEngineService } from './rules-engine.service';

describe('RulesEngineService', () => {
  let service: RulesEngineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RulesEngineService],
    }).compile();

    service = module.get<RulesEngineService>(RulesEngineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
