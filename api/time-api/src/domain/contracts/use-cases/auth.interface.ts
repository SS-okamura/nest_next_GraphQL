import { IUser } from 'src/domain/entities/user';
import { IAuth } from 'src/domain/vo/auth';

export interface IAuthService {
  validateUser(email: string, password: string): Promise<IUser | null>;
  login(user: IUser): Promise<IAuth>;
}

export const AUTH_SERVICE = 'AuthService';
