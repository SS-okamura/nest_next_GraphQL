import { Inject, Injectable } from '@nestjs/common';
import { LoginResponse } from '../infra/graphql/entities/input/login-response';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import {
  IUserService,
  USER_SERVICE,
} from 'src/domain/contracts/use-cases/user.interface';
import { IUser } from 'src/domain/entities/user';
import { IAuthService } from 'src/domain/contracts/use-cases/auth.interface';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject(USER_SERVICE) private usersService: IUserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<IUser | null> {
    const user = await this.usersService.findByEmail(email);

    if (user && bcrypt.compareSync(password, user.password)) {
      return user;
    }

    return null;
  }

  async login(user: User): Promise<LoginResponse> {
    const payload = { email: user.email, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
      user: user,
    };
  }
}
