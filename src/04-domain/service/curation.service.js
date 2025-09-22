import { Exception, EXCEPTIONS } from "../../common/exception.js";
import { Curation } from "../entity/curation.js";

export class CurationService {
  #curationRepo;

  constructor(curationRepo) {
    this.#curationRepo = curationRepo;
  }

  viewCurationList = async ({ styleId, page, pageSize, searchBy, keyword }) => {
    if(pageSize > 5) {
      throw new Exception(EXCEPTIONS.PAGESIZE_MAX_5);
    }
    const curationTotalCount = await this.#curationRepo.count();
    const foundCurationList = await this.#curationRepo.findCurationList({
      styleId,
      page,
      pageSize,
      searchBy,
      keyword,
    });
    return { page, pageSize, curationTotalCount, foundCurationList };
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

    if(!foundStyleId) {
      throw new Exception(EXCEPTIONS.STYLE_NOT_EXIST)
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

    if(password !== foundCuration.password){
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
    if(password !== foundCuration.password){
      throw new Exception(EXCEPTIONS.FORBIDDEN);
    }
    const deletedCuration = await this.#curationRepo.delete(id);
    return deletedCuration;
  };
}
