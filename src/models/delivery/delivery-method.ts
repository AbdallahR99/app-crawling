/**
 *
 * @class DeliveryMetod
 */

export class DeliveryMethod {
  constructor(
    public id: number = 0,
    public title?: string,
    public timeToDelivery?: number,
    public durationUnit?: number,
    public price: number = 0,
    public miniFreeCharge?: number,
    public notes?: string,
    public isDirectDelivery: boolean = false,
    public isActive: boolean = false,
    public isDefault: boolean = false,
    public shopId: number = null,
    public deliveryCompanyId: number = null,
  ) {}
}
