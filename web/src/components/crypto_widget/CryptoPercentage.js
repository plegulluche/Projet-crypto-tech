import React, { Component } from 'react';
import './CryptoWidget.css'

function CryptoPercentage(props) {
    if (props.percentage.charAt(0) === '-') {
        return (
            <div className='downTrend'>
                <p>{props.percentage}%</p>
                <p className='cryptoDays'>&nbsp;&nbsp;{props.trend}</p>
            </div>
        )
    }
    else {
        return (
            <div className='upTrend'>
                <p>{props.percentage}%</p>
                <p className='cryptoDays'>&nbsp;&nbsp;{props.trend}</p>
            </div>
        )
    }
}

export default CryptoPercentage;