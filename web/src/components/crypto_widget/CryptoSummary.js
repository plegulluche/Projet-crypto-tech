import React, { Component } from 'react';
import './CryptoWidget.css'
import logo from './bitcoin.png'
import CryptoPercentage from './CryptoPercentage';

class CryptoSummary extends Component {
    render() {
        return (
            <div className='cards'>
                <div className='cHeader'>
                    <img className='icon' alt='' src={logo} />
                    <p className='cTitle'>{this.props.cryptoName}</p>
                </div>
                {this.props.isLogged === "true" ?
                    <div>
                        <CryptoPercentage percentage={this.props.cryptoPercentage} trend="/7d" />
                        <div className='cryptoValue'>
                            $16,309.92
                        </div>
                        <div className='lastDays'>
                            Last 7 days
                        </div>
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