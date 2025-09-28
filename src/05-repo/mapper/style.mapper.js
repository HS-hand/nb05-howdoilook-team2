import { Style } from "../../04-domain/entity/style.js";

export class StyleMapper {
  static toEntity(record) {
    if (!record) {
      return null;
    }

    const tags = record.StyleContainTag?.map((data) => data.tag.name) || [];
    const imageUrls = record.images?.map((img) => img.url) || [];

    return new Style({
      id: record.id,
      nickname: record.nickname,
      title: record.title,
      content: record.content,
      password: record.password,
      viewCount: record.viewCount,
      curationCount: record._count?.curations || 0,
      createdAt: record.createdAt,
      categories: record.categories || [],
      tags: tags,
      imageUrls: imageUrls,
    });
  }

  static toPersistent(styleEntity) {
    return {
      nickname: styleEntity.nickname,
      title: styleEntity.title,
      content: styleEntity.content,
      password: styleEntity.password,
    };
  }
}
