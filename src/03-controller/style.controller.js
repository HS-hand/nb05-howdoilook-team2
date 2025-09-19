import { BaseControlloer } from "./base.controlloer.js";

export class StyleController extends BaseControlloer {
  #styleMiddleware;

  constructor(styleMiddleware) {
    super("");
    this.#styleMiddleware = styleMiddleware;
    this.registerRoutes();
  }

  registerRoutes = () => {
    this.router.post(
      "/styles",
      this.catchException(this.#styleMiddleware.createStyleMiddleware),
    );
    this.router.get(
      "/styles/:styleId",
      this.catchException(this.#styleMiddleware.viewStyleDetailMiddleware),
    );
    this.router.put(
      "/styles/:styleId",
      this.catchException(this.#styleMiddleware.updateStyleMiddleware),
    );
    this.router.delete(
      "/styles/:styleId",
      this.catchException(this.#styleMiddleware.deleteStyleMiddleware),
    );
  };
}
