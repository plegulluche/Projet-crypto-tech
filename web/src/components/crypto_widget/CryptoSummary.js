import React, { Component } from 'react';
import './CryptoWidget.css'
import logo from './bitcoin.png'
import CryptoPercentage from './CryptoPercentage';

class CryptoSummary extends Component {
    render() {
        return (
            <div className='cards'>
                <div className='cHeader'>
                    <img className='icon' alt='' src={this.props.cryptoLogo} />
                    <p className='cTitle'>{this.props.cryptoName}</p>
                </div>
                {this.props.isLogged === "true" ?
                    <div>
                        <CryptoPercentage percentage={this.props.cryptoPercentage} trend="/24h" />
                        <div className='cryptoValue'>
                            €{this.props.cryptoValue}
                        </div>
                        {/* <div className='lastDays'>
                            Last 24 hours
                        </div> */}
                    </div>
                    :
                    <div className='cryptoNotLog'>
                        <p>Sign up to see<br/>more<br/>informations</p>
                    </div>
                }
            </div>
        );
    }
}

export default CryptoSummary;