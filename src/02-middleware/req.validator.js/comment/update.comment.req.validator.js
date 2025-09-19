import { Exception, EXCEPTIONS } from "../../../common/exception.js";
import { BaseValidator } from "../base.validator.js";

export class UpdateCommentReqValidator extends BaseValidator {
  constructor(data) {
    super(data);
  }

  validate() {
    let { commentId } = this.params;
    const { content, password } = this.body;

    if (!this.body) {
      throw new Exception(EXCEPTIONS.ALL_UNDEFINED);
    }

    if (!this.isEmpty(content)) {
      if (!this.isString(content)) {
        throw new Exception(EXCEPTIONS.CONTENT_FORM);
      }
    }
    if (!this.isEmpty(password)) {
      if (!this.isString(password)) {
        throw new Exception(EXCEPTIONS.PASSWORD_FORM);
      }
    }

    return {
      commentId,
      content,
      password,
    };
  }
}
