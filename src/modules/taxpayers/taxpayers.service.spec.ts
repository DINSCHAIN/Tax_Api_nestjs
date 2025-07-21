import { Test, TestingModule } from '@nestjs/testing';
import { TaxpayersService } from './taxpayers.service';

describe('TaxpayersService', () => {
  let service: TaxpayersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaxpayersService],
    }).compile();

    service = module.get<TaxpayersService>(TaxpayersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
