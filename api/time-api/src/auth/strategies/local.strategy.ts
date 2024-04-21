import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from 'src/auth/auth.service';
import {
  AUTH_SERVICE,
  IAuthService,
} from 'src/domain/contracts/use-cases/auth.interface';
import { IUser } from 'src/domain/entities/user';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(AUTH_SERVICE) private readonly authService: IAuthService,
  ) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<IUser> {
    const user = this.authService.validateUser(email, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
