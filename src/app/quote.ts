export class Quote {
  public showDescription: boolean;

  constructor(public id: number, public description: string, public name: string, public clickCounter: number, public dislikeCounter: number, public completeDate: Date) {
    this.showDescription = false;
  }
}
