import express from "express";
import cors from "cors";
import morgan from "morgan";
import { Exception } from "../common/exception.js";

export class Server {
  #server;
  // #controllers;

  constructor() {
    this.#server = express();
    // this.#controllers = controllers;
  }

  listen = () => {
    this.#server.listen(3000, () => {
      console.log("app server listening on port 3000");
    });
  };

  registerBaseMiddlewares = () => {
    this.#server.use(cors());
    this.#server.use(morgan("dev"));
    this.#server.use(express.json());
  };

  registerControllerMiddleware = () => {
    // for (const controller of this.#controllers) {
    //   this.#server.use(controller.basePath, controller.router);
    // }
  };

  registerExceptionMiddleware = () => {
    this.#server.use((err, req, res, next) => {
      if (err instanceof Exception) {
        res.status(err.statusCode).json({ message: err.message });
      } else {
        res.status(500).json({ message: "알 수 없는 에러 발생!!!" });
        console.error(err);
      }
    });
  };

  start = () => {
    this.registerBaseMiddlewares();
    this.registerControllerMiddleware();
    this.registerExceptionMiddleware();
    this.#server.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  };
}