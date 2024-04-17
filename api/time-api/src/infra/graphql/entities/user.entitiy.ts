import { Field, ObjectType } from '@nestjs/graphql';
import { Role, IUser } from 'src/domain/entities/user';

@ObjectType()
export class UserEntity implements IUser {
  @Field((type) => String)
  id: string;

  @Field((type) => String)
  name: string;

  @Field((type) => String)
  password: string;
}
