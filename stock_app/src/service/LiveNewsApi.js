import axios from 'axios';

const getLiveNews=async () => {
    const response=await axios(`https://finnhub.io/api/v1/news?category=general&token=bq0q8f7rh5refsde7lkg`);
    return response.data;
}






export default getLiveNews;