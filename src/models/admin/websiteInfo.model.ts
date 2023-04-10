/**
 *
 * @class WebsiteInfo
 */

export class WebsiteInfo {
  constructor(
    public id: number = 0,
    public about_P1_Ar: string = null!,
    public about_P2_Ar: string = null!,
    public about_P1_En: string = null!,
    public about_P2_En: string = null!,
    public phoneNumber: string = null!,
    public email: string = null!,
    public privacy_Ar: string = null!,
    public privacy_En: string = null!,
    public policy_Ar: string = null!,
    public policy_En: string = null!,
    public link1: string = null!,
    public link2: string = null!,
    public link3: string = null!,
    public link1_Name: string = null!,
    public link2_Name: string = null!,
    public link3_Name: string = null!,
  ) {}
}
