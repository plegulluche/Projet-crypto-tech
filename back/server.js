const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server running on port ${port} ...`);
});
