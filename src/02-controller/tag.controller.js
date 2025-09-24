export class TagController {
  #tagRepo;

  constructor(tagRepo) {
    this.#tagRepo = tagRepo;
  }

  getTagsController = async(res, req, next)=>{
    const tags = this.#tagRepo.getAllTags();
  }
}
