import { CreateCurationReqValidator } from "./req.validator/curation/create.curation.req.validator.js";
import { DeleteCurationReqValidator } from "./req.validator/curation/delete.curation.req.validator.js";
import { UpdateCurationReqValidator } from "./req.validator/curation/update.curation.req.validator.js";
import { GetCurationListReqValidator } from "./req.validator/curation/get.curation.list.req.validator.js";
import { CreateCurationResDto } from "./res.dto/curation/create.curation.res.dto.js";
import { DeleteCurationResDto } from "./res.dto/curation/delete.curation.res.dto.js";
import { UpdateCurationResDto } from "./res.dto/curation/update.curation.res.dto.js";
import { GetCurationListResDto } from "./res.dto/curation/get.curation.list.res.dto.js";

export class CurationController {
  #curationService;

  constructor(curationService) {
    this.#curationService = curationService;
  }

  createCurationController = async (req, res, next) => {
    const createCurationReqDto = new CreateCurationReqValidator({
      params: req.params,
      body: req.body,
    }).validate();
    const createdCuration =
      await this.#curationService.createCuration(createCurationReqDto);
    const createdCurationResDto = new CreateCurationResDto(createdCuration);
    return res.json(createdCurationResDto);
  };

  getCurationListController = async (req, res, next) => {
    const getCurationListReqDto = new GetCurationListReqValidator({
      params: req.params,
      query: req.query,
    }).validate();
    const getCurationList = await this.#curationService.getCurationList(
      getCurationListReqDto,
    );
    const getCurationListResDto = new GetCurationListResDto(getCurationList);
    return res.json(getCurationListResDto);
  };

  updateCurationController = async (req, res, next) => {
    const updateCurationReqDto = new UpdateCurationReqValidator({
      params: req.params,
      body: req.body,
    }).validate();
    const updatedCuration =
      await this.#curationService.updateCuration(updateCurationReqDto);
    const updatedCurationResDto = new UpdateCurationResDto(updatedCuration);
    return res.json(updatedCurationResDto);
  };

  deleteCurationController = async (req, res, next) => {
    const deleteCurationReqDto = new DeleteCurationReqValidator({
      params: req.params,
      body: req.body,
    }).validate();
    const deletedwCuration =
      await this.#curationService.deleteCuration(deleteCurationReqDto);
    const deletedCurationResDto = new DeleteCurationResDto(deletedwCuration);
    return res.json(deletedCurationResDto);
  };
}
