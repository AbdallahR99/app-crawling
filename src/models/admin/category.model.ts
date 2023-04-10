import { Base } from './../base.model';

export class Category extends Base {
  constructor(
    public id: number = 0,
    public name: string = null!,
    public nameEn: string = null!,
    public imgUrl: string = null!,
    public image: string | null = null!,
    public metaTitle: string = null!,
    public metaTitleEn: string = null!,
    public metaDescription: string = null!,
    public metaDescriptionEn: string = null!,
  ) {
    super();
  }
}

export class SubCategory {
  constructor(
    public id: number = 0,
    public name: string = null!,
    public nameEn: string = null!,
    public categoryId: number = null!,
    public metaTitle: string = null!,
    public metaTitleEn: string = null!,
    public metaDescription: string = null!,
    public metaDescriptionEn: string = null!,
    public categoryName: string = null!,
    public categoryNameEn: string = null!,
  ) {}
}
