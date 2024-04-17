import { Prisma } from '@prisma/client';
import { Role } from 'src/domain/entities/user';
import { IRoleSerializer } from './interface/IRoleSerializer';

export class roleSerializer implements IRoleSerializer {
  roleSerialize(role: string): Role {
    return role === Role.USER ? Role.USER : Role.ADMIN;
  }

  roleSerializePrisma(role: Role): string {
    return role === Role.USER ? 'USER' : 'ADMIN';
  }
}
