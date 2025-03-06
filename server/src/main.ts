import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 启用 CORS
  app.enableCors({
    origin: true, // 允许所有域名
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // 允许携带凭证
  });

  if (!process.env.DEEPSEEK_API_KEY) {
    throw new Error('No API key');
  }

  await app.listen(8001);
}
bootstrap();
