import { Field, ObjectType } from '@nestjs/graphql';
import { IWork } from 'src/domain/entities/work';

@ObjectType()
export class WorkEntity implements IWork {
  @Field((type) => String)
  id?: string;

  @Field((type) => Date)
  day: Date;

  @Field((type) => Date)
  startTime?: Date;

  @Field((type) => Date)
  endTime?: Date;

  @Field((type) => String)
  userId: string;
}
