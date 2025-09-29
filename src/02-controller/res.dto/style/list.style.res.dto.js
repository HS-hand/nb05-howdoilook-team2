export class ListStyleResDto {
  pagination;
  currentPage;
  totalPages;
  totalItemCount;
  data;
  page;
  constructor({ pagination, items }) {
    this.pagination = pagination || { page: 1, totalPages: 1, totalCount: 0 };
    this.page = pagination.page;
    this.currentPage = this.page;
    this.totalPages = pagination.totalPages;
    this.totalItemCount = pagination.totalCount;

    this.data = items.map((style) => ({
      id: style.id,
      thumbnail: style.thumbnail || null,
      nickname: style.nickname,
      title: style.title,
      tags: style.tags ?? null,
      categories: style.categories.reduce((acc, category) => {
        acc[category.type] = {
          name: category.name,
          brand: category.brand,
          price: category.price,
        };
        return acc;
      }, {}),
      content: style.content,
      viewCount: style.viewCount,
      curationCount: style.curationCount ?? 0,
      createdAt: style.createdAt,
    }));
  }
}
