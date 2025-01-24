//server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const readingTasksRouter = require("./routes/readingTasks");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => res.render("index"));

app.use("/readingTasks", readingTasksRouter);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
