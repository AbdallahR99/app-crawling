/**
 *
 * @interface FAQSchema
 */

export class FAQSchema {
  constructor(
    public id: number = 0,
    public blogId: number = null!,
    public blogLink: string = null!,
    public notes: string = null!,
    public question: string = '',
    public answer: string = null!,
    public createdDate: Date = new Date(),
    public isActive: boolean = true,
    public isDeleted: boolean = false,
    public deletedDate: Date = new Date(),
  ) {}
}
