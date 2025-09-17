export class Comment {
  #id;
  #curationId;
  #content;
  #password;
  #createdAt;
  #updatedAt;

  constructor({
    id = undefined,
    curationId,
    content,
    password,
    createdAt = undefined,
    updatedAt = undefined,
  }) {
    this.#id = id;
    this.#curationId = curationId;
    this.#content = content;
    this.#password = password;
    this.#createdAt = createdAt;
    this.#updatedAt = updatedAt;
  }

  static factory({
    id = undefined,
    curationId,
    content,
    password,
    createdAt = undefined,
    updatedAt = undefined,
  }) {
    return new Comment({
      id,
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
  get curationId() {
    return this.#curationId;
  }
  get content() {
    return this.#content;
  }
  get createdAt() {
    return this.#createdAt;
  }
  get updatedAt() {
    return this.#updatedAt;
  }
}
