import { TotalRate } from './../rates/retes.model';
import { DurationUnit } from '@constants/duration-unit';
import { Currency } from '../admin/currency.model';
import { Category } from './../admin/category.model';
import { AdStatus } from './../admin/ad.model';
import { Base } from './../base.model';
import { City } from './../admin/city.model';
import { PetAgeUnit } from '@constants/ad/age-unit';
import { PetImage } from './pet-image.model';
import { SubCategory } from '../admin/category.model';
import { AdType } from '@constants/ad/ad-type';

export class Pet extends Base {
  constructor(
    public id: number = 0,
    public publicLink: string = null!,
    // info
    public petName: string = null!,
    public petDescription: string = null!,
    public petNotes: string = null!,
    public petAge: number = 0,
    public petAgeUnit: number = PetAgeUnit.Months,
    public petGender: string = null!,
    public color: string = null!,
    public videoLink: string = null!,
    public ownerNumber: string = null!,
    public keywords: string = null!,
    public tags: string[] = null!,
    public petPrice: number = 0,
    public isNegotiable: boolean = false,
    public isSpecial: boolean = false,
    public isForSell: boolean = true,
    public adminNote: string = null!,
    public durationUnit: number = DurationUnit.Months,
    public adaptFor: number = 0,
    // relations
    public countryId: number = null!,
    public cityId: number = null!,
    public city?: City,
    public petAddressLine: string = null!,
    public longitude: number = 0,
    public latitude: number = 0,
    public categoryId: number = null!,
    public category?: Category,
    public adStatusId: number = null!,
    public adStatus: AdStatus = null!,
    public currencyId: number = null!,
    public currency?: Currency,
    public subCategoryId: number = null!,
    public subCategory?: SubCategory,
    public adType: number = AdType.Sell,
    public petImages: PetImage[] = null!,
    public petImageFiles: string[] = null!,
    public viewCount: number = 0,
    public user: { userName: string; phoneNumber: string } = null!,
    public totalRate?: TotalRate,
    public createdDate: Date = null,

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
    public cityCountryId: number = null!,
    public categoryName: string = null!,
    public categoryNameEn: string = null!,
    public subCategoryName: string = null!,
    public subCategoryNameEn: string = null!,
    public isEmail: boolean = false,
    public isMobile: boolean = false,
    public isWhatsApp: boolean = true,
  ) {
    super();
  }
}
