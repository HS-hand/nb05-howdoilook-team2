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

    const remainingTags = await this.prisma.tag.findMany({
      orderBy: {
        StyleContainTag: {
          _count: "desc",
        },
      },
      select: {
        name: true,
      },
    });

    const filteredTags = remainingTags.map((tag) => tag.name);
    
    if(filteredTags.length > 10){
      return filteredTags.slice(0, 10);
    }
    return filteredTags;
  };
}
