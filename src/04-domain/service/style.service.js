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

  async getRankingStyles({ page, pageSize, rankBy }) {
    const foundStyleScores =
      await this.#styleRepo.findRankingStyleScores(rankBy);

    const rankingStylesAvg = foundStyleScores.map((style) => {
      const { trendy, personality, practicality, costEffectiveness } =
        style._avg;
      let avgScore;
      if (rankBy === "total") {
        avgScore =
          Math.round(
            ((trendy + personality + practicality + costEffectiveness) / 4) *
              10,
          ) / 10;
      } else {
        avgScore = style._avg[rankBy] ?? 0;
        avgScore = Math.round(avgScore * 10) / 10;
      }
      return { styleId: style.styleId, avgScore };
    });

    //정렬된 rankingStyles = style 정보 + avgScore
    const rankingStyles = await this.#styleRepo.findRankingStyles({
      page,
      pageSize,
      rankingStylesAvg,
    });

    //썸네일 넣기
    const result = rankingStyles.map((style) => ({
      ...style,
      thumbnail: style.images[0]?.url ?? null,
    }));

    return {
      currentPage: page,
      totalRankingStylePages: pageSize,
      totalrankingStyleCount: foundStyleScores.length,
      rankingStyles: result,
    };
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
}
