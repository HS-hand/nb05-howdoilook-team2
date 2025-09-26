export class CreateStyleResDto {
  id;
  nickname;
  title;
  content;
  viewCount;
  curationCount;
  createdAt;
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
    this.categories = createStyle.categories.reduce((acc, category) => {
      acc[category.type] = {
        name: category.name,
        brand: category.brand,
        price: category.price,
      }
      return acc;
    },{});
    this.tags = createStyle.tags;
    this.imageUrls = createStyle.imageUrls;
  }
}
