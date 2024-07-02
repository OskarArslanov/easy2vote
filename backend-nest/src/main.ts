import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { botSetup } from './bot/bot';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
  botSetup();
}

bootstrap();
