const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

/** load modules as routes */
const initializeMongoDB = require("./app/database/db");
const PostRoutes = require("./app/routes/post");

dotenv.config();

const PORT = process.env.PORT || 3000;

/** declare application and load middleware */
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

initializeMongoDB();

app.get("/", (req, res) => {
  res.send("<h1>👋🏻 Hello from Backend</h1>");
});

app.use("/posts", PostRoutes);

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error in starting server!");
  } else {
    console.log(`Running on ${PORT} ⚡`);
  }
});
