import { User, UserForDetailed } from './../user/user.model';

export class Messages {
  constructor(
    public id?: number,
    public senderId?: string,
    public senderName?: string,
    public senderFullName?: string,
    public senderPhoto?: string,
    public recipientId?: string,
    public recipientPhoto?: string,
    public recipientName?: string,
    public recipientFullName?: string,
    public content?: string,
    public contentPhoto?: string,
    public contentVideo?: string,
    public isRead?: boolean,
    public dateRead?: Date,
    public messageSent?: Date,
    public senderDeleted?: boolean,
    public recipientDeleted?: boolean,
  ) {}
  toRecipientUser(): User {
    const user = new User();
    user.id = this.recipientId!;
    user.email = this.recipientName!;
    user.userName = this.recipientName!;
    user.photoUrl = this.recipientPhoto!;
    // user.firstName = this.recipientFullName!;
    return user;
  }
  toSenderUser(): User {
    const user = new User();
    user.id = this.senderId!;
    user.email = this.senderName!;
    user.userName = this.senderName!;
    user.photoUrl = this.recipientPhoto!;
    // user.firstName = this.senderFullName!;
    return user;
  }
}
