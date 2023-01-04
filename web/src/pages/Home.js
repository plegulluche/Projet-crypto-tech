import React, { useState, useEffect } from 'react';
import CryptoSummary from '../components/crypto_widget/CryptoSummary';
/* import CryptoTrending from '../components/crypto_widget/CryptoTrending'; */
import CryptoArticles from '../components/crypto_widget/CryptoArticles';
import './styles/Home.css'
import axios from 'axios';
import HeadInfo from './dashboard/HeadInfo';

function Home({ language, isLogged }) {
    const [cryptoEvo, setCryptoEvo] = useState({})
    const [cryptoPercentage, setCryptoPercentage] = useState({})
    const [logoBtc, setLogoBtc] = useState("");
    const [logoDoge, setLogoDoge] = useState("");
    const [logoDot, setLogoDot] = useState("");
    const [logoBnb, setLogoBnb] = useState("");
    const [logoMatic, setLogoMatic] = useState("");
    const [logoAda, setLogoAda] = useState("");
    const [logoXrp, setLogoXrp] = useState("");
    const [logoShib, setLogoShib] = useState("");
    const [logoEth, setLogoEth] = useState("");
    const [logoSol, setLogoSol] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("jwt");
        axios.get("http://localhost:4000/api/v1/", { headers: { "Authorization": `Bearer ${token}` } })
            .then(function (response) {
                setLogoBtc(response.data.data.infos[0].logo)
                setLogoDoge(response.data.data.infos[1].logo)
                setLogoDot(response.data.data.infos[2].logo)
                setLogoBnb(response.data.data.infos[3].logo)
                setLogoMatic(response.data.data.infos[4].logo)
                setLogoAda(response.data.data.infos[5].logo)
                setLogoXrp(response.data.data.infos[6].logo)
                setLogoShib(response.data.data.infos[7].logo)
                setLogoEth(response.data.data.infos[8].logo)
                setLogoSol(response.data.data.infos[9].logo)
            })
            .catch(function (error) {
                console.log(error)
            })
        const interval = setInterval(() => {
            axios.get("http://localhost:4000/api/v1/", { headers: { "Authorization": `Bearer ${token}` } })
                .then(function (response) {
                    // console.log(response.data.data.cryptos.evolution24h);
                    setCryptoEvo(response.data.data.cryptos.EUR);
                    setCryptoPercentage(response.data.data.cryptos.evolution24h)
                    // console.log(cryptoLogo[0])
                })
                .catch(function (error) {
                    console.log(error)
                })
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <HeadInfo />
            <div className='topWidgets'>
                <CryptoArticles />
            </div>
            <div className='cryptoWidgetPos'>
                <CryptoSummary cryptoName="BTC" cryptoLogo={logoBtc} cryptoPercentage={parseFloat(cryptoPercentage.BTC).toFixed(2)} cryptoValue={parseFloat(cryptoEvo.BTC).toFixed(4)} isLogged={"true"} />
                <CryptoSummary cryptoName="DOGE" cryptoLogo={logoDoge} cryptoPercentage={parseFloat(cryptoPercentage.DOGE).toFixed(2)} cryptoValue={parseFloat(cryptoEvo.DOGE).toFixed(4)} isLogged={"true"} />
                <CryptoSummary cryptoName="ETH" cryptoLogo={logoEth} cryptoPercentage={parseFloat(cryptoPercentage.ETH).toFixed(2)} cryptoValue={parseFloat(cryptoEvo.ETH).toFixed(4)} isLogged={"true"} />
                <CryptoSummary cryptoName="BNB" cryptoLogo={logoBnb} cryptoPercentage={parseFloat(cryptoPercentage.BNB).toFixed(2)} cryptoValue={parseFloat(cryptoEvo.BNB).toFixed(4)} isLogged={"true"} />
                <CryptoSummary cryptoName="XRP" cryptoLogo={logoXrp} cryptoPercentage={parseFloat(cryptoPercentage.XRP).toFixed(2)} cryptoValue={parseFloat(cryptoEvo.XRP).toFixed(4)} isLogged={"true"} />
            </div>
            <div className='cryptoWidgetPos'>
                <CryptoSummary cryptoName="DOT" cryptoLogo={logoDot} cryptoPercentage={parseFloat(cryptoPercentage.DOT).toFixed(2)} cryptoValue={parseFloat(cryptoEvo.DOT).toFixed(4)} isLogged={isLogged} />
                <CryptoSummary cryptoName="ADA" cryptoLogo={logoAda} cryptoPercentage={parseFloat(cryptoPercentage.ADA).toFixed(2)} cryptoValue={parseFloat(cryptoEvo.ADA).toFixed(4)} isLogged={isLogged} />
                <CryptoSummary cryptoName="SHIB" cryptoLogo={logoShib} cryptoPercentage={parseFloat(cryptoPercentage.SHIB).toFixed(2)} cryptoValue={cryptoEvo.SHIB} isLogged={isLogged} />
                <CryptoSummary cryptoName="SOL" cryptoLogo={logoSol} cryptoPercentage={parseFloat(cryptoPercentage.SOL).toFixed(2)} cryptoValue={parseFloat(cryptoEvo.SOL).toFixed(4)} isLogged={isLogged} />
                <CryptoSummary cryptoName="MATIC" cryptoLogo={logoMatic} cryptoPercentage={parseFloat(cryptoPercentage.MATIC).toFixed(2)} cryptoValue={parseFloat(cryptoEvo.MATIC).toFixed(4)} isLogged={isLogged} />
            </div>
        </div>
    );
}

export default Home;