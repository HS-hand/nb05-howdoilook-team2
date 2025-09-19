import { BaseValidator } from "../base.validator.js";
import { Exception, EXCEPTIONS } from "../../../common/exception.js";

export class CreateStyleReqValidator extends BaseValidator {
  constructor(data) {
    super(data);
  }

  validate() {
    const { nickname, title, content, password, categories, tags, imageUrls } =
      this.body;
    if (
      !nickname ||
      !title ||
      !content ||
      !tags ||
      !imageUrls ||
      !password ||
      !categories
    ) {

      throw new Exception(EXCEPTIONS.BAD_REQUEST);
    }

    if (
      !this.isString(nickname) ||
      !this.isString(title) ||
      !this.isString(content) ||
      !this.isString(password)
    ) {
      throw new Exception(EXCEPTIONS.BAD_REQUEST);
    }
    if (
      !Array.isArray(tags) ||
      !Array.isArray(imageUrls)
    ) {
      throw new Exception(EXCEPTIONS.BAD_REQUEST);
    }

    return {
      nickname,
      title,
      content,
      password,
      categories,
      tags,
      imageUrls,
    };
  }
}
