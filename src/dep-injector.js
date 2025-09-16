import { PrismaClient } from "@prisma/client";
import { Server } from "./01-app/server.js";
import { CurationMiddleware } from "./02-middleware/curation.middleware.js";
import { CurationController } from "./03-controller/curation.controller.js";
import { CurationService } from "./04-domain/service/curation.service.js";
import { CurationRepo } from "./05-repo/curation.repo.js";

export class DepInjector {
  #server;

  constructor(){
    this.#server = this.injectDeps();
  }

  get server() {
    return this.#server;
  }

  injectDeps() {
    const prisma = new PrismaClient ();
    
    const curationRepo = new CurationRepo(prisma);

    const curationService = new CurationService(curationRepo);

    const curationMiddleware = new CurationMiddleware(curationService)

    const curationController = new CurationController(curationMiddleware);
    const controllers = [curationController];

    return new Server(controllers);
  }
}