import { AdStatus } from './../admin/ad.model';

import { Category } from './../admin/category.model';
import { Shop } from './../shop/shop.model';
import { ServiceImage } from './service-image.model';
import { Base } from './../base.model';
import { TotalRate } from '../rates/retes.model';
import { Currency } from '../admin/currency.model';
import { City } from '../admin/city.model';
import { Product } from '../product/product.model';

export class Service extends Base {
  constructor(
    public id: number = 0,
    public serviceName?: string,
    public publicLink?: string,
    public skuCode?: string,
    public serviceDescription?: string,
    public serviceNotes?: string,
    public keywords?: string,
    public tags?: string[],
    public servicePrice?: number,
    public isService?: boolean,
    public serviceStatus?: number,
    public isNegotiable?: boolean,
    public isSpecial?: boolean,
    public addressLine?: string,
    public videoLink?: string,
    public serviceImages?: ServiceImage[],
    public serviceImageFiles?: string[],
    public adminNote?: string,
    public priceUnit?: string,
    public stockQuantity?: number,
    public reservedQuantity?: number,
    public size?: string,
    public categoryId?: number,
    public categoryName?: string,
    public categoryNameEn?: string,
    public serviceCategoryId?: number,
    public serviceBrandId?: number,
    public faceBook: string = null!,
    public instagram: string = null!,
    public socialLink: string = null!,
    public shopId?: number,
    public adStatusId?: number,
    public shopDiscounttId?: number,
    public adStatusName?: string,
    public adStatusNameEn?: string,
    public cityId?: number,
    public countryId?: number,
    public cityCountryId?: number,
    public currencyId?: number,
    public cityName?: string,
    public currencyName?: string,
    public cityCountryName?: string,
    public cityNameEn?: string,
    public currencyNameEn?: string,
    public currencyCode?: string,
    public currencyCodeEn?: string,
    public cityCountryNameEn?: string,
    public contactNumber?: string,
    public shopCityCountryName?: string,
    public shopCityCountryNameEn?: string,
    public shopCityCountryId?: number,
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
  ) {
    super();
  }
}
