import { Exception, EXCEPTIONS } from "../../../common/exception.js";
import { BaseValidator } from "../base.validator.js";

export class UpdateCommentReqValidator extends BaseValidator {
  constructor(data) {
    super(data);
  }

  validate() {
    let { commentId } = this.params;
    const { content, password } = this.body;

    if (this.isEmpty(content)) {
      throw new Exception(EXCEPTIONS.BAD_REQUEST);
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
