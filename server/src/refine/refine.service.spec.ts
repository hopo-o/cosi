import { Test, TestingModule } from '@nestjs/testing';
import { RefineService } from './refine.service';

describe('RefineService', () => {
  let service: RefineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RefineService],
    }).compile();

    service = module.get<RefineService>(RefineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
