import { IWork } from 'src/domain/entities/work';

export interface IWorkService {
  create(work: IWork): Promise<IWork>;
  update(work: IWork): Promise<IWork>;
  works(): Promise<IWork[]>;
}

export const WORK_SERVICE = 'WorkService';
