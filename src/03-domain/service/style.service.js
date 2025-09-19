import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getStyles = async (filters) => {
  const { nickname, title, content, tag } = filters;

  return prisma.style.findMany({
    where: {
      AND: [
        nickname ? { nickname: { contains: nickname, mode: "insensitive" } } : {},
        title ? { title: { contains: title, mode: "insensitive" } } : {},
        content ? { content: { contains: content, mode: "insensitive" } } : {},
        tag
          ? {
              StyleContainTag: {
                some: {
                  tag: { name: { contains: tag, mode: "insensitive" } },
                },
              },
            }
          : {},
      ],
    },
    include: {
      images: true,
      StyleContainTag: {
        include: { tag: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });
};
