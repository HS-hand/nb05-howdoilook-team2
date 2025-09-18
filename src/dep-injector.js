import { PrismaClient } from "@prisma/client";
import { Server } from "./01-app/server.js";
import { ConfigManager } from "./common/libs/config.manager.js";
import { FileUploader } from "./common/libs/file.uploader.js";

import { StyleRepo } from "./04-repo/style.repo.js";

import { StyleService } from "./03-domain/service/style.service.js";

import { ImageController } from "./02-controller/image.controller.js";
import { StyleController } from "./02-controller/style.controller.js";

export class DepInjector {
  server;

  constructor(){
    const configManager = new ConfigManager();
    const fileUploader = new FileUploader(configManager);
    const prisma = new PrismaClient();

    const styleRepo = new StyleRepo({ prisma });

    const styleService = new StyleService({ styleRepo });

    const imageController = new ImageController({ fileUploader });
    const styleController = new StyleController({ styleService });

    this.server = new Server({
      configManager,
      controllers: [
        imageController,
        styleController,
      ],
    });
  };
}