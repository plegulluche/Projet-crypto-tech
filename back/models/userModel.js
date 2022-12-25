const mongoose = require("mongoose");
const validator = require("validator");

const userShema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Please state your firstname"],
    trim: true,
  },
});
