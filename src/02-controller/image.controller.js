import { BaseController } from "./base.controller.js";

export class ImageController extends BaseController {
  #fileUploader;

  constructor({ fileUploader }) {
    super("/api/images");
    this.#fileUploader = fileUploader;
    this.registerRoutes();
  }

  registerRoutes() {
    this.router.post(
      "/",
      this.#fileUploader.uploadFileMiddleware("image"),
      this.catchException(this.uploadImageMiddleware)
    );
  }

  uploadImageMiddleware = async (req, res) => {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "업로드할 이미지 파일이 없습니다." });
    }

    const imageUrl = `http://localhost:3000/${req.files[0].filename}`;

    return res.status(200).json({ imageUrl });
  };
}