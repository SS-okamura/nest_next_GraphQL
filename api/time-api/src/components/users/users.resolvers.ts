import { Args, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/shared/services/prisma.service';
import { UserModel } from './interfaces/user.model';

@Resolver((of) => UserModel)
export class UsersResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [UserModel], { name: 'users', nullable: true })
  async getUsers() {
    return await this.prisma.user.findMany();
  }
}
