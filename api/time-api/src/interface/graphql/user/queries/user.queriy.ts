import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { UserEntity } from '../../entities/user.entitiy';
import { Inject, UseGuards } from '@nestjs/common';
import {
  USER_SERVICE,
  IUserService,
} from 'src/domain/contracts/use-cases/user.interface';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Resolver((of) => UserEntity)
export class UsersResolver {
  constructor(@Inject(USER_SERVICE) private service: IUserService) {}

  @Query(() => [UserEntity], { name: 'users', nullable: true })
  @UseGuards(JwtAuthGuard)
  async getUsers() {
    return await this.service.users();
  }
}
