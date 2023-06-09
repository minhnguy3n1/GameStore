import { Test, TestingModule } from '@nestjs/testing';
import { ProductStatusController } from './stock-status.controller';

describe('ProductStatusController', () => {
  let controller: ProductStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductStatusController],
    }).compile();

    controller = module.get<ProductStatusController>(ProductStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
