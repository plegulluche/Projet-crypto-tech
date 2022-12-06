import React, { Component } from 'react';
import './CryptoWidget.css'
import trending from './TrendingIcon.png'
import bitcoin from './bitcoin.png'
import CryptoPercentage from './CryptoPercentage';

class CryptoTrending extends Component {
    render() {
        return (
            <div className='trending'>
                <div className='tTitle'>
                    <img src={trending} alt='' />
                    Trending
                </div>
                <div className='tCryptos'>
                    <div className='tSpacing'>
                        <div>
                            <img src={bitcoin} alt='' className='tIcon' />
                            {this.props.cryptoFirst}
                        </div>
                        <CryptoPercentage percentage={this.props.cryptoPercentageFirst} trend="/24h" />
                    </div>
                    <div className='tSpacing'>
                        <div>
                            <img src={bitcoin} alt='' className='tIcon' />
                            {this.props.cryptoSecond}
                        </div>
                        <CryptoPercentage percentage={this.props.cryptoPercentageSecond} trend="/24h" />
                    </div>
                    <div className='tSpacing'>
                        <div>
                            <img src={bitcoin} alt='' className='tIcon' />
                            {this.props.cryptoThird}
                        </div>
                        <CryptoPercentage percentage={this.props.cryptoPercentageThird} trend="/24h" />
                    </div>
                </div>
            </div>
        );
    }
}

export default CryptoTrending;