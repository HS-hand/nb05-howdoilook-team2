import { BaseValidator } from "../base.validator.js";

export class RankingStyleReqValidator extends BaseValidator {

  constructor(data) {
    super(data);
  }

  validate() {
    const { page = 1, pageSize = 8 } = this.query;
    Number(page);
    Number(pageSize);
    if (!this.isInt(page) || page < 0) {
      throw new Exception(EXCEPTIONS.PAGE_FORM);
    }
    if (!this.isInt(pageSize) || pageSize <= 0) {
      throw new Exception(EXCEPTIONS.PAGESIZE_FORM);
    }

    return {
      page,
      pageSize
    }
  }
}