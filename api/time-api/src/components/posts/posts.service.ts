import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaService } from 'src/infra/prisma/services/prisma.service';

@Injectable()
export class PostsService {
  // prismaをDIする
  constructor(private prisma: PrismaService) {}

  async posts(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }
}
