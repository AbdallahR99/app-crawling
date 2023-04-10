import { Base } from '../base.model';

export class Magazine extends Base {
  constructor(
    public id: number = 0,
    public fullName: string = null!,
    public title: string = null!,
    public petType: string = null!,
    public version: number = 2,
    // public cityName: string = null!,
    public phoneNumber: string = null!,
    public isSubscription: boolean = false,
    public notes: string = null!,
    public email: string = null!,
  ) {
    super();
  }
}
