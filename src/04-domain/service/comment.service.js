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
    const stylePassword = await this.#commentRepo.getStylePassword(
      comment.curationId,
    );

    if (stylePassword === password) {
      const createdComment = await this.#commentRepo.create(comment);
      return createdComment;
    } else {
      throw new Exception(EXCEPTIONS.PASSWORD_NOT_CORRET);
    }
  };

  updateComment = async ({ commentId, content, password }) => {
    const foundComment = await this.#commentRepo.findCommentById(commentId);
    if (!foundComment) {
      throw new Exception(EXCEPTIONS.CURATION_NOT_EXIST);
    }
    const stylePassword = await this.#commentRepo.getStylePassword(
      foundComment.curationId,
    );
    if (stylePassword === password) {
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
    } else {
      throw new Exception(EXCEPTIONS.PASSWORD_NOT_CORRET);
    }
  };

  deleteComment = async ({ commentId, password }) => {
    const foundComment =
      await this.#commentRepo.findCommentById(commentId);
    if (!foundComment) {
      throw new Exception(EXCEPTIONS.COMMENT_NOT_EXSIST);
    }
    const stylePassword = await this.#commentRepo.getStylePassword(
      foundComment.curationId,
    );

    if (stylePassword === password) {
      const deletedComment = await this.#commentRepo.delete(commentId);
      return deletedComment;
    } else {
      throw new Exception(EXCEPTIONS.PASSWORD_NOT_CORRET);
    }
  };
}
