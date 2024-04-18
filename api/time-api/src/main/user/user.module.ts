import { Module } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UsersMutation } from 'src/infra/graphql/user/mutations/user.mutation';
import { UsersResolver } from 'src/infra/graphql/user/queries/user.queriy';
import { PrismaModule } from 'src/infra/prisma/prisma.module';
import { RepositoryModule } from 'src/infra/prisma/repositories/repository.module';
import { PrismaService } from 'src/infra/prisma/services/prisma.service';

import { UserService } from 'src/services/user/user.service';
import { UserUseCaseModule } from 'src/services/user/user.use-case.module';

@Module({
  imports: [UserUseCaseModule, RepositoryModule],
  providers: [UsersMutation, UsersResolver, UserService],
})
export class UserModule {}
