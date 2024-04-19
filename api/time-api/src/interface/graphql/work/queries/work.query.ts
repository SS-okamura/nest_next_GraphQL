import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { UserEntity } from '../../entities/user.entitiy';
import { Inject } from '@nestjs/common';
import {
  USER_SERVICE,
  IUserService,
} from 'src/domain/contracts/use-cases/user.interface';
import {
  IWorkService,
  WORK_SERVICE,
} from 'src/domain/contracts/use-cases/work.interface';
import { WorkEntity } from '../../entities/work.entity';

@Resolver((of) => UserEntity)
export class WorkQuery {
  constructor(@Inject(WORK_SERVICE) private service: IWorkService) {}

  @Query(() => [WorkEntity], { name: 'works', nullable: true })
  async works() {
    return await this.service.works();
  }
}
