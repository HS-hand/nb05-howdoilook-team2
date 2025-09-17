export class UpdateCommentResDto {
  constructor(updatedComment) {
    this.id = updatedComment.id;
    this.curationID = createdComment.curationID;
    this.content = updatedComment.content;
    this.createdAt = updatedComment.createdAt;
  }
}
