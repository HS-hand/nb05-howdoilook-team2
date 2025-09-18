export const EXCEPTIONS = {
  CONTENT_FORM: {
    statusCode: 400,
    message: "내용이 유효하지 않습니다.",
  },
  CONTENT_NOT_EXSIST: {
    statusCode: 400,
    message: "내용을 입력해주세요.",
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
  CURATION_NOT_EXIST: {
    statusCode: 400,
    message: "큐레이팅이 존재하지 않습니다.",
  },
};

export class Exception extends Error {
  constructor(errObj) {
    //const errInfo = EXCEPTIONS[key];
    //let message = errInfo.message;
    super(errObj.message);
    this.statusCode = errObj.statusCode;
  }
}
