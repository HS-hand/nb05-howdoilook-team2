import { PrismaClient } from "@prisma/client";
import { Server } from "./01-app/server.js";
import { CommentMiddleware } from "./02-middleware/comment.middleware.js";
import { CommentController } from "./03-controller/comment.controller.js";
import { CommentService } from "./04-domain/service/comment.service.js";
import { CommentRepo } from "./05-repo/comment.repo.js";

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
    const controllers = [commentController];

    return new Server(controllers);
  }
}
