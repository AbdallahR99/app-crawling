import { PetAgeUnit } from '@constants/ad/age-unit';

export class Doctor {
  constructor(
    public id: number = 0,
    public isMedical: boolean = false,
    public displayName: string = null!,
    public address: string = null!,
    public notifyMeType: number = PetAgeUnit.Months!,
    public isNotifyMe: boolean = false,
    public isConfirmOurPolicy: boolean = false,

    public notesByAdmin: string = null!,
    public clinicPublicLink: string = null!,

    public notesByDoctor: string = null!,
    public userName: string = null!,
    public userId: string = null!,

    public certificateUrl: string = null!,
    public identityIdFrontUrl: string = null!,
    public identityIdBackUrl: string = null!,
    //Send Files
    public certificateUrlFile: string = null!,
    public identityIdFrontUrlFile: string = null!,
    public identityIdBackUrlFile: string = null!,
    public createdDate: Date = null,
    public createdBy: string = null!,
    public isDeleted: boolean = false,
    public adStatusId: number = null!,
    public adStatusName: string = null!,
    public adStatusNameEn: string = null!,
    public adminNote: string = null!,
  ) {}
}
