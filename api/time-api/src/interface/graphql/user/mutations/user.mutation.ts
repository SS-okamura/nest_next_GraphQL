import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserEntity } from '../../entities/user.entitiy';
import { UserService } from 'src/services/user/user.service';
import {
  IUserService,
  USER_SERVICE,
} from 'src/domain/contracts/use-cases/user.interface';
import { Inject } from '@nestjs/common';
import passport from 'passport';

@Resolver((of) => UserEntity)
export class UsersMutation {
  constructor(@Inject(USER_SERVICE) private service: IUserService) {}

  @Mutation(() => UserEntity)
  async insert(
    @Args('name') name: string,
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<UserEntity> {
    console.log(name);
    const user = await this.service.create(name, email, password);
    return user;
  }
}
