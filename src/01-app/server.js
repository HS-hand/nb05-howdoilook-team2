import express from "express";
import cors from "cors";
import morgan from "morgan";
import { CONFIG_KEY } from "../common/config.keys.js";
import { Exception } from "../common/exception.js";

export class Server {
  #server;
  #routers;
  #configManager;

  constructor(routers, configManager) {
    this.#server = express();
    this.#routers = routers;
    this.#configManager = configManager;
  }

  listen = () => {
    const port = process.env.PORT || 3000;
    this.#server.listen(port, () => {
      console.log(`app server listening on port ${port}`);
    });
  };

  registerBaseMiddlewares = () => {
    this.#server.use(cors());
    this.#server.use(morgan("dev"));
    this.#server.use(express.json());
    this.#server.use(
      express.static(this.#configManager.get(CONFIG_KEY.DISK_STORAGE_PATH)),
    );
  };

  registerControllerMiddleware = () => {
    for (const router of this.#routers) {
      this.#server.use(router.basePath, router.router);
    }
  };

  registerExceptionMiddleware = () => {
    this.#server.use((err, req, res, next) => {
      if (err instanceof Exception) {
        console.log(err);
        res.status(err.statusCode).json({ message: err.message });
      } else {
        if(err.message==="경로가 없습니다."){
        console.error(err);

          res.status(404).json({message : err.message});
        }
        else{res.status(500).json({ message: "알 수 없는 에러 발생" });
        console.error(err);
      }
    }
    });
  };

  start = () => {
    this.registerBaseMiddlewares();
    this.registerControllerMiddleware();
    this.#server.use((req, res, next)=>{
      next(new Error({message: "경로가 없습니다."}));
    })
    this.registerExceptionMiddleware();
    this.listen();
  };
}
