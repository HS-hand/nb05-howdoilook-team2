import { Comment } from "../../04-domain/entity/comment.js";

export class CommentMapper {
  static toEntity(record) {
    return new Comment({
      id: record.id,
      curationId: record.curationId,
      content: record.content,
      password: record.password,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    });
  }
  static toPersistent(entity) {
    return {
      curationId: entity.curationId,
      content: entity.content,
      password: entity.password,
    };
  }
}
