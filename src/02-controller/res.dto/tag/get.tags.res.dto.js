export class GetTagsResDto {
  constructor(tags) {
    this.tags = tags.map((tag)=>({
      id: tag.id,
      name: tag.name
    }))
  }
}
