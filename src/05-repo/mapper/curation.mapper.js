import { Curation } from "../../04-domain/entity/curation.js";

export class CurationMapper {
  static toEntity(record) {
    return new Curation({
      id: record.id,
      nickname: record.nickname,
      content: record.content,
      trendy: record.trendy,
      personality: record.personality,
      practicality: record.practicality,
      costEffectiveness: record.costEffectiveness,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt
    });
  }
  static toPersistent(entity) {
    return {
      nickname: entity.nickname,
      content: entity.content,
      trendy: entity.trendy,
      personality: entity.personality,
      practicality: entity.practicality,
      costEffectiveness: entity.costEffectiveness,
    }
  }
}