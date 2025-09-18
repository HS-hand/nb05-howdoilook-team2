import { BaseController } from "./base.controller.js";
import { UploadImageValidator } from "./req-validator/upload.image.req.validator.js";

export class ImageController extends BaseController {
  #fileUploader;

  constructor({ fileUploader }) {
    super("/api/images");
    this.#fileUploader = fileUploader;
    this.registerRoutes();
  };

  registerRoutes() {
    this.router.post(
      "/",
      this.#fileUploader.uploadFileMiddleware("image"),
      this.catchException(this.uploadImageMiddleware),
    );
  };

  uploadImageMiddleware = async (req, res) => {
    const validateFiles = new UploadImageValidator(req.files).validate();

    const imageUrl = `http://localhost:3000/${req.files[0].filename}`;

    return res.status(200).json({ imageUrl });
  };
}