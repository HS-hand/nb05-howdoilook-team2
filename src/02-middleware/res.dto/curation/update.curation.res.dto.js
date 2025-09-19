export class UpdateCurationResDto {
  constructor(updateCuration) {
    this.id = updateCuration.id;
    this.nickname = updateCuration.nickname;
    this.content = updateCuration.content;
    this.trendy = updateCuration.trendy;
    this.personality = updateCuration.personality;
    this.practicality = updateCuration.practicality;
    this.costEffectiveness = updateCuration.costEffectiveness;
    this.createdAt = updateCuration.createdAt;
  }
}
