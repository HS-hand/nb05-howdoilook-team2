import { CreateCurationReqValidator } from "./req.validator/curation/create.curation.req.validator.js";
import { DeleteCurationReqValidator } from "./req.validator/curation/delete.curation.req.validator.js";
import { UpdateCurationReqValidator } from "./req.validator/curation/update.curation.req.validator.js";
import { ViewCurationListReqValidator } from "./req.validator/curation/view.curation.list.req.validator.js";
import { CreateCurationResDto } from "./res.dto/curation/create.curation.res.dto.js";
import { DeleteCurationResDto } from "./res.dto/curation/delete.curation.res.dto.js";
import { UpdateCurationResDto } from "./res.dto/curation/update.curation.res.dto.js";
import { ViewCurationListResDto } from "./res.dto/curation/view.curation.list.res.dto.js";

export class CurationMiddleware {
  #curationService;

  constructor(curationService) {
    this.#curationService = curationService;
  }

  createCurationMiddleware = async (req, res, next) => {
    const createCurationReqDto = new CreateCurationReqValidator({
      params: req.params,
      body: req.body,
    }).validate();
    const createdCuration =
      await this.#curationService.createCuration(createCurationReqDto);
    const createdCurationResDto = new CreateCurationResDto(createdCuration);
    return res.json(createdCurationResDto);
  };

  viewCurationListMiddleware = async (req, res, next) => {
    const viewCurationListReqDto = new ViewCurationListReqValidator({
      params: req.params,
      query: req.query,
    }).validate();
    const viewCurationList = await this.#curationService.viewCurationList(
      viewCurationListReqDto,
    );
    const viewCurationListResDto = new ViewCurationListResDto(viewCurationList);
    return res.json(viewCurationListResDto);
  };

  updateCurationMiddleware = async (req, res, next) => {
    const updateCurationReqDto = new UpdateCurationReqValidator({
      params: req.params,
      body: req.body,
    }).validate();
    const updatedCuration =
      await this.#curationService.updateCuration(updateCurationReqDto);
    const updatedCurationResDto = new UpdateCurationResDto(updatedCuration);
    return res.json(updatedCurationResDto);
  };

  deleteCurationMiddleware = async (req, res, next) => {
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
