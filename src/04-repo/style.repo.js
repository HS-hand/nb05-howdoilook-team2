import { BaseRepo } from "./base.repo.js";
import { StyleMapper } from "./mapper/style.mapper.js";

export class StyleRepo extends BaseRepo {
  constructor({ prisma }) {
    super(prisma);
  };

   async create(styleEntity, styleData) {
    const { categories, tags, imageUrls } = styleData;
    const persistentData = StyleMapper.toPersistent(styleEntity);

    const record = await this.prisma.style.create({
      data: {
        ...persistentData,
        categories: { create: categories },
        tags: {
          connectOrCreate: {
            where: { name: tagName },
            create: { name: tagName },
          },
        },
        images: { create: imageUrls.map((url) => ({ url })) },
      },
    });

    return StyleMapper.toEntity(record);
   };

   async findById(styleId, includePassword = false) {
    const record = await this.prisma.style.findUnique({
      where: { id: styleId },
      include: {
        categories: true,
        StyleContainTag: {
          select: {
            tag: {
              select: { name: true },
            },
          },
        },
        images: { select: { url: true } },
        _count: { select: { curationns: true } },
      },
    });

    const styleEntity = StyleMapper.toEntity(record);
    if (styleEntity && includePassword) {
      styleEntity.password = record.password;
    };

    return entity;
   };

   async update(styleId, updateData) {
    const { tags, categories, imageUrls, ...rest } = updateData;

    const record = await this.prisma.$transaction(async (tx) => {
      await tx.StyleContainTag.deleteMany({ where: { styleId } });
      await tx.categoryItem.deleteMany({ where: { styleId } });
      await tx.styleImage.deleteMany({ where: { styleId } });

      const updatedRecord = tx.style.update({
        where: { id: styleId },
        data: {
          ...rest,
          categories: { create: categories },
          StyleContainTag: {
            create: tags.map((tagName) => ({
              tag: {
                connectOrCreate: {
                  where: { name: tagName },
                  create: { name: tagName },
                },
              },
            })),
          },
        },
      });

      return updatedRecord;
    });

    return StyleMapper.toEntity(record);
   };

   async delete(styleId) {
    return this.prisma.style.delete({
      where: { id: styleId }
    });
  };
}