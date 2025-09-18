export const EXCEPTIONS = {
<<<<<<< HEAD
  CONTENT_FORM: {
    statusCode: 400,
    message: "내용이 유효하지 않습니다.",
  },
  CONTENT_NOT_EXSIST: {
    statusCode: 400,
    message: "내용을 입력해주세요.",
=======
  NICKNAME_FORM: {
    statusCode: 400,
    message: "닉네임이 유효하지 않습니다.",
  },
  CONTENT_FORM: {
    statusCode: 400,
    message: "내용이 유효하지 않습니다.",
>>>>>>> ebf936d70e00a327876228b3d40a0a37edbd46b1
  },
  PASSWORD_FORM: {
    statusCode: 400,
    message: "비밀번호가 유효하지 않습니다.",
  },
<<<<<<< HEAD
  PASSWORD_NOT_EXSIST: {
    statusCode: 400,
    message: "비밀번호를 입력해주세요.",
  },
  PASSWORD_NOT_CORRET: {
    statusCode: 401,
    message: "비밀번호가 일치하지 않습니다.",
=======
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
>>>>>>> ebf936d70e00a327876228b3d40a0a37edbd46b1
  },
  CURATIONID_FORM: {
    statusCode: 400,
    message: "curationId가 유효하지 않습니다.",
  },
<<<<<<< HEAD
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
=======
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
>>>>>>> ebf936d70e00a327876228b3d40a0a37edbd46b1
  },
  CURATION_NOT_EXIST: {
    statusCode: 400,
    message: "큐레이팅이 존재하지 않습니다.",
  },
<<<<<<< HEAD
=======
  STYLEID_FORM:{
    statusCode: 400,
    message: "styleId가 유효하지 않습니다.",
  }
>>>>>>> ebf936d70e00a327876228b3d40a0a37edbd46b1
};

export class Exception extends Error {
  constructor(errObj) {
    //const errInfo = EXCEPTIONS[key];
    //let message = errInfo.message;
    super(errObj.message);
    this.statusCode = errObj.statusCode;
  }
}
