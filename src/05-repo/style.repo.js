import { StyleMapper } from "./mapper/style.mapper.js";

export class StyleRepo {
  constructor(prisma) {
    this.prisma = prisma;
  }
  async create(styleEntity, styleData) {
    const { categories, tags, imageUrls } = styleData;
    const persistentData = StyleMapper.toPersistent(styleEntity);
    console.log(categories,"------------------");
    const arrayCategories = Object.entries(categories).map(([type, data]) => ({
      ...data,
      type,
    }));
    const record = await this.prisma.style.create({
      data: {
        ...persistentData,
        categories: { create: arrayCategories },
        StyleContainTag: {
          create: tags.map((tagName) => ({
            tag: {
              create: { name: tagName },
            },
          })),
        },
        images: { create: imageUrls.map((url) => ({ url })) },
      },
      include: {
        images: true,
        categories: true,
        StyleContainTag: { include: { tag: true } },
      },
    });
    const result = StyleMapper.toEntity(record);
    return result;
  }

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
        _count: { select: { curations: true } },
      },
    });

    const styleEntity = StyleMapper.toEntity(record);
    return styleEntity;
  }

  async update(styleId, updateData) {
    const { tags, categories, imageUrls, ...rest } = updateData;
    const arrayCategories = Object.entries(categories).map(([type, data]) => ({
      ...data,
      type,
    }));
    const record = await this.prisma.$transaction(async (tx) => {
      await tx.StyleContainTag.deleteMany({ where: { styleId } });
      await tx.categoryItem.deleteMany({ where: { styleId } });
      await tx.styleImage.deleteMany({ where: { styleId } });
    
      const updatedRecord = tx.style.update({
        where: { id: styleId },
        data: {
          ...rest,
          categories: { create: arrayCategories },
          StyleContainTag: {
            create: tags.map((tagName) => ({
              tag: {
                create: { name: tagName },
              },
            })),
          },
          images: { create: imageUrls.map((url) => ({ url })) },
        },
        include: {
          images: true,
          categories: true,
          StyleContainTag: { include: { tag: true } },
        },
      });

      return updatedRecord;
    });

    return StyleMapper.toEntity(record);
  }

  async delete(styleId) {
    return this.prisma.style.delete({
      where: { id: styleId },
    });
  }

  async incrementViewCount(styleId) {
    return this.prisma.style.update({
      where: { id: styleId },
      data: {
        viewCount: { increment: 1 },
      },
    });
  }
}
