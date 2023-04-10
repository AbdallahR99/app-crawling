import { Base } from './../base.model';
import { ReportReason } from './report-reason.model';
export class Report extends Base {
  constructor(
    public id: number = 0,
    public description: string = null!,
    public petId?: number,
    public shopId?: number,
    public clinicId?: number,
    public productId?: number,
    public medicalPostId?: number,
    public medicalPostCommentId?: number,
    public reportReasonsId: number = null!,
    public reportReasons: ReportReason = null!,
    public isRead: boolean = false,
    public readBy: string = null!,
    public createdBy: string = null!,
    public createdDate: Date = new Date(),
  ) {
    super();
  }
}
