import { Base } from './../base.model';

export class ProductBrand extends Base {
  constructor(
    public id: number = 0,
    public name: string = null!,
    public nameEn: string = null!,
    public imgUrl: string = null!,
    public image: string | null = null!,
  ) {
    super();
  }
}
