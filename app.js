const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const blogRouter = require("./routes/blog");
const mongoose = require("mongoose");
const { runInThisContext } = require("vm");
const { token } = require("morgan");

const app = express();
mongoose.connect(
  "mongodb+srv://62050414:1234@cluster414.na3mp9d.mongodb.net/node-api?retryWrites=true&w=majority"
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/news", newsRouter);
app.use("/blog", blogRouter);

module.exports = app;

