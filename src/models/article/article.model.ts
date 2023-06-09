import { Base } from '../base.model';

export class Article extends Base {
  constructor(
    public id: number = 0,
    public titleImageUrlFile: string = null!,
    public paragraph1_ImageUrl1File: string = null!,
    public paragraph1_ImageUrl2File: string = null!,
    public paragraph2_ImageUrl1File: string = null!,
    public paragraph2_ImageUrl2File: string = null!,
    public paragraph5_ImageUrl1File: string = null!,
    public paragraph5_ImageUrl2File: string = null!,
    public titleImageUrl: string = null!,
    public title: string = null!,
    public paragraph1: string = null!,
    public paragraph1_ImageUrl1: string = null!,
    public paragraph1_ImageUrl2: string = null!,
    public paragraph2: string = null!,
    public paragraph2_ImageUrl1: string = null!,
    public paragraph2_ImageUrl2: string = null!,
    public paragraph3: string = null!,
    public paragraph4: string = null!,
    public paragraph5: string = null!,
    public paragraph5_ImageUrl1: string = null!,
    public paragraph5_ImageUrl2: string = null!,
    public paragraph6: string = null!,
    public references: string = null!,
    public referencesTags?: String[],
    public keywords: string = null!,
    public tags?: String[],
    public blogCategoryId: number = null!,
    public blogCategoryName: string = null!,
    public blogCategoryNameEn: string = null!,
    public fullName: string = null!,
    public isSpecial: boolean = false,
    public notes: string = null!,
    public articleLink: string = null!,
    public blogLink: string = null!,
    public viewCount?: number,
    public categoryId: number = null!,
    public categoryName: string = null!,
    public categoryNameEn: string = null!,
    public adStatusId: number = null!,
    public adStatusName: string = null!,
    public adStatusNameEn: string = null!,
  ) {
    super();
  }
}
