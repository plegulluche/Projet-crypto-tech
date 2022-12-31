const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const GlobalStats = require('./../models/globalStatsModel.js');

const dotenv = require('dotenv');
dotenv.config({path:"./../configNabil.env"});

const mongoose = require('mongoose');
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,})
    .then(() => {
        console.log('DB connection successfull!')
    });

// set url as const
const coinMarKey = process.env.COINMCAP_API_KEY;
const urlGlobalStats = "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest"


getData = async (url = '', apiKey='') => {

    const res = await fetch(url, {
    method: "GET",
    headers:{"X-CMC_PRO_API_KEY":apiKey}
    });
    return res.json()
};

 (async (req,res) => {
    try {
        const json = await getData(urlGlobalStats,coinMarKey);
        const x = json.data
        const y = json.data.quote.USD
        const data = Object.assign(x,y)
        GlobalStats.remove({}, function(err) {console.log('collection removed') });
        GlobalStats.create(data);
        console.log(data)
    } catch (err){
        console.log(err)
    }
})();




