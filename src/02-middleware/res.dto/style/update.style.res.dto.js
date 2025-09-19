export class UpdateStyleResDto {
  constructor(updateStyle) {
    this.id = updateStyle.id;
    this.nickname = updateStyle.nickname;
    this.title = updateStyle.title;
    this.content = updateStyle.content;
    this.viewCount = updateStyle.viewCount;
    this.curationCount = updateStyle.curationCount;
    this.createdAt = updateStyle.createdAt;
    this.categories = updateStyle.categories;
    this.tags = updateStyle.tags;
    this.imageUrls = updateStyle.imageUrls;
  }
}
