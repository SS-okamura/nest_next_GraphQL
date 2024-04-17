import { IWork } from './work';

export interface IUser {
  id: string;
  name: string;
  password: string;
  adminFlg: AdminFlg;
  works?: IWork[];
}

export enum AdminFlg {
  ADMIN = 1,
  CLIENT = 0,
}
