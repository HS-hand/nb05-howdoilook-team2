import { Exception, EXCEPTIONS } from "../../../common/exception.js";
import { BaseValidator } from "../base.validator.js";

export class ListStyleValidator extends BaseValidator {
  constructor(data) {
    super(data);
  }

  validate() {
    const { page, pageSize, sortBy, tag, searchBy, keyword, thumbnail } = this.query;

    const rawPage = this.isEmpty(page) ? "1" : page;
    const rawPageSize = this.isEmpty(pageSize) ? "12" : pageSize;
    const rawSortBy = this.isEmpty(sortBy) ? "latest" : sortBy;

    if (!/^\d+$/.test(String(rawPage)))
      throw new Exception(EXCEPTIONS.PAGE_FORM);
    const pageNum = Number(rawPage);
    if (pageNum < 1) throw new Exception(EXCEPTIONS.PAGE_FORM);

    if (!/^\d+$/.test(String(rawPageSize)))
      throw new Exception(EXCEPTIONS.PAGESIZE_FORM);
    const pageSizeNum = Number(rawPageSize);
    if (pageSizeNum < 1) throw new Exception(EXCEPTIONS.PAGESIZE_FORM);

    const allowedSort = ["latest", "view", "curation"];
    if (!this.isString(rawSortBy) || !allowedSort.includes(rawSortBy)) {
      throw new Exception(EXCEPTIONS.BAD_REQUEST);
    }

    if (!this.isEmpty(tag) && !this.isString(tag)) {
      throw new Exception(EXCEPTIONS.BAD_REQUEST);
    }

    let finalSearchBy = undefined;
    let finalKeyword = undefined;

    if (!this.isEmpty(searchBy)) {
      const allowedSearch = ["nickname", "title", "content", "tag"];
      if (!this.isString(searchBy) || !allowedSearch.includes(searchBy)) {
        throw new Exception(EXCEPTIONS.SEARCHBY_FORM);
      }

      finalSearchBy = searchBy;

      if (!this.isEmpty(keyword)) {
        if (!this.isString(keyword) || keyword.length > 100) {
          throw new Exception(EXCEPTIONS.KEYWORD_FORM);
        }
        finalKeyword = keyword;
      }
    } else {
      if (!this.isEmpty(keyword)) {
        throw new Exception(EXCEPTIONS.SEARCHBY_FORM);
      }
    }

    let finalThumbnail = false;
    if (!this.isEmpty(thumbnail)) {
      const lowerVal = String(thumbnail).toLowerCase();
      if (lowerVal !== "true" && lowerVal !== "false") {
        throw new Exception(EXCEPTIONS.BAD_REQUEST);
      }
      finalThumbnail = lowerVal === "true";
    }

    return {
      page: pageNum,
      pageSize: pageSizeNum,
      sortBy: rawSortBy,
      tag: this.isEmpty(tag) ? undefined : tag,
      searchBy: finalSearchBy,
      keyword: finalKeyword,
      thumbnail: finalThumbnail,
    };
  }
}