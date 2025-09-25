import { StyleMapper } from "./mapper/style.mapper.js";
import { Style } from "../04-domain/entity/style.js";

export class StyleRepo {
  constructor(prisma) {
    this.prisma = prisma;
  }

  async findAll(options = {}) {
    const {
      page = 1,
      pageSize = 10,
      sortBy = "latest",
      tagFilter,
      searchBy,
      keyword,
    } = options;

    const where = {};

    if (tagFilter) {
      where.StyleContainTag = {
        some: { tag: { name: tagFilter } },
      };
    }

    if (searchBy && keyword) {
      const kw = keyword;
      switch (searchBy) {
        case "nickname":
          where.nickname = { contains: kw };
          break;
        case "title":
          where.title = { contains: kw };
          break;
        case "content":
          where.content = { contains: kw };
          break;
        case "tag":
          where.StyleContainTag = {
            some: { tag: { name: { contains: kw } } },
          };
          break;
      }
    }

    let orderBy;
    if (sortBy === "view") {
      orderBy = { viewCount: "desc" };
    } else if (sortBy === "curation") {
      orderBy = { curations: { _count: "desc" } };
    } else {
      orderBy = { createdAt: "desc" };
    }

    const skip = (page - 1) * pageSize;
    const take = pageSize;

    const totalCount = await this.prisma.style.count({ where });

    const records = await this.prisma.style.findMany({
      where,
      include: {
        images: { select: { url: true } },
        categories: true,
        StyleContainTag: {
          include: { tag: true },
        },
        _count: { select: { curations: true } },
      },
      orderBy,
      skip,
      take,
    });
    const entities = records.map((record) => {
      return StyleMapper.toEntity({
        id: record.id,
        nickname: record.nickname,
        title: record.title,
        content: record.content,
        password: record.password,
        viewCount: record.viewCount,
        createdAt: record.createdAt,
        updatedAt: record.updatedAt,
        categories: record.categories,
        tags: record.StyleContainTag.map((ct) => ct.tag.name),
        imageUrls: record.images.map((img) => img.url),
        curationCount: record._count.curations,
      });
    });
    return {
      items: entities,
      pagination: {
        page,
        pageSize: take,
        totalCount,
        totalPages: Math.ceil(totalCount / take) || 1,
      },
    };
  }

  async getPopularTags(limit = 10) {
    const tags = await this.prisma.tag.findMany({
      include: {
        _count: { select: { StyleContainTag: true } },
      },
      orderBy: {
        StyleContainTag: { _count: "desc" },
      },
      take: limit,
    });

    return tags.map((t) => ({
      name: t.name,
      count: t._count.StyleContainTag,
    }));
  }

  async create(styleData) {
    const { categories, tags, imageUrls } = styleData;
    const styleEntity = Style.factory(styleData);
    const persistentData = StyleMapper.toPersistent(styleEntity);
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
              connectOrCreate: {
                where: { name: tagName },
                create: { name: tagName },
              },
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
    return StyleMapper.toEntity(record);
  }

  async findById(styleId) {
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

    await this.prisma.CategoryItem.deleteMany({ where: { styleId } });
    await this.prisma.StyleContainTag.deleteMany({ where: { styleId } });
    await this.prisma.StyleImage.deleteMany({ where: { styleId } });

    const record = await this.prisma.style.update({
      where: { id: styleId },
      data: {
        ...rest,
        categories: {
          create: arrayCategories,
        },
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
        images: {
          create: imageUrls.map((url) => ({ url })),
        },
        updatedAt: new Date(),
      },
      include: {
        images: true,
        categories: true,
        StyleContainTag: { include: { tag: true } },
      },
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
        updatedAt: new Date(),
      },
    });
  }

  async findRankingStyles({ page, pageSize, rankingStylesAvg }) {
    const sortedStyles = rankingStylesAvg.sort(
      (a, b) => b.avgScore - a.avgScore,
    );
    const pagingStyles = sortedStyles.slice(
      (page - 1) * pageSize,
      page * pageSize,
    );
    const styleIds = sortedStyles.map((sytle) => sytle.styleId);

    const styles = await this.prisma.style.findMany({
      where: { id: { in: styleIds } },
      include: {
        images: true,
        categories: true,
        StyleContainTag: { include: { tag: true } },
      },
    });

    return pagingStyles.map((style, index) => ({
      ...styles.find((s) => s.id === style.styleId),
      rating: style.avgScore,
      ranking: index + 1,
    }));
  }

  async findRankingStyleScores(rankBy) {
    const styleScores = await this.prisma.curation.groupBy({
      by: ["styleId"],
      _avg:
        rankBy === "total"
          ? {
            trendy: true,
            personality: true,
            practicality: true,
            costEffectiveness: true,
          }
          : rankBy === "personality"
            ? {
              personality: true,
            }
            : rankBy === "practicality"
              ? {
                practicality: true,
              }
              : rankBy === "trendy"
                ? {
                  trendy: true,
                } : {
                  costEffectiveness: true,
                }
    });
    return styleScores;
  }
}
