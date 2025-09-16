import { CurationMapper } from "./mapper/curation.mapper.js";

export class CurationRepo {
  prisma
  constructor(prisma) {
    this.prisma = prisma;
  }

  findCurationById = async (id) => {
    const curation = await this.prisma.curation.findUnique({
      where: { id },
    });
    return curation ? CurationMapper.toEntity(curation) : null;
  }

  findCurationList = async ({ page, pageSize, searchBy, keyword }) => {
    const curations = await this.prisma.curation.findMany({
      where: keyword
        ? {
          [searchBy]: {
            contains: keyword,
            mode: "insensitive",
          },
        }
        : {}, // 키워드 없으면 전부 보기
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: {
        createdAt: "desc",
      },
    });

    return curations.map(curation => CurationMapper.toEntity(curation));
  }

  create = async (entity) => {
    const curation = await this.prisma.curation.create({
      data: {
        ...CurationMapper.toPersistent(entity),
      },
    });
    return CurationMapper.toEntity(curation);
  };

  update = async (entity) => {
    const updatedcuration = await this.prisma.curation.update({
      where: { id: entity.id },
      data: {
        ...CurationMapper.toPersistent(entity),
        updatedAt: new Date(),
      }
    });

    return CurationMapper.toEntity(updatedcuration);
  }

  delete = async (id) => {
    const deletedCuration = await this.prisma.curation.delete({
      where: { id }

    });
    return deletedCuration;
  }

  count = async () => {
    const totalCount = await this.prisma.curation.count();
    return totalCount;
  }
}