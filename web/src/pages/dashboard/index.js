import React, { Component } from 'react';
import "./Dashboard.css";
import "../../App.css";
import ChartInfo from "./ChartInfo";
import HeadInfo from "./HeadInfo";



const Index = () => {

        return (
            <div className={"crypto-page"}>
               <HeadInfo/>
                <div className={"crypto-container"}>
                    <ChartInfo/>
                  
                </div>
            </div>
        );
    }
export default Index;