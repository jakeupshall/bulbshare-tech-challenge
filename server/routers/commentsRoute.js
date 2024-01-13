const route = require("express").Router();

const data = require("../data/comments.json");

const briefRefPrefix = "brief-";

route.get("/comments", (req, res) => {
  try {
    const { id } = req.query;

    const filteredData = data.filter(
      (comment) => comment.briefref === briefRefPrefix + id
    );
    const formattedData = filteredData.map(
      ({ comment, submitted_on: submittedOn, user: { avatar, name } }) => ({
        user: {
          name,
          avatar,
        },
        comment,
        submittedOn,
      })
    );

    res.status(200).json(formattedData);
  } catch (err) {
    console.error("Comments retrieval error:", err);
    res.status(500).send({ message: err });
  }
});

module.exports = route;
