import express from "express";
export class BaseControlloer {
  basePath;
  router;

  constructor(basePath) {
    this.basePath = basePath;
    this.router = express.Router();
  }

  catchException = (controllerFn) => {
    return async (req, res, next) => {
      try {
        await controllerFn(req, res, next);
      } catch (err) {
        next(err);
      }
    };
  };

  registerRoutes() {
    throw new Error("registerRoutes 메소드를 구현하세요.");
  }
}
