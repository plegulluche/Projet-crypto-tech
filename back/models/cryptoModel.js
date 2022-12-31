const mongoose = require("mongoose");


const cryptoSchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true,
    trim: true,
  },
  value: {
    type: Decimal128,
    required: true,
    trim: true,
  },
  var24h: {
    type: Double,
    required:true,

  },
  date: {
    type: String,
    required: true
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same !",
    },
  },
});


const Crypto = mongoose.model("crypto", cryptoSchema);

module.exports = Crypto;
