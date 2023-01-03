import React from 'react';

const HeadInfo = () => {
    const data = [123456, 123456, 123456, 123456, 123456, 1234567];
    return (
        <div className="crypto-head">
            <nav className="crypto-nav">
                <ol className={"info-nav"}>
                    <li className="crumb">Cryptos:{data[0]}</li>
                    <li className="crumb">Exchange:{data[0]}</li>
                    <li className="crumb">Market Cap:{data[0]}</li>
                    <li className="crumb">24h Vol:{data[0]}</li>
                    <li className="crumb">Dominance:{data[0]}</li>
                    <li className="crumb">ETH Gas:{data[0]}</li>
                </ol>
            </nav>
            <div className={"english-usd"}>
                <div className={"english"}>English ^</div>
                <div className={"usd"}>$USD ^</div>
            </div>
        </div>
    );
};

export default HeadInfo;