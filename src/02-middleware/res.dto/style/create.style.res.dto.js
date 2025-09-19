export class CreateStyleResDto {
  constructor(createStyle) {
    this.id = createStyle.id;
    this.nickname = createStyle.nickname;
    this.title = createStyle.title;
    this.content = createStyle.content;
    this.viewCount = createStyle.viewCount;
    this.curationCount = createStyle.curationCount;
    this.createdAt = createStyle.createdAt;
    this.categories = createStyle.categories;
    this.tags = createStyle.tags;
    this.imageUrls = createStyle.imageUrls;
  }
}
