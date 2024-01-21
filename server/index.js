require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");

const { commentsRouter, feedRouter, notFoundRouter } = require("./routers");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.static(path.join(__dirname, "assets")));

app.use(commentsRouter); // 'Comments' endpoint handler
app.use(feedRouter); // 'Feed' endpoint handler
app.use(notFoundRouter) // A '404' endpoint handler

app.listen(port, () => {
  console.log("(HTTP) App now running on port", port);
});
