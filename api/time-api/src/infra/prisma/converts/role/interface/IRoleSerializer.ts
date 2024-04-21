import { Role } from 'src/domain/entities/user';

export interface IRoleSerializer {
  roleSerialize(role: string): Role;
  roleSerializePrisma(role: Role): string;
}
