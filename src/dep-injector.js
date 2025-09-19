import { PrismaClient } from "@prisma/client";
import { Server } from "./01-app/server.js";
import { CommentMiddleware } from "./02-middleware/comment.middleware.js";
import { CommentController } from "./03-controller/comment.controller.js";
import { CommentService } from "./04-domain/service/comment.service.js";
import { CommentRepo } from "./05-repo/comment.repo.js";
import { CurationMiddleware } from "./02-middleware/curation.middleware.js";
import { CurationController } from "./03-controller/curation.controller.js";
import { CurationService } from "./04-domain/service/curation.service.js";
import { CurationRepo } from "./05-repo/curation.repo.js";
import { StyleRepo } from "./05-repo/style.repo.js";
import { StyleService } from "./04-domain/service/style.service.js";
import { StyleMiddleware } from "./02-middleware/style.middleware.js";
import { StyleController } from "./03-controller/style.controller.js";

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

    const commentRepo = new CommentRepo(prisma);
    const commentService = new CommentService(commentRepo);
    const commentMiddleware = new CommentMiddleware(commentService);
    const commentController = new CommentController(commentMiddleware);

    const curationRepo = new CurationRepo(prisma);
    const curationService = new CurationService(curationRepo);
    const curationMiddleware = new CurationMiddleware(curationService);
    const curationController = new CurationController(curationMiddleware);

    const styleRepo = new StyleRepo(prisma);
    const styleService = new StyleService(styleRepo);
    const styleMiddleware = new StyleMiddleware(styleService);
    const styleController = new StyleController(styleMiddleware);


    const controllers = [curationController, commentController, styleController];

    return new Server(controllers);
  }
}
