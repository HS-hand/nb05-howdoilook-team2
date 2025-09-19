import { PrismaClient } from "@prisma/client";
import { Server } from "./01-app/server.js";
import { ConfigManager } from "./common/libs/config.manager.js";
import { FileUploader } from "./common/libs/file.uploader.js";
import { StyleRepo } from "./04-repo/style.repo.js";
import { StyleService } from "./03-domain/service/style.service.js";
import { ImageController } from "./02-controller/image.controller.js";
import { StyleController } from "./02-controller/style.controller.js";
import { CommentMiddleware } from "./02-middleware/comment.middleware.js";
import { CommentController } from "./03-controller/comment.controller.js";
import { CommentService } from "./04-domain/service/comment.service.js";
import { CommentRepo } from "./05-repo/comment.repo.js";
import { CurationMiddleware } from "./02-middleware/curation.middleware.js";
import { CurationController } from "./03-controller/curation.controller.js";
import { CurationService } from "./04-domain/service/curation.service.js";
import { CurationRepo } from "./05-repo/curation.repo.js";

export class DepInjector {
  #server;

  constructor() {
    this.#server = this.injectDeps();
  }

  injectDeps() {
    const configManager = new ConfigManager();
    const fileUploader = new FileUploader(configManager);
    const prisma = new PrismaClient();
    const commentRepo = new CommentRepo(prisma);
    const commentService = new CommentService(commentRepo);
    const commentMiddleware = new CommentMiddleware(commentService);
    const commentController = new CommentController(commentMiddleware);

    const curationRepo = new CurationRepo(prisma);
    const curationService = new CurationService(curationRepo);
    const curationMiddleware = new CurationMiddleware(curationService);
    const curationController = new CurationController(curationMiddleware);

    const styleRepo = new StyleRepo({ prisma });
    const styleService = new StyleService({ styleRepo });
    const imageController = new ImageController({ fileUploader });
    const styleController = new StyleController({ styleService });

    const controllers = [curationController, commentController];

    return new Server(controllers);
  }
}
