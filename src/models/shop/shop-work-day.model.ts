export class ShopWorkDay {
  constructor(
    public day: string = null!,
    public id: number = 0,
    public startTime: Date | string = null!,
    public endTime: Date | string = null!,
    public isActive: boolean = null!,
    public shopId: number = null!,
  ) {}
}
