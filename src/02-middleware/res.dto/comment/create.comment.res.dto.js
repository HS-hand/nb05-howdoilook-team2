export class CreateCommentResDto {
  constructor(createdComment) {
    this.id = createdComment.id;
    this.nickname = createdComment.nickname;
    this.curationID = createdComment.curationID;
    this.content = createdComment.content;
    this.createdAt = createdComment.createdAt;
  }
}
