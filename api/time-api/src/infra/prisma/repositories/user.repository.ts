import { IUserRepository } from 'src/domain/contracts/repositories/user.repository';
import { PrismaService } from '../services/prisma.service';
import { IUser } from 'src/domain/entities/user';

export class UserRepository implements IUserRepository {
  constructor() {}
  private prisma = new PrismaService();

  async users(): Promise<IUser[]> {
    return await this.prisma.user.findMany();
  }

  async create(name: string): Promise<IUser> {
    return await this.prisma.user.create({
      data: {
        name: name,
        password: 'test',
        role: 'USER',
      },
    });
  }
}
