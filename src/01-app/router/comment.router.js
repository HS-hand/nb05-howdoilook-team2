import { BaseRouter } from "./base.router.js";

export class CommentRouter extends BaseRouter {
  #commentController;
  constructor(commentController) {
    super("");
    this.#commentController = commentController;
    this.registerRoutes();
  }

  registerRoutes = () => {
    this.router.post(
      "/curations/:curationId/comments",
      this.catchException(this.#commentController.createCommentController),
    );
    this.router.put(
      "/comments/:commentId",
      this.catchException(this.#commentController.updateCommentController),
    );
    this.router.delete(
      "/comments/:commentId",
      this.catchException(this.#commentController.deleteCommentController),
    );
  };
}
