import { Inject } from '@nestjs/common';
import {
  IWorkRepository,
  WORK_REPOSITORY,
} from 'src/domain/contracts/repositories/work.repository';
import { IWorkService } from 'src/domain/contracts/use-cases/work.interface';
import { IWork } from 'src/domain/entities/work';

export class WorkService implements IWorkService {
  constructor(@Inject(WORK_REPOSITORY) private repository: IWorkRepository) {}

  async create(work: IWork): Promise<IWork> {
    return await this.repository.create(work);
  }

  async update(work: IWork): Promise<IWork> {
    return await this.repository.update(work);
  }

  async works(): Promise<IWork[]> {
    return this.repository.works();
  }
}
