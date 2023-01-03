import React, { Component } from 'react';
import CryptoSummary from '../components/crypto_widget/CryptoSummary';
import CryptoTrending from '../components/crypto_widget/CryptoTrending';
import CryptoArticles from '../components/crypto_widget/CryptoArticles';
import './styles/Home.css'

const BTC = "-2.3112354";
const LTC = "+3.2645684";
const ETH = "+8.2791312";
const BNB = "-3.5132654";
const XRP = "-5.4332121";
const DOT = "-1.8912335";
const ADA = "-7.56321465";
const SHIB = "-1.78324635";
const SOL = "-3.509876532";
const MATIC = "-1.912546874";

class Home extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div>
                <div className='topWidgets'>
                    <CryptoTrending
                        cryptoFirst="ETH"
                        cryptoSecond="LTC"
                        cryptoThird="BTC"
                        cryptoPercentageFirst={parseFloat(ETH).toFixed(2)}
                        cryptoPercentageSecond={parseFloat(LTC).toFixed(2)}
                        cryptoPercentageThird={parseFloat(BTC).toFixed(2)}
                    />
                    <CryptoArticles />
                </div>
                <div className='cryptoWidgetPos'>
                    <CryptoSummary cryptoName="BTC" cryptoPercentage={parseFloat(BTC).toFixed(2)} isLogged={true} />
                    <CryptoSummary cryptoName="LTC" cryptoPercentage={parseFloat(LTC).toFixed(2)} isLogged={true} />
                    <CryptoSummary cryptoName="ETH" cryptoPercentage={parseFloat(ETH).toFixed(2)} isLogged={true} />
                    <CryptoSummary cryptoName="BNB" cryptoPercentage={parseFloat(BNB).toFixed(2)} isLogged={true} />
                    <CryptoSummary cryptoName="XRP" cryptoPercentage={parseFloat(XRP).toFixed(2)} isLogged={true} />
                </div>
                <div className='cryptoWidgetPos'>
                    <CryptoSummary cryptoName="DOT" cryptoPercentage={parseFloat(DOT).toFixed(2)} isLogged={this.props.isLogged} />
                    <CryptoSummary cryptoName="ADA" cryptoPercentage={parseFloat(ADA).toFixed(2)} isLogged={this.props.isLogged} />
                    <CryptoSummary cryptoName="SHIB" cryptoPercentage={parseFloat(SHIB).toFixed(2)} isLogged={this.props.isLogged} />
                    <CryptoSummary cryptoName="SOL" cryptoPercentage={parseFloat(SOL).toFixed(2)} isLogged={this.props.isLogged} />
                    <CryptoSummary cryptoName="MATIC" cryptoPercentage={parseFloat(MATIC).toFixed(2)} isLogged={this.props.isLogged} />
                </div>
            </div>
        );
    }
}

export default Home;