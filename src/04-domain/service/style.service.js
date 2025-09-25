import { Exception, EXCEPTIONS } from "../../common/exception.js";

export class StyleService {
  #styleRepo;

  constructor(styleRepo) {
    this.#styleRepo = styleRepo;
  }

  async getStyleList(options = {}) {
    const result = await this.#styleRepo.findAll(options);
    return result;
  }

  async getPopularTags(limit = 10) {
    const tags = await this.#styleRepo.getPopularTags(limit);
    return tags;
  }

  async createStyle(styleData) {
    const createdStyle = await this.#styleRepo.create(styleData);

    return createdStyle;
  }

  async getStyleById(styleId) {
    const styleEntity = await this.#styleRepo.findById(styleId);
    if (!styleEntity) {
      throw new Exception(EXCEPTIONS.NOT_FOUND);
    }

    await this.#styleRepo.incrementViewCount(styleId);
    return styleEntity;
  }

  async updateStyle(styleId, updateData) {
    const { password, ...rest } = updateData;
    const styleEntity = await this.#styleRepo.findById(styleId);
    if (!styleEntity) {
      throw new Exception(EXCEPTIONS.NOT_FOUND);
    }
    if (!styleEntity.isPasswordMatch(password)) {
      throw new Exception(EXCEPTIONS.FORBIDDEN);
    }

    return await this.#styleRepo.update(styleId, rest);
  }

  async deleteStyle(styleId, password) {
    const styleEntity = await this.#styleRepo.findById(styleId);
    if (!styleEntity) {
      throw new Exception(EXCEPTIONS.NOT_FOUND);
    }
    if (!styleEntity.isPasswordMatch(password)) {
      throw new Exception(EXCEPTIONS.FORBIDDEN);
    }

    return await this.#styleRepo.delete(styleId);
  }

  async getRankingStyles({page, pageSize}) {
    const foundStyleScores = await this.#styleRepo.findRankingStyleScores();

    const rankingStylesAvg = foundStyleScores.map(style => {
      const { trendy, personality, practicality, costEffectiveness } = style._avg;
      const avgScore =
      (trendy + personality + practicality + costEffectiveness) / 4;

      return {styleId: style.styleId, avgScore};
    });

    //정렬된 rankingStyles = style 정보 + avgScore
    const rankingStyles = await this.#styleRepo.findRankingStyles({page, pageSize, rankingStylesAvg});
    
    return{
      currentPage : page,
      totalRankingStylePages : pageSize,
      totalrankingStyleCount : foundStyleScores.length,
      rankingStyles,
    }
  }
}
