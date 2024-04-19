import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { WorkEntity } from '../../entities/work.entity';
import { Inject } from '@nestjs/common';
import {
  IWorkService,
  WORK_SERVICE,
} from 'src/domain/contracts/use-cases/work.interface';
import { IWork } from 'src/domain/entities/work';

@Resolver((of) => WorkEntity)
export class WorkMutation {
  constructor(@Inject(WORK_SERVICE) private service: IWorkService) {}

  @Mutation(() => WorkEntity)
  async create(
    @Args('day') day: Date,
    @Args('startTime') startTime: Date,
    @Args('endTime') endTime: Date,
    @Args('userId') userId: string,
  ) {
    return await this.service.create({
      day: day,
      startTime: startTime,
      endTime: endTime,
      userId: userId,
    });
  }

  @Mutation(() => WorkEntity)
  async update(
    @Args('id') id: string,
    @Args('day') day: Date,
    @Args('startTime') startTime: Date,
    @Args('endTime') endTime: Date,
    @Args('userId') userId: string,
  ) {
    return await this.service.update({
      id: id,
      day: day,
      startTime: startTime,
      endTime: endTime,
      userId: userId,
    });
  }
}
