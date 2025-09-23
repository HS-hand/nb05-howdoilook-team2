export const EXCEPTIONS = {
  TARGETTYPE_NOT_EXSIST: {
    statusCode: 400,
    message: "예시입니다.",
  }
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
