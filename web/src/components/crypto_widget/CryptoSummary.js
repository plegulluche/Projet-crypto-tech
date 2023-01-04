import React, { Component } from 'react';
import './CryptoWidget.css'
import logo from './bitcoin.png'

class CryptoSummary extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div className='cards'>
                <div className='cHeader'>
                    <img className='icon' src={logo} />
                    {this.props.cryptoName}
                </div>
            </div>
         );
    }
}
 
export default CryptoSummary;