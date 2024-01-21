const route = require("express").Router();

const data = require("../data/comments.json");

route.get("/comments", (req, res) => {
  try {
    const { feedId } = req.query;

    const filteredData = data.filter((comment) => comment.briefref === feedId);
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
