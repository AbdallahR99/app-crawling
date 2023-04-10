import { FlagType } from '@constants/flag-types';
import { Base } from './../base.model';
export class Rates extends Base {
  constructor(
    public id: number = 0,
    public rateValue: number = null!,
    public description: string = null!,
    public displayName: string = null!,
    public petId?: number,
    public shopId?: number,
    public clinicId?: number,
    public productId?: number,
    public userName: string = null!,
    public entityType?: FlagType,
    public entityValue?: number,
  ) {
    super();
  }
}

export class TotalRate {
  constructor(
    public totalRate?: number,
    public rateCount?: number,
    public flagId?: number,
    public flag?: number,
    public rates?: Rates[],
  ) {}
}
