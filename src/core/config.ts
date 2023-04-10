import { Category, SubCategory } from '@models/admin/category.model';
import { City } from '@models/admin/city.model';
import { Country } from '@models/admin/country.model';
import { Currency } from '@models/admin/currency.model';
import { ProductCategory } from '@models/admin/product-category.model';

export const baseUrl = 'https://www.dubaipetfood.com/';
export const productCategory: Partial<ProductCategory> = {
  id: 9,
  name: 'فراش - سرير',
  nameEn: 'Beds',
  imgUrl: 'pet-bed.png',
  image: null,
  metaTitle: 'تسوق سرير petys بافضل سعر country الراحة والدفء لحيوانك الأليف.',
  metaTitleEn:
    'Shop the pety bed at the best price in country, comfort and warmth for your pet',
  metaDescription:
    'امنحي pety الراحة التي تستحقها مع سرير petys المريح والأنيق المتوفر بأحدث التصاميم. تسوّقي الآن واحصلي على سرير متين وجودة عالية يضفي لمسة جمالية على منزل pety .',
  metaDescriptionEn:
    "Give your pety the comfort it deserves with this comfortable and stylish pety bed available in the latest designs. Shop now and get a solid and high quality bed that adds an aesthetic touch to your pety's home",
  isService: false,
};
export const category: Partial<Category> = {
  id: 12,
  name: 'قطة',
  nameEn: 'Cats',
  imgUrl: 'cat.svg',
  metaDescription:
    'يمكنك العثور على افضل قطط للبيع او طلب قطة للتبني بالاضافة الى طلب تزاوج لقطتك عن طريق موقع زولكر يمكنك اضافة صور واوصاف لقطتك',
  metaDescriptionEn:
    'You can offer your cat for sale, request a cat for adoption, or order your cat to be mated. Post pictures and descriptions of cats',
  image: null,
};
export const subCategory: SubCategory = null!;

export const currency: Currency = {
  id: 1,
  name: 'درهم اماراتي',
  nameEn: 'United Arab Emirates Dirham',
  code: 'د.إ.',
  codeEn: 'AED',
  countryCode: null,
  countryId: 5,
  countryName: 'الإمارات',
  countryNameEn: 'United Arab Emirates',
};

export const country: Country = {
  id: 5,
  name: 'الإمارات',
  nameEn: 'United Arab Emirates',
  code: null,
  flag: 'ae.webp',
  topLevel: 'ae',
  phoneCode: '971',
};

export const city: City = {
  id: 32,
  name: 'دبي',
  nameEn: 'Dubai',
  code: 'ae',
  countryId: 5,
  country: {
    id: 5,
    name: 'الإمارات',
    nameEn: 'United Arab Emirates',
    code: null,
    flag: 'ae.webp',
    topLevel: 'ae',
    phoneCode: '971',
  },
};

export const suffixName = `dubaipetfood_${category?.nameEn ?? 'pet'}-${
  productCategory?.nameEn ?? 'products'
}_${Date.now()}`;
