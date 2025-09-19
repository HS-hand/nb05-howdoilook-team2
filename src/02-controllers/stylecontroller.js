import * as styleService from "../services/style.service.js";

export const listStyles = async (req, res, next) => {
  try {
    const filters = {
      nickname: req.query.nickname || null,
      title: req.query.title || null,
      content: req.query.content || null,
      tag: req.query.tag || null,
    };

    const styles = await styleService.getStyles(filters);

    res.status(200).json({
      success: true,
      count: styles.length,
      data: styles,
    });
  } catch (err) {
    next(err);
  }
};
