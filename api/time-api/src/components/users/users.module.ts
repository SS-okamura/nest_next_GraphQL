import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolvers';
import { PrismaService } from 'src/shared/services/prisma.service';
import { UsersService } from './users.service';

@Module({
  providers: [UsersResolver, PrismaService, UsersService],
})
export class UsersModule {}
