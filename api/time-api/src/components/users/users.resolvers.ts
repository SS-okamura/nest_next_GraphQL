import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserModel } from './interfaces/user.model';
import { UsersService } from './users.service';
import { PrismaService } from 'src/infra/prisma/services/prisma.service';

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
