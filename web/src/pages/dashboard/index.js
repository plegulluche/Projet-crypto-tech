import React, { Component } from 'react';
import "./Dashboard.css";
import "../../App.css";
import RightTopInfo from "./RightTopInfo";
import RightBottomInfo from "./RightBottomInfo";
import ChartInfo from "./ChartInfo";
import HeadInfo from "./HeadInfo";
import elena from "../../img/elena.jpeg";


const Index = () => {
        const fakedate = ["28-11-2022 10:54", "USD/BTC", "Market", "Buy", 5 , 6 , 7 , 8 , 9];
        const market_title =  ["Date", "Cross", "Type", "Side", "Rate", "Amount", "Executed", "Status", "Total"];
        const data = [123456, 123456, 123456, 123456, 123456, 1234567];

        return (
            <div className={"crypto-page"}>
               <HeadInfo/>
                <div className={"crypto-container"}>
                    <ChartInfo/>
                    <div className={"right"}>
                            <RightTopInfo/>
                            <RightBottomInfo/>
                    </div>
                </div>
            </div>
        );
    }
export default Index;