import express from "express";

export class BaseController {
  basePath;
  router;

  constructor(basePath) {
    this.basePath = basePath;
    this.router = express.Router();
  }

  get basePath() {
    return this.basePath;
  }

  get router() {
    return this.router;
  }

  registerRoutes() {
    throw new Error("registerRoutes 메소드를 구현하세요.");
  }

  catchException(callback) {
    return async (req, res, next) => {
      try {
        await callback(req, res, next);
      } catch (err) {
        next(err);
      }
    };
  }
}