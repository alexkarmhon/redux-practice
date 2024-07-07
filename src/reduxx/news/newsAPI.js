const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = '3b9f6624853e47a58494ac49d0cf2e28';

export const getNews = async (query = 'Kharkiv') => {
  const response = await fetch(`${BASE_URL}/everything?q=${query}&pageSize=20&apiKey=${API_KEY}`)
  return await response.json();
}

