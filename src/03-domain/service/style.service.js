import { Style } from "../entity/style.js";
import { BaseService } from "./base.service.js";
import { Exception } from "../../common/exception.js";

export class StyleService extends BaseService {
  constructor(repos) {
    super(repos);
  }

  async createStyle({ nickname, title, content, password, categories, tags, imageUrls }) {
    const style = Style.forCreate({ nickname, title, content, password, categories, tags, imageUrls });
    const createdStyle = await this.repos.style.create({
      entity: style,
      styleId: style.id,
    });

    return createdStyle;
  }

  async updateStyle({ styleId, updateFields, password }) {
    const foundStyleId = await this.repos.style.findById(styleId);
    if (!foundStyleId || !foundStyleId.isPasswordMatch(password)) {
      throw new Exception("PASSWORD_UNMATCH");
    }


  }
}
