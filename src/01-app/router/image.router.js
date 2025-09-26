import { UploadImageValidator } from "../../02-controller/req.validator/style/upload.image.req.validator.js";
import { BaseRouter } from "./base.router.js";

export class ImageRouter extends BaseRouter {
  #fileUploader;

  constructor({ fileUploader }) {
    super("/images");
    this.#fileUploader = fileUploader;
    this.registerRoutes();
  }

  registerRoutes() {
    this.router.post(
      "/",
      this.#fileUploader.uploadFileMiddleware("image"),
      this.catchException(this.uploadImageController),
    );
  }

  uploadImageController = async (req, res) => {
    const validateFiles = new UploadImageValidator(req.files).validate();

    const imageUrl = `http://localhost:4000/${req.files[0].filename}`;

    return res.status(200).json({ imageUrl });
  };
}
