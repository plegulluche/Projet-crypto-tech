import React, { useState, useEffect } from 'react';
import './styles/Articles.css'
import News from '../components/news/News.js';
import axios from 'axios';

const testArticle = {
    "source": {
        "id": null,
        "name": "Finbold.com"
    },
    "author": "Ana Nicenko",
    "title": "Top 5 best-performing cryptocurrencies by returns in 2022",
    "description": "The cryptocurrency market has suffered several significant setbacks during 2022, but some of its assets have performed better than others, … Continued\nThe post Top 5 best-performing cryptocurrencies by returns in 2022 appeared first on Finbold.",
    "url": "https://finbold.com/top-5-best-performing-cryptocurrencies-by-returns-in-2022/",
    "urlToImage": "https://finbold.com/app/uploads/2022/12/Top-5-best-performing-cryptocurrencies-by-returns-in-2022.jpg",
    "publishedAt": "2022-12-20T15:18:27Z",
    "content": "The cryptocurrency market has suffered several significant setbacks during 2022, but some of its assets have performed better than others, particularly in terms of returns per month, a new yearly rep… [+2788 chars]"
}

function Articles(props) {

    const [bigArticle, setBigArticle] = useState([])
    const [latestArticle0, setLatestArticle0] = useState([])
    const [latestArticle1, setLatestArticle1] = useState([])
    const [latestArticle2, setLatestArticle2] = useState([])
    const [latestArticle3, setLatestArticle3] = useState([])

    React.useEffect(() => {
        axios.get('https://newsapi.org/v2/everything?q=+"crypto"+"cryptocurrency"&sortBy=popularity&apiKey=7861cd53deef43b090afdcae5a5ffc6f')
            .then(function (response) {
                setBigArticle(response.data.articles[0])
            })
            .catch(function (error) {
                console.log(error)
            })
        axios.get('https://newsapi.org/v2/everything?q=+"crypto"+"cryptocurrency"&sortBy=publishedAt&apiKey=7861cd53deef43b090afdcae5a5ffc6f')
            .then(function (response) {
                setLatestArticle0(response.data.articles[0])
                setLatestArticle1(response.data.articles[1])
                setLatestArticle2(response.data.articles[2])
                setLatestArticle3(response.data.articles[3])
            })
            .catch(function (error) {
                console.log(error)
            })
    }, []);

    useEffect(() => {
        const keyDownHandler = event => {
            if (event.key === 'Enter' && document.getElementById("message").value !== "") {
                let search = document.getElementById("message").value;
                event.preventDefault();
                axios.get('https://newsapi.org/v2/everything?q=+"crypto"+"'+search+'"&sortBy=publishedAt&apiKey=7861cd53deef43b090afdcae5a5ffc6f')
                .then(function (response) {
                    setLatestArticle0(response.data.articles[0])
                    setLatestArticle1(response.data.articles[1])
                    setLatestArticle2(response.data.articles[2])
                    setLatestArticle3(response.data.articles[3])
                })
                .catch(function (error) {
                    console.log(error)
                })
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, []);

    const goToArticle = () => {
        const url = bigArticle.url;
        window.open(url, '_blank');
    }

    return (
        <div>
            <div className='articlesPos'>
                <div className='mainArticle'>
                    <input
                        id="message"
                        name="message"
                        className='articleSearch'
                        placeholder={props.isLogged === "true" ? "Write a Keyword for a precise research" : "Sign Up to get access to the search bar"}
                        disabled={props.isLogged === "true" ? "" : "disabled"}
                    />
                    <div onClick={() => goToArticle()} className='infoMainArticle'>
                        <div className='titleMainArticle'>
                            {bigArticle.title}
                        </div>
                        <img className='imgMainArticle' src={bigArticle.urlToImage} alt="" />
                        <div className='descriptionMainArticle'>
                            {bigArticle.description}
                        </div>
                    </div>
                </div>
                <div className='allTrends'>
                    <div className='trendHeader'>
                        Trending Now
                    </div>
                    <News latestArticle={latestArticle0} />
                    <News latestArticle={latestArticle1} />
                    <News latestArticle={latestArticle2} />
                    <News latestArticle={latestArticle3} />
                </div>
            </div>
        </div>
    );
}

export default Articles;