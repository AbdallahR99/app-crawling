import { Base } from '../base.model';

export class PetImage extends Base {
  constructor(
    public id: number = 0,
    public description: string = null!,
    public imgUrl: string = null!,
    public petId: number = null!,
  ) {
    super();
  }
}
