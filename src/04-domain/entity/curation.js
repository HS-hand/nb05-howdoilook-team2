import { Exception, EXCEPTIONS } from "../../common/exception.js";
import { VULGAR_WORDS } from "../../common/vulgar.language.js";

export class Curation {
  #id;
  #styleId;
  #nickname;
  #password;
  #content;
  #trendy;
  #personality;
  #practicality;
  #costEffectiveness;
  #createdAt;
  #updatedAt;
  #comment;

  constructor({
    id = undefined,
    styleId = undefined,
    nickname,
    password,
    content,
    trendy,
    personality,
    practicality,
    costEffectiveness,
    createdAt = undefined,
    updatedAt = undefined,
    comment = undefined,
  }) {
    this.#id = id;
    this.#styleId = styleId;
    this.#nickname = nickname;
    this.#password = password;
    this.#content = content;
    this.#trendy = trendy;
    this.#personality = personality;
    this.#practicality = practicality;
    this.#costEffectiveness = costEffectiveness;
    this.#createdAt = createdAt;
    this.#updatedAt = updatedAt;
    this.#comment = comment;
  }

  static factory({
    id,
    styleId,
    nickname,
    content,
    password,
    trendy,
    personality,
    practicality,
    costEffectiveness,
  }) {
    if (nickname) {
      this.validateNicknameRule(nickname);
    }
    if (content) {
      this.validateContentRule(content);
    }
    if (password) {
      this.validatePasswordRule(password);
    }
    if (trendy) {
      this.validateTrendyRule(trendy);
    }
    if (personality) {
      this.validatePersonalityRule(personality);
    }
    if (practicality) {
      this.validatePracticalityRule(practicality);
    }
    if (costEffectiveness) {
      this.validateCostEffectivenessRule(costEffectiveness);
    }
    return new Curation({
      id,
      styleId,
      nickname,
      content,
      password,
      trendy,
      personality,
      practicality,
      costEffectiveness,
    });
  }

  static validateNicknameRule(value) {
    if (value.length > 20) {
      throw new Exception(EXCEPTIONS.NICKNAME_TOO_LONG);
    }
  }
  static validatePasswordRule(value) {
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/.test(value)) {
      throw new Exception(EXCEPTIONS.PASSWORD_REGEX);
    }
  }
  static validateContentRule(value) {
    if (value.length > 150) {
      throw new Exception(EXCEPTIONS.CONTENT_TOO_LONG);
    }
    for (const word of VULGAR_WORDS) {
      if (value.includes(word)) {
        throw new Exception(EXCEPTIONS.VULGAR_LANGUAGE);
      }
    }
  }
  static validateTrendyRule(value) {
    if (value < 0 || value > 10) {
      throw new Exception(EXCEPTIONS.SCORE_RANGE);
    }
  }
  static validatePersonalityRule(value) {
    if (value < 0 || value > 10) {
      throw new Exception(EXCEPTIONS.SCORE_RANGE);
    }
  }
  static validatePracticalityRule(value) {
    if (value < 0 || value > 10) {
      throw new Exception(EXCEPTIONS.SCORE_RANGE);
    }
  }
  static validateCostEffectivenessRule(value) {
    if (value < 0 || value > 10) {
      throw new Exception(EXCEPTIONS.SCORE_RANGE);
    }
  }
  get id() {
    return this.#id;
  }
  get styleId() {
    return this.#styleId;
  }
  get nickname() {
    return this.#nickname;
  }
  get password() {
    return this.#password;
  }
  get content() {
    return this.#content;
  }
  get trendy() {
    return this.#trendy;
  }
  get personality() {
    return this.#personality;
  }
  get practicality() {
    return this.#practicality;
  }
  get costEffectiveness() {
    return this.#costEffectiveness;
  }
  get createdAt() {
    return this.#createdAt;
  }
  get updatedAt() {
    return this.#updatedAt;
  }
  get comment() {
    return this.#comment;
  }
}
