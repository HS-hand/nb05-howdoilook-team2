import { BaseRouter } from "./base.router.js";

export class StyleRouter extends BaseRouter {
  #styleController;

  constructor(styleController) {
    super("");
    this.#styleController = styleController;
    this.registerRoutes();
  }

  registerRoutes() {
    this.router.get(
      "/styles",
      this.catchException(this.#styleController.galleryListController),
    );
    this.router.get(
      "/styles/popular-tags",
      this.catchException(this.#styleController.popularTagsController),
    );
    this.router.post(
      "/styles",
      this.catchException(this.#styleController.createStyleController),
    );
    this.router.get(
      "/styles/:styleId",
      this.catchException(this.#styleController.getStyleDetailController),
    );
    this.router.put(
      "/styles/:styleId",
      this.catchException(this.#styleController.updateStyleController),
    );
    this.router.delete(
      "/styles/:styleId",
      this.catchException(this.#styleController.deleteStyleController),
    );
    this.router.get(
      "/ranking",
      this.catchException(this.#styleController.getRankingStylesController),
    );
  }
}
