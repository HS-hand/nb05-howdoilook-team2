import { Exception } from "../../common/exception.js";

export class Style {
  #id;
  #nickname;
  #title;
  #content;
  #password;
  #viewCount;
  #curationCount;
  #createdAt;
  #updatedAt;
  #categories;
  #tags;
  #images;

  constructor ({
    id = undefined,
    nickname,
    title,
    content,
    password,
    viewCount = undefined,
    curationCount = undefined,
    createdAt = undefined,
    updatedAt = undefined,
    categories,
    tags,
    images,
  }) {
    this.#id = id;
    this.#nickname = nickname;
    this.#title = title;
    this.#content = content;
    this.#password = password;
    this.#viewCount = viewCount;
    this.#curationCount = curationCount;
    this.#createdAt = createdAt;
    this.#updatedAt = updatedAt;
    this.#categories = categories;
    this.#tags = tags;
    this.#images = images;
  }

  static forCreate({ nickname, title, content, password, categories, tags, images }) {
    this.validateNicknameRule(nickname);
    this.validateTitleRule(title);
    this.validateContentRule(content);
    this.validatePasswordRule(password);
    this.validateCategoriesRule(categories);
    this.validateTagsRule(tags);
    this.validateImagesRule(images);
    return new Style({ nickname, title, content, password, categories, tags, images });
  }

  static validateNicknameRule(nickname) {
    if (nickname.length < 0) {
      throw new Exception('NOTICE');
    }
    if (nickname.length > 20) {
      throw new Exception('NOTICE_MAXTWO');
    }
  }

  static validateTitleRule(title) {
    if (title.length < 0) {
      throw new Exception('NOTICE');
    }
    if (title.length > 30) {
      throw new Exception('NOTICE_MAXTHREE');
    }
  }

  static validateContentRule(content) {
    if (content.length < 0) {
      throw new Exception('NOTICE');
    }
    if (content.length > 300) {
      throw new Exception('NOTICE_MAXHUND');
    }
  }

  static validatePasswordRule(password) {
    if (password.length < 8 && password.length > 16) {
      // 비민번호 영문자, 숫자 혼용 검증
      if (!true) {
        throw new Exception('PASSWORD_NOTICE');
      }
    }
  }

  static validateCategoriesRule(categories) {
    if (categories.length < 0) {
      throw new Exception('NOTICE_CATEGORIES');
    }
  }

  static validateTagsRule(tags) {
    if (tags.length < 0) {
      throw new Exception('NOTICE');
    }
    if (tags.length > 3) {
      throw new Exception('NOTICE_TAGS');
    }
  }

  static validateImagesRule(images) {
    if (images.length < 0) {
      throw new Exception('NOTICE');
    }
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
  get curationCount() {
    return this.#curationCount;
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
  get images() {
    return this.#images;
  }

  passwordMatch(password) {
    return this.#password = password;
  }
}