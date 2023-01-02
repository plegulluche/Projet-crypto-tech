const CryptoPrice = require('./../models/binanceRatesModel');
const CryptoInfo = require('./../models/cryptoInfoModel');
const GlobalStats = require('./../models/globalStatsModel');

// get rates of cryto in EUR or USDT and evolution of last 24h
exports.getCryptoRates = async (req,res) =>  {
        try{
            const cryptos = await CryptoPrice.find();
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


exports.updateFav = async (req, res) => {
    try {
      const fav = await Favorite.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
  
      res.status(200).json({
        status: 'success',
        data: {
            fav
        }
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
  };





/* 
// get symbol, name, logo and date launched 
exports.getCryptoInfo = async (req,res) =>  {
    try{
        const infos = await CryptoInfo.find();  
        res.status(200).json({
            status:'succes',
            results: infos.length,
            data:{infos}
        })
    } catch(err) {
        res.status(404).json({
            status:'fail',
            message:err
        });
    }
};

// get global stats of the whole cryptocurrencies market 
exports.getGlobalStats = async (req,res) =>  {
    try{
        const stats = await GlobalStats.find();  
        res.status(200).json({
            status:'succes',
            results: infos.length,
            data:{stats}
        })
    } catch(err) {
        res.status(404).json({
            status:'fail',
            message:err
        });
    }
}; */