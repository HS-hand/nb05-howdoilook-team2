export class ViewCurationListResDto {
  constructor({ page, pageSize, curationTotalCount, foundCurationList }) {
    this.currentPage = page;
    this.totalPages = pageSize;
    this.totalItemCount = curationTotalCount;
    this.CurationList = foundCurationList.map((Curation) => ({
      id: Curation.id,
      nickname: Curation.nickname,
      content: Curation.content,
      trendy: Curation.trendy,
      personality: Curation.personmality,
      practicality: Curation.practicality,
      costEffectiveness: Curation.costEffectiveness,
      createdAt: Curation.createdAt,
      comment: Curation.comment ?
        {
          id: Curation.comment.id,
          nickname: Curation.comment.nickname,
          content: Curation.comment.content,
          createdAt: Curation.comment.createdAt
        }
        : null
    }));
  }
}
