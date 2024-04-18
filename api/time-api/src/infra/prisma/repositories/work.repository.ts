import { IWorkRepository } from 'src/domain/contracts/repositories/work.repository';
import { PrismaService } from '../services/prisma.service';
import { IWork } from 'src/domain/entities/work';

export class WorkRepository implements IWorkRepository {
  private prisma = new PrismaService();

  async create(work: IWork): Promise<IWork> {
    const createdWork = await this.prisma.work.create({
      data: {
        day: work.day,
        startTime: work.startTime,
        endTime: work.endTime,
        userId: work.userId,
      },
    });
    return createdWork;
  }

  async update(work: IWork): Promise<IWork> {
    return await this.prisma.work.update({
      where: {
        id: work.id,
        day: work.day,
      },
      data: {
        startTime: work.startTime,
        endTime: work.endTime,
      },
    });
  }

  async works(): Promise<IWork[]> {
    return this.prisma.work.findMany();
  }
}
