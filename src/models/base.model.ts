/**
 *
 * @interface Base
 */

export class Base {
  constructor(
    public createdBy: string | null = null,
    public updatedBy: string | null = null,
    public deletedBy: string | null = null,
    public isDeleted: boolean = false,
    public createdDate: Date | string | null = new Date(),
    public updatedDate: Date | string | null = new Date(),
    public deletedDate: Date | string | null = new Date(),
  ) {}
}
