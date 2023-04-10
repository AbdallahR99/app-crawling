/**
 *
 * @class Country
 */

export class Country {
  constructor(
    public id: number = 0,
    public name: string | null = null!,
    public nameEn: string | null = null!,
    public code: string | null = null!,
    public flag: string | null = null!,
    public topLevel: string | null = null!,
    public phoneCode: string | null = null!,
  ) {}
}
