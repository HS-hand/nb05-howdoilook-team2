export class CreateStyleResDto {
  nickname;
  title;
  content;
  viewCount;
  curationCount;
  categories;
  tags;
  images;

  constructor(style) {
    this.nickname = style.title;
    this.title = style.content;
    this.content = style.imageUrl;
    this.viewCount = style.writer;
    this.curationCount = style.likeCount;
    this.categories = style.categories;
    this.tags = style.tags;
    this.images = style.images;
  }
}