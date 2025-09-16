import express from "express";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import rankingRoutes from "./routes/ranking.routes";

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/ranking", rankingRoutes);   // 👈 추가

export default app;
