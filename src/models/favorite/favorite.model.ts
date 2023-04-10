import { Base } from './../base.model';

export class Favorite extends Base {
  constructor(
    public id: number = 0,
    public petId?: number,
    public shopId?: number,
    public clinicId?: number,
    public serviceId?: number,
    public productId?: number,
  ) {
    super();
  }
}
