import fs from "fs";
import path from "path";
import multer from "multer";
import { CONFIG_KEY } from "../config.keys.js";

export class FileUploader {
  #path;
  #uploader;

  constructor(configManager) {
    this.#path = configManager.get(CONFIG_KEY.DISK_STORAGE_PATH);
    this.#uploader = multer({ storage: this.createDiskStorage() });
  }

  createDiskStorage() {
    return multer.diskStorage({
      destination: (req, file, callback) => {
        const uploadPath = this.getPath();
        callback(null, uploadPath);
      },
      filename: (req, file, callback) => {
        const uniqueFilename = this.getUniqueFilename(file.originalname);
        callback(null, uniqueFilename);
      },
    });
  }

  getPath() {
    if (!fs.existsSync(this.#path)) {
      fs.mkdirSync(this.#path, { recursive: true });
    }
    return this.#path;
  }

  getUniqueFilename(originalname) {
    const ext = path.extname(originalname);
    const basename = path.basename(originalname, ext);
    return basename + "-" + Date.now() + ext;
  }

  uploadFileMiddleware = (key) => {
    return this.#uploader.array(key);
  };
}
