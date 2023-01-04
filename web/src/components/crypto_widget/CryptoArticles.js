import React, { useState, useEffect } from 'react';
import './CryptoWidget.css'
import trending from './TrendingIcon.png'
import axios from 'axios';

function CryptoArticles() {
    const [latestArticle0, setLatestArticle0] = useState([])
    const [latestArticle1, setLatestArticle1] = useState([])
    const [latestArticle2, setLatestArticle2] = useState([])

    useEffect(() => {
        axios.get('https://newsapi.org/v2/everything?q=+"crypto"+"cryptocurrency"&sortBy=publishedAt&apiKey=7861cd53deef43b090afdcae5a5ffc6f')
            .then(function (response) {
                setLatestArticle0(response.data.articles[0])
                setLatestArticle1(response.data.articles[1])
                setLatestArticle2(response.data.articles[2])
            })
            .catch(function (error) {
                console.log(error)
            })
    }, []);

    return (
        <div className='articles'>
            <div className='tTitle'>
                <img src={trending} alt='' />
                News
            </div>
            <div className='tCryptos'>
                <div className='aSpacing'>
                    <div>
                        <img src={latestArticle0.urlToImage} alt='' className='tIcon' />
                        {latestArticle0.title}
                    </div>
                </div>
                <div className='aSpacing'>
                    <div>
                        <img src={latestArticle1.urlToImage} alt='' className='tIcon' />
                        {latestArticle1.title}
                    </div>
                </div>
                <div className='aSpacing'>
                    <div>
                        <img src={latestArticle2.urlToImage} alt='' className='tIcon' />
                        {latestArticle2.title}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CryptoArticles;