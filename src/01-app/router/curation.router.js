import { BaseRouter } from "./base.router.js";

export class CurationRouter extends BaseRouter {
  #curationController;
  constructor(curationController) {
    super("");
    this.#curationController = curationController;
    this.registerRoutes();
  }

  registerRoutes = () => {
    this.router.post(
      "/styles/:styleId/curations",
      this.catchException(this.#curationController.createCurationController),
    );
    this.router.get(
      "/styles/:styleId/curations",
      this.catchException(this.#curationController.getCurationListController),
    );
    this.router.put(
      "/curations/:curationId",
      this.catchException(this.#curationController.updateCurationController),
    );
    this.router.delete(
      "/curations/:curationId",
      this.catchException(this.#curationController.deleteCurationController),
    );
  };
}
