export class CreateCurationResDto {
  constructor(createCuration) {
    this.id = createCuration.id;
    this.nickname = createCuration.nickname;
    this.content = createCuration.content;
    this.trendy = createCuration.trendy;
    this.personality = createCuration.personality;
    this.practicality = createCuration.practicality;
    this.costEffectiveness = createCuration.costEffectiveness;
    this.createdAt = createCuration.createdAt;
  }
}
