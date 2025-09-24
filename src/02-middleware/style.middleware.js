import { CreateStyleValidator } from "./req.validator/style/create.style.req.validator.js";
import { UpdateStyleValidator } from "./req.validator/style/update.style.req.validator.js";
import { DeleteStyleValidator } from "./req.validator/style/delete.style.req.validator.js";
import { ListStyleValidator } from "./req.validator/style/list.style.req.validator.js";
import { CreateStyleResDto } from "./res.dto/style/create.style.res.dto.js";
import { UpdateStyleResDto } from "./res.dto/style/update.style.res.dto.js";
import { DeleteStyleResDto } from "./res.dto/style/delete.style.res.dto.js";
import { GetStyleDetailResDto } from "./res.dto/style/get.style.detail.res.dto.js";
import { ListStyleResDto } from "./res.dto/style/list.style.res.dto.js";

export class StyleMiddleware {
  #styleService;

  constructor(styleService) {
    this.#styleService = styleService;
  }

  galleryListMiddleware = async (req, res, next) => {
    const validator = new ListStyleValidator({ query: req.query });
    const validated = validator.validate();

    const { items, pagination } = await this.#styleService.getStyleList({
      page: validated.page,
      pageSize: validated.pageSize,
      sortBy: validated.sortBy,
      tagFilter: validated.tag,
      searchBy: validated.searchBy,
      keyword: validated.keyword,
    });

    const listDto = items.map((style) => new ListStyleResDto(style));

    return res.json({
      items: listDto,
      pagination,
    });
  };

  popularTagsMiddleware = async (req, res, next) => {
    const limit = Number(req.query.limit) || 10;
    const tags = await this.#styleService.getPopularTags(limit);

    return res.json({ tags });
  };

  createStyleMiddleware = async (req, res, next) => {
    const styleData = new CreateStyleValidator({
      body: req.body,
    }).validate();
    const newStyleEntity = await this.#styleService.createStyle(styleData);
    const responseDto = new CreateStyleResDto(newStyleEntity);

    return res.status(201).json(responseDto);
  };

  getStyleDetailMiddleware = async (req, res, next) => {
    const styleId = req.params.styleId;
    const styleEntity = await this.#styleService.getStyleById(styleId);
    const responseDto = new GetStyleDetailResDto(styleEntity);

    return res.status(200).json(responseDto);
  };

  updateStyleMiddleware = async (req, res, next) => {
    const { styleId, updateData } = new UpdateStyleValidator({
      body: req.body,
      params: req.params,
    }).validate();
    const updatedStyle = await this.#styleService.updateStyle(
      styleId,
      updateData,
    );
    new UpdateStyleResDto(updatedStyle);

    return res.status(200).json({
      message: "스타일 수정이 완료되었습니다.",
    });
  };

  deleteStyleMiddleware = async (req, res, next) => {
    const { styleId, password } = new DeleteStyleValidator({
      body: req.body,
      params: req.params,
    }).validate();

    const deletedStyle = await this.#styleService.deleteStyle(
      styleId,
      password,
    );
    const deletedStyleResDto = new DeleteStyleResDto(deletedStyle);
    return res.status(200).json(deletedStyleResDto);
  };
}
