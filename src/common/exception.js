export const EXCEPTIONS = {
  NICKNAME_FORM: {
    statusCode: 400,
    message: "닉네임이 유효하지 않습니다.",
  },
  NICKNAME_NOT_EXSIST: {
    statusCode: 400,
    message: "닉네임 값이 존재하지 않습니다.",
  },
  CONTENT_FORM: {
    statusCode: 400,
    message: "내용이 유효하지 않습니다.",
  },
  CONTENT_NOT_EXSIST: {
    statusCode: 400,
    message: "내용 값이 존재 하지 않습니다.",
  },
  PASSWORD_FORM: {
    statusCode: 400,
    message: "비밀번호가 유효하지 않습니다.",
  },
  PASSWORD_NOT_EXSIST: {
    statusCode: 400,
    message: "비밀번호 값이 존재 하지 않습니다.",
  },
  TRENDY_FORM: {
    statusCode: 400,
    message: "트렌디가 유효하지 않습니다.",
  },
  TRENDY_NOT_EXSIST: {
    statusCode: 400,
    message: "트렌디 값이 존재 하지 않습니다.",
  },
  PERSONALITY_FORM: {
    statusCode: 400,
    message: "개성이 유효하지 않습니다.",
  },
  PERSONALITY_NOT_EXSIST: {
    statusCode: 400,
    message: "개성 값이 존재 하지 않습니다.",
  },
  PRACTICALITY_FORM: {
    statusCode: 400,
    message: "실용성이 유효하지 않습니다.",
  },
  PRACTICALITY_NOT_EXSIST: {
    statusCode: 400,
    message: "실용성 값이 존재 하지 않습니다.",
  },
  COSTEFFECTIVENESS_FORM: {
    statusCode: 400,
    message: "가성비가 유효하지 않습니다.",
  },
  COSTEFFECTIVENESS_NOT_EXSIST: {
    statusCode: 400,
    message: "가성비 값이 존재 하지 않습니다.",
  },
  CURATIONID_FORM: {
    statusCode: 400,
    message: "curationId가 유효하지 않습니다.",
  },
  CURATIONID_NOT_EXSIST: {
    statusCode: 400,
    message: "curationId 값이 존재 하지 않습니다.",
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
  }
};

export class Exception extends Error {
  constructor(errObj) {
    //const errInfo = EXCEPTIONS[key];
    //let message = errInfo.message;
    super(errObj.message);
    this.statusCode = errObj.statusCode;
  }
}
