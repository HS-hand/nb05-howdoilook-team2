export class GetTagsResDto {
  constructor(tags) {
    this.tags = tags.map((tag) =>{
      return tag.name;
    });
    console.log(this.tags);
  }
  
}
