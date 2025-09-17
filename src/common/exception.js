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
};

export class Exception extends Error {
  constructor(key, data = {}) {
    const errInfo = EXCEPTIONS[key];
    let message = errInfo.message;
    
    if(data){
      for (const [k, v] of Object.entries(data)) {
        message = message.replace(new RegExp(`\\$\\{${k}\\}`, "g"), v);
      }
    }
    super(message);
    this.statusCode = errInfo.statusCode;
  }
}