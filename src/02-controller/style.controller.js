import { BaseController } from "./base.controller.js";
import { CreateStyleValidator } from "./req-validator/create.style.req.validator.js";
import { UpdateStyleValidator } from "./req-validator/update.style.req.validator.js";
import { DeleteStyleValidator } from "./req-validator/delete.style.req.validator.js";
import { StyleDetailResDto } from "./res-dto/style.detail.res.dto.js";

export class StyleController extends BaseController {
  #styleService;

  constructor({ styleService }) {
    super("/api/styles");
    this.#styleService = styleService;
    this.registerRoutes();
  };

  registerRoutes() {
    this.router.post("/", this.catchException(this.createStyle));
    this.router.get('/:styleId', this.catchException(this.getStyleById));
    this.router.put("/:styleId", this.catchException(this.updateStyle));
    this.router.delete("/:styleId", this.catchException(this.deleteStyle));
  };

  createStyle = async (req, res) => {
    const styleData = new CreateStyleValidator(req.body).validate();
    const newStyleEntity = await this.#styleService.createStyle(styleData);
    const responseDto = new StyleDetailResDto(newStyleEntity);
    
    res.status(201).json(responseDto);
  };

   getStyleById = async (req, res) => {
    const styleId = req.params.styleId;
    const styleEntity = await this.#styleService.getStyleById(styleId);
    const responseDto = new StyleDetailResDto(styleEntity);
    res.status(200).json(responseDto);
  };

  updateStyle = async (req, res) => {
    const { styleId, updateData } = new UpdateStyleValidator(req.body, req.params).validate();
    await this.#styleService.updateStyle(styleId, updateData);

    res.status(200).json({
      message: "스타일 수정이 완료되었습니다.",
    });
  };

  deleteStyle = async (req, res) => {
    const { styleId, password } = new DeleteStyleValidator(req.body, req.params).validate();
    
    await this.#styleService.deleteStyle(styleId, password);
    res.status(200).json({
      message: "스타일 삭제가 완료되었습니다. 갤러리 페이지로 이동합니다.",
    });
  };
}