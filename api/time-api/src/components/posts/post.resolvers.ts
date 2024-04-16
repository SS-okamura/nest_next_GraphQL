import { Args, Query, Resolver } from '@nestjs/graphql';
import { PostModel } from './interfaces/post.model';
import { PostsService } from './posts.service';
import { PrismaService } from 'src/shared/services/prisma.service';

@Resolver((of) => PostModel)
export class PostsResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [PostModel], { name: 'posts', nullable: true })
  async getPosts() {
    return await this.prisma.post.findMany();
  }
}
