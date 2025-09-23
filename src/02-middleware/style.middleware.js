import { CreateStyleValidator } from "./req.validator/style/create.style.req.validator.js";
import { UpdateStyleValidator } from "./req.validator/style/update.style.req.validator.js";
import { DeleteStyleValidator } from "./req.validator/style/delete.style.req.validator.js";
import { CreateStyleResDto } from "./res.dto/style/create.style.res.dto.js";
import { UpdateStyleResDto } from "./res.dto/style/update.style.res.dto.js";
import { DeleteStyleResDto } from "./res.dto/style/delete.style.res.dto.js";
import { StyleDetailResDto } from "./res.dto/style/style.detail.res.dto.js";

export class StyleMiddleware {
  #styleService;

  constructor(styleService) {
    this.#styleService = styleService;
  }

  galleryListMiddleware = async (req, res, next) => {
    const {
      page = "1",
      pageSize = "10",
      sortBy = "latest",
      tag,
      searchBy,
      keyword,
    } = req.query;

    const options = {
      page: Number(page) || 1,
      pageSize: Number(pageSize) || 10,
      sortBy,
      tagFilter: tag,
      searchBy,
      keyword,
    };

    const { items, pagination } =
      await this.#styleService.getStyleList(options);

    const listDto = items.map((style) => {
      const representativeImage =
        style.imageUrls && style.imageUrls.length ? style.imageUrls[0] : null;

      return {
        id: style.id,
        representativeImage,
        title: style.title,
        nickname: style.nickname,
        tags: style.tags,
        categories: style.categories,
        content: style.content,
        viewCount: style.viewCount,
        curationCount: style.curationCount ?? 0,
        createdAt: style.createdAt,
      };
    });

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

  viewStyleDetailMiddleware = async (req, res, next) => {
    const styleId = req.params.styleId;
    const styleEntity = await this.#styleService.getStyleById(styleId);
    const responseDto = new StyleDetailResDto(styleEntity);

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
