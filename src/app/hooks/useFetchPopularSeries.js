import { useEffect, useState } from 'react';
import { getPopularSeries } from '../api/apiMovies';

const useFetchPopularSeries = () => {
  const [popularSeries, setPopularSeries] = useState([]);
  useEffect(() => {
    const fetchPopularSeries = async () => {
      try {
        const popularSeriesTV = await getPopularSeries();
        setPopularSeries(popularSeriesTV);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPopularSeries();
  }, []);

  return popularSeries;
};

export default useFetchPopularSeries;
