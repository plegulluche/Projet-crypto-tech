const CryptoPrice = require('./../models/binanceRatesModel');
const CryptoInfo = require('./../models/cryptoInfoModel');
const GlobalStats = require('./../models/globalStatsModel');
const User = require('./../models/userModel');
const CryptoHistory = require('./../models/binanceHistoryModel');

// get rates of cryto in EUR or USDT and evolution of last 24h
exports.getCryptoRates = async (req,res) =>  {
    try{
        const cryptos = await CryptoPrice.findOne().sort({date:-1});
        const infos = await CryptoInfo.find();  
        const stats = await GlobalStats.find();
        res.status(200).json({
            status:'succes',
            results: cryptos.length,
            data:{cryptos,infos,stats}
        })
    } catch(err) {
        res.status(404).json({
            status:'fail',
            message:err
        });
    }
};

exports.getHistoric =  async (req,res) =>  {
    try{
        const hist = await CryptoHistory.find({
            date: {$gte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000)}}).sort({date:-1});
        res.status(200).json({
            status:'succes',
            results: hist.length,
            data:{hist}
        })
    } catch(err) {
        res.status(404).json({
            status:'fail',
            message:err
        });
    }
};

exports.updateFav = async (req, res) => {
    try {
      const favorite = await User.findByIdAndUpdate(req.params.id, req.body,{
        new : true,
        runValidators: true
      });
      const hist = await CryptoHistory.find();
      res.status(200).json({
        status: 'success',
        data: {
            favorite
        }
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
  };

