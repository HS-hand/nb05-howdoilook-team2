import { BaseValidator } from "../base.validator.js";
import { Exception, EXCEPTIONS } from "../../../common/exception.js";

export class UploadImageReqValidator extends BaseValidator {
  constructor(files) {
    super(files);
  }

  validate() {
    if (!this.files || this.files.length === 0) {
      throw new Exception(EXCEPTIONS.BAD_REQUEST);
    }

    return this.files;
  }
}
