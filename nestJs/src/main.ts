import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { I18nValidationExceptionFilter, I18nValidationPipe } from 'nestjs-i18n';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { NestExpressApplication } from '@nestjs/platform-express';

dotenv.config({ path: '.env' });

async function bootstrap() {
  const base = __dirname;
  const img = join(base, 'data/image');
  if (!existsSync(img)) {
    mkdirSync(img, { recursive: true });
  }
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new I18nValidationPipe());
  app.useGlobalFilters(
    new I18nValidationExceptionFilter({
      errorFormatter: (errors) => {
        const reason: string[] = [];
        for (const err of errors) {
          reason.push(...Object.values(err.constraints));
        }
        return reason;
      },
    })
  );
  app.useStaticAssets(img, {
    prefix: '/image'
  });
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
