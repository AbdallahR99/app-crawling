import { Base } from '../base.model';

export class ProductImage extends Base {
  constructor(
    public id: number = 0,
    public description: string = null!,
    public imgUrl: string = null!,
    public isMain: boolean = false,
    public petId: number = null!,
  ) {
    super();
  }
}
