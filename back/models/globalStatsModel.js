const mongoose = require('mongoose');


const globalStatsSchema = new mongoose.Schema({
    total_cryptocurrencies:{
        type: Number,
        required: [true, 'must get total crypto'],
        
    },
    active_exchanges:{
        type: Number,
        required: [true, 'must get active_exchanges'],
    },
    btc_dominance_yesterday:{
        type: Number,
        required: [true, 'must get active_exchanges'],
    },
    eth_dominance_yesterday:{
            type: Number,
            required: [true, 'must get active_exchanges'],
    },
    total_market_cap:{
                type: Number,
                required: [true, 'must get active_exchanges']
    },
    
    total_volume_24h:{
        type: Number,
        required: [true, 'must get active_exchanges']
    }
});

const GlobalStats = mongoose.model('global_stats',globalStatsSchema);

module.exports = GlobalStats