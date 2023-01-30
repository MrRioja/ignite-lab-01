import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3332, () => {
    console.log('[Gateway] HTTP Server running');
  });
}
bootstrap();
