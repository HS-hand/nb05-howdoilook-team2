import { Exception, EXCEPTIONS } from "../../common/exception.js";
import { Comment } from "../entity/comment.js";

export class CommentService {
  #commentRepo;

  constructor(commentRepo) {
    this.#commentRepo = commentRepo;
  }

  createComment = async ({ curationId, content, password }) => {
    const comment = Comment.factory({
      curationId,
      content,
      password,
    });
    const createdComment = await this.#commentRepo.create(comment);

    return createdComment;
  };

  updateComment = async ({ commentId, content, password }) => {
    const foundComment = await this.#commentRepo.findCommentById(commentId);
    if (!foundComment) {
      throw new Exception(EXCEPTIONS.CURATION_NOT_EXIST);
    }

    const comment = Comment.factory({
      id: foundComment.id,
      curationId: foundComment.curationId,
      content: content || foundComment.content,
      password: password || foundComment.password,
      createdAt: foundComment.createdAt,
      updatedAt: foundComment.updatedAt,
    });

    const updatedComment = await this.#commentRepo.update(comment);
    return updatedComment;
  };

  deleteComment = async ({ id }) => {
    const foundComment = await this.#commentRepo.findCommentById(id);

    if (!foundComment) {
      throw new Exception(EXCEPTIONS.CURATION_NOT_EXIST);
    }
    const deletedComment = await this.#commentRepo.delete(id);
    return deletedComment;
  };
}
