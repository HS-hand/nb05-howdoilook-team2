import { th } from "@faker-js/faker";
import { Exception, EXCEPTIONS } from "../../common/exception.js";
import { Curation } from "../entity/curation.js";

export class CurationService {
  #curationRepo;

  constructor(curationRepo) {
    this.#curationRepo = curationRepo;
  }

  getCurationList = async ({ styleId, page, pageSize, searchBy, keyword }) => {
    const foundStyleId = await this.#curationRepo.findStyleById(styleId);
    if (!foundStyleId) {
      throw new Exception(EXCEPTIONS.STYLE_NOT_EXIST);
    }
    if (pageSize > 5) {
      throw new Exception(EXCEPTIONS.PAGESIZE_MAX_5);
    }
    const foundCurationList = await this.#curationRepo.findCurationList({
      styleId,
      page,
      pageSize,
      searchBy,
      keyword,
    });

    const curationTotalCount = await this.#curationRepo.count(styleId);
    const totalPages = Math.ceil(curationTotalCount / pageSize);
    return { page, totalPages, curationTotalCount, foundCurationList };
  };

  createCuration = async ({
    styleId,
    nickname,
    content,
    password,
    trendy,
    personality,
    practicality,
    costEffectiveness,
  }) => {
    const foundStyleId = await this.#curationRepo.findStyleById(styleId);

    if (!foundStyleId) {
      throw new Exception(EXCEPTIONS.STYLE_NOT_EXIST);
    }

    const curation = Curation.factory({
      styleId,
      nickname,
      content,
      password,
      trendy,
      personality,
      practicality,
      costEffectiveness,
    });

    const foundCurationNickname =
      await this.#curationRepo.findCurationByNickname({ curation, styleId });
    // 현재 게시글에 이 닉네임으로 사용한 큐레이팅 있을 시
    if (foundCurationNickname) {
      throw new Exception(EXCEPTIONS.NICKNAME_DUPLICATION);
    }

    // 현재 게시글에 없지만 다른 게시글에 있을 경우
    const foundTotalCurationNickname =
      await this.#curationRepo.findCurationByNickname({ curation });
    if (foundTotalCurationNickname) {
      // 이 닉네임을 쓰는 유저가 있으니까 다른 게시글에서 작성시 비번은 일치해야 됨
      console.log(curation.password);
      console.log(foundTotalCurationNickname.password);
      if (curation.password !== foundTotalCurationNickname.password) {
        throw new Exception(EXCEPTIONS.PASSWORD_NOT_MATCH);
      }
    }

    const foundCurationPassword =
      await this.#curationRepo.findCurationByPassword({ curation });
    // 이 비번을 쓰는 유저가 있으니까 닉네임이 일치해야됨
    if (foundCurationPassword) {
      if (curation.nickname !== foundCurationPassword.nickname) {
        throw new Exception(EXCEPTIONS.NICKNAME_NOT_MATCH);
      }
    }

    const createdCuration = await this.#curationRepo.create(curation);

    return createdCuration;
  };

  updateCuration = async ({
    id,
    nickname,
    content,
    password,
    trendy,
    personality,
    practicality,
    costEffectiveness,
  }) => {
    const foundCuration = await this.#curationRepo.findCurationById(id);
    if (!foundCuration) {
      throw new Exception(EXCEPTIONS.CURATION_NOT_EXIST);
    }

    if (password !== foundCuration.password) {
      throw new Exception(EXCEPTIONS.FORBIDDEN);
    }

    const curation = Curation.factory({
      id,
      nickname,
      content,
      password,
      trendy,
      personality,
      practicality,
      costEffectiveness,
    });

    const updatedCuration = await this.#curationRepo.update(curation);

    return updatedCuration;
  };

  deleteCuration = async ({ id, password }) => {
    const foundCuration = await this.#curationRepo.findCurationById(id);
    if (!foundCuration) {
      throw new Exception(EXCEPTIONS.CURATION_NOT_EXIST);
    }
    if (password !== foundCuration.password) {
      throw new Exception(EXCEPTIONS.FORBIDDEN);
    }
    const deletedCuration = await this.#curationRepo.delete(id);
    return deletedCuration;
  };
}
