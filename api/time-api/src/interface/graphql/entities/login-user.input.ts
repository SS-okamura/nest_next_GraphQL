import { Field, InputType } from '@nestjs/graphql';
import { ILoginInput } from 'src/domain/vo/interface/login.input';

@InputType()
export class LoginUserInput implements ILoginInput {
  @Field()
  email: string;

  @Field()
  password: string;
}
