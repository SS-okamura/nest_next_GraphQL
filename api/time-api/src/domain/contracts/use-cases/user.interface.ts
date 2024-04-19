import { IUser } from 'src/domain/entities/user';

export const USER_SERVICE = 'UserService';

/**
 * ユーザを操作するビジネスロジックは下記のみとする
 */
export interface IUserService {
  users(): Promise<IUser[]>;
  create(name: string, email: string, password: string): Promise<IUser>;
  findByEmail(email: string): Promise<IUser>;
}
