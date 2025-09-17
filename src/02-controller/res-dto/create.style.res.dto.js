export class CreateStyleResDto {
  nickname;
  title;
  content;
  viewCount;
  curationCount;
  categories;
  tags;
  imageUrls;

  constructor(style) {
    this.nickname = style.title;
    this.title = style.content;
    this.content = style.imageUrl;
    this.viewCount = style.writer;
    this.curationCount = style.likeCount;
    this.categories = style.categories;
    this.tags = style.tags;
    this.imageUrls = style.imageUrls;
  }
}