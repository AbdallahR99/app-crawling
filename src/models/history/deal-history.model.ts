import { Clinic } from '../clinic/clinic.model';
import { Pet } from '../pet/pet.model';
import { Product } from '../product/product.model';
import { Shop } from '../shop/shop.model';

export class DealHistory {
  constructor(
    public fromName?: string,
    public toName?: string,
    public notes?: string,
    public info?: string,
    public id?: number,
    public petId?: number,
    public shopId?: number,
    public clinicId?: number,
    public productId?: number,
    public pet?: Pet,
    public shop?: Shop,
    public clinic?: Clinic,
    public product?: Product,
    public extraValue?: string,
    public extraDetails?: string,
    public createdDate?: Date | string,
    public isMobile?: boolean,
  ) {}
}
