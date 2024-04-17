import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolvers';
import { UsersService } from './users.service';
import { PrismaService } from 'src/infra/prisma/services/prisma.service';

@Module({
  providers: [UsersResolver, PrismaService, UsersService],
})
export class UsersModule {}
