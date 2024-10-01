import { useEffect, useState } from 'react';
import { getPopularMovies } from '../api/apiMovies';

const useFetchPopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const popularFilms = await getPopularMovies();
        setPopularMovies(popularFilms);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPopularMovies();
  }, []);

  return popularMovies;
};

export default useFetchPopularMovies;
