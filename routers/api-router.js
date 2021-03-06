const apiRouter = require("express").Router();
const express = require("express");
const topicsRouter = require("../routers/topics-router");
const usersRouter = require("../routers/users-router");
const articlesRouter = require("../routers/articles-router");
const commentsRouter = require("../routers/comments-router");
const apiInfo2 = require("../api-info");
const { send405Error } = require("../errors");

apiRouter
  .get("/", (req, res, next) => res.json({ msg: apiInfo2 }))
  .all(send405Error);
apiRouter.use("/topics", topicsRouter);
apiRouter.use("/users", usersRouter);
apiRouter.use("/articles", articlesRouter);
apiRouter.use("/comments", commentsRouter);

module.exports = apiRouter;
