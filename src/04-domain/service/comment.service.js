import { Exception, EXCEPTIONS } from "../../common/exception.js";
import { Comment } from "../entity/comment.js";

export class CommentService {
  #commentRepo;

  constructor(commentRepo) {
    this.#commentRepo = commentRepo;
  }

  createComment = async ({ curationId, content, password }) => {
    const nickname = await this.#commentRepo.getStyleNickname(curationId);
    const comment = Comment.factory({
      nickname,
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
      throw new Exception(EXCEPTIONS.FORBIDDEN);
    }
  };

  updateComment = async ({ commentId, content, password }) => {
    const foundComment = await this.#commentRepo.findCommentById(commentId);
    if (!foundComment) {
      throw new Exception(EXCEPTIONS.NOT_FOUND);
    }
    const stylePassword = await this.#commentRepo.getStylePassword(
      foundComment.curationId,
    );
    if (stylePassword === password) {
      const comment = Comment.factory({
        id: foundComment.id,
        nickname: foundComment.nickname,
        curationId: foundComment.curationId,
        content: content || foundComment.content,
        password: password || foundComment.password,
        createdAt: foundComment.createdAt,
        updatedAt: foundComment.updatedAt,
      });
      const updatedComment = await this.#commentRepo.update(comment);
      return updatedComment;
    } else {
      throw new Exception(EXCEPTIONS.FORBIDDEN);
    }
  };

  deleteComment = async ({ commentId, password }) => {
    const foundComment = await this.#commentRepo.findCommentById(commentId);
    if (!foundComment) {
      throw new Exception(EXCEPTIONS.NOT_FOUND);
    }
    const stylePassword = await this.#commentRepo.getStylePassword(
      foundComment.curationId,
    );

    if (stylePassword === password) {
      const deletedComment = await this.#commentRepo.delete(commentId);
      return deletedComment;
    } else {
      throw new Exception(EXCEPTIONS.FORBIDDEN);
    }
  };
}