export class Curation {
  #id;
  #nickname;
  #content;
  #trendy;
  #personality;
  #practicality;
  #costEffectiveness;
  #createdAt;
  #updatedAt;

  constructor({id = undefined, nickname, content, trendy, personality, practicality, costEffectiveness, createdAt = undefined, updatedAt = undefined}){
    this.#id = id;
    this.#nickname = nickname;
    this.#content = content;
    this.#trendy = trendy;
    this.#personality = personality;
    this.#practicality = practicality;
    this.#costEffectiveness = costEffectiveness;
    this.#createdAt = createdAt;
    this.#updatedAt = updatedAt;
  }

  static factory ({id, nickname, content, password, trendy, personality, practicality, costEffectiveness}) {
    if(nickname !== undefined){
      this.validateNicknameRule(nickname);
    }
    if(content !== undefined){
      this.validateContentRule(content);
    }
    if(password !== undefined){
      this.validatePasswordRule(password);
    }
    if(trendy !== undefined){
      this.validateTrendyRule(trendy);
    }
    if(personality !== undefined){
      this.validatePersonalityRule(personality);
    }
    if(practicality !== undefined){
      this.validatePracticalityRule(practicality);
    }
    if(costEffectiveness !== undefined){
      this.validatecostEffectivenessRule(costEffectiveness);
    }
    return new Curation({id, nickname, content, password, trendy, personality, practicality, costEffectiveness});
  }

  // 회의 후 비즈니스 규칙 정하기
  static validateNicknameRule(value) {

  }
  static validateContentRule(value) {
    
  }
  static validatePasswordRule(value) {
    
  }
  static validateTrendyRule(value) {
    
  }
  static validatePersonalityRule(value) {
    
  }
  static validatePracticalityRule(value) {
    
  }
  static validatecostEffectivenessRule(value) {
    
  }

  get id() {
    return this.#id;
  }

  get nickname() {
    return this.#nickname;
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
  
}