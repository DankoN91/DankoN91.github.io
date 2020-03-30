import React from 'react'
import SingleNews from './SingleNews';

const NewsList=(props)=>{
    const {news}=props;
    const lastNews = news.slice(0,10);
    return (<div>
        <h2>LiveNews</h2>
        {lastNews.map(single=><SingleNews single={single} key={single.id} />)}
    </div>);
}

export default NewsList;