import { Country } from './country.model';

/**
 *
 * @class City
 */

export class City {
  constructor(
    public id: number = 0,
    public name: string | null = '',
    public nameEn: string | null = '',
    public code: string | null = '',
    public countryId: number | null = null,
    public country: Country | null = null,
  ) {}
}
