import { PetAgeUnit } from '@constants/ad/age-unit';

export class MedicalPost {
  constructor(
    public id: number = 0,
    public isMedical: boolean = false,
    public publicLink: string = null!,
    public title: string = null!,
    public content: string = null!,

    public imageUrl1: string = null!,
    public imageUrl2: string = null!,
    public imageUrl3: string = null!,
    public imageUrl4: string = null!,
    public videoLink: string = null!,
    //Send Files
    public imageUrl1File: string = null!,
    public imageUrl2File: string = null!,
    public imageUrl3File: string = null!,
    public imageUrl4File: string = null!,
    public videoLinkFile: string = null!,

    public commentsCount: number = 0,
    public createdDate: Date = null,
    public createdBy: string = null!,
    public isDeleted: boolean = false,

    public firstName: string = null!,
    public lastName: string = null!,
    public userPhoto: string = null!,
    public petType: string = null!,
    public petAge: number = 0,
    public petAgeUnit: number = PetAgeUnit.Months,
    public temperature: string = null!,
    public isHaveVomit: boolean = false,
    public isHaveDiarrhea: boolean = true,
    public adStatusId: number = null!,
    public adStatusName: string = null!,
    public adStatusNameEn: string = null!,
    public adminNote: string = null!,
  ) {}
}
