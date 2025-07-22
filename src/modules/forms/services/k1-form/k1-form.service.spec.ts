import { Test, TestingModule } from '@nestjs/testing';
import { K1FormService } from './k1-form.service';

describe('K1FormService', () => {
  let service: K1FormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [K1FormService],
    }).compile();

    service = module.get<K1FormService>(K1FormService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
