import React from 'react';

const RightBottomInfo = () => {
    const data = [123456, 123456, 123456, 123456, 123456, 1234567];
    return (
        <div className={"right-bottom-info"}>
            <div className={"price-amount"}>
                <div>

                    <div className={"price"}>
                        Price <br/>
                        (USDT)
                    </div>
                    <div className={"data"}>
                        {data.map((x) => <div className={"price_cell"}>{x}</div>)}
                    </div>
                </div>
                <div>
                    <div className={"amount"}>
                        Amount <br/>
                        (BTC)
                    </div>
                    <div className={"data"}>
                        {data.map((x) => <div className={"price_cell"}>{x}</div>)}
                    </div>
                </div>
            </div>

            <div className={"mid-data"}>
                {data[0]} <br/>
                <div className={"mid-data-second"}>
                    {data[0]}
                </div>

            </div>

            <div className={"price-amount-bis"}>
                <div>
                    <div className={"price"}>
                        Price <br/>
                        (USDT)
                    </div>
                    <div className={"data"}>
                        {data.map((x) => <div className={"price_cell"}>{x}</div>)}
                    </div>
                </div>
                <div>
                    <div className={"amount"}>
                        Amount <br/>
                        (BTC)
                    </div>
                    <div className={"data"}>
                        {data.map((x) => <div className={"price_cell"}>{x}</div>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightBottomInfo;