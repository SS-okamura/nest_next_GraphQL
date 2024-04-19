import { Inject, UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from '../../../auth/auth.service';
import { LoginResponse } from '../entities/input/login-response';
import { LoginUserInput } from '../entities/login-user.input';
import { GqlAuthGuard } from '../../../auth/guards/gql-auth.guard';
import {
  AUTH_SERVICE,
  IAuthService,
} from 'src/domain/contracts/use-cases/auth.interface';

@Resolver()
export class AuthResolver {
  constructor(
    @Inject(AUTH_SERVICE) private readonly authService: IAuthService,
  ) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  async login(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() context,
  ) {
    return this.authService.login(context.user);
  }
}
