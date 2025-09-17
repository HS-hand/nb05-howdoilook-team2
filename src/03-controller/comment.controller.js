import { BaseControlloer } from "./base.controlloer.js";

export class CommentController extends BaseControlloer {
  #commentMiddleware;
  constructor(CommentMiddleware) {
    super("/api");
    this.#commentMiddleware = CommentMiddleware;
    this.registerCommentRouter();
  }

  registerCommentRouter = () => {
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
