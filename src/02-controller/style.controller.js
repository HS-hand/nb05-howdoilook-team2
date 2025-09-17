import { BaseController } from "./base.controller.js";
import { Exception } from "../common/exception.js";

export class StyleController extends BaseController {
  #styleService;

  constructor({ styleService }) {
    super("/api/styles");
    this.#styleService = styleService;
    this.registerRoutes();
  };

  registerRoutes() {
    this.router.post("/", this.catchException(this.createStyle));
    this.router.put("/:styleId", this.catchException(this.updateStyle));
    this.router.delete("/:styleId", this.catchException(this.deleteStyle));
  };

  createStyle = async (req, res) => {
    const styleData = req.body;
    const newStyle = await this.#styleService.createStyle(styleData);
    
    res.status(201).json(newStyle);
  };

  updateStyle = async (req, res) => {
    const styleId = req.params.styleId;
    if(!styleId) {
      throw new Exception("BAD_REQUEST");
    };

    const updateData = req.body;
    await this.#styleService.updateStyle(styleId, updateData);

    res.status(200).json({
      message: "스타일 수정이 완료되었습니다.",
    });
  };

  deleteStyle = async (req, res) => {
    const styleId = req.params.styleId;
    if(!styleId) {
      throw new Exception("BAD_REQUEST");
    };

    const { password } = req.body;
    if (!password) {
      throw new Exception("FORBIDDEN");
    };

    await this.#styleService.deleteStyle(styleId, password);
    res.status(200).json({
      message: "스타일 삭제가 완료되었습니다. 갤러리 페이지로 이동합니다.",
    });
  };
}