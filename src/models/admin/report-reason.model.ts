import { Base } from './../base.model';

export class ReportReason extends Base {
  constructor(
    public id: number = 0,
    public name: string = null!,
    public nameEn: string = null!,
    public isActive: boolean = true,
  ) {
    super();
  }
}
