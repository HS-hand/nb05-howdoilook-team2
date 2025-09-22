import { Exception, EXCEPTIONS } from "../../../common/exception.js";
import { BaseValidator } from "../base.validator.js";

export class UpdateCurationReqValidator extends BaseValidator {
  constructor(data) {
    super(data);
  }

  validate() {
    let { curationId } = this.params;
    const {
      nickname,
      content,
      password,
      trendy,
      personality,
      practicality,
      costEffectiveness,
    } = this.body;

    if (!this.isString(curationId) || this.isEmpty(curationId)) {
      throw new Exception(EXCEPTIONS.CURATIONID_FORM);
    }

    if (!this.body) {
      throw new Exception(EXCEPTIONS.ALL_UNDEFINED);
    }

    if (!this.isEmpty(nickname)) {
      if (!this.isString(nickname) || nickname.length > 20) {
        throw new Exception(EXCEPTIONS.NICKNAME_FORM);
      }
    }
    if (!this.isEmpty(content)) {
      if (!this.isString(content) || content.length > 150) {
        throw new Exception(EXCEPTIONS.CONTENT_FORM);
      }
    }
    if (
      !this.isString(password) ||
      this.isEmpty(password)
    ) {
      throw new Exception(EXCEPTIONS.PASSWORD_FORM);
    }

    if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/.test(password)) {
      throw new Exception(EXCEPTIONS.PASSWORD_REGEX)
    }
    if (!this.isEmpty(trendy)) {
      if (!this.isInt(trendy) || trendy < 0 || trendy > 10) {
        throw new Exception(EXCEPTIONS.TRENDY_FORM);
      }
    }
    if (!this.isEmpty(personality)) {
      if (!this.isInt(personality) || personality < 0 || personality > 10) {
        throw new Exception(EXCEPTIONS.PERSONALITY_FORM);
      }
    }
    if (!this.isEmpty(practicality)) {
      if (!this.isInt(practicality) || practicality < 0 || practicality > 10) {
        throw new Exception(EXCEPTIONS.PRACTICALITY_FORM);
      }
    }
    if (!this.isEmpty(costEffectiveness)) {
      if (
        !this.isInt(costEffectiveness) ||
        costEffectiveness < 0 ||
        costEffectiveness > 10
      ) {
        throw new Exception(EXCEPTIONS.COSTEFFECTIVENESS_FORM);
      }
    }

    return {
      id: curationId,
      nickname,
      content,
      password,
      trendy,
      personality,
      practicality,
      costEffectiveness,
    };
  }
}
