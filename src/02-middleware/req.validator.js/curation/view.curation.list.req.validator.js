import { Exception, EXCEPTIONS } from "../../../common/exception.js";
import { BaseValidator } from "../base.validator.js";

export class ViewCurationListReqValidator extends BaseValidator {
  constructor(data) {
    super(data);
  }

  validate() {
    const { styleId } = this.params;
    let { page = 1, pageSize = 3, searchBy = "nickname", keyword } = this.query;
    page = Number(page);
    pageSize = Number(pageSize);
    if (!this.isString(styleId) || this.isEmpty(styleId)) {
      throw new Exception(EXCEPTIONS.STYLEID_FORM);
    }
    if (!this.isInt(page) || page < 0) {
      throw new Exception(EXCEPTIONS.PAGE_FORM);
    }
    if (!this.isInt(pageSize) || this.isEmpty(pageSize) || pageSize <= 0) {
      throw new Exception(EXCEPTIONS.PAGESIZE_FORM);
    }

    if (!["nickname", "content"].includes(searchBy)) {
      throw new Exception(EXCEPTIONS.SEARCHBY_FORM);
    }

    if (!this.isEmpty(keyword)) {
      if (!this.isString(keyword)) {
        throw new Exception(EXCEPTIONS.KEYWORD_FORM);
      }
    }

    return {
      styleId,
      page,
      pageSize,
      searchBy,
      keyword,
    };
  }
}
