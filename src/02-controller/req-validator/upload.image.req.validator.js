import { BaseReqValidator } from './base.req.validator.js';
import { Exception } from '../../common/exception.js';

export class UploadImageValidator extends BaseReqValidator {
  constructor(files) {
    super({ files });
  };

  validate() {
    if (!this.files || this.files.length === 0) {
      throw new Exception("BAD_REQUEST");
    };

    return this.files;
  };
}