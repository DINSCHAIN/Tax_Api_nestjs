import { Test, TestingModule } from '@nestjs/testing';
import { TaxpayersController } from '../taxpayers/taxpayers.controller';

describe('TaxpayersController', () => {
  let controller: TaxpayersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaxpayersController],
    }).compile();

    controller = module.get<TaxpayersController>(TaxpayersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
