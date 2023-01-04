import axios from 'axios';
import React, { useState, useEffect } from 'react';

function HeadInfo() {
    const [cryptoInfo, setCryptoInfo] = useState([])

    useEffect(() => {
        const token = localStorage.getItem("jwt");
        axios.get("http://localhost:4000/api/v1/", { headers: { "Authorization": `Bearer ${token}` } })
            .then(function (response) {
                setCryptoInfo(response.data.data.stats[0]);
            })
            .catch(function (error) {
                console.log(error)
            })
    }, []);

    return (
        <div className="crypto-head">
            <nav className="crypto-nav">
                <ol className={"info-nav"}>
                    <li className="crumb">Cryptos: <span className='stats'>{cryptoInfo.total_cryptocurrencies}</span></li>
                    <li className="crumb">Exchange: <span className='stats'>{cryptoInfo.active_exchanges}</span></li>
                    <li className="crumb">Market Cap: <span className='stats'>{cryptoInfo.total_market_cap}</span></li>
                    <li className="crumb">24h Vol: <span className='stats'>{cryptoInfo.total_volume_24h}</span></li>
                    <li className="crumb">Dominance BTC: <span className='stats'>{cryptoInfo.btc_dominance_yesterday}</span></li>
                    <li className="crumb">Dominance ETH: <span className='stats'>{cryptoInfo.eth_dominance_yesterday}</span></li>
                </ol>
            </nav>
            {/* <div className={"english-usd"}>
                <div className={"english"}>English ^</div>
                <div className={"usd"}>$USD ^</div>
            </div> */}
        </div>
    );
};

export default HeadInfo;