import React, { Component } from 'react';
import CryptoSummary from '../components/crypto_widget/CryptoSummary';
import './styles/Home.css'

class HomeOffline extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className='cryptoWidgetPos'>
                    <CryptoSummary cryptoName="BTC" />
                    <CryptoSummary cryptoName="LTC" />
                    <CryptoSummary cryptoName="ETH" />
                    <CryptoSummary cryptoName="BNB" />
                    <CryptoSummary cryptoName="XRP" />
                </div>
                <div className='cryptoWidgetPos'>
                    <CryptoSummary cryptoName="DOT" />
                    <CryptoSummary cryptoName="ADA" />
                    <CryptoSummary cryptoName="SHIB" />
                    <CryptoSummary cryptoName="SOL" />
                    <CryptoSummary cryptoName="MATIC" />
                </div>
            </div>
        );
    }
}

export default HomeOffline;