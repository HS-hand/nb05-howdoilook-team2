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
      throw new Exception(EXCEPTIONS.CURATIONID_NOT_EXSIST);
    }

    if (!this.isString(password)) {
      throw new Exception(EXCEPTIONS.PASSWORD_FORM);
    } else if (this.isEmpty(password)) {
      throw new Exception(EXCEPTIONS.PASSWORD_NOT_EXSIST);
    }

    return {
      id: commentId,
      password,
    };
  }
}
