import { Exception, EXCEPTIONS } from "../../../common/exception.js";
import { BaseValidator } from "../base.validator.js";

export class CreateCommentReqValidator extends BaseValidator {
  constructor(data) {
    super(data);
  }

  validate() {
    const { curationId } = this.params;
    const { content, password } = this.body;

    if (this.isEmpty(curationId)) {
      throw new Exception(EXCEPTIONS.NOT_FOUND);
    }
    if (this.isEmpty(content)) {
      throw new Exception(EXCEPTIONS.BAD_REQUEST);
    }

    if (!this.isString(password) || this.isEmpty(password)) {
      throw new Exception(EXCEPTIONS.BAD_REQUEST);
    }

    return {
      curationId,
      content,
      password,
    };
  }
}
