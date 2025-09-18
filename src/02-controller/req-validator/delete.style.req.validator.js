import { BaseReqValidator } from "./base.req.validator.js";
import { Exception } from "../../common/exception.js";

export class DeleteStyleValidator extends BaseReqValidator {
  constructor(body, params) {
    super({ body, params });
  };

  validate() {
    const { styleId } = this.params;
    if(!styleId) {
      throw new Exception("BAD_REQUEST");
    };

    const { password } = this.body;
    if(!password) {
      throw new Exception("FORBIDDEN");
    };
    if (!this.isString(password)) {
      throw new Exception("BAD_REQUEST");
    };

    return { styleId, password };
  };
}