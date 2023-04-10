import { AdStatus } from './../admin/ad.model';
import { ProductBrand } from './../admin/product-brand.model';
import { ProductCategory } from './../admin/product-category.model';
import { Category } from './../admin/category.model';
import { Shop } from '../shop/shop.model';
import { ProductImage } from './product-image.model';
import { Base } from './../base.model';
import { TotalRate } from '../rates/retes.model';
import { Currency } from '../admin/currency.model';
import { City } from '../admin/city.model';

export class Product extends Base {
  constructor(
    public id: number = 0,
    public publicLink: string = null!,
    public dataId: string = null!,

    // info
    public productName: string = null!,
    public skuCode: string = null!,
    public productDescription: string = null!,
    public productNotes: string = null!,
    public keywords: string = null!,
    public tags: string[] = null!,
    public productPrice: number = 0,
    public isService: boolean = false,
    public isNegotiable: boolean = false,
    public isSpecial: boolean = false,
    public videoLink: string = null!,
    public productImages: ProductImage[] = null!,
    public productImageFiles: string[] = null!,
    public categoryId: number = null!,
    public category?: Category,
    public productCategoryId: number = null!,
    public productCategory?: ProductCategory,
    public productBrandId: number = null!,
    public productBrand?: ProductBrand,
    public adStatus?: AdStatus,
    public shopId: number = null!,
    public shop?: Shop,
    public shopCityCountryName?: string,
    public shopCityCountryNameEn?: string,
    public shopCityName?: string,
    public shopCityNameEn?: string,
    public shopCurrencyCode?: string,
    public shopCurrencyCodeEn?: string,
    public shopCurrencyName?: string,
    public shopCurrencyNameEn?: string,
    public shopShopAddressLine?: string,
    public shopShopLogo?: string,
    public shopShopName?: string,
    public shopShopNumber?: string,
    public shopShopLink?: string,
    public faceBook: string = null!,
    public instagram: string = null!,
    public socialLink: string = null!,
    public viewCount: number = 0,
    public contactNumber: string | null = null,
    public adStatusId: number = null!,
    public adminNote: string = null!,
    public totalRate?: TotalRate,
    public createdDate: Date | null = null,
    public countryId: number = null!,
    public cityId: number = null!,
    public city?: City,
    public currencyId: number = null!,
    public currency?: Currency,
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
    public categoryName: string = null!,
    public categoryNameEn: string = null!,
    public cityCountryId: number = null!,
    public productCategoryName: string = null!,
    public productCategoryNameEn: string = null!,
    public addressLine: string = null!,

    public originalData = null!,

    public isEmail: boolean = false,
    public isMobile: boolean = false,
    public isWhatsApp: boolean = false,
  ) {
    super();
  }
}
