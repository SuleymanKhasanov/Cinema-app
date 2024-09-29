import React, { useState, useEffect } from 'react';
import MovieBanner from '../../widgets/MovieBanner/MovieBanner';
import { getTopRatedMovies } from '../../app/api/apiMovies';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styles from './ui/Home.module.css';

const Home = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getTopRatedMovies();
        setTopRatedMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  // Переместим настройки слайдера сюда
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className={styles.topRatedMovies}>
      <h1 className={styles.topRatedMoviesTitle}>
        Топ Рейтинг Фильмов
      </h1>
      <Slider {...settings} className={styles.slickSlide}>
        {topRatedMovies.length > 0
          ? topRatedMovies.map((element) => (
              <MovieBanner
                key={element.id}
                title={element.title}
                rating={element.vote_average}
                poster={`https://image.tmdb.org/t/p/w500/${element.poster_path}`}
              />
            ))
          : null}
      </Slider>
    </section>
  );
};

export default Home;
