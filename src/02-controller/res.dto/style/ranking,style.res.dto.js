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
    totalrankingStyleCount,
    rankingStyles,
  }) {
    this.currentPage = currentPage;
    this.totalPages = totalRankingStylePages;
    this.totalItemCount = totalrankingStyleCount;
    this.data = rankingStyles.map((style) => ({
      id: style.id,
      thumbnail: style.thumbnail,
      nickname: style.nickname,
      title: style.title,
      tags: style.tags,
      categories: style.categories,
      viewCount: style.viewCount,
      curationCount: style.curationCount,
			createdAt: style.createdAt,
			ranking: style.ranking,
			rating: style.rating
    }));
  }
}