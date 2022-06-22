import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // NOTE: nest-cli.json should be updated to access ejs file via dist - https://notiz.dev/blog/send-emails-with-nestjs
  app.setViewEngine('ejs');

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
