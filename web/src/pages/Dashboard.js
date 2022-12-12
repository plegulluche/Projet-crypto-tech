import React, { Component } from 'react';
import "./styles/Dashboard.css";
import "../App.css";
import elena from "../img/elena.jpeg";

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={"crypto-page"}>
                <div className="crypto-head">

                    <nav className="crypto-nav">
                        <ol>
                            <li className="crumb">Cryptos:</li>
                            <li className="crumb">Exchange:</li>
                            <li className="crumb">Market Cap:</li>
                            <li className="crumb">24h Vol:</li>
                            <li className="crumb">Dominance</li>
                            <li className="crumb">ETH Gas</li>
                        </ol>
                    </nav>
                    <p>English</p>
                    <p>USD</p>
                </div>
                <div className={"crypto-container"}>
                    <div className={"left"}>
                        <div className={"devise"}>
                            <div className="crypto-body">
                                <div className="crypto-tab">
                                    <div>
                                        <th>BTC/EUR</th>
                                        <th>BTC/USD</th>
                                        <th>ETH/EUR</th>
                                        <th>ETH/USD</th>
                                    </div>
                                </div>
                                <tbody>
                                </tbody>
                            </div>
                            </div>
                        <div className={"chart"}>. </div>
                        <div className={"market"}>. </div>
                    </div>
                    <div className={"right"}>RIGHT</div>
                </div>
            </div>
        );
    }
}

export default Dashboard;