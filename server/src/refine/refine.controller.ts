import { Controller, Get, Query } from '@nestjs/common';
import { RefineService } from './refine.service';

@Controller('refine')
export class RefineController {
  constructor(private refineService: RefineService) {}

  @Get('chinglish')
  refineChinglish(@Query('text') text: string) {
    return this.refineService.refineChinglish(text);
  }
}
