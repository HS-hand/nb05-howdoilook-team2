export class CreateCommentResDto {
  constructor(createdComment) {
    this.id = createdComment.id;
    this.curationID = createdComment.curationID;
    this.content = createdComment.content;
    this.createdAt = createdComment.createdAt;
  }
}
