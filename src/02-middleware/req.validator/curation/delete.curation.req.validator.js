import { Exception, EXCEPTIONS } from "../../../common/exception.js";
import { BaseValidator } from "../base.validator.js";

export class DeleteCurationReqValidator extends BaseValidator {
  constructor(data) {
    super(data);
  }

  validate() {
    let { curationId } = this.params;
    const { password } = this.body;
    if (!this.isString(curationId) || this.isEmpty(curationId)) {
      throw new Exception(EXCEPTIONS.CURATIONID_FORM);
    }

    if (
      !this.isString(password) ||
      this.isEmpty(password)
    ) {
      throw new Exception(EXCEPTIONS.PASSWORD_FORM);
    }

    if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/.test(password)) {
      throw new Exception(EXCEPTIONS.PASSWORD_REGEX)
    }

    return {
      id: curationId,
      password,
    };
  }
}
