export class Currency {
  constructor(
    public id: number = 0,
    public name: string | null = null!,
    public nameEn: string | null = null!,
    public code: string | null = null!,
    public codeEn: string | null = null!,
    public countryCode: string | null = null!,
    public countryId: number | null = null!,
    public countryName: string = null!,
    public countryNameEn: string = null!,
  ) {}
}
