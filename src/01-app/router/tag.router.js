import { BaseRouter } from "./base.router.js";

export class TagRouter extends BaseRouter {
  #tagController;

  constructor(tagController) {
    super("");
    this.#tagController = tagController;
    this.registerRoutes();
  }

  registerRoutes() {
    this.router.get(
      "/tags",
      this.catchException(this.#tagController.getTagsController),
    );
  }
}
