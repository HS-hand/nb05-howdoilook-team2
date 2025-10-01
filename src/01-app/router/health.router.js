import { BaseRouter } from "./base.router.js";

export class HealthRouter extends BaseRouter {
  constructor() {
    super("");
    this.registerRoutes();
  }

  registerRoutes() {
    this.router.get("/health", (req, res, next) => {
      res.status(200).send("OK");
    });
  }
}
