import { Exception, EXCEPTIONS } from "../../../common/exception.js";
import { BaseValidator } from "../base.validator.js";

export class RankingStyleReqValidator extends BaseValidator {
  constructor(data) {
    super(data);
  }

  validate() {
    let { page = 1, pageSize = 8, rankBy = "total" } = this.query;
    page = Number(page);
    pageSize = Number(pageSize);
    if (!this.isInt(page) || page < 0) {
      throw new Exception(EXCEPTIONS.PAGE_FORM);
    }
    if (!this.isInt(pageSize) || pageSize <= 0) {
      throw new Exception(EXCEPTIONS.PAGESIZE_FORM);
    }
    if (
      !this.isString(rankBy) ||
      !["total","trendy", "personality", "practicality", "costEffectiveness"].includes(
        rankBy,
      )
    ) {
      throw new Exception(EXCEPTIONS.RANKBY_FORM);
    }
    return {
      page,
      pageSize,
      rankBy,
    };
  }
}
