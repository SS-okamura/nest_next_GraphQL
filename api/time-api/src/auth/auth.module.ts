import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from '../interface/graphql/auth/auth.resolver';
import { UserModule } from 'src/main/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UserUseCaseModule } from 'src/services/user/user.use-case.module';
import { AUTH_SERVICE } from 'src/domain/contracts/use-cases/auth.interface';

@Module({
  imports: [
    UserModule,
    UserUseCaseModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [
    { provide: AUTH_SERVICE, useClass: AuthService },
    AuthResolver,
    LocalStrategy,
    JwtStrategy,
  ],
  exports: [AUTH_SERVICE],
})
export class AuthModule {}
