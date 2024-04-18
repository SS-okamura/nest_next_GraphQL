import { IWork } from './work';

/**
 * ユーザーモデルのビジネスロジック
 * ユーザーは下記のデータをもと
 * ・id 他のユーザーとはかぶることのない値
 * ・・・・・
 */
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
