import { BaseReqValidator } from "./base.req.validator.js";
import { Exception } from "../../common/exception.js";

export class UpdateStyleValidator extends BaseReqValidator {
  constructor(body, params) {
    super({ body, params });
  };

  validate() {
    const { styleId } = this.params;

    if (!styleId) {
      throw new Exception("BAD_REQUEST");
    };

    const {nickname, title, content, password, categories, tags, imageUrls } = this.body;

    if (!nickname || !title || !content || !tags || !imageUrls) {
      throw new Exception("NOTICE");
    };
    if(!password) {
      throw new Exception("PASSWORD_NOTICE");
    };
    if(!categories) {
      throw new Exception("NOTICE_CATEGORIES");
    };
    if (!this.isString(nickname) || !this.isString(title) || !this.isString(content) || !this.isString(password)) {
      throw new Exception("BAD_REQUEST");
    };
    if (!Array.isArray(categories) || !Array.isArray(tags) || !Array.isArray(imageUrls)) {
        throw new Exception("BAD_REQUEST");
    };
    if (nickname.length > 20) {
      throw new Exception("NOTICE_MAXTWO");
    };
    if (title.length > 30) {
      throw new Exception("NOTICE_MAXTHREE");
    };
    if (content.length > 300) {
      throw new Exception("NOTICE_MAXHUND");
    };
    if (password.length < 8 && password.length > 16) {
      throw new Exception("PASSWORD_NOTICE");
    };
    if (tags.length > 3) {
      throw new Exception("NOTICE_TAGS");
    };

    return {
      styleId,
      updateData: {
        nickname,
        title,
        content,
        password,
        categories,
        tags,
        imageUrls,
      },
    };
  };
}