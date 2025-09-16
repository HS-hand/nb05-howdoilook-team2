import { Exception, EXCEPTIONS } from "../../../common/exception.js";
import { BaseValidator } from "../base.validator.js";

export class DeleteCurationReqValidator extends BaseValidator{
  constructor(data) {
    super(data)
  }

  validate() {
    let {curationId} = this.params;
    const {password} = this.body;
    curationId = Number(curationId);
    if (!this.isInt(curationId)) {
      throw new Exception(EXCEPTIONS.CURATIONID_FORM);
    } else if(this.isEmpty(curationId)){
      throw new Exception(EXCEPTIONS.CURATIONID_NOT_EXSIST);
    };

    if (!this.isString(password)) {
      throw new Exception(EXCEPTIONS.PASSWORD_FORM);
    } else if(this.isEmpty(password)){
      throw new Exception(EXCEPTIONS.PASSWORD_NOT_EXSIST);
    };

    return {
      id : curationId,
      password
    }
  }
}