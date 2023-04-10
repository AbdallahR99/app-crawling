export class UserDashboardData {
  constructor(
    public petsCount: number = 0,
    public shopsCount: number = 0,
    public clinicsCount: number = 0,
    public productsCount: number = 0,
    public servicesCount: number = 0,
    public notificationsCount: number = 0,
    public unReadCount: number = 0,
    public shopsListingCount: number = 0,
    public clinicsListingCount: number = 0,
    public productsListingCount: number = 0,
    public servicesListingCount: number = 0,
  ) {}
}
