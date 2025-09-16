import { Exception, EXCEPTIONS } from "../../../common/exception.js";
import { BaseValidator } from "../base.validator.js";

export class ViewCurationListReqValidator extends BaseValidator{
  constructor(data){
    super(data);
  }

  validate() {
    let { page = 0, pageSize, searchBy = "nickname", keyword} = this.query;
    page = Number(page);
    pageSize = Number(pageSize);
    
    if(!this.isInt(page)){
      throw new Exception(EXCEPTIONS.PAGE_FORM);
    }
    if(!this.isInt(pageSize) || this.isEmpty(pageSize) || pageSize <= 0){
      throw new Exception(EXCEPTIONS.PAGESIZE_FORM);
    }

    if (!["nickname", "content"].includes(searchBy)) {
      throw new Exception(EXCEPTIONS.SEARCHBY_FORM);
    }

    if (!this.isEmpty(keyword)){
      if(!this.isString(keyword)){
        throw new Exception(EXCEPTIONS.KEYWORD_FORM);  
      }
    }

    return {
      page,
      pageSize,
      searchBy,
      keyword
    }
  }
}