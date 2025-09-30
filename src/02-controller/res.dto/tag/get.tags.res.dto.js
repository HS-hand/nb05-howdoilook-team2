export class GetTagsResDto {
  constructor(tags) {
    this.tags = tags.map((tag) => tag);
  }
}
