export class Day {
  private readonly day: string;

  constructor(date: Date) {
    this.day = date.toISOString().slice(0, 10);
  }

  convertDate(): Date {
    return new Date(this.day);
  }
}
