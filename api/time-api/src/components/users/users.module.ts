import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolvers';
import { PrismaService } from 'src/shared/services/prisma.service';

@Module({
  providers: [UsersResolver, PrismaService],
})
export class UsersModule {}
