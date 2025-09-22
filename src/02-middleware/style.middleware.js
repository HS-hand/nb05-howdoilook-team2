import { CreateStyleValidator } from "./req-validator/create.style.req.validator.js";
import { UpdateStyleValidator } from "./req-validator/update.style.req.validator.js";
import { DeleteStyleValidator } from "./req-validator/delete.style.req.validator.js";
import { StyleDetailResDto } from "./res-dto/style/style.detail.res.dto.js";
import { UpdateStyleResDto } from "./res.dto/style/update.style.res.dto.js";

export class StyleMiddleware {
  #styleService;

  constructor(styleService) {
    this.#styleService = styleService;
  };

  createStyleMiddleware = async (req, res, next) => {
    const styleData = new CreateStyleValidator({
      body: req.body
    }).validate();
    const newStyleEntity = await this.#styleService.createStyle(styleData);
    const responseDto = new StyleDetailResDto(newStyleEntity);
    
    return res.status(201).json(responseDto);
  };

  viewStyleDetailMiddleware = async (req, res, next) => {
    const styleId = req.params.styleId;
    const styleEntity = await this.#styleService.getStyleById(styleId);
    const responseDto = new StyleDetailResDto(styleEntity);
    
    return res.status(200).json(responseDto);
  };

  updateStyleMiddleware = async (req, res, next) => {
    const { styleId, updateData } = new UpdateStyleValidator({
      body: req.body,
      params: req.params
    }).validate();
    const updatedStyle = await this.#styleService.updateStyle(styleId, updateData);
    new UpdateStyleResDto(updatedStyle);

    return res.status(200).json({
      message: "스타일 수정이 완료되었습니다.",
    });
  };

  deleteStyleMiddleware = async (req, res, next) => {
    const { styleId, password } = new DeleteStyleValidator({
      body: req.body,
      params: req.params
    }).validate();
    
    await this.#styleService.deleteStyle(styleId, password);

    return res.status(200).json({
      message: "스타일 삭제가 완료되었습니다. 갤러리 페이지로 이동합니다.",
    });
  };
}