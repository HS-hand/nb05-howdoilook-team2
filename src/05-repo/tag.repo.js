export class TagRepo {
  constructor(prisma) {
    this.prisma = prisma;
  }

  getAllTags = async () => {
    const tags = await this.prisma.tag.findMany({
      select: {
        id: true,
        name: true,
        _count: {
          select: {
            StyleContainTag: true,
          },
        },
      },
    });

    const unusedTagIds = tags
      .filter((tag) => tag._count.StyleContainTag === 0)
      .map((tag) => tag.id);

    if (unusedTagIds.length > 0) {
      await this.prisma.tag.deleteMany({
        where: {
          id: {
            in: unusedTagIds,
          },
        },
      });
    }

    const filteredTags = await this.prisma.tag.findMany();
    return filteredTags;

  };
}
