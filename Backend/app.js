const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const transactionRouter = require("./routes/transactions");

const app = express();
dotenv.config({ path: "./config/config.env" });
connectDB();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({ origin: "*" }));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/transaction", transactionRouter);

module.exports = app;
