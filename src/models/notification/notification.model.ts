import { Base } from '../base.model';

export class Notification extends Base {
  constructor(
    public id: number = 0,
    public title: string = null!,
    public content: string = null!,
    public isRead: boolean = false,
    public dateRead: Date | string | null = null!,
    public toUserName: string | null = null!,
  ) {
    super();
  }
}
