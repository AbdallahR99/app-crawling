import { Currency } from './../admin/currency.model';
import { AdStatus } from './../admin/ad.model';
/**
 *
 * @interface Clinic
 */

import { ClinicWorkDay } from './clinic-work-day.model';
import { TotalRate } from '../rates/retes.model';

export class Clinic {
  constructor(
    public id: number = 0,
    public clinicName: string = null!,
    public createdBy?: string,
    public clinicDescription: string = null!,
    public clinicLogoFile: string = null!,
    public clinicLogo: string = null!,
    public price: number = 0,
    public isDelivery: boolean = null!,
    public clinicAddressLine: string = null!,
    public longitude: number = 0,
    public latitude: number = 0,
    public isSpecial: boolean = false, // MUST BE NULLABLE
    public isAllowVisitHome: boolean = false, //
    public isDoctor: boolean = false, //
    public clinicNotes: string = null!,
    public clinicNumber: string = null!,
    public clinicMobile: string = null!,
    public keywords: string = null!,
    public tags: string[] = null!,
    public faceBook: string = null!,
    public instagram: string = null!,
    public socialLink: string = null!,
    public countryId: number = null!,
    public cityId: number = null!,

    public adStatus?: AdStatus,
    public currencyId: number = null!,
    public currency: Currency = null!,
    public adStatusId: number = null!,
    public adminNotes: string = null!,
    public clinicWorkDays: ClinicWorkDay[] = null!,
    public totalRate?: TotalRate,
    public viewCount: number = 0,
    public createdDate: Date = null,
    public clinicLink: string = null,

    public cityCountryId: number = null!,
    public cityName: string = null!,
    public cityNameEn: string = null!,
    public cityCountryName: string = null!,
    public cityCountryNameEn: string = null!,
    public currencyName: string = null!,
    public currencyNameEn: string = null!,
    public currencyCode: string = null!,
    public currencyCodeEn: string = null!,
    public adStatusName: string = null!,
    public adStatusNameEn: string = null!,

    public isEmail: boolean = false,
    public isMobile: boolean = true,
    public isWhatsApp: boolean = true,
  ) {}
}
