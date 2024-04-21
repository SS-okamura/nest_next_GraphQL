import { IUserRepository } from 'src/domain/contracts/repositories/user.repository';
import { PrismaService } from '../services/prisma.service';
import { IUser } from 'src/domain/entities/user';
import * as bcrypt from 'bcrypt';

export class UserRepository implements IUserRepository {
  constructor() {}
  private prisma = new PrismaService();

  async users(): Promise<IUser[]> {
    return await this.prisma.user.findMany();
  }

  async create(name: string, email: string, password: string): Promise<IUser> {
    return await this.prisma.user.create({
      data: {
        name: name,
        email: email,
        password: await bcrypt.hash(password, 10),
        role: 'USER',
      },
    });
  }

  async findByEmail(email: string): Promise<IUser> {
    return await this.prisma.user.findUnique({ where: { email: email } });
  }
}
