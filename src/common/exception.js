export const EXCEPTIONS = {
  BAD_REQUEST: {
    statusCode: 400,
    message: "잘못된 요청입니다.",
  },
  NOT_FOUND: {
    statusCode: 404,
    message: "존재하지 않습니다.",
  },
  FORBIDDEN: {
    statusCode: 403,
    message: "비밀번호가 틀렸습니다.",
  },

  CONTENT_FORM: {
    statusCode: 400,
    message: "내용이 유효하지 않습니다.",
  },
  CONTENT_NOT_EXSIST: {
    statusCode: 400,
    message: "내용을 입력해주세요.",
  },
  NICKNAME_FORM: {
    statusCode: 400,
    message: "닉네임이 유효하지 않습니다.",
  },
  CONTENT_FORM: {
    statusCode: 400,
    message: "내용이 유효하지 않습니다.",
  },
  PASSWORD_FORM: {
    statusCode: 400,
    message: "비밀번호가 유효하지 않습니다.",
  },
  PASSWORD_NOT_EXSIST: {
    statusCode: 400,
    message: "비밀번호를 입력해주세요.",
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
    message: "limit가 유효하지 않습니다.",
  },
  SEARCHBY_FORM: {
    statusCode: 400,
    message: "searchBy가 유효하지 않습니다.",
  },
  KEYWORD_FORM: {
    statusCode: 400,
    message: "keyword가 유효하지 않습니다.",
  },
  CURATION_NOT_EXIST: {
    statusCode: 400,
    message: "큐레이팅이 존재하지 않습니다.",
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
  }
};

export class Exception extends Error {
  constructor(errObj) {    
    super(errObj.message);
    this.statusCode = errObj.statusCode;
  }
}
