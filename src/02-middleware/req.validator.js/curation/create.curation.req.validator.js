import { Exception, EXCEPTIONS } from "../../../common/exception.js";
import { BaseValidator } from "../base.validator.js";

export class CreateCurationReqValidator extends BaseValidator {
  constructor(data) {
    super(data);
  }

  validate() {
    const {styleId} = this.params; // 구현 및 에러 처리 스타일 완성 후에 추가...

    const { nickname, content, password, trendy, personality, practicality, costEffectiveness} = this.body;
    if (!this.isString(nickname)) {
      throw new Exception(EXCEPTIONS.NICKNAME_FORM);
    } else if(this.isEmpty(nickname)){
      throw new Exception(EXCEPTIONS.NICKNAME_NOT_EXSIST);
    };

    if (!this.isString(content)) {
      throw new Exception(EXCEPTIONS.CONTENT_FORM);
    } else if(this.isEmpty(content)){
      throw new Exception(EXCEPTIONS.CONTENT_NOT_EXSIST);
    };

    if (!this.isString(password)) {
      throw new Exception(EXCEPTIONS.PASSWORD_FORM);
    } else if(this.isEmpty(password)){
      throw new Exception(EXCEPTIONS.PASSWORD_NOT_EXSIST);
    };

    if (!this.isInt(trendy)) {
      throw new Exception(EXCEPTIONS.TRENDY_FORM);
    } else if(this.isEmpty(trendy)){
      throw new Exception(EXCEPTIONS.TRENDY_NOT_EXSIST);
    };

    if (!this.isInt(personality)) {
      throw new Exception(EXCEPTIONS.PERSONALITY_FORM);
    } else if(this.isEmpty(personality)){
      throw new Exception(EXCEPTIONS.PERSONALITY_NOT_EXSIST);
    };

    if (!this.isInt(practicality)) {
      throw new Exception(EXCEPTIONS.PRACTICALITY_FORM);
    } else if(this.isEmpty(practicality)){
      throw new Exception(EXCEPTIONS.PRACTICALITY_NOT_EXSIST);
    };

    if (!this.isInt(costEffectiveness)) {
      throw new Exception(EXCEPTIONS.COSTEFFECTIVENESS_FORM);
    } else if(this.isEmpty(costEffectiveness)){
      throw new Exception(EXCEPTIONS.COSTEFFECTIVENESS_NOT_EXSIST);
    };
    return {nickname, content, password, trendy, personality, practicality, costEffectiveness};
  }
}
