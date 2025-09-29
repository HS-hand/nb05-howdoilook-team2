export class RankingStyleResDto {
  currentPage;
  totalPages;
  totalItemCount;
  data;
  id;
  thumbnail;
  nickname;
  title;
  tags;
  categories;
  viewCount;
  curationCount;
  createdAt;
  ranking;
  rating;
  constructor({
    currentPage,
    totalRankingStylePages,
    totalRankingStyleCount,
    rankingStyles,
  }) {
    this.currentPage = currentPage;
    this.totalPages = totalRankingStylePages;
    this.totalItemCount = totalRankingStyleCount;

    this.data = rankingStyles.map((style) => ({
      id: style.id,
      thumbnail: style.thumbnail || null,
      nickname: style.nickname,
      title: style.title,
      tags: style.StyleContainTag.map((sct) => sct.tag.name),
      categories: style.categories.reduce((acc, category) => {
        acc[category.type] = {
          name: category.name,
          brand: category.brand,
          price: category.price,
        };
        return acc;
      }, {}),
      viewCount: style.viewCount,
      curationCount: style.curationCount,
      createdAt: style.createdAt,
      ranking: style.ranking,
      rating: style.rating,
    }));
  }
}
