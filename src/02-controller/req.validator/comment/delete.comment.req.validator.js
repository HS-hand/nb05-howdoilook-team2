import { Exception, EXCEPTIONS } from "../../../common/exception.js";
import { BaseValidator } from "../base.validator.js";

export class DeleteCommentReqValidator extends BaseValidator {
  constructor(data) {
    super(data);
  }

  validate() {
    let { commentId } = this.params;
    const { password } = this.body;

    if (this.isEmpty(commentId)) {
      throw new Exception(EXCEPTIONS.BAD_REQUEST);
    }

    if (!this.isString(password) || this.isEmpty(password)) {
      throw new Exception(EXCEPTIONS.BAD_REQUEST);
    }

    return {
      commentId,
      password,
    };
  }
}
