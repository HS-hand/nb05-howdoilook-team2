import { Exception, EXCEPTIONS } from "../../../common/exception.js";
import { BaseValidator } from "../base.validator.js";

export class UpdateCurationReqValidator extends BaseValidator{
  constructor(data) {
    super(data);
  }

  validate() {
    let {curationId} = this.params;
    const { nickname, content, password, trendy, personality, practicality, costEffectiveness} = this.body;
    curationId = Number(curationId);

    if (!this.isInt(curationId)) {
      throw new Exception(EXCEPTIONS.CURATIONID_FORM);
    } else if(this.isEmpty(curationId)){
      throw new Exception(EXCEPTIONS.CURATIONID_NOT_EXSIST);
    };

    if(!this.body) {
      throw new Exception(EXCEPTIONS.ALL_UNDEFINED);
    }

    if (!this.isEmpty(nickname)){
      if(!this.isString(nickname)){
        throw new Exception(EXCEPTIONS.NICKNAME_FORM);  
      }
    }
    if (!this.isEmpty(content)){
      if(!this.isString(content)){
        throw new Exception(EXCEPTIONS.CONTENT_FORM);  
      }
    }
    if (!this.isEmpty(password)){
      if(!this.isString(password)){
        throw new Exception(EXCEPTIONS.PASSWORD_FORM);  
      }
    }
    if (!this.isEmpty(trendy)){
      if(!this.isInt(trendy)){
        throw new Exception(EXCEPTIONS.TRENDY_FORM);  
      }
    }
    if (!this.isEmpty(personality)){
      if(!this.isInt(personality)){
        throw new Exception(EXCEPTIONS.PERSONALITY_FORM);  
      }
    }
    if (!this.isEmpty(practicality)){
      if(!this.isInt(practicality)){
        throw new Exception(EXCEPTIONS.PRACTICALITY_FORM);  
      }
    }
    if (!this.isEmpty(costEffectiveness)){
      if(!this.isInt(costEffectiveness)){
        throw new Exception(EXCEPTIONS.COSTEFFECTIVENESS_FORM);  
      }
    }

    return {
      id : curationId,
      nickname, content, password, trendy, personality, practicality, costEffectiveness
    }
  }

}