const route = require("express").Router();

const data = require("../data/feed.json");

route.get("/feed", (req, res) => {
  try {
    const { PAGE_SIZE: pageSizeQuery, START: startQuery } = req.query;

    const limit = Number(pageSizeQuery) || 5;
    let setOfData = Number(startQuery) > 1 ? Number(startQuery) : 1;

    const startIndex = limit * setOfData - limit;
    const endIndex = limit * setOfData;
    const totalItems = data.length;

    const paginatedData = data.slice(startIndex, endIndex);
    const formattedData = paginatedData.map(
      ({
        briefref: id,
        brand,
        name,
        description,
        feed_title: feedTitle,
        banner_text: bannerText,
        banner_image: bannerImage,
        ad_1_image: adImage1,
        ad_2_image: adImage2,
        starts_on: startsOn,
      }) => ({
        id,
        brand,
        name,
        description,
        feedTitle,
        bannerText,
        bannerImage,
        adImage1,
        adImage2,
        startsOn,
      })
    );

    const hasPrevious = startQuery > 1;
    const hasNext = endIndex < totalItems;

    if (!formattedData.length) {
      return res.status(404).json({
        error: "There is nothing here",
      });
    }

    return res.status(200).json({
      paginate: {
        from: startIndex + 1,
        to: endIndex,
        limit,
        totalItems,
        prevContent: hasPrevious ? setOfData - 1 : null,
        nextContent: hasNext ? setOfData + 1 : null,
      },
      items: formattedData,
    });
  } catch (err) {
    console.error("Feed retrieval error:", err);
    res.status(500).send({ message: err });
  }
});

module.exports = route;
