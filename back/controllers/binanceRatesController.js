const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const CryptoPrice = require('./../models/binanceRatesModel.js');

const dotenv = require('dotenv');
dotenv.config({path:"./../config.env"});

const mongoose = require('mongoose');
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
}).then(() => {console.log('DB connection successfull!')});
   
// set url as constant
const price = "https://api.binance.com/api/v3/ticker/price";
const var24h = "https://api.binance.com/api/v3/ticker/24hr"

const crossesUsdt = '?symbols=["BTCUSDT","ETHUSDT","BNBUSDT","DOGEUSDT","XRPUSDT","ADAUSDT","MATICUSDT","DOTUSDT","SHIBUSDT","SOLUSDT"]'
const crossesEur = '?symbols=["BTCEUR","ETHEUR","BNBEUR","DOGEEUR","XRPEUR","ADAEUR","MATICEUR","DOTEUR","SHIBEUR","SOLEUR"]'


getPrice = async (url) => {
    const res = await fetch(url)
    return res.json()};


get24hEvol = async (url) => {
    const res = await fetch(url);
    return res.json();
};





    setInterval(() => {
        (async (req,res) => {
            try {
                const today =  {"date":Date.now()}
                const usdt = await getPrice(`${price}${crossesUsdt}`);
                const usdtList24h = await get24hEvol(`${var24h}${crossesUsdt}`);
                usdData24h = {};
                for (val in usdtList24h){           
                    y = {[[usdtList24h[val].symbol][0].replace('USDT','')] :usdtList24h[val].priceChangePercent};
                    usdData24h = Object.assign(usdData24h, y);}
                    evolution24h = {evolution24h:usdData24h};
                    
                    
                    usdtList = {};
                    
                for (val in usdt){           
                    y = {[[usdt[val].symbol][0].replace('USDT','')] :usdt[val].price};
                    usdtList = Object.assign(usdtList, y);}
                    usdtList = {USDT:usdtList}
                    
                    
                    const eur = await getPrice(`${price}${crossesEur}`) 
                    eurList = {}
                    for (val in eur){
                        x = {[[eur[val].symbol][0].replace('EUR','')]:eur[val].price}
                        eurList = Object.assign(eurList, x);
                    } 
                    eurList = {EUR:eurList}
                    const crypto = Object.assign(usdtList,eurList)
                    let data = Object.assign(today,crypto)
                    data = Object.assign(data,evolution24h)
                    
                    
                    CryptoPrice.create(data)
                    
                    
                } catch (err){
                    console.log(err)
                }
            })()
            .then((data) => { });
    }, 1000);
/*setInterval(getEurPrice,500);  */


