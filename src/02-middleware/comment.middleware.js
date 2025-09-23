import { CreateCommentReqValidator } from "./req.validator/comment/create.comment.req.validator.js";
import { UpdateCommentReqValidator } from "./req.validator/comment/update.comment.req.validator.js";
import { DeleteCommentReqValidator } from "./req.validator/comment/delete.comment.req.validator.js";
import { CreateCommentResDto } from "./res.dto/comment/create.comment.res.dto.js";
import { UpdateCommentResDto } from "./res.dto/comment/update.comment.res.dto.js";
import { DeleteCommentResDto } from "./res.dto/comment/delete.comment.res.dto.js";

export class CommentMiddleware {
  #commentService;

  constructor(commentService) {
    this.#commentService = commentService;
  }

  createCommentMiddleware = async (req, res, next) => {
    const createCommentReqDto = new CreateCommentReqValidator({
      params: req.params,
      body: req.body,
    }).validate();

    const createdComment =
      await this.#commentService.createComment(createCommentReqDto);
    const createdCommentResDto = new CreateCommentResDto(createdComment);
    return res.json(createdCommentResDto);
  };

  updateCommentMiddleware = async (req, res, next) => {
    const updateCommentReqDto = new UpdateCommentReqValidator({
      params: req.params,
      body: req.body,
    }).validate();
    const updatedComment =
      await this.#commentService.updateComment(updateCommentReqDto);
    const updatedCommentResDto = new UpdateCommentResDto(updatedComment);
    return res.json(updatedCommentResDto);
  };

  deleteCommentMiddleware = async (req, res, next) => {
    const deleteCommentReqDto = new DeleteCommentReqValidator({
      params: req.params,
      body: req.body,
    }).validate();
    const deletedComment =
      await this.#commentService.deleteComment(deleteCommentReqDto);
    const deletedCommentResDto = new DeleteCommentResDto(deletedComment);
    return res.json(deletedCommentResDto);
  };
}
