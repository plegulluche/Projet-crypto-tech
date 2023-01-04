const mongoose = require('mongoose');


const CryptoHistorySchema = new mongoose.Schema({
    date:{
        type: Number,
        required: [true, 'must get Time'],
        
    },
    USDT:{
        type: Object,
        required: [true, 'must get USDT rates'],
    }
});

const CryptoHistory = mongoose.model('cryptohistorics',CryptoHistorySchema);

module.exports = CryptoHistory