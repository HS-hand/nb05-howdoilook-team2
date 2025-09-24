import { PrismaClient } from "@prisma/client";
import { Server } from "./01-app/server.js";
import { CommentService } from "./04-domain/service/comment.service.js";
import { CommentRepo } from "./05-repo/comment.repo.js";
import { CurationService } from "./04-domain/service/curation.service.js";
import { CurationRepo } from "./05-repo/curation.repo.js";
import { StyleService } from "./04-domain/service/style.service.js";
import { StyleRepo } from "./05-repo/style.repo.js";
import { ConfigManager } from "./common/libs/config.manager.js";
import { FileUploader } from "./common/libs/file.uploader.js";
import { CommentRouter } from "./01-app/router/comment.router.js";
import { CurationRouter } from "./01-app/router/curation.router.js";
import { CommentController } from "./02-controller/comment.controller.js";
import { CurationController } from "./02-controller/curation.controller.js";
import { StyleController } from "./02-controller/style.controller.js";
import { ImageRouter } from "./01-app/router/image.router.js";
import { StyleRouter } from "./01-app/router/style.router.js";

export class DepInjector {
  #server;

  constructor() {
    this.#server = this.injectDeps();
  }

  get server() {
    return this.#server;
  }

  injectDeps() {
    const prisma = new PrismaClient();
    const configManager = new ConfigManager();
    const fileUploader = new FileUploader(configManager);

    const commentRepo = new CommentRepo(prisma);
    const commentService = new CommentService(commentRepo);
    const commentController = new CommentController(commentService);
    const commentRouter = new CommentRouter(commentController);

    const curationRepo = new CurationRepo(prisma);
    const curationService = new CurationService(curationRepo);
    const curationController = new CurationController(curationService);
    const curationRouter = new CurationRouter(curationController);

    const styleRepo = new StyleRepo(prisma);
    const styleService = new StyleService(styleRepo);
    const styleController = new StyleController(styleService);
    const imageRouter = new ImageRouter({ fileUploader });
    const styleRouter = new StyleRouter(styleController);

    const routers = [
      curationRouter,
      commentRouter,
      styleRouter,
      imageRouter,
    ];

    return new Server(routers, configManager);
  }
}
