import { Style } from "../entity/style.js";
import { BaseService } from "./base.service.js";
import { Exception } from "../../common/exception.js";

export class StyleService extends BaseService {
  constructor(repos) {
    super(repos);
  }

  async createStyle({ nickname, title, content, password, categories, tags, images }) {
    const style = Style.forCreate({ nickname, title, content, password, categories, tags, images });
    const createdStyle = await this.repos.createStyle(style);

    return createdStyle;
  }

  async updateStyle(styleId, updateData) {
    const { password, ...rest } = updateData;
    const style = await this.repos.findStyleById(styleId, true);
    if (!style) {
      throw new Exception("NOT_FOUND");
    };

    const isPasswordMatch = (password === style.passwordMatch);
    if (!isPasswordMatch) {
      throw new Exception("FORBIDDEN");
    };

    const updatedStyle = await this.repos.updateStyle(styleId, rest);

    return updatedStyle;
  }

  async deletStyle(styleId, password) {
    const style = await this.repos.findStyleById(styleId, true);
    if (!style) {
      throw new Exception("NOT_FOUND");
    };

    const isPasswordMatch = (password === style.passwordMatch);
    if (!isPasswordMatch) {
      throw new Exception("FORBIDDEN");
    };

    const deletedStyle = await this.repos.deleteStyle(styleId);

    return deletedStyle;
  }
}
