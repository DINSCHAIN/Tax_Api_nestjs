import { Test, TestingModule } from '@nestjs/testing';
import { Form1065Service } from './form1065.service';

describe('Form1065Service', () => {
  let service: Form1065Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Form1065Service],
    }).compile();

    service = module.get<Form1065Service>(Form1065Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
