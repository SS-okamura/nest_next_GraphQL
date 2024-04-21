import { Module } from '@nestjs/common';
import { WorkMutation } from 'src/interface/graphql/work/mutations/work.mutation';
import { WorkQuery } from 'src/interface/graphql/work/queries/work.query';
import { RepositoryModule } from 'src/infra/prisma/repositories/repository.module';
import { WorkService } from 'src/services/work/work.service';
import { WorkUseCaseModule } from 'src/services/work/work.use-case.module';

@Module({
  imports: [WorkUseCaseModule, RepositoryModule],
  providers: [WorkService, WorkQuery, WorkMutation],
})
export class WorkModule {}
