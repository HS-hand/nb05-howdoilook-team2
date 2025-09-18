export class UpdateCommentResDto {
  constructor(updatedComment) {
    this.id = updatedComment.id;
    this.curationID = updatedComment.curationID;
    this.content = updatedComment.content;
    this.createdAt = updatedComment.createdAt;
  }
}
