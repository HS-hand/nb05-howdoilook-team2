export class CreateStyleResDto {
  id;
  nickname;
  title;
  content;
  viewCount;
  curationCount;
  createdAt;
  updatedAt;
  categories;
  tags;
  imageUrls;
  
  constructor(createStyle) {
    this.id = createStyle.id;
    this.nickname = createStyle.nickname;
    this.title = createStyle.title;
    this.content = createStyle.content;
    this.viewCount = createStyle.viewCount;
    this.curationCount = createStyle.curationCount;
    this.createdAt = createStyle.createdAt;
    this.updatedAt = createStyle.updatedAt;
    this.categories = createStyle.categories;
    this.tags = createStyle.tags;
    this.imageUrls = createStyle.imageUrls;
  }
}