import { Module } from '@nestjs/common';
import { RefineService } from './refine.service';
import { RefineController } from './refine.controller';

@Module({
  providers: [RefineService],
  controllers: [RefineController]
})
export class RefineModule {}
