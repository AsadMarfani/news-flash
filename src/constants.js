
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
export const FETCH_NEWS_URL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`;
export const INTERNAL_SERVER_URL = 'http://httpstat.us/500';