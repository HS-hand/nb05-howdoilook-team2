import { Exception, EXCEPTIONS } from "../../common/exception.js";

export class StyleService {
  #styleRepo;

  constructor(styleRepo) {
    this.#styleRepo = styleRepo;
  }

  async getStyleList(options = {}) {
    const result = await this.#styleRepo.findAll(options);
    return result;
  }

  async getPopularTags(limit = 10) {
    const tags = await this.#styleRepo.getPopularTags(limit);
    return tags;
  }

  async createStyle(styleData) {
    const createdStyle = await this.#styleRepo.create(styleData);
    return createdStyle;
  }

  async getStyleById(styleId) {
    const styleEntity = await this.#styleRepo.findById(styleId);
    if (!styleEntity) {
      throw new Exception(EXCEPTIONS.NOT_FOUND);
    }

    await this.#styleRepo.incrementViewCount(styleId);
    return styleEntity;
  }

  async updateStyle(styleId, updateData) {
    const { password, ...rest } = updateData;
    const styleEntity = await this.#styleRepo.findById(styleId);
    if (!styleEntity) {
      throw new Exception(EXCEPTIONS.NOT_FOUND);
    }
    if (!styleEntity.isPasswordMatch(password)) {
      throw new Exception(EXCEPTIONS.FORBIDDEN);
    }

    return await this.#styleRepo.update(styleId, rest);
  }

  async deleteStyle(styleId, password) {
    const styleEntity = await this.#styleRepo.findById(styleId);
    if (!styleEntity) {
      throw new Exception(EXCEPTIONS.NOT_FOUND);
    }
    if (!styleEntity.isPasswordMatch(password)) {
      throw new Exception(EXCEPTIONS.FORBIDDEN);
    }

    return await this.#styleRepo.delete(styleId);
  }
}
