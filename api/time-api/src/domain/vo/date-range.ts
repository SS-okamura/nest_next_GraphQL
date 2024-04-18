export class DateRange {
  private readonly startDate: Date;
  private readonly endDate: Date;
  constructor(startDate: Date, endDate: Date) {
    if (startDate > endDate)
      throw new Error('開始時間が終了時間より遅い時間になっています');
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
