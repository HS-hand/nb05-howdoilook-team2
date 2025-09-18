import { Exception, EXCEPTIONS } from "../../../common/exception.js";
import { BaseValidator } from "../base.validator.js";

export class CreateCommentReqValidator extends BaseValidator {
  constructor(data) {
    super(data);
  }

  validate() {
    const { curationId } = this.params;
    const { content, password } = this.body;

    if (this.isEmpty(content)) {
      throw new Exception(EXCEPTIONS.BAD_REQUEST);
    }

    if (!this.isString(password)) {
      throw new Exception(EXCEPTIONS.PASSWORD_FORM);
    } else if (this.isEmpty(password)) {
      throw new Exception(EXCEPTIONS.PASSWORD_NOT_EXSIST);
    }
    return {
      curationId,
      content,
      password,
    };
  }
}
