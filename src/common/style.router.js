import express from "express";
import { listStyles } from "../controllers/style.controller.js";

const router = express.Router();

router.get("/", listStyles);

export default router;
