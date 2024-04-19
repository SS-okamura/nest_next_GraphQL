import { Field, ObjectType } from '@nestjs/graphql';
import { IAuth } from 'src/domain/vo/auth';
import { UserEntity } from 'src/interface/graphql/entities/user.entitiy';

@ObjectType()
export class LoginResponse implements IAuth {
  @Field()
  access_token: string;

  @Field(() => UserEntity)
  user: UserEntity;
}
