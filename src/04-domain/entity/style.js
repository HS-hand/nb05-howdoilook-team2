export class Style {
  #id;
  #nickname;
  #title;
  #content;
  #password;
  #viewCount;
  #createdAt;
  #updatedAt;
  #categories;
  #tags;
  #imageUrls;

  constructor({
    id,
    nickname,
    title,
    content,
    password,
    viewCount = 0,
    createdAt,
    updatedAt,
    categories = [],
    tags = [],
    imageUrls = [],
  }) {
    this.#id = id;
    this.#nickname = nickname;
    this.#title = title;
    this.#content = content;
    this.#password = password;
    this.#viewCount = viewCount;
    this.#createdAt = createdAt;
    this.#updatedAt = updatedAt;
    this.#categories = categories;
    this.#tags = tags;
    this.#imageUrls = imageUrls;
  }

  static factory({
    nickname,
    title,
    content,
    password,
    categories,
    tags,
    imageUrls,
  }) {
    return new Style({
      nickname,
      title,
      content,
      password,
      categories,
      tags,
      imageUrls,
    });
  }

  get id() {
    return this.#id;
  }
  get nickname() {
    return this.#nickname;
  }
  get title() {
    return this.#title;
  }
  get content() {
    return this.#content;
  }
  get viewCount() {
    return this.#viewCount;
  }
  get createdAt() {
    return this.#createdAt;
  }
  get updatedAt() {
    return this.#updatedAt;
  }
  get categories() {
    return this.#categories;
  }
  get tags() {
    return this.#tags;
  }
  get imageUrls() {
    return this.#imageUrls;
  }
  get password() {
    return this.#password;
  }

  isPasswordMatch(password) {
    return this.#password === password;
  }
}
