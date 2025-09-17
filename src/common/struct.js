import * as struct from "superstruct";


export const CreateComment = struct.object({
  nickname: struct.size(struct.string(), 1, 15),
  content: struct.size(struct.string(),2),
  password: struct.size(struct.string(), 4, 20),
});

export const PatchComment = struct.partial(CreateComment);
