export const EXCEPTIONS = {
  // 스타일 관련
  NOTICE: {
    statusCode: 400,
    message: "*필수 입력사항입니다.",
  },
  NOTICE_MAXTWO: {
    statusCode: 400,
    message: "*20자 이내로 입력해 주세요.",
  },
  NOTICE_MAXTHREE: {
    statusCode: 400,
    message: "*30자 이내로 입력해 주세요.",
  },
  NOTICE_MAXHUND: {
    statusCode: 400,
    message: "*500자 이내로 입력해 주세요.",
  },
  NOTICE_CATEGORIES: {
    statusCode: 400,
    message: "*최소 하나 이상 선택해주세요.",
  },
  NOTICE_PRICE: {
    statusCode: 400,
    message: "*10억원 이하로 입력해 주세요.",
  },
  NOTICE_TAGS: {
    statusCode: 400,
    message: "*태그는 최대 3개까지 등록 가능합니다.",
  },
  NOTICE_TAG_LENGTH_MAXTWO: {
    statusCode: 400,
    message: "*태그는 20자 이내로 입력해 주세요.",
  },
  NOTICE_TAG_SAME: {
    statusCode: 400,
    message: "*현재 스타일에 동일한 태그가 있습니다.",
  },
  PASSWORD_NOTICE: {
    statusCode: 400,
    message: "*영문, 숫자 조합 8~16자리로 입력해주세요.",
  },
  PASSWORD_UNMATCH: {
    statusCode: 400,
    message: "스타일 수정에 실패했습니다.",
  },
  BAD_REQUEST: {
    statusCode: 400,
    message: "잘못된 요청입니다.",
  },
  FORBIDDEN: {
    statusCode: 403,
    message: "비밀번호가 틀렸습니다.",
  },
  NOT_FOUND: {
    statusCode: 404,
    message: "존재하지 않습니다.",
  },

  // 큐레이션 및 코멘트 관련
  CONTENT_FORM: {
    statusCode: 400,
    message: "내용이 유효하지 않습니다.",
  },
  CONTENT_TOO_LONG: {
    statusCode: 400,
    message: "한줄 큐레이팅 내용이 너무 깁니다.(최대 150자)",
  },
  NICKNAME_FORM: {
    statusCode: 400,
    message: "닉네임이 유효하지 않습니다.",
  },
  NICKNAME_TOO_LONG: {
    statusCode: 400,
    message: "닉네임이 너무 깁니다.(최대 20자)",
  },
  PASSWORD_FORM: {
    statusCode: 400,
    message: "비밀번호가 유효하지 않습니다.",
  },
  TRENDY_FORM: {
    statusCode: 400,
    message: "트렌디가 유효하지 않습니다.",
  },
  PERSONALITY_FORM: {
    statusCode: 400,
    message: "개성이 유효하지 않습니다.",
  },
  PRACTICALITY_FORM: {
    statusCode: 400,
    message: "실용성이 유효하지 않습니다.",
  },
  COSTEFFECTIVENESS_FORM: {
    statusCode: 400,
    message: "가성비가 유효하지 않습니다.",
  },
  CURATIONID_FORM: {
    statusCode: 400,
    message: "curationId가 유효하지 않습니다.",
  },
  CURATIONID_NOT_EXSIST: {
    statusCode: 400,
    message: "curationId 값이 존재 하지 않습니다.",
  },
  COMMENTID_NOT_EXSIST: {
    statusCode: 400,
    message: "commentId 값이 존재 하지 않습니다.",
  },
  COMMENT_NOT_EXSIST: {
    statusCode: 400,
    message: "답글이 존재 하지 않습니다.",
  },
  ALL_UNDEFINED: {
    statusCode: 400,
    message: "수정한 값을 입력하세요.",
  },
  PAGE_FORM: {
    statusCode: 400,
    message: "page가 유효하지 않습니다.",
  },
  PAGESIZE_FORM: {
    statusCode: 400,
    message: "pagesize가 유효하지 않습니다.",
  },
  SEARCHBY_FORM: {
    statusCode: 400,
    message: "searchBy가 유효하지 않습니다.",
  },
  KEYWORD_FORM: {
    statusCode: 400,
    message: "keyword가 유효하지 않습니다.",
  },
  STYLEID_FORM: {
    statusCode: 400,
    message: "styleId가 유효하지 않습니다.",
  },
  CURATION_NOT_EXIST: {
    statusCode: 404,
    message: "큐레이팅이 존재하지 않습니다.",
  },
  STYLE_NOT_EXIST: {
    statusCode: 404,
    message: "스타일 게시글이 존재하지 않습니다.",
  },
  PAGESIZE_MAX_5: {
    statusCode: 400,
    message: "한 페이지당 5개 제한입니다.",
  },
  PASSWORD_REGEX: {
    statusCode: 400,
    message: "영문, 숫자 조합 8~16자리로 입력해주세요.",
  },
  COMMENT_ALREADY_EXISTS: {
    statusCode: 409,
    message: "이미 코멘트가 존재합니다.",
  },
  SCORE_RANGE: {
    statusCode: 400,
    message: "점수 범위는 0 ~ 10 사이 입니다.",
  },
  NICKNAME_DUPLICATION: {
    statusCode: 409,
    message: "닉네임이 중복되었습니다. 다시 입력하세요.",
  },
  PASSWORD_DUPLICATION: {
    statusCode: 409,
    message: "비밀번호가 중복되었습니다. 다시 입력하세요.",
  },
  VULGAR_LANGUAGE: {
    statusCode: 400,
    message: "비속어가 포함되었습니다. 다시 입력하세요.",
  },
  RANKBY_FORM: {
    statusCode: 400,
    message: "rankBy가 유효하지 않습니다.",
  },
};

export class Exception extends Error {
  constructor(errObj) {
    super(errObj.message);
    this.statusCode = errObj.statusCode;
  }
}
