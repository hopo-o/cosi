import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RefineModule } from './refine/refine.module';

@Module({
  imports: [RefineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
