import React, {Component, useState} from 'react';
import Select from 'react-select';
import './styles/Preferences.css';
import logo1 from '../components/crypto_widget/bitcoin.png';
import logo2 from '../components/crypto_widget/ltc.png';
import logo3 from '../components/crypto_widget/eth.png';
import logo4 from '../components/crypto_widget/bnb.png';
import logo5 from '../components/crypto_widget/xrp.png';
import logo6 from '../components/crypto_widget/dot.png';
import logo7 from '../components/crypto_widget/ada.png';
import logo8 from '../components/crypto_widget/shib.png';
import logo9 from '../components/crypto_widget/sol.png';
import logox from '../components/crypto_widget/matic.png';


const Preferences = () => {
    const pref_title = ['Coin', 'Price'];
    const [crypt, setCrypt] = useState([
        {name: 'BTC', img: logo1, isFavorite: true },
        {name: 'LTC', img: logo2, isFavorite: true },
        {name: 'ETH', img: logo3, isFavorite: true },
        {name: 'BNB', img: logo4, isFavorite: true },
        {name: 'XRP', img: logo5, isFavorite: false },
        {name: 'DOT', img: logo6, isFavorite: false },
        {name: 'ADA', img: logo7, isFavorite: false },
        {name: 'SHIB', img: logo8, isFavorite: false },
        {name: 'SOL', img: logo9, isFavorite: false },
        {name: 'MATIC', img: logox, isFavorite: false }
    ]);
    const submit = (e) => {

    }

    return (
        <div>
            <div className={'card-carousel'}>
                        {crypt && crypt.map((card) => {
                            return(
                                    <div className={card.isFavorite?'card-crypt selected': 'card-crypt'}>
                                                    <div className={'card-details'}>
                                                        <img className={'crypto-pics'} src={card.img} alt={''}/>
                                                        <p>{card.name}</p>
                                                    </div>
                                    </div>
                            )
                        })}
                <input type={'button'} value={'submit'} className={'valid'} onClick={submit}>

                </input>
                </div>
            </div>
    );
}

export default Preferences;