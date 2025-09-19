export class StyleDetailResDto {
  constructor(styleEntity) {
    this.id = styleEntity.id;
    this.nickname = styleEntity.nickname;
    this.title = styleEntity.title;
    this.content = styleEntity.content;
    this.viewCount = styleEntity.viewCount;
    this.createdAt = styleEntity.createdAt;
    this.updatedAt = styleEntity.updatedAt;
    this.tags = styleEntity.tags;
    this.imageUrls = styleEntity.imageUrls;
    this.categories = styleEntity.categories;
  }
}
