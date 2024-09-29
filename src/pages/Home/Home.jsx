import React from 'react';
import { useState, useEffect } from 'react';
import MovieBanner from '../../widgets/MovieBanner/MovieBanner';
import { getTopRatedMovies } from '../../app/api/apiMovies';
import styles from './ui/Home.module.css';

const Home = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getTopRatedMovies();
        setTopRatedMovies(movies);
        console.log(movies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <section className={styles.topRatedMoviesList}>
      {topRatedMovies.length > 0 ? (
        topRatedMovies.map((element) => (
          <MovieBanner
            key={element.id}
            title={element.title}
            rating={element.vote_average}
            poster={`https://image.tmdb.org/t/p/w500/${element.poster_path}`}
          />
        ))
      ) : (
        <p>Загрузка фильмов...</p>
      )}
    </section>
  );
};

export default Home;
