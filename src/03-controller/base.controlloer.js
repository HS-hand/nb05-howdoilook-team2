<<<<<<< HEAD
import express from "express";
export class BaseControlloer {
=======
import express from "express"
export class BaseControlloer {  
>>>>>>> ebf936d70e00a327876228b3d40a0a37edbd46b1
  basePath;
  router;

  constructor(basePath) {
    this.basePath = basePath;
    this.router = express.Router();
  }

<<<<<<< HEAD
=======
  /***
   * 비동기 에러를 처리하기 위해 try catch를 감싸서 재해석함.
   */
>>>>>>> ebf936d70e00a327876228b3d40a0a37edbd46b1
  catchException = (controllerFn) => {
    return async (req, res, next) => {
      try {
        await controllerFn(req, res, next);
      } catch (err) {
        next(err);
      }
    };
  };
<<<<<<< HEAD
}
=======

  registerRoutes() {
    throw new Error("registerRoutes 메소드를 구현하세요.");
  }

}
>>>>>>> ebf936d70e00a327876228b3d40a0a37edbd46b1
