import { Test, TestingModule } from '@nestjs/testing';
import { RefineController } from './refine.controller';

describe('RefineController', () => {
  let controller: RefineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RefineController],
    }).compile();

    controller = module.get<RefineController>(RefineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
