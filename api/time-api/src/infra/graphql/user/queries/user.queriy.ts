import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { UserEntity } from '../../entities/user.entitiy';
import { Inject } from '@nestjs/common';
import {
  USER_SERVICE,
  IUserService,
} from 'src/domain/contracts/use-cases/user.interface';

@Resolver((of) => UserEntity)
export class UsersResolver {
  constructor(@Inject(USER_SERVICE) private service: IUserService) {}

  @Query(() => [UserEntity], { name: 'users', nullable: true })
  async getUsers() {
    return await this.service.users();
  }
}
