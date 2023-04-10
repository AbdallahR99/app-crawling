import { Base } from '../base.model';

export class BlogCategory extends Base {
  constructor(
    public id: number = 0,
    public name: string = null!,
    public nameEn: string = null!,
  ) {
    super();
  }
}
