import { CommentMapper } from "./mapper/comment.mapper.js";

export class CommentRepo {
  constructor(prisma) {
    this.prisma = prisma;
  }
  getStylePassword = async (curationId) => {
    const curation = await this.prisma.curation.findUnique({
      where: {
        id: curationId,
      },
      include: {
        style: {
          select: {
            password: true,
          },
        },
      },
    });
    const stylePassword = curation.style.password;
    return stylePassword;
  };

  getStyleNickname = async (curationId) => {
    const curation = await this.prisma.curation.findUnique({
      where: {
        id: curationId,
      },
      include: {
        style: {
          select: {
            nickname: true,
          },
        },
      },
    });
    const styleNickname = curation.style.nickname;
    return styleNickname;
  };
  findCommentById = async (commentId) => {
    const comment = await this.prisma.comment.findUnique({
      where: { id: commentId },
    });
    return comment ? CommentMapper.toEntity(comment) : null;
  };

  create = async (entity) => {
    const comment = await this.prisma.comment.create({
      data: {
        ...CommentMapper.toPersistent(entity),
      },
    });
    return CommentMapper.toEntity(comment);
  };

  update = async (entity) => {
    const updatedComment = await this.prisma.comment.update({
      where: { id: entity.id },
      data: {
        ...CommentMapper.toPersistent(entity),
        updatedAt: new Date(),
      },
    });

    return CommentMapper.toEntity(updatedComment);
  };

  delete = async (id) => {
    const deletedComment = await this.prisma.comment.delete({
      where: { id },
    });
    return deletedComment;
  };
}