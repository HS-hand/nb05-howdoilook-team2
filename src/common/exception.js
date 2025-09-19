export const EXCEPTIONS = {
  TARGETTYPE_NOT_EXSIST: {
    statusCode: 400,
    message: "예시입니다.",
  },
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
    message: "*300자 이내로 입력해 주세요.",
  },
  NOTICE_CATEGORIES: {
    statusCode: 400,
    message: "*최소 하나 이상 선택해주세요.",
  },
  NOTICE_TAGS: {
    statusCode: 400,
    message: "*태그는 최대 3개까지 등록 가능합니다.",
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
  PASSWORD_NOT_CORRET: {
    statusCode: 401,
    message: "비밀번호가 일치하지 않습니다.",
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
    message: "값을 입력하세요.",
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
};

export class Exception extends Error {
  constructor(key, data = {}) {
    const errInfo = EXCEPTIONS[key];
    let message = errInfo.message;

    if (data) {
      for (const [k, v] of Object.entries(data)) {
        message = message.replace(new RegExp(`\\$\\{${k}\\}`, "g"), v);
      }
    }
    super(message);
    this.statusCode = errInfo.statusCode;
  }
}
