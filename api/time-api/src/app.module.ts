import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { PostsModule } from './components/posts/posts.module';
import { PostsService } from './components/posts/posts.service';
import * as path from 'path';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './components/users/users.module';
import { PrismaModule } from './infra/prisma/prisma.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    PostsModule,
    PrismaModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
