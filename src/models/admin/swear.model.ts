export class Swear {
  constructor(
    public id: number = 0,
    public name: string = null!,
    public nameEn: string = null!,
    public precentAmount: string = null!,
  ) {}
}
export class UserSwear {
  constructor(
    public id: number = 0,
    public userName: string = null!,
    public isConfirm: boolean = true,
    public adsInfoId: number = null!,
  ) {}
}
