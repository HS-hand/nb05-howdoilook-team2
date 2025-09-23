import { Exception, EXCEPTIONS } from "../../common/exception.js";
import { Comment } from "../entity/comment.js";

export class CommentService {
  #commentRepo;

  constructor(commentRepo) {
    this.#commentRepo = commentRepo;
  }

  createComment = async ({ curationId, content, password }) => {
    const style = await this.#commentRepo.getStyle(curationId);
    if (!style) {
      throw new Exception(EXCEPTIONS.CURATION_NOT_EXIST);
    }
    const comment = Comment.factory({
      nickname: style.nickname,
      curationId,
      content,
      password,
    });

    if (style.password !== password) {
      throw new Exception(EXCEPTIONS.FORBIDDEN);
    }
    const createdComment = await this.#commentRepo.create(comment);
    return createdComment;
  };

  updateComment = async ({ commentId, content, password }) => {
    const foundComment = await this.#commentRepo.findCommentById(commentId);
    if (!foundComment) {
      throw new Exception(EXCEPTIONS.NOT_FOUND);
    }
    const style = await this.#commentRepo.getStyle(foundComment.curationId);
    if (style.password !== password) {
      throw new Exception(EXCEPTIONS.FORBIDDEN);
    }
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
  };

  deleteComment = async ({ commentId, password }) => {
    const foundComment = await this.#commentRepo.findCommentById(commentId);
    if (!foundComment) {
      throw new Exception(EXCEPTIONS.NOT_FOUND);
    }
    const style = await this.#commentRepo.getStyle(foundComment.curationId);

    if (style.password !== password) {
      throw new Exception(EXCEPTIONS.FORBIDDEN);
    }
    const deletedComment = await this.#commentRepo.delete(commentId);
    return deletedComment;
  };
}
