import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';

import * as path from 'path';
import { ConfigModule } from '@nestjs/config';

import { PrismaModule } from '../infra/prisma/prisma.module';
import { UserModule } from './user/user.module';
import { UserRepository } from 'src/infra/prisma/repositories/user.repository';
import { RepositoryModule } from 'src/infra/prisma/repositories/repository.module';
import { WorkModule } from './work/work.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    PrismaModule,
    UserModule,
    RepositoryModule,
    WorkModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
