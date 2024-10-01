import React, { useState, useEffect } from 'react';
import MovieBanner from '../../widgets/MovieBanner/MovieBanner';
import { getWeekTranding } from '../../app/api/apiMovies';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styles from './styles/Home.module.css';

const Home = () => {
  const [weekTrending, setWeekTrending] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getWeekTranding();
        setWeekTrending(movies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

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
      <h1 className={styles.topRatedMoviesTitle}>Последние тренды</h1>
      <Slider {...settings} className={styles.slickSlide}>
        {weekTrending?.length > 0
          ? weekTrending.map((element) => (
              <MovieBanner
                key={element.id}
                title={element.title || element.name}
                rating={element.vote_average}
                poster={`https://image.tmdb.org/t/p/w500/${element.poster_path}`}
                mediaType={element.media_type}
                genere={element.genre_ids}
              />
            ))
          : null}
      </Slider>
    </section>
  );
};

export default Home;
