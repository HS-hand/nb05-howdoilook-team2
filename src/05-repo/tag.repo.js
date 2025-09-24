export class TagRepo {
  constructor(prisma) {
    this.prisma = prisma;
  }

  getAllTags = async()=>{
    const tags = await this.prisma.tag.findMany();
    return tags;
  }
}
