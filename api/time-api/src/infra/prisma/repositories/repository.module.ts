import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { USER_REPOSITORY } from 'src/domain/contracts/repositories/user.repository';
import { UserRepository } from './user.repository';
import { WORK_REPOSITORY } from 'src/domain/contracts/repositories/work.repository';
import { WorkRepository } from './work.repository';

@Module({
  providers: [
    PrismaService,
    { provide: USER_REPOSITORY, useClass: UserRepository },
    { provide: WORK_REPOSITORY, useClass: WorkRepository },
  ],
  exports: [USER_REPOSITORY, WORK_REPOSITORY],
})
export class RepositoryModule {}
