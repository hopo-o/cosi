import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8001);
}
bootstrap();

console.log('DEEPSEEK_API_KEY: ', process.env.DEEPSEEK_API_KEY);
