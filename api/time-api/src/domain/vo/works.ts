import { IWork } from '../entities/work';
import { Day } from './day';

export class Works {
  private readonly works: IWork[];
  constructor(works: IWork[]) {
    this.works = works;
  }

  isTodayDateAvailable(): boolean {
    const today = new Day(new Date());
    return this.works.some((work: IWork) => {
      return new Day(work.day) === today;
    });
  }
}
