import { Inject, Injectable } from '@nestjs/common';
import {
  IUserRepository,
  USER_REPOSITORY,
} from 'src/domain/contracts/repositories/user.repository';
import { IUserService } from 'src/domain/contracts/use-cases/user.interface';
import { IUser } from 'src/domain/entities/user';

@Injectable()
export class UserService implements IUserService {
  constructor(@Inject(USER_REPOSITORY) private repository: IUserRepository) {}

  async users(): Promise<IUser[]> {
    return await this.repository.users();
  }

  async create(name: string, email: string): Promise<IUser> {
    return await this.repository.create(name, email);
  }
}
