import express from "express"
export class BaseControlloer {  
  basePath;
  router;

  constructor(basePath) {
    this.basePath = basePath;
    this.router = express.Router();
  }

  /***
   * 비동기 에러를 처리하기 위해 try catch를 감싸서 재해석함.
   */
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