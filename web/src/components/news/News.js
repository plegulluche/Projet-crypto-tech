import React, { Component } from 'react';
import './News.css'

function News({latestArticle}) {
    console.log("in news")
    console.log(latestArticle)
    console.log("in news after console log test")
    const goToArticle = () => {
        const url = latestArticle.url;
        window.open(url, '_blank');
    }
    return (
        <div onClick={() => goToArticle()} className='trendArticles'>
            <div className='titleTrendArticle'>
                {latestArticle.title}
            </div>
            <div style={{ display: 'flex' }}>
                <img className='imgTrendArticle' src={latestArticle.urlToImage} alt="" />
                <div className='descriptionTrendArticle'>
                    {latestArticle.description}
                </div>
            </div>
        </div>
    );
}

export default News;