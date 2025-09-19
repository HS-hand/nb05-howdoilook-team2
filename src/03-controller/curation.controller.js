import { BaseControlloer } from "./base.controlloer.js";

export class CurationController extends BaseControlloer {
  #curationMiddleware;
  constructor(curationMiddleware) {
    super("");
    this.#curationMiddleware = curationMiddleware;
    this.registerRoutes();
  }

  registerRoutes = () => {
    this.router.post(
      "/styles/:styleId/curations",
      this.catchException(this.#curationMiddleware.createCurationMiddleware),
    );
    this.router.get(
      "/styles/:styleId/curations",
      this.catchException(this.#curationMiddleware.viewCurationListMiddleware),
    );
    this.router.put(
      "/curations/:curationId",
      this.catchException(this.#curationMiddleware.updateCurationMiddleware),
    );
    this.router.delete(
      "/curations/:curationId",
      this.catchException(this.#curationMiddleware.deleteCurationMiddleware),
    );
  };
}
