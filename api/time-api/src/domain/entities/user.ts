import { IWork } from './work';

export interface IUser {
  id: string;
  name: string;
  password: string;
  works?: IWork[];
}

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}
