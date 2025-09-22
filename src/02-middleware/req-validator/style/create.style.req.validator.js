import { BaseValidator } from "../base.validator.js";
import { Exception, EXCEPTIONS } from "../../../common/exception.js";

export class CreateStyleValidator extends BaseValidator {
  constructor(data) {
    super(data);
  }

  validate() {
    const { nickname, title, content, password, categories, tags, imageUrls } =
      this.body;

    if (!nickname || !title || !content || !tags || !imageUrls) {
      throw new Exception(EXCEPTIONS.NOTICE);
    }
    if (!password) {
      throw new Exception(EXCEPTIONS.PASSWORD_NOTICE);
    }
    if (!categories) {
      throw new Exception(EXCEPTIONS.NOTICE_CATEGORIES);
    }
    if (
      !this.isString(nickname) ||
      !this.isString(title) ||
      !this.isString(content) ||
      !this.isString(password)
    ) {
      throw new Exception(EXCEPTIONS.BAD_REQUEST);
    }
    if (typeof categories !== 'object' || Array.isArray(categories) || categories === null) {
      throw new Exception(EXCEPTIONS.BAD_REQUEST);
    }
    if (
      !Array.isArray(tags) ||
      !Array.isArray(imageUrls)
    ) {
      throw new Exception(EXCEPTIONS.BAD_REQUEST);
    }
    if (nickname.length > 20) {
      throw new Exception(EXCEPTIONS.NOTICE_MAXTWO);
    }
    if (title.length > 30) {
      throw new Exception(EXCEPTIONS.NOTICE_MAXTHREE);
    }
    if (content.length > 300) {
      throw new Exception(EXCEPTIONS.NOTICE_MAXHUND);
    }
    if (password.length < 8 && password.length > 16) {
      throw new Exception(EXCEPTIONS.PASSWORD_NOTICE);
    }
    if (tags.length > 3) {
      throw new Exception(EXCEPTIONS.NOTICE_TAGS);
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
