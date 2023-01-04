const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
const CryptoInfo = require('./../models/cryptoInfoModel.js');
const dotenv = require('dotenv');
dotenv.config({path:"./../config.env"});
dotenv.config({ path: './../config.env' });
const mongoose = require('mongoose');
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('DB connection successfull!');
  });

// set url as const
const coinMarKey = process.env.COINMCAP_API_KEY;
const urlCoinMarketCrypto =
  'https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?';
const listCrypto = 'symbol=BTC,ADA,BNB,DOGE,DOT,ETH,MATIC,SHIB,SOL,XRP';

getData = async (url = '', apiKey = '') => {
  const res = await fetch(url, {
    method: 'GET',
    headers: { 'X-CMC_PRO_API_KEY': apiKey },
  });
  return res.json();
};

(async (req, res) => {
  try {
    const json = await getData(urlCoinMarketCrypto + listCrypto, coinMarKey);
    let dataFrame = [];
    const x = json.data;
    for (val in x) {
      dataFrame.push(
        (({ name, symbol, logo, date_launched }) => ({
          name,
          symbol,
          logo,
          date_launched,
        }))(x[val][0])
      );
    }
    CryptoInfo.remove({}, function (err) {
      console.log('collection removed');
    });
    CryptoInfo.create(dataFrame);
  } catch (err) {
    console.log(err);
  }
})();
