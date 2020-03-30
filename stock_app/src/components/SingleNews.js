import React from 'react'

const SingleNews=(props)=>{
    const {single}=props;
    return (<div>
        <a href = {single.url} target = "_blank"> <h5>{single.headline}</h5></a>
        
    </div>);
}

export default SingleNews;