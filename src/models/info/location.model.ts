export class LocationInfo {
  constructor(
    public countryCode: string,
    public countryName: string,
    public regionCode: string,
    public regionName: string,
    public city: string,
    public zipCode?: any,
    public latitude?: number,
    public longitude?: string,
    public timeZone?: any,
  ) {}
}
