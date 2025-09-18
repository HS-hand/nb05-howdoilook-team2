import { Style } from "../entity/style.js";
import { BaseService } from "./base.service.js";
import { Exception } from "../../common/exception.js";

export class StyleService extends BaseService {
  constructor(repos) {
    super(repos);
  };

  async createStyle(styleData) {
    const styleEntity = Style.forCreate(styleData);
    const createdStyle = await this.repos.create(styleEntity, styleData);

    return createdStyle;
  };

  async updateStyle(styleId, updateData) {
    const { password, ...rest } = updateData;
    const styleEntity = await this.repos.findById(styleId, true);
    if (!styleEntity) {
      throw new Exception("NOT_FOUND");
    };

    const passwordMatch = styleEntity.isPasswordMatch(password);
    if (!passwordMatch) {
      throw new Exception("FORBIDDEN");
    };

    const updatedStyle = await this.repos.update(styleId, rest);

    return updatedStyle;
  };

  async deletStyle(styleId, password) {
    const styleEntity = await this.repos.findById(styleId, true);
    if (!styleEntity) {
      throw new Exception("NOT_FOUND");
    };

    const passwordMatch = styleEntity.isPasswordMatch(password);
    if (!passwordMatch) {
      throw new Exception("FORBIDDEN");
    };

    const deletedStyle = await this.repos.delete(styleId);

    return deletedStyle;
  };
}