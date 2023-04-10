import { Base } from '../base.model';

export class ProductCategory extends Base {
  constructor(
    public id: number = 0,
    public name: string | null = null!,
    public nameEn: string | null = null!,
    public imgUrl: string | null = null!,
    public image: string | null = null!,
    public isService: boolean | null = false,
    public metaTitle: string | null = null!,
    public metaTitleEn: string | null = null!,
    public metaDescription: string | null = null!,
    public metaDescriptionEn: string | null = null!,
  ) {
    super();
  }
}
