import { Currency } from '@models/admin/currency.model';

export const currencies: Currency[] = [
  {
    id: 6,
    name: 'جنيه مصري',
    nameEn: 'Egyptian Pound',
    code: 'ج.م.‏',
    codeEn: 'EGP',
    countryCode: null,
    countryId: 6,
    countryName: 'مصر',
    countryNameEn: 'Egypt',
  },
  {
    id: 5,
    name: 'ريال سعودي',
    nameEn: 'Saudi Riyal',
    code: 'ر.س.‏',
    codeEn: 'SR',
    countryCode: null,
    countryId: 4,
    countryName: 'السعودية',
    countryNameEn: 'Saudi Arabia',
  },
  {
    id: 4,
    name: 'ريال قطري',
    nameEn: 'Qatari Rial',
    code: 'ر.ق.',
    codeEn: 'QR',
    countryCode: null,
    countryId: 2,
    countryName: 'قطر',
    countryNameEn: 'Qatar',
  },
  {
    id: 3,
    name: ' دينار بحريني',
    nameEn: 'Bahrin Dinar',
    code: 'د.ب.',
    codeEn: 'BD',
    countryCode: null,
    countryId: 3,
    countryName: 'البحرين',
    countryNameEn: 'Bahrain',
  },
  {
    id: 2,
    name: 'دينار كويتي',
    nameEn: 'Kuwaiti Dinar',
    code: 'د.ك.',
    codeEn: 'KD',
    countryCode: null,
    countryId: 1,
    countryName: 'الكويت',
    countryNameEn: 'Kuwait',
  },
  {
    id: 1,
    name: 'درهم اماراتي',
    nameEn: 'United Arab Emirates Dirham',
    code: 'د.إ.',
    codeEn: 'AED',
    countryCode: null,
    countryId: 5,
    countryName: 'الإمارات',
    countryNameEn: 'United Arab Emirates',
  },
];
