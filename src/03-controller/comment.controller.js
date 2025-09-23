import { BaseController } from "./base.controller.js";

export class CommentController extends BaseController {
  #commentMiddleware;
  constructor(commentMiddleware) {
    super("");
    this.#commentMiddleware = commentMiddleware;
    this.registerRoutes();
  }

  registerRoutes = () => {
    this.router.post(
      "/curations/:curationId/comments",
      this.catchException(this.#commentMiddleware.createCommentMiddleware),
    );
    this.router.put(
      "/comments/:commentId",
      this.catchException(this.#commentMiddleware.updateCommentMiddleware),
    );
    this.router.delete(
      "/comments/:commentId",
      this.catchException(this.#commentMiddleware.deleteCommentMiddleware),
    );
  };
}
