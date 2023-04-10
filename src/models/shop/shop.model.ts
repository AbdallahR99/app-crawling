import { Currency } from './../admin/currency.model';
import { AdStatus } from './../admin/ad.model';
import { City } from './../admin/city.model';
import { ShopWorkDay } from './shop-work-day.model';
import { TotalRate } from '../rates/retes.model';
import { Product } from '../product/product.model';

export class Shop {
  constructor(
    public id: number = 0,
    public shopName: string = null!,
    public createdBy?: string,
    public shopDescription: string = null!,
    public shopLogoFile: string = null!,
    public shopLogo: string = null!,
    public shopLink: string = null!,
    public isDelivery: boolean = false,
    public shopAddressLine: string = null!,
    public longitude: number = 0,
    public latitude: number = 0,
    public isSpecial: boolean = false, // MUST BE NULLABLE
    public shopNotes: string = null!,
    public shopNumber: string = null!,
    public shopMobile: string = null!,
    public faceBook: string = null!,
    public instagram: string = null!,
    public socialLink: string = null!,
    public countryId: number = null!,
    public cityId: number = null!,
    public city?: City,
    public currencyId: number = null!,
    public currency?: Currency,
    public adStatusId: number = null!,
    public adStatus?: AdStatus,
    public adminNotes: string = null!,
    public shopWorkDays: ShopWorkDay[] = null!,
    public latLong?: string,
    public totalRate?: TotalRate,
    public viewCount: number = 0,
    public createdDate: Date = null,
    public products: Product[] = [],
    public productCount: number = 0,
    public serviceCount: number = 0,
    public cityName: string = null!,
    public cityNameEn: string = null!,
    public cityCountryName: string = null!,
    public cityCountryNameEn: string = null!,
    public currencyName: string = null!,
    public currencyNameEn: string = null!,
    public currencyCode: string = null!,
    public currencyCodeEn: string = null!,
    public adStatusName: string = null!,
    public cityCountryId: number = null!,
    public adStatusNameEn: string = null!,
    public isEmail: boolean = false,
    public isMobile: boolean = true,
    public isWhatsApp: boolean = true,
  ) {}
}
