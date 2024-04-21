import { IUser } from '../entities/user';

export interface IAuth {
  access_token: string;
  user: IUser;
}
