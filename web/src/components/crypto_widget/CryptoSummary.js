import React, { Component } from 'react';
import './CryptoWidget.css'
import logo from './bitcoin.png'

class CryptoSummary extends Component {
    constructor(props) {
        super(props);
        if (this.props.cryptoPercentage.charAt(0) === '-')
            this.state = { check: false };
        else
            this.state = { check: true };
    }
    render() {
        return (
            <div className='cards'>
                <div className='cHeader'>
                    <img className='icon' alt='' src={logo} />
                    <p className='cTitle'>{this.props.cryptoName}</p>
                </div>
                {this.props.isLogged === true ?
                    <div>
                        {this.state.check === true ?
                            <div className='upCrypto'>
                                <p>{this.props.cryptoPercentage}%</p><p className='cryptoDays'>/7d</p>
                            </div>
                            :
                            <div className='downCrypto'>
                                <p>{this.props.cryptoPercentage}%</p><p className='cryptoDays'>/7d</p>
                            </div>
                        }
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