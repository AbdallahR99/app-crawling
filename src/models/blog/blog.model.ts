/**
 *
 * @interface Blog
 */

import { AdStatus } from '../admin/ad.model';
import { BlogCategory } from '../admin/blog-category.model';
import { Category } from '../admin/category.model';
// import { FAQSchema } from '../blog/FAQ-Schema.model';

export class Blog {
  constructor(
    public id: number = 0,
    public mainImageUrl: string = null!,
    public mainImageFile: string = null!,
    public title: string = null!,
    public content: string = null!,
    public notes: string = null!,
    public tags: string[] = null!,
    public references: string = null!,
    public blogLink: string = null!,
    public viewCount: number = 0,
    public createdDate: Date = new Date(),
    public adStatus?: AdStatus,
    public adStatusId: number = null!,
    public categoryId: number = null!,
    public category?: Category,
    public blogCategoryId: number = null!,
    public blogCategory?: BlogCategory,
    public fullName?: string,
    public metaTitle?: string,
    public altTextImage?: string,
    public metaDecription?: string,
    public publishDate: Date = new Date(),
    public updatedDate: Date = new Date(),
    public isSchema: boolean = true,
    public schemaType?: string,
    public schemaHeadline?: string,
    public schemaDescription?: string,
    public schemaImageUrl?: string,

    public schemaAuthorType?: string,
    public schemaAuthorName?: string,
    public schemaPublisherName: string = 'Zoolker',
    public schemaPublisherImageUrl?: string,
    public isFAQSchema: boolean = false,
    public isBreadcrumbSchema: boolean = false,
  ) // public faqSchemas:FAQSchema[] =[],

  {}
}

export class UploadModal {
  constructor(
    public id: number = 0,
    public file: File | string = null!,
    public isVideo: boolean = false,
    public type: string = null!,
  ) {}
}
