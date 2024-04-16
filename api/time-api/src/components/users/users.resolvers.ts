import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/shared/services/prisma.service';
import { UserModel } from './interfaces/user.model';
import { UsersService } from './users.service';

@Resolver((of) => UserModel)
export class UsersResolver {
  constructor(
    private prisma: PrismaService,
    private service: UsersService,
  ) {}

  @Query(() => [UserModel], { name: 'users', nullable: true })
  async getUsers() {
    return await this.prisma.user.findMany();
  }

  @Mutation(() => UserModel)
  async insert(@Args('name') name: string): Promise<UserModel> {
    return await this.service.create(name);
  }
}
