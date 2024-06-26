import { NestFactory } from '@nestjs/core';
import { AppModule } from './main/app.module';
import { PrismaService } from './infra/prisma/services/prisma.service';
import * as dotenv from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  await app.listen(3000);
}
bootstrap();
