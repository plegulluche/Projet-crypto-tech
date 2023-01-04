import React, { Component, useState } from 'react';
import Select from 'react-select';
import './styles/Preferences.css';
import Alert from 'react-bootstrap/Alert';
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
import axios from 'axios';

function Preferences() {
    const crypto = [
        { value: 'BTC', label: 'BTC' },
        { value: 'DOGE', label: 'DOGE' },
        { value: 'ETH', label: 'ETH' },
        { value: 'BNB', label: 'BNB' },
        { value: 'XRP', label: 'XRP' },
        { value: 'DOT', label: 'DOT' },
        { value: 'ADA', label: 'ADA' },
        { value: 'SHIB', label: 'SHIB' },
        { value: 'SOL', label: 'SOL' },
        { value: 'MATIC', label: 'MATIC' },
    ];
    const [inputs, setInputs] = useState([])
    const [verif, setVerif] = useState(false)

    const submit = () => {
        if (inputs.length !== 4)
            setVerif(true)
        else {
            const token = localStorage.getItem("jwt");
            axios.patch("http://localhost:4000/api/v1/users/updateMe",
                { "favorites": [inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value] },
                { headers: { "Authorization": `Bearer ${token}` } })
                .then(function (response) {
                    console.log(response)
                    window.location = '/';
                }).catch(function (error) {
                    console.log(error)
                })
        }
    }

    const saveInput = (choice) => {
        setInputs(choice)
    }

    return (
        <div>
            {
                verif === true ?
                    <Alert variant="danger" onClose={() => setVerif(false)} dismissible>
                        <p>
                            You need to select 4 cryptocurrencies
                        </p>
                    </Alert>
                    :
                    <></>
            }
            <Select
                isMulti
                name="colors"
                options={crypto}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(choice) => saveInput(choice)}
            />
            <input type={'button'} value={'submit'} className={'valid'} onClick={submit} />

            {/* <div className={'card-carousel'}>
                {crypt && crypt.map((card) => {
                    return (
                        <div className={card.isFavorite ? 'card-crypt selected' : 'card-crypt'}>
                            <div className={'card-details'}>
                                <img className={'crypto-pics'} src={card.img} alt={''} />
                                <p>{card.name}</p>
                            </div>
                        </div>
                    )
                })}
                <input type={'button'} value={'submit'} className={'valid'} onClick={submit}>

                </input>
            </div> */}
        </div>
    );
}

export default Preferences;