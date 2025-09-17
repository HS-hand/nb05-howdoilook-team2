import { PrismaClient } from "@prisma/client";
import { Server } from "./01-app/server.js";

import { StyleRepo } from "./04-repo/style.repo.js";

import { StyleService } from "./03-domain/service/style.service.js";

import { StyleController } from "./02-controller/style.controller.js";

export class DepInjector {
  #server;

  constructor(){
    this.#server = this.injectDeps();
  }

  injectDeps() {
    return new Server();
  }

  get server() {
    return this.#server;
  }
}