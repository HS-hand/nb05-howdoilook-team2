import { Request, Response } from "express";
import { getTopRanking, getUserRank } from "../services/ranking.service";

export const getRanking = async (req: Request, res: Response) => {
  try {
    const ranking = await getTopRanking(10);
    res.json(ranking);
  } catch (error) {
    res.status(500).json({ error: "랭킹 조회 실패" });
  }
};

export const getUserRanking = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;
    const user = await getUserRank(username);
    if (!user) return res.status(404).json({ error: "유저 없음" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "내 순위 조회 실패" });
  }
};
