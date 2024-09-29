import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const getTopRatedMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}movie/top_rated`, {
      params: {
        api_key: API_KEY,
        language: 'ru-RU',
      },
    });

    return response.data.results;
  } catch (error) {
    console.error('Error fetching top-rated movies:', error);
    throw error;
  }
};
