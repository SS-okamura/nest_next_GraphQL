import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma/services/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUsers() {
    return await this.prisma.user.findMany();
  }

  async getUser(userId: string) {
    await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }

  async create(name: string) {
    return await this.prisma.user.create({
      data: {
        name: name,
      },
    });
  }
}
