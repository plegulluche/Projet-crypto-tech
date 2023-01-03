const mongoose = require('mongoose');


const CryptoPriceSchema = new mongoose.Schema({
    date:{
        type: Number,
        required: [true, 'must get Time'],
        
    },
    USDT:{
        type: Object,
        required: [true, 'must get USDT rates'],
    },
    EUR:{
        type: Object,
        required: [true, 'must get EUR rates'],
    },
    evolution24h:{
            type: Object,
            required: [true, 'must get last 24h evolution rate'],
    }
});

const CryptoPrice = mongoose.model('cryptos',CryptoPriceSchema);

module.exports = CryptoPrice