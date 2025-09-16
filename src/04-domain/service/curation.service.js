import { Exception, EXCEPTIONS } from "../../common/exception.js";
import { Curation } from "../entity/curation.js";

export class CurationService{
  #curationRepo;

  constructor(curationRepo){
    this.#curationRepo = curationRepo;
  }

  viewCurationList = async ({ page, pageSize, searchBy, keyword }) => {
    const curationTotalCount = await this.#curationRepo.count();
    const foundCurationList = await this.#curationRepo.findCurationList({page, pageSize, searchBy, keyword });
    return {page, pageSize, curationTotalCount,foundCurationList};
  }

  createCuration = async ({nickname, content, password, trendy, personality, practicality, costEffectiveness}) => {
    
    const curation = Curation.factory({nickname, content, password, trendy, personality, practicality, costEffectiveness});

    const createdCuration = await this.#curationRepo.create(curation);

    return createdCuration;
  }

  updateCuration = async ({id, nickname, content, password, trendy, personality, practicality, costEffectiveness}) => {
    const foundCuration = await this.#curationRepo.findCurationById(id);
    if (!foundCuration) {
      throw new Exception(EXCEPTIONS.CURATION_NOT_EXIST);
    }

    const curation = Curation.factory({id, nickname, content, password, trendy, personality, practicality, costEffectiveness});

    const updatedCuration = await this.#curationRepo.update(curation);

    return updatedCuration;
  }

  deleteCuration = async ({id}) => {
    const foundCuration = await this.#curationRepo.findCurationById(id);

    if (!foundCuration) {
      throw new Exception(EXCEPTIONS.CURATION_NOT_EXIST);
    }
    const deletedCuration = await this.#curationRepo.delete(id);
    return deletedCuration;
  }
}