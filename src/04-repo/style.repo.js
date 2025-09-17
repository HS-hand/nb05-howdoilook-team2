export class StyleRepo {
  prisma;

  constructor(prisma) {
    this.prisma = prisma;
  };

  async createStyle(styleData){
    const { tags, categories, imageUrls, ...rest } = styleData;

    return this.prisma.style.create({
      data: {
        ...rest,
        images: {
          create: imageUrls.map((url) => ({ url })),
        },
        categories: {
          create: categories,
        },
        tags: {
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
  };

  async findStyleById(styleId, includePassword = false) {
    const style = await this.prisma.style.findUnique({
      where: { id: styleId },
      include: {
        images: { select: { url: true } },
        tags: { select: { tag: { select: { name: true } } } },
        categories: true,
        _count: { select: { curations: true } },
      },
    });

    if (!style) return null;

    const { _count, images, tags, password, ...rest } = style;
    const result = {
      ...rest,
      imageUrls: images.map((img) => img.url),
      tags: tags.map((t) => t.tag.name),
      curationCount: _count.curations,
    };

    if (includePassword) {
      result.password = password;
    }
    
    return result;
  };

  async updateStyle(styleId, updateData) {
    const { tags, categories, imageUrls, ...rest } = updateData;

    return this.prisma.$transaction(async (tx) => {
      await tx.tagOnStyle.deleteMany({ where: { styleId } });
      await tx.category.deleteMany({ where: { styleId } });
      await tx.image.deleteMany({ where: { styleId } });

      return tx.style.update({
        where: { id: styleId },
        data: {
          ...rest,
          images: {
            create: imageUrls.map((url) => ({ url })),
          },
          categories: {
            create: categories,
          },
          tags: {
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
    });
  };

  async deleteStyle(styleId) {
    return this.prisma.style.delete({
      where: { id: styleId },
    });
  };

  async incrementViewCount(styleId) {
    return this.prisma.style.update({
      where: { id: styleId },
      data: {
        viewCount: {
          increment: 1,
        },
      },
    });
  };
}