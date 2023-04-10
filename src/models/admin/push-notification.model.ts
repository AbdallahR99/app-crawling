import { Base } from '../base.model';

export class PushNotification extends Base {
  constructor(
    public id: number = 0,
    public title: string = null!,
    public description: string = null!,
    public photoUrl: string = null!,
    public image: string = null!,
    public isSend: boolean = true,
    public articleLink: string = null!,
    public youtubeLink: string = null!,
  ) {
    super();
  }
}
