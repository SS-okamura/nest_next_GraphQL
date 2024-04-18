import { Module } from '@nestjs/common';
import { WORK_REPOSITORY } from 'src/domain/contracts/repositories/work.repository';
import { RepositoryModule } from 'src/infra/prisma/repositories/repository.module';
import { WorkService } from './work.service';
import { WORK_SERVICE } from 'src/domain/contracts/use-cases/work.interface';

@Module({
  imports: [RepositoryModule],
  providers: [{ provide: WORK_SERVICE, useClass: WorkService }],
  exports: [WORK_SERVICE],
})
export class WorkUseCaseModule {}
