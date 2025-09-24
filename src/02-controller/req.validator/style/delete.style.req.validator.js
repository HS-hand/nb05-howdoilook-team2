import { Exception, EXCEPTIONS } from "../../../common/exception.js";
import { BaseValidator } from "../base.validator.js";

export class DeleteStyleValidator extends BaseValidator {
  constructor(data) {
    super(data);
  }

  validate() {
    const { styleId } = this.params;
    if (!styleId) {
      throw new Exception(EXCEPTIONS.BAD_REQUEST);
    }

    const { password } = this.body;
    if (!password) {
      throw new Exception(EXCEPTIONS.FORBIDDEN);
    }
    if (!this.isString(password) || this.isEmpty(password)) {
      throw new Exception(EXCEPTIONS.BAD_REQUEST);
    }

    return { styleId, password };
  }
}
