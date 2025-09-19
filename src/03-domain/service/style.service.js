import { Style } from "../entity/style.entity.js";
import { BaseService } from "./base.service.js";
import { Exception } from "../../common/exception.js";

export class StyleService extends BaseService {
  constructor({ styleRepo, ...repos }) {
    super(repos);
    this.styleRepo = styleRepo;
  };

  async createStyle(styleData) {
    const styleEntity = Style.forCreate(styleData);
    const createdStyle = await this.styleRepo.create(styleEntity, styleData);

    return createdStyle;
  };

  async getStyleById(styleId) {
    const styleEntity = await this.styleRepo.findById(styleId);
    if (!styleEntity) {
      throw new Exception("NOT_FOUND");
    }
    
    this.styleRepo.incrementViewCount(styleId);
    return styleEntity;
  };

  async updateStyle(styleId, updateData) {
    const { password, ...rest } = updateData;
    const styleEntity = await this.styleRepo.findById(styleId, true);
    if (!styleEntity) {
      throw new Exception("NOT_FOUND");
    };

    const passwordMatch = styleEntity.isPasswordMatch(password);
    if (!passwordMatch) {
      throw new Exception("FORBIDDEN");
    };

    const updatedStyle = await this.styleRepo.update(styleId, rest);
    return updatedStyle;
  };

  async deleteStyle(styleId, password) {
    const styleEntity = await this.styleRepo.findById(styleId, true);
    if (!styleEntity) {
      throw new Exception("NOT_FOUND");
    };

    const passwordMatch = styleEntity.isPasswordMatch(password);
    if (!passwordMatch) {
      throw new Exception("FORBIDDEN");
    };

    const deletedStyle = await this.styleRepo.delete(styleId);

    return deletedStyle;
  };
}