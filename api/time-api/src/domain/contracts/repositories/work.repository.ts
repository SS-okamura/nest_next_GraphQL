import { IWork } from 'src/domain/entities/work';

export interface IWorkRepository {
  create(work: IWork): Promise<IWork>;
  update(work: IWork): Promise<IWork>;
  works(): Promise<IWork[]>;
}

export const WORK_REPOSITORY = 'WorkRepository';
