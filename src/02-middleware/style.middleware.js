import { CreateStyleReqValidator } from "./req.validator/style/create.style.req.validator.js";
import { StyleDetailResDto } from "./res.dto/style/view.style.detail.res.dto.js";
import { UpdateStyleReqValidator } from "./req.validator/style/update.style.req.validator.js";
import { DeleteStyleReqValidator } from "./req.validator/style/delete.style.req.validator.js";
import { UpdateStyleResDto } from "./res.dto/style/update.style.res.dto.js";
import { DeleteStyleResDto } from "./res.dto/style/delete.style.res.dto.js";

export class StyleMiddleware {
  #styleService;

  constructor(styleService) {
    this.#styleService = styleService;
  }

  createStyleMiddleware = async (req, res, next) => {
    const styleData = new CreateStyleReqValidator({
      body: req.body
    }).validate();
    const newStyleEntity = await this.#styleService.createStyle(styleData);
    const responseDto = new StyleDetailResDto(newStyleEntity);
    return res.json(responseDto);
  };

  viewStyleDetailMiddleware = async (req, res, next) => {
    const styleId = req.params.styleId;
    const styleEntity = await this.#styleService.getStyleById(styleId);
    const responseDto = new StyleDetailResDto(styleEntity);
    return res.json(responseDto);
  };

  updateStyleMiddleware = async (req, res, next) => {
    const { styleId, updateData } = new UpdateStyleReqValidator({
      params: req.params,
      body: req.body,
    }).validate();
    const updatedStyle = await this.#styleService.updateStyle(
      styleId,
      updateData,
    );
    const updatedStyleResDto = new UpdateStyleResDto(updatedStyle);
    return res.json(updatedStyleResDto);
  };

  deleteStyleMiddleware = async (req, res, next) => {
    const { styleId, password } = new DeleteStyleReqValidator({
      params: req.params,
      body: req.body,
    }).validate();
    const deletedStyle = await this.#styleService.deleteStyle(
      styleId,
      password,
    );
    const deletedStyleResDto = new DeleteStyleResDto(deletedStyle);
    return res.json(deletedStyleResDto);
  };
}
