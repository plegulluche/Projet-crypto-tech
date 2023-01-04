const mongoose = require("mongoose");


const cryptoInfoSchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  logo: {
    type: String,
    required:true,

  },
  date_launched: {
    type: String,
    required: false
  }, 
});


const CryptoInfo = mongoose.model("CryptoInfo", cryptoInfoSchema);

module.exports = CryptoInfo;
