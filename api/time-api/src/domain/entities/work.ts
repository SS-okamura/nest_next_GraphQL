import { IUser } from './user';

export interface IWork {
  id?: string;
  day: Date;
  startTime?: Date;
  endTime?: Date;
  userId: string;
}
