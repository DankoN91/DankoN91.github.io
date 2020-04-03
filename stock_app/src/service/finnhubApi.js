import axios from 'axios';

const getLiveNews=async () => {
    const response=await axios(`https://finnhub.io/api/v1/news?category=general&token=bq0q8f7rh5refsde7lkg`);
    return response.data;
}


const getCompanyCandlesticks=async(symbol)=>{
    const response=await axios(`https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=D&count=90&token=bq0q8f7rh5refsde7lkg`);
    let cData = response.data.c;
    let timestamps = response.data.t;
    let valuesArray=[];
    timestamps.forEach((currTimestamp,index) => {
        let newValue={ x:currTimestamp,y:cData[index]  };
        valuesArray.push(newValue);
    });
    return {
        key:symbol,
        values:valuesArray
    };
}

const getCompanyData=async(symbol)=>{
    const response=await axios(`https://finnhub.io/api/v1/stock/profile?symbol=${symbol}&token=bq0q8f7rh5refsde7lkg`);
    return response.data;
}




export { getLiveNews, getCompanyCandlesticks, getCompanyData };