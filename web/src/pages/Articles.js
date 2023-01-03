import React, { Component } from 'react';
import './styles/Articles.css'
import News from '../components/news/News.js';

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

class Articles extends Component {
    constructor(props) {
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.goToArticle = this.goToArticle.bind(this)
    }
    handleKeyDown = event => {
        console.log('User pressed: ', event.key);

        // console.log(message);

        if (event.key === 'Enter') {
            // 👇️ your logic here
            console.log('Enter key pressed ✅');
        }
    };
    goToArticle = () => {
        const url = testArticle.url;
        window.open(url, '_blank');
    }
    render() {
        return (
            <div className='articlesPos'>
                <div className='mainArticle'>
                    <input
                        onKeyDown={this.handleKeyDown}
                        id="message"
                        name="message"
                        className='articleSearch'
                        placeholder={(this.props.isLogged) ? "Write a Keyword for a precise research" : "Sign Up to get access to the search bar"}
                        disabled={(this.props.isLogged) ? "" : "disabled"}
                    />
                    <div onClick={this.goToArticle} className='infoMainArticle'>
                        <div className='titleMainArticle'>
                            {testArticle.title}
                        </div>
                        <img className='imgMainArticle' src={testArticle.urlToImage} alt="" />
                        <div className='descriptionMainArticle'>
                            {testArticle.description}
                        </div>
                    </div>
                </div>
                <div className='allTrends'>
                    <div className='trendHeader'>
                        Trending Now
                    </div>
                    <News />
                    <News />
                    <News />
                    <News />
                </div>
            </div>
        );
    }
}

export default Articles;