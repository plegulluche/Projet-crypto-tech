import React from 'react';
import {Bar, Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto'

const ChartInfo = () => {
    const fakedate = ["28-11-2022 10:54", "USD/BTC", "Market", "Buy", 5 , 6 , 7 , 8 , 9];
    const market_title =  ["Date", "Cross", "Type", "Side", "Rate", "Amount", "Executed", "Status", "Total"];
    const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September"];

    const data = {
        labels: labels,
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: [0, 10, 5, 2, 20, 30, 45, -10, 5],
            },
        ],
    };
    return (
        <div className={"left"}>
            <div className={"devise"}>
                <div>BTC/EUR</div>
                <div>BTC/USD</div>
                <div>ETH/EUR</div>
                <div>ETH/USD</div>
            </div>
            <div className={"chart"}>
                <Bar data={data} />
            </div>
            <div className={"market"}>{fakedate.map((x, idx) => {
                return (
                    <div className={"market-column"}>
                        <div>
                            {market_title[idx]}
                        </div>
                        <div>
                            {x}
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    );
};

export default ChartInfo;