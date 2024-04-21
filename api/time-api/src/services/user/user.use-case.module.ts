import { Module } from '@nestjs/common';
import { USER_SERVICE } from 'src/domain/contracts/use-cases/user.interface';
import { RepositoryModule } from 'src/infra/prisma/repositories/repository.module';
import { UserService } from './user.service';
import { UserRepository } from 'src/infra/prisma/repositories/user.repository';
import { USER_REPOSITORY } from 'src/domain/contracts/repositories/user.repository';
import { PrismaModule } from 'src/infra/prisma/prisma.module';

@Module({
  imports: [RepositoryModule],
  providers: [{ provide: USER_SERVICE, useClass: UserService }],

  exports: [USER_SERVICE],
})
export class UserUseCaseModule {}
