import { Curation } from "../../04-domain/entity/curation.js";
import { CommentMapper } from "./comment.mapper.js";

export class CurationMapper {
  static toEntity(record) {
    return new Curation({
      id: record.id,
      nickname: record.nickname,
      password: record.password,
      content: record.content,
      trendy: record.trendy,
      personality: record.personality,
      practicality: record.practicality,
      costEffectiveness: record.costEffectiveness,
      createdAt: record.createdAt,
      comment: record.comment ? CommentMapper.toEntity(record.comment) : null
    });
  }
  static toPersistent(entity) {
    return {
      nickname: entity.nickname,
      password: entity.password,
      content: entity.content,
      trendy: entity.trendy,
      personality: entity.personality,
      practicality: entity.practicality,
      costEffectiveness: entity.costEffectiveness,
    };
  }
}
