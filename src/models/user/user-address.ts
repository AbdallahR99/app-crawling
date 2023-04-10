export class UserAddress {
  constructor(
    public id?: number,
    public label?: string,
    public area?: string,
    public street?: string,
    public building?: string,
    public addressLine?: string,
    public mobile?: string,
    public note?: string,
    public flatNumber?: string,
    public whatsApp?: string,
    public isDefault?: boolean,
    public cityId?: number,
  ) {}
}
