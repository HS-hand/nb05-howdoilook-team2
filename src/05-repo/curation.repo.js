import { CurationMapper } from "./mapper/curation.mapper.js";

export class CurationRepo {
  constructor(prisma) {
    this.prisma = prisma;
  }

  findCurationById = async (id) => {
    const curation = await this.prisma.curation.findUnique({
      where: { id },
    });
    return curation ? CurationMapper.toEntity(curation) : null;
  };
  findStyleById = async (id) => {
    const style = await this.prisma.style.findUnique({
      where: { id },
    });
    return style ? CurationMapper.toEntity(style) : null;
  };

  findCurationList = async ({ styleId, page, pageSize, searchBy, keyword }) => {
    const curations = await this.prisma.curation.findMany({
      where: {
        styleId,
        ...(keyword
          ? { [searchBy]: { contains: keyword, mode: "insensitive" } }
          : {}),
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        comment: true
      }
    });
    return curations.map((curation) => CurationMapper.toEntity(curation));
  };

  create = async (entity) => {
    const curation = await this.prisma.curation.create({
      data: {
        ...CurationMapper.toPersistent(entity),
        style: {
          connect: { id: entity.styleId },
        },
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
      },
    });

    return CurationMapper.toEntity(updatedcuration);
  };

  delete = async (id) => {
    const deletedCuration = await this.prisma.curation.delete({
      where: { id },
    });
    return deletedCuration;
  };

  count = async () => {
    const totalCount = await this.prisma.curation.count();
    return totalCount;
  };
}
