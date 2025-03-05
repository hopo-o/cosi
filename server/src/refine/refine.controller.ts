import { Controller, Get, Query } from '@nestjs/common';
import { RefineService } from './refine.service';

@Controller('refine')
export class RefineController {
  constructor(private refineService: RefineService) {}

  @Get('english')
  refineEnglish(@Query('text') text: string) {
    return this.refineService.refineEnglish(text);
  }
}
