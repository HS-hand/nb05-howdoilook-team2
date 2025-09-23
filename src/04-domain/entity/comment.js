export class Comment {
  #id;
  #nickname;
  #curationId;
  #content;
  #password;
  #createdAt;
  #updatedAt;

  constructor({
    id = undefined,
    nickname,
    curationId,
    content,
    password,
    createdAt = undefined,
    updatedAt = undefined,
  }) {
    this.#id = id;
    this.#nickname = nickname;
    this.#curationId = curationId;
    this.#content = content;
    this.#password = password;
    this.#createdAt = createdAt;
    this.#updatedAt = updatedAt;
  }

  static factory({
    id = undefined,
    nickname,
    curationId,
    content,
    password,
    createdAt = undefined,
    updatedAt = undefined,
  }) {
    return new Comment({
      id,
      nickname,
      curationId,
      content,
      password,
      createdAt,
      updatedAt,
    });
  }

  get id() {
    return this.#id;
  }
  get nickname() {
    return this.#nickname;
  }
  get curationId() {
    return this.#curationId;
  }
  get content() {
    return this.#content;
  }
  get password() {
    return this.#password;
  }
  get createdAt() {
    return this.#createdAt;
  }
  get updatedAt() {
    return this.#updatedAt;
  }
}