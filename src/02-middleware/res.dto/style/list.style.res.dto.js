export class ListStyleResDto {
  id;
  representativeImage;
  title;
  nickname;
  tags;
  categories;
  content;
  viewCount;
  curationCount;
  createdAt;

  constructor(styleEntity) {
    this.id = styleEntity.id;
    this.representativeImage =
      styleEntity.imageUrls && styleEntity.imageUrls.length
        ? styleEntity.imageUrls[0]
        : null;
    this.title = styleEntity.title;
    this.nickname = styleEntity.nickname;
    this.tags = styleEntity.tags;
    this.categories = styleEntity.categories;
    this.content = styleEntity.content;
    this.viewCount = styleEntity.viewCount;
    this.curationCount = styleEntity.curationCount ?? 0;
    this.createdAt = styleEntity.createdAt;
  }
}