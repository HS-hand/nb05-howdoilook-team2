export class UpdateStyleResDto {
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

  constructor(updateStyle) {
    this.id = updateStyle.id;
    this.nickname = updateStyle.nickname;
    this.title = updateStyle.title;
    this.content = updateStyle.content;
    this.viewCount = updateStyle.viewCount;
    this.curationCount = updateStyle.curationCount;
    this.createdAt = updateStyle.createdAt;
    this.categories = updateStyle.categories.reduce((acc, category) => {
      acc[category.type] = {
        name: category.name,
        brand: category.brand,
        price: category.price,
      };
      return acc;
    }, {});
    this.tags = updateStyle.tags;
    this.imageUrls = updateStyle.imageUrls;
  }
}
