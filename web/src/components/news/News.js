import React, { Component } from 'react';
import './News.css'

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

class News extends Component {
    constructor(props) {
        super(props);
        this.goToArticle = this.goToArticle.bind(this)
    }
    goToArticle = () => {
        const url = testArticle.url;
        window.open(url, '_blank');
    }
    render() {
        return (
            <div onClick={this.goToArticle} className='trendArticles'>
                <div className='titleTrendArticle'>
                    {testArticle.title}
                </div>
                <div style={{ display: 'flex' }}>
                    <img className='imgTrendArticle' src={testArticle.urlToImage} alt="" />
                    <div className='descriptionTrendArticle'>
                        {testArticle.description}
                    </div>
                </div>
            </div>
        );
    }
}

export default News;