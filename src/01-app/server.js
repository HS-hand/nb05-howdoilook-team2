import express from "express";
import cors from "cors";
import morgan from "morgan";
import { PrismaClient } from "@prisma/client";
import { Exception } from "../common/exception.js";

export class Server {
  #server;
  #prisma;
  //#controllers;
  constructor() {
    //this.#controllers = controllers;
    this.#server = express();
    this.#prisma = new PrismaClient();
  }

  getAllComments = async (req, res, next) => {
    const comments = await this.#prisma.comment.findMany();
    res.send(comments);
  };

  createComment = async (req, res, next) => {
    const { nickname, content, password } = req.body;
    const comment = await this.#prisma.comment.create({
      data: {
        nickname,
        content,
        password,
      },
    });

    res.status(201).json(comment);
  };

  updateComment = async(req, res, next)=> {
    const {id} = req.params;
    const comment = await this.#prisma.comment.update({
      where:{id},
      data: req.body
    });
    res.send(comment);
  }

  listen = () => {
    const port = process.env.PORT || 3000;
    this.#server.listen(3000, () => {
      console.log(`app server listening on port ${port}`);
    });
  };

  registerBaseMiddlewares = () => {
    this.#server.use(cors());
    this.#server.use(morgan("dev"));
    this.#server.use(express.json());
  };

  registerExceptionMiddleware = () => {
    this.#server.use((err, req, res, next) => {
      if (err instanceof Exception) {
        res.status(err.statusCode).json({ message: err.message });
      } else {
        res.status(500).json({ message: "알 수 없는 에러 발생!!!" });
        console.error(err);
      }
    });
  };

  registerControllerMiddleware = () => {
    this.#server.get("/howdoilook/comments", this.getAllComments);
    this.#server.post("/howdoilook/comments", this.createComment);
    this.#server.put("/howdoilook/comments/:id", this.updateComment);
  };

  start = () => {
    this.registerBaseMiddlewares();
    this.registerControllerMiddleware();
    this.registerExceptionMiddleware();
    this.listen();
  };
}
