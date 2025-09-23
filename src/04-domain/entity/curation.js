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
