export class GetCurationListResDto {
  currentPage;
  totalPages;
  totalItemCount;
  data;
  constructor({ page, totalPages, curationTotalCount, foundCurationList }) {
    this.currentPage = page;
    this.totalPages = totalPages;
    this.totalItemCount = curationTotalCount;
    this.data = foundCurationList.map((Curation) => ({
      id: Curation.id,
      nickname: Curation.nickname,
      content: Curation.content,
      trendy: Curation.trendy,
      personality: Curation.personality,
      practicality: Curation.practicality,
      costEffectiveness: Curation.costEffectiveness,
      createdAt: Curation.createdAt,
      comment: Curation.comment
        ? {
            id: Curation.comment.id,
            nickname: Curation.comment.nickname,
            content: Curation.comment.content,
            createdAt: Curation.comment.createdAt,
          }
        : null,
    }));
  }
}
