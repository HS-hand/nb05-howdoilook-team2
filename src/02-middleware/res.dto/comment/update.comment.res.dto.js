export class UpdateCommentResDto {
  constructor(updatedComment) {
    this.id = updatedComment.id;
    this.nickname = updatedComment.nickname;
    this.curationID = updatedComment.curationID;
    this.content = updatedComment.content;
    this.createdAt = updatedComment.createdAt;
  }
}
