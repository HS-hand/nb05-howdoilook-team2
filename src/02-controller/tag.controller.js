import { GetTagsResDto } from "./res.dto/tag/get.tags.res.dto.js";

export class TagController {
  #tagRepo;

  constructor(tagRepo) {
    this.#tagRepo = tagRepo;
  }

  getTagsController = async (req, res, next) => {
    const tags = await this.#tagRepo.getAllTags();
    const tagsResDto = new GetTagsResDto(tags);
    return res.json(tagsResDto);
  };
}
