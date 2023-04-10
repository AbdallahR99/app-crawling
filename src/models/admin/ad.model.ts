export class AdType {
  constructor(
    public id: number = 0,
    public name: string = null!,
    public nameEn: string = null!,
  ) {}
}

export class AdStatus {
  constructor(
    public id: number = 0,
    public name: string = null!,
    public nameEn: string = null!,
    public description: string = null!,
    public order: number = 0,
  ) {}
}
