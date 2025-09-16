import { Router } from "express";
import { getRanking, getUserRanking } from "../controllers/ranking.controller";

const router = Router();

router.get("/", getRanking);             // /ranking
router.get("/:username", getUserRanking); // /ranking/:username

export default router;
