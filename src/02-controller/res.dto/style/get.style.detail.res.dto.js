export class GetStyleDetailResDto {
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

  constructor(styleEntity) {
    this.id = styleEntity.id;
    this.nickname = styleEntity.nickname;
    this.title = styleEntity.title;
    this.content = styleEntity.content;
    this.viewCount = styleEntity.viewCount;
    this.curationCount = styleEntity.curationCount;
    this.createdAt = styleEntity.createdAt;
    this.categories = styleEntity.categories.reduce((acc, category) => {
      acc[category.type] = {
        name: category.name,
        brand: category.brand,
        price: category.price,
      };
      return acc;
    }, {});
    this.tags = styleEntity.tags;
    this.imageUrls = styleEntity.imageUrls;
  }
}
