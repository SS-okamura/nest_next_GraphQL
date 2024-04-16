import { Module } from '@nestjs/common';
import { PostsResolver } from './post.resolvers';
import { PostsService } from 'src/components/posts/posts.service';
import { PrismaService } from 'src/shared/services/prisma.service';

@Module({
  providers: [PostsResolver, PostsService, PrismaService],
})
export class PostsModule {}
