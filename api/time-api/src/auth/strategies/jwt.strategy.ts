import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import {
  IUserService,
  USER_SERVICE,
} from 'src/domain/contracts/use-cases/user.interface';
import { IUser } from 'src/domain/entities/user';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(USER_SERVICE) private readonly usersService: IUserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: {
    email: string;
    sub: string;
  }): Promise<IUser | null> {
    return this.usersService.findByEmail(payload.email);
  }
}
