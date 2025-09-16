import prisma from "../config/db";

export const getTopRanking = async (limit: number = 10) => {
  return prisma.user.findMany({
    orderBy: { score: "desc" },
    take: limit,
    select: { id: true, username: true, score: true },
  });
};

export const getUserRank = async (username: string) => {
  const user = await prisma.user.findUnique({
    where: { username },
    select: { id: true, username: true, score: true },
  });

  if (!user) return null;

  const higherCount = await prisma.user.count({
    where: { score: { gt: user.score } },
  });

  return { ...user, rank: higherCount + 1 };
};
