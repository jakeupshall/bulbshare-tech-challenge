const route = require("express").Router();

route.get("*", (_req, res) => {
  res.status(404).json({ error: 404, message: "Route not found" });
});

module.exports = route;
