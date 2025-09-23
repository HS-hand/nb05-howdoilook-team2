import { Exception, EXCEPTIONS } from "../../common/exception.js";
import { Style } from "../entity/style.js";

export class StyleService {
  #styleRepo;

  constructor(styleRepo) {
    this.#styleRepo = styleRepo;
  }

  async createStyle(styleData) {
    const styleEntity = Style.factory(styleData);
    const createdStyle = await this.#styleRepo.create(styleEntity, styleData);

    return createdStyle;
  }

  async getStyleById(styleId) {
    const styleEntity = await this.#styleRepo.findById(styleId);
    if (!styleEntity) {
      throw new Exception(EXCEPTIONS.NOT_FOUND);
    }

    this.#styleRepo.incrementViewCount(styleId);
    return styleEntity;
  }

  async updateStyle(styleId, updateData) {
    const { password, ...rest } = updateData;
    const styleEntity = await this.#styleRepo.findById(styleId, true);
    if (!styleEntity) {
      throw new Exception(EXCEPTIONS.NOT_FOUND);
    }

    const passwordMatch = styleEntity.isPasswordMatch(password);
    if (!passwordMatch) {
      throw new Exception(EXCEPTIONS.FORBIDDEN);
    }
    const updatedStyle = await this.#styleRepo.update(styleId, rest);
    return updatedStyle;
  }

  async deleteStyle(styleId, password) {
    const styleEntity = await this.#styleRepo.findById(styleId, true);
    if (!styleEntity) {
      throw new Exception(EXCEPTIONS.NOT_FOUND);
    }

    const passwordMatch = styleEntity.isPasswordMatch(password);
    if (!passwordMatch) {
      throw new Exception(EXCEPTIONS.FORBIDDEN);
    }

    const deletedStyle = await this.#styleRepo.delete(styleId);

    return deletedStyle;
  }
}
