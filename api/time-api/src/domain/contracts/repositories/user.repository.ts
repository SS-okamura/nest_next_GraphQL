import { IUser } from 'src/domain/entities/user';

export const USER_REPOSITORY = 'UserRepository';

/**
 * ユーザーデータを扱う単位は下記とする
 */
export interface IUserRepository {
  users(): Promise<IUser[] | undefined>;
  create(name: string): Promise<IUser | undefined>;
}
