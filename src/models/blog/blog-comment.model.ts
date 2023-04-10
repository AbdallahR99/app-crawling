/**
 *
 * @interface BlogComment
 */

export class BlogComment {
  constructor(
    public id: number = 0,
    public blogId: null = null!,
    public blogLink: string = null!,
    public notes: string = null!,
    public name: string = null!,
    public email: string = null!,
    public commment: string = null!,
    public createdDate: Date = new Date(),
    public isActive: boolean = true,
  ) {}
}
