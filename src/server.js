require("colors");
require("dotenv").config();
const express = require("express");
const { Db } = require(`./config/index`);

const app = express();

app.use(express.json());

app.use("*", async (req, res) => {
  return res.status(404).send({ success: false, message: "Page not found" });
});

async function start() {
  const PORT = 3000;

  await Db.connectDB();

  app.listen(PORT, () => {
    console.log(`Server runing on PORT : ${PORT}`.bgBlue);
  });
}

start();
