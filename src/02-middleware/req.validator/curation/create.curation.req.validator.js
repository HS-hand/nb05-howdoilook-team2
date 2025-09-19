import { Exception, EXCEPTIONS } from "../../../common/exception.js";
import { BaseValidator } from "../base.validator.js";

export class CreateCurationReqValidator extends BaseValidator {
  constructor(data) {
    super(data);
  }

  validate() {
    const { styleId } = this.params;
    const {
      nickname,
      content,
      password,
      trendy,
      personality,
      practicality,
      costEffectiveness,
    } = this.body;

    if (!this.isString(styleId) || this.isEmpty(styleId)) {
      throw new Exception(EXCEPTIONS.STYLEID_FORM);
    }
    if (
      !this.isString(nickname) ||
      this.isEmpty(nickname) ||
      nickname.length > 20
    ) {
      throw new Exception(EXCEPTIONS.NICKNAME_FORM);
    }

    if (
      !this.isString(content) ||
      this.isEmpty(content) ||
      content.length > 150
    ) {
      throw new Exception(EXCEPTIONS.CONTENT_FORM);
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

    if (
      !this.isInt(trendy) ||
      this.isEmpty(trendy) ||
      trendy < 0 ||
      trendy > 10
    ) {
      throw new Exception(EXCEPTIONS.TRENDY_FORM);
    }

    if (
      !this.isInt(personality) ||
      this.isEmpty(personality) ||
      personality < 0 ||
      personality > 10
    ) {
      throw new Exception(EXCEPTIONS.PERSONALITY_FORM);
    }

    if (
      !this.isInt(practicality) ||
      this.isEmpty(practicality) ||
      practicality < 0 ||
      practicality > 10
    ) {
      throw new Exception(EXCEPTIONS.PRACTICALITY_FORM);
    }

    if (
      !this.isInt(costEffectiveness) ||
      this.isEmpty(costEffectiveness) ||
      costEffectiveness < 0 ||
      costEffectiveness > 10
    ) {
      throw new Exception(EXCEPTIONS.COSTEFFECTIVENESS_FORM);
    }

    return {
      styleId,
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
