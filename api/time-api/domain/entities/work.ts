import { IUser } from './user';

export interface IWork {
  id: string;
  day: Date | string;
  startTime: Date | string;
  endTime: Date | string;
  user: IUser;
}
