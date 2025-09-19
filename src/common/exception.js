export const EXCEPTIONS = {
  BAD_REQUEST: { 
    statusCode: 400, message: "잘못된 요청입니다." 
  },
  NOT_FOUND: { 
    statusCode: 404, message: "존재하지 않습니다." 
  },
  FORBIDDEN: { 
    statusCode: 403, message: "권한이 없습니다." 
  },
  CONTENT_FORM: { 
    statusCode: 400, message: "내용이 유효하지 않습니다." 
  },
  CONTENT_NOT_EXIST: { 
    statusCode: 400, message: "내용을 입력해주세요." 
  },
  NICKNAME_FORM: { 
    statusCode: 400, message: "닉네임이 유효하지 않습니다." 
  },
  PASSWORD_FORM: { 
    statusCode: 400, message: "비밀번호가 유효하지 않습니다." 
  },
  PASSWORD_NOT_EXIST: { 
    statusCode: 400, message: "비밀번호를 입력해주세요." 
  },
  CURATIONID_FORM: { 
    statusCode: 400, message: "curationId가 유효하지 않습니다." 
  },
  CURATION_NOT_EXIST: { 
    statusCode: 400, message: "큐레이팅이 존재하지 않습니다." 
  },
  PAGE_FORM: { 
    statusCode: 400, message: "page가 유효하지 않습니다." 
  },
  PAGESIZE_FORM: { 
    statusCode: 400, message: "limit가 유효하지 않습니다." 
  },
  SEARCHBY_FORM: {
     statusCode: 400, message: "searchBy가 유효하지 않습니다." 
    },
  KEYWORD_FORM: { 
    statusCode: 400, message: "keyword가 유효하지 않습니다." 
  },
  STYLEID_FORM: { 
    statusCode: 400, message: "styleId가 유효하지 않습니다." 
  },
};

export class Exception extends Error {
  constructor(errObj) {
    super(errObj.message);
    this.statusCode = errObj.statusCode;
  }
}
